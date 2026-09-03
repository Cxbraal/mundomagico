import { useRef } from 'react'
import Thread from './Thread'
import Glyph from './Glyph'
import { useReveal } from '../lib/reveal'
import { escola, mapsUrl, whatsappUrl, CTA_PADRAO, textos } from '../data/escola'

const ROTA_ONDE = [
  { t: 0.55, y: -0.04 },
  { t: 0.95, y: 0.34 },
  { t: 0.35, y: 0.7 },
  { t: 0.6, y: 1.04 },
]

const ROTA_CONTATO = [
  { t: 0.6, y: -0.04 },
  { t: 0.95, y: 0.36 },
  { t: 0.4, y: 0.74 },
  { t: 0.75, y: 1.02 },
]

export function Localizacao() {
  const host = useRef(null)
  useReveal(host)

  return (
    <section className="section onde" id="onde" ref={host}>
      <Thread points={ROTA_ONDE} nodes={[{ id: 'onde', at: 2 }]} side="right" />

      <div className="shell-mid center">
        <div className="section-head">
          <h2 className="title" data-reveal>
            {textos.ondeTitulo}
          </h2>
          <p className="lede" data-reveal>
            No Jardim Colina Verde, no mesmo endereço há quarenta anos.
          </p>
        </div>

        <figure className="carta" data-reveal>
          <svg
            viewBox="0 0 400 260"
            role="img"
            aria-label="Carta esquemática da localização do Colégio Mundo Mágico em Goioerê, Paraná"
          >
            <defs>
              <pattern id="grade" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0v40" fill="none" stroke="rgba(1,91,175,0.16)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect className="carta-campo" width="400" height="260" />
            <rect className="carta-grade" width="400" height="260" fill="url(#grade)" />

            <line className="carta-eixo" x1="0" y1="132" x2="400" y2="132" />
            <line className="carta-eixo" x1="204" y1="0" x2="204" y2="260" />

            <circle className="carta-halo" cx="204" cy="132" r="36" />
            <circle className="carta-halo carta-halo-2" cx="204" cy="132" r="21" />
            <circle className="carta-ponto" cx="204" cy="132" r="5" />

            <text className="carta-rotulo" x="204" y="102" textAnchor="middle">
              COLÉGIO MUNDO MÁGICO
            </text>
            <text className="carta-nota" x="204" y="176" textAnchor="middle">
              AV. BRASÍLIA, 1133
            </text>

            <g className="carta-norte" transform="translate(358 40)">
              <path d="M0 -19 L7 12 L0 5 L-7 12 Z" />
              <text className="carta-nota" x="0" y="30" textAnchor="middle">
                N
              </text>
            </g>
          </svg>
        </figure>

        <address className="endereco" data-reveal>
          {escola.endereco.linha1} · {escola.endereco.bairro}
          <br />
          {escola.endereco.cidade} · CEP {escola.endereco.cep}
        </address>

        <div className="acoes" data-reveal>
          <a className="botao" href={mapsUrl} target="_blank" rel="noopener noreferrer">
            Ver no mapa
            <Glyph name="seta" size={19} />
          </a>
        </div>
      </div>
    </section>
  )
}

export function Contato() {
  const host = useRef(null)
  useReveal(host)

  return (
    <section className="section on-blue contato" id="contato" ref={host}>
      <Thread points={ROTA_CONTATO} nodes={[{ id: 'fim', at: 3 }]} side="right" />

      <div className="shell-mid center">
        <div className="section-head">
          <h2 className="display" data-reveal>
            {textos.contatoTitulo}
          </h2>
          <p className="lede" data-reveal>
            {textos.contatoTexto}
          </p>
        </div>

        <div className="acoes" data-reveal>
          <a
            className="botao botao--primario"
            href={whatsappUrl(CTA_PADRAO)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Glyph name="whatsapp" size={20} />
            Falar no WhatsApp
          </a>
          <a className="botao" href={`tel:+${escola.whatsapp}`}>
            <Glyph name="telefone" size={19} />
            {escola.telefoneExibicao}
          </a>
        </div>

        <ul className="canais" data-reveal>
          <li>
            <a
              href={`https://instagram.com/${escola.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Glyph name="instagram" size={19} />@{escola.instagram}
            </a>
          </li>
          <li>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <Glyph name="pin" size={19} />
              {escola.endereco.linha1}, {escola.endereco.bairro}
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export function Rodape() {
  return (
    <footer className="rodape on-blue">
      <div className="shell rodape-shell">
        <img src="/mundomagico/img/logo-emblema.png" alt="" width="204" height="204" aria-hidden="true" />
        <p className="legend">
          Colégio Mundo Mágico · Goioerê, Paraná · Desde {escola.desde}
        </p>
      </div>
    </footer>
  )
}
