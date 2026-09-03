/* Conjunto de glifos desenhado à mão, um traço só, mesma espessura.
   Grade de 24, cantos vivos, nada arredondado além do necessário — a mesma
   gramática de linha do emblema. Nenhum emoji, nenhuma biblioteca. */

const paths = {
  quadra: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" />
      <path d="M12 5.5v13M2.5 9.5h3v5h-3M21.5 9.5h-3v5h3" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
  cobertura: (
    <>
      <path d="M2 10.5 12 4l10 6.5" />
      <path d="M4.5 10.5v9M19.5 10.5v9M4.5 19.5h15" />
      <path d="M9 19.5v-5h6v5" />
    </>
  ),
  patio: (
    <>
      <path d="M2.5 18.5h19" />
      <path d="M6 18.5V9m12 9.5V9" />
      <path d="M4 9h16" />
      <path d="M12 9V4.5M9.5 6.5 12 4.5l2.5 2" />
    </>
  ),
  livro: (
    <>
      <path d="M4 4.5h6.2c1 0 1.8.8 1.8 1.8v13c0-.9-.8-1.6-1.8-1.6H4z" />
      <path d="M20 4.5h-6.2c-1 0-1.8.8-1.8 1.8v13c0-.9.8-1.6 1.8-1.6H20z" />
    </>
  ),
  parque: (
    <>
      <path d="M3 19.5 8 5l5 14.5" />
      <path d="M8 5h9.5v8" />
      <path d="M13 13h9" />
      <path d="M15 13v6.5M20 13v6.5" />
    </>
  ),
  sinal: (
    <>
      <path d="M12 19.5v.01" />
      <path d="M8.6 16.1a4.8 4.8 0 0 1 6.8 0" />
      <path d="M5.4 12.9a9.3 9.3 0 0 1 13.2 0" />
      <path d="M2.5 9.7a13.8 13.8 0 0 1 19 0" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5 5 16.4A8.6 8.6 0 1 1 8.2 19.5z" />
      <path d="M9 9.2c0 3 2.4 5.4 5.3 5.4l1-1.4-2-1-.8.9a4.4 4.4 0 0 1-1.9-2l.9-.8-1-2z" />
    </>
  ),
  telefone: (
    <>
      <path d="M7.5 3.5 9.8 8l-2 1.9a11 11 0 0 0 5.6 5.5l1.9-2 4.4 2.3-.6 3.3a1.4 1.4 0 0 1-1.6 1.1C10.6 19 4.9 13.3 3.9 6.6a1.4 1.4 0 0 1 1.1-1.6z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M16.8 7.2v.01" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5c4-4.6 6-8 6-10.6a6 6 0 0 0-12 0c0 2.6 2 6 6 10.6z" />
      <circle cx="12" cy="10.7" r="2.3" />
    </>
  ),
  seta: <path d="M4 12h15m-5.5-5.5L19.5 12l-6 5.5" />,
}

export default function Glyph({ name, size = 22, className = '' }) {
  const body = paths[name]
  if (!body) return null
  return (
    <svg
      className={`glyph ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {body}
    </svg>
  )
}
