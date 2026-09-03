import { useRef } from 'react'
import Thread from './Thread'
import { useReveal } from '../lib/reveal'
import { textos, confianca } from '../data/escola'

const ROTA = [
  { t: 0.5, y: -0.04 },
  { t: 0.95, y: 0.26 },
  { t: 0.3, y: 0.58 },
  { t: 0.9, y: 0.9 },
  { t: 0.55, y: 1.04 },
]

export default function Escola() {
  const host = useRef(null)
  useReveal(host)

  return (
    <section className="section on-blue" id="escola" ref={host}>
      <Thread points={ROTA} nodes={[{ id: 'escola', at: 2 }]} side="left" />

      <div className="shell-mid center">
        <div className="section-head">
          <h2 className="title" data-reveal>
            {textos.escolaTitulo}
          </h2>
        </div>

        <div className="prose prose-center" data-reveal>
          {textos.escola.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <ul className="confianca shell" aria-label="Como a escola trabalha">
        {confianca.map((c) => (
          <li key={c.id} data-reveal>
            <strong>{c.forte}</strong>
            <span>{c.linha}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
