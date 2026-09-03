import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const R = 150
const MERIDIANS = 7
const LATITUDES = [-58, -29, 0, 29, 58]

/* O graticulado vivo que envolve o emblema.
   Os meridianos são elipses cujo `rx` varia com o cosseno da longitude — é
   assim que uma esfera de arame gira de verdade, em vez de a figura inteira
   rodopiar. Sete atributos escritos por quadro: barato até em celular fraco.

   O giro anda em duas velocidades somadas: uma deriva lenta e constante, para
   a página nunca estar morta, e o progresso do scroll, que é a mesma linha do
   tempo que desenha a linha do liga-pontos. Uma assinatura, um sistema. */

export default function Globe({ className = '' }) {
  const host = useRef(null)
  const meridians = useRef([])

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const els = meridians.current.filter(Boolean)
      if (!els.length) return

      const draw = (phase) => {
        for (let i = 0; i < els.length; i++) {
          const lon = phase + (i * Math.PI) / els.length
          const rx = Math.abs(Math.cos(lon)) * R
          els[i].setAttribute('rx', rx.toFixed(2))
          // A face que está indo embora some um pouco: dá profundidade sem sombra.
          els[i].style.opacity = (0.32 + 0.68 * Math.abs(Math.cos(lon * 0.5))).toFixed(3)
        }
      }

      if (reduce) {
        draw(0.6)
        return
      }

      let scrollPhase = 0
      let visible = true

      const st = ScrollTrigger.create({
        trigger: host.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          scrollPhase = self.progress * Math.PI * 1.35
        },
        onToggle: (self) => {
          visible = self.isActive
        },
      })

      const tick = (time) => {
        if (!visible) return
        draw(time * 0.09 + scrollPhase)
      }

      gsap.ticker.add(tick)
      return () => {
        gsap.ticker.remove(tick)
        st.kill()
      }
    },
    { scope: host },
  )

  return (
    <svg
      ref={host}
      className={`globe ${className}`}
      viewBox="-190 -190 380 380"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="globe-limb" cx="0" cy="0" r={R} />
      <circle className="globe-limb globe-limb-outer" cx="0" cy="0" r={R + 26} />

      {LATITUDES.map((deg) => {
        const rad = (deg * Math.PI) / 180
        const rx = Math.cos(rad) * R
        return (
          <ellipse
            key={deg}
            className="globe-line"
            cx="0"
            cy={(-Math.sin(rad) * R).toFixed(2)}
            rx={rx.toFixed(2)}
            ry={(rx * 0.19).toFixed(2)}
          />
        )
      })}

      {Array.from({ length: MERIDIANS }, (_, i) => (
        <ellipse
          key={i}
          ref={(el) => (meridians.current[i] = el)}
          className="globe-line"
          cx="0"
          cy="0"
          rx={R}
          ry={R}
        />
      ))}

      {/* Marcas de graduação no limbo — a régua da carta. */}
      {Array.from({ length: 36 }, (_, i) => {
        const a = (i * Math.PI) / 18
        const r1 = R + 26
        const r2 = r1 + (i % 3 === 0 ? 11 : 5)
        return (
          <line
            key={`t${i}`}
            className="globe-tick"
            x1={(Math.cos(a) * r1).toFixed(2)}
            y1={(Math.sin(a) * r1).toFixed(2)}
            x2={(Math.cos(a) * r2).toFixed(2)}
            y2={(Math.sin(a) * r2).toFixed(2)}
          />
        )
      })}
    </svg>
  )
}
