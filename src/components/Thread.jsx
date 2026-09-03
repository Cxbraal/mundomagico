import { useRef, useState, useLayoutEffect, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { smoothPath } from '../lib/path'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/* Um trecho da linha do liga-pontos celeste.

   A linha do site é uma só, mas é desenhada em pedaços: cada seção desenha o
   seu. O motivo é performance — animar `stroke-dashoffset` num traço da altura
   do documento inteiro repinta a página toda a cada quadro; em pedaços, a área
   repintada é a de uma seção.

   Todos os trechos usam a mesma regra de gatilho (`top center` até
   `bottom center`), então a ponta da linha é sempre o ponto da página que está
   no meio da tela. É isso que faz os trechos se encontrarem: na tela, é uma
   linha só, sendo desenhada logo à frente de quem lê.

   `points` são `{ t, y }`. `y` é a fração da altura da seção. `t` é a posição
   dentro da calha lateral, de 0 (borda da tela) a 1 (junto do conteúdo) — e a
   calha é medida da largura real, então a linha nunca encosta no texto, em
   nenhuma largura de tela. */

export default function Thread({ points, nodes = [], side = 'left', start = 'top center' }) {
  const host = useRef(null)
  const pathRef = useRef(null)
  const [box, setBox] = useState({ w: 0, h: 0 })
  const [lit, setLit] = useState(-1)

  const measure = useCallback(() => {
    const el = host.current?.parentElement
    if (!el) return
    const r = el.getBoundingClientRect()
    setBox((b) =>
      Math.abs(b.w - r.width) < 1 && Math.abs(b.h - r.height) < 1 ? b : { w: r.width, h: r.height },
    )
  }, [])

  useLayoutEffect(() => {
    measure()
    const el = host.current?.parentElement
    if (!el || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [measure])

  const rota = box.w ? points.map((p) => ({ x: calha(p.t, box.w, side) / box.w, y: p.y })) : []
  const d = box.w ? smoothPath(rota, box.w, box.h) : ''
  const marks = nodeMarks(rota, nodes, box)

  useGSAP(
    () => {
      const path = pathRef.current
      if (!path || !d) return

      const len = path.getTotalLength()
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len })

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(path, { strokeDashoffset: 0 })
        setLit(marks.length - 1)
        return
      }

      let last = -1
      const st = ScrollTrigger.create({
        trigger: host.current.parentElement,
        start,
        end: 'bottom center',
        scrub: 0.4,
        onUpdate: (self) => {
          path.style.strokeDashoffset = len * (1 - self.progress)
          let i = -1
          for (let k = 0; k < marks.length; k++) if (self.progress >= marks[k].t) i = k
          if (i !== last) {
            last = i
            setLit(i)
          }
        },
      })
      return () => st.kill()
    },
    { dependencies: [d, start], scope: host, revertOnUpdate: true },
  )

  return (
    <svg
      ref={host}
      className="thread"
      width={box.w || 1}
      height={box.h || 1}
      viewBox={`0 0 ${box.w || 1} ${box.h || 1}`}
      aria-hidden="true"
      focusable="false"
    >
      <path ref={pathRef} d={d} />
      {marks.map((m, i) => (
        <g key={m.id} className={`star${i <= lit ? ' is-lit' : ''}`}>
          <circle className="star-halo" cx={m.x} cy={m.y} r="12" />
          <circle className="star-core" cx={m.x} cy={m.y} r="3.5" />
        </g>
      ))}
    </svg>
  )
}

/* A calha: o vão entre a borda da tela e a coluna de conteúdo.
   Espelha o cálculo de `.shell` no CSS — a mais estreita das colunas — para
   que a folga valha também nas seções que usam `.shell-mid`. */
function calha(t, w, side) {
  const gut = Math.min(Math.max(20, w * 0.04), 40)
  const shell = Math.min(w - gut * 2, 1248)
  const margem = (w - shell) / 2
  const util = Math.max(10, margem - 10)
  const borda = 4
  return side === 'right' ? w - borda - util * (1 - t) : borda + util * t
}

function nodeMarks(points, nodes, box) {
  if (!box.w || !nodes.length || !points.length) return []

  const pts = points.map((p) => [p.x * box.w, p.y * box.h])
  const acc = [0]
  for (let i = 1; i < pts.length; i++) {
    acc[i] = acc[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1])
  }
  const total = acc[acc.length - 1] || 1

  return nodes
    .filter((n) => n.at >= 0 && n.at < pts.length)
    .map((n) => ({ id: n.id, x: pts[n.at][0], y: pts[n.at][1], t: acc[n.at] / total }))
}
