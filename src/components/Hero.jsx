import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Globe from './Globe'
import Glyph from './Glyph'
import Thread from './Thread'
import { escola, textos, whatsappUrl, CTA_PADRAO } from '../data/escola'

const ROTA = [
  { t: 0.55, y: 0.08 },
  { t: 0.95, y: 0.34 },
  { t: 0.35, y: 0.62 },
  { t: 0.85, y: 0.88 },
  { t: 0.5, y: 1.06 },
]

export default function Hero() {
  const host = useRef(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap
        .timeline({ defaults: { ease: 'expo.out' } })
        .from('[data-lift="mark"]', { scale: 0.9, opacity: 0, duration: 1.5 })
        .from('[data-lift="nome"]', { yPercent: 105, opacity: 0, duration: 1.2 }, 0.18)
        .from('[data-lift="lema"]', { opacity: 0, y: 16, duration: 1 }, 0.5)
        .from('[data-lift="act"]', { opacity: 0, y: 20, duration: 1 }, 0.62)
        .from('[data-lift="plate"]', { opacity: 0, y: 16, duration: 1 }, 0.74)
        .from('[data-lift="cue"]', { opacity: 0, duration: 0.9 }, 0.9)
    },
    { scope: host },
  )

  return (
    <header className="section hero" id="inicio" ref={host}>
      <Thread points={ROTA} nodes={[{ id: 'hero', at: 2 }]} side="left" start="top top" />
      <div className="hero-halo" aria-hidden="true" />

      <div className="shell-mid hero-corpo">
        <div className="hero-mark" data-lift="mark">
          <Globe className="hero-globe" />
          <img
            className="hero-emblema"
            src="/mundomagico/img/emblema-azul.png"
            alt=""
            width="204"
            height="204"
            fetchpriority="high"
          />
        </div>

        <h1 className="display hero-nome">
          <span className="hero-nome-linha">
            <span data-lift="nome">Colégio</span>
          </span>
          <span className="hero-nome-linha hero-nome-forte">
            <span data-lift="nome">Mundo Mágico</span>
          </span>
        </h1>

        <p className="lede hero-lema" data-lift="lema">
          {textos.lema}
        </p>

        <div className="acoes hero-acoes" data-lift="act">
          <a
            className="botao botao--primario"
            href={whatsappUrl(CTA_PADRAO)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Glyph name="whatsapp" size={20} />
            Falar no WhatsApp
          </a>
          <a className="botao" href="#escola">
            Conhecer a escola
          </a>
        </div>

        <p className="hero-plate" data-lift="plate">
          <span className="plate-face">
            <span className="plate-word">Desde</span>
            <span className="plate-year">{escola.desde}</span>
          </span>
        </p>
      </div>

      <span className="hero-cue" data-lift="cue" aria-hidden="true">
        <i />
      </span>
    </header>
  )
}
