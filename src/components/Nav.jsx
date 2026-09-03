import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Glyph from './Glyph'
import { whatsappUrl, CTA_PADRAO } from '../data/escola'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const ANCORAS = [
  { id: 'escola', rotulo: 'A escola' },
  { id: 'percurso', rotulo: 'O percurso' },
  { id: 'onde', rotulo: 'Onde estamos' },
  { id: 'contato', rotulo: 'Contato' },
]

export default function Nav() {
  const host = useRef(null)
  const [posado, setPosado] = useState(false)

  useGSAP(
    () => {
      const st = ScrollTrigger.create({
        start: 'top -80',
        onToggle: (self) => setPosado(self.isActive),
      })
      return () => st.kill()
    },
    { scope: host },
  )

  return (
    <nav className={`nav${posado ? ' is-set' : ''}`} ref={host} aria-label="Navegação principal">
      <div className="shell nav-shell">
        <a className="nav-brand" href="#inicio">
          <img src="/mundomagico/img/emblema-azul.png" alt="" width="204" height="204" aria-hidden="true" />
          <span>
            <b>Mundo Mágico</b>
            <i>Goioerê · PR</i>
          </span>
        </a>

        <ul className="nav-links">
          {ANCORAS.map((a) => (
            <li key={a.id}>
              <a href={`#${a.id}`}>{a.rotulo}</a>
            </li>
          ))}
        </ul>

        <a
          className="nav-act"
          href={whatsappUrl(CTA_PADRAO)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Glyph name="whatsapp" size={19} />
          <span>WhatsApp</span>
        </a>
      </div>
    </nav>
  )
}
