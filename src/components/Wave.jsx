/* A separação entre seções.
   Não é a onda decorativa de site — é o meridiano do emblema atravessando a
   página. O mesmo arco que gira em volta do globo do logo, aberto e esticado
   até virar a borda entre duas cores. Por isso vem sempre acompanhado de duas
   linhas finas paralelas: são os meridianos vizinhos, a gramática da carta. */

const CURVAS = {
  a: 'M0,58 C 240,4 470,4 720,44 C 960,82 1200,96 1440,52 L1440,140 L0,140 Z',
  b: 'M0,40 C 250,100 500,104 760,58 C 1010,14 1230,10 1440,46 L1440,140 L0,140 Z',
}

const FIOS = {
  a: [
    'M0,34 C 240,-18 470,-18 720,22 C 960,60 1200,74 1440,30',
    'M0,16 C 250,-34 480,-32 730,6 C 970,42 1210,56 1440,12',
  ],
  b: [
    'M0,18 C 250,78 500,82 760,36 C 1010,-8 1230,-12 1440,24',
    'M0,2 C 260,60 510,64 770,20 C 1020,-22 1240,-26 1440,6',
  ],
}

export default function Wave({ from = 'paper', to = 'blue', curva = 'a' }) {
  return (
    <div className={`wave wave--${from}-${to}`} aria-hidden="true">
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
        {FIOS[curva].map((d, i) => (
          <path key={i} className="wave-fio" d={d} />
        ))}
        <path className="wave-campo" d={CURVAS[curva]} />
      </svg>
    </div>
  )
}
