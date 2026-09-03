import { useRef } from 'react'
import Thread from './Thread'
import { useReveal } from '../lib/reveal'
import { textos, confianca } from '../data/escola'

// Termina na borda interna da calha (t = 1): é de lá que o trecho seguinte
// puxa a travessia para o outro lado, por cima da onda.
const ROTA = [
  { t: 0.5, y: -0.09 },
  { t: 0.95, y: 0.24 },
  { t: 0.2, y: 0.56 },
  { t: 0.9, y: 0.86 },
  { t: 1, y: 1.0 },
]

export default function Escola() {
  const host = useRef(null)
  // O campo azul chega inteiro, de baixo: é a virada de cor da página.
  useReveal(host, '[data-reveal]', { from: { opacity: 0, y: 40 }, to: { duration: 1.3 } })

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
