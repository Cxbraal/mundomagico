import { useRef } from 'react'
import Thread from './Thread'
import Glyph from './Glyph'
import { useReveal } from '../lib/reveal'
import { percurso, estrutura, textos } from '../data/escola'

// Começa na calha da esquerda (t = 2, o outro lado) na altura da onda e
// atravessa a página desenhando, em vez de a linha morrer no ar de um lado e
// renascer no outro.
const ROTA = [
  { t: 2, y: -0.075 },
  { t: 1.45, y: -0.05 },
  { t: 1, y: -0.018 },
  { t: 0.85, y: 0.24 },
  { t: 0.25, y: 0.52 },
  { t: 0.95, y: 0.8 },
  { t: 0.55, y: 1.0 },
]

export default function Percurso() {
  const host = useRef(null)

  useReveal(host, '.etapa')
  useReveal(host, '.estrutura li', { start: 'top 90%' })
  useReveal(host, '.escala-eixo', {
    from: { scaleX: 0, transformOrigin: 'left center' },
    to: { duration: 1.4, stagger: 0 },
  })

  return (
    <section className="section" id="percurso" ref={host}>
      <Thread
        points={ROTA}
        nodes={[{ id: 'percurso', at: 3 }, { id: 'estrutura', at: 5 }]}
        side="right"
      />

      <div className="shell">
        <div className="section-head">
          <h2 className="title">{textos.percursoTitulo}</h2>
          <p className="lede">{textos.percursoLinha}</p>
        </div>

        <ol className="escala">
          <span className="escala-eixo" aria-hidden="true" />
          {percurso.map((e) => (
            <li className="etapa" key={e.id}>
              <span className="etapa-marca" aria-hidden="true" />
              <h3 className="etapa-turma">{e.turma}</h3>
              <p className="etapa-idade">{e.idade}</p>
              <p className="etapa-etapa">{e.etapa}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="shell estrutura">
        <div className="section-head">
          <h2 className="title">{textos.estruturaTitulo}</h2>
        </div>
        <ul>
          {estrutura.map((item) => (
            <li key={item.id}>
              <Glyph name={item.glifo} size={26} />
              <span>{item.nome}</span>
            </li>
          ))}
        </ul>
        <p className="estrutura-nota">
          Registrado no censo escolar. As fotos de cada espaço entram assim que a escola mandar.
        </p>
      </div>
    </section>
  )
}
