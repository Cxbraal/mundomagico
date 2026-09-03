/* Toda a verdade factual do site vive aqui.
   Trocar um valor neste arquivo muda o site inteiro.

   PROVISÓRIO = texto escrito por nós, ainda não aprovado pela escola.
   Lista completa do que precisa ser substituído: ESCOPO.md, seção 9. */

export const escola = {
  nome: 'Colégio Mundo Mágico',
  cidade: 'Goioerê',
  uf: 'PR',
  desde: 1985,

  endereco: {
    linha1: 'Av. Brasília, 1133',
    bairro: 'Jd. Colina Verde',
    cidade: 'Goioerê — PR',
    cep: '87360-000',
    // Coordenada aproximada do centro de Goioerê. Usada só para montar o link
    // de busca do Maps — a busca é por endereço, não por pino.
    mapsQuery: 'Av. Brasília, 1133, Jardim Colina Verde, Goioerê - PR, 87360-000',
  },

  // PROVISÓRIO: confirmar que este número atende WhatsApp.
  // É o mesmo do telefone fixo. ESCOPO.md § 9, item 7.
  whatsapp: '554435221119',
  telefoneExibicao: '(44) 3522-1119',

  instagram: 'mundomagico_mmc',
  facebook: 'MundoMagicoDaCrianca.com.br',
}

export const whatsappUrl = (mensagem) =>
  `https://wa.me/${escola.whatsapp}?text=${encodeURIComponent(mensagem)}`

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  escola.endereco.mapsQuery,
)}`

export const CTA_PADRAO =
  'Olá! Vi o site do Colégio Mundo Mágico e gostaria de saber mais sobre as matrículas.'

/* ---------------------------------------------------------------- percurso */
/* Etapas confirmadas. As idades seguem a regra nacional (Fundamental começa
   aos 6). Os nomes das turmas da Educação Infantil vieram do briefing. */

export const percurso = [
  {
    id: 'bercario',
    turma: 'Berçário',
    idade: '0 a 1 ano',
    etapa: 'Educação Infantil',
    nota: 'A primeira vez que a família deixa a criança com alguém que não é da casa.',
  },
  {
    id: 'jardim-1',
    turma: 'Jardim I',
    idade: '2 a 3 anos',
    etapa: 'Educação Infantil',
    nota: 'Fala, convívio, rotina. A sala vira um lugar conhecido.',
  },
  {
    id: 'jardim-2',
    turma: 'Jardim II',
    idade: '4 a 5 anos',
    etapa: 'Educação Infantil',
    nota: 'Letra, número e a preparação para a alfabetização.',
  },
  {
    id: 'fund-1',
    turma: '1º ao 5º ano',
    idade: '6 a 10 anos',
    etapa: 'Ensino Fundamental I',
    nota: 'Alfabetização completa e as bases que sustentam o resto da escola.',
  },
  {
    id: 'fund-2',
    turma: '6º ao 9º ano',
    idade: '11 a 14 anos',
    etapa: 'Ensino Fundamental II',
    nota: 'Professor por disciplina, autonomia de estudo, saída para o Ensino Médio.',
  },
]

/* --------------------------------------------------------------- estrutura */
/* Confirmado em base pública de dados escolares. */

export const estrutura = [
  { id: 'quadra', nome: 'Quadra esportiva coberta', glifo: 'quadra' },
  { id: 'patio-coberto', nome: 'Pátio coberto', glifo: 'cobertura' },
  { id: 'patio', nome: 'Pátio descoberto', glifo: 'patio' },
  { id: 'biblioteca', nome: 'Biblioteca', glifo: 'livro' },
  { id: 'parquinho', nome: 'Parquinho', glifo: 'parque' },
  { id: 'internet', nome: 'Internet banda larga', glifo: 'sinal' },
]

/* ------------------------------------------------------------------- textos */

export const textos = {
  lema: 'Do berçário ao 9º ano, em Goioerê desde 1985.',

  // PROVISÓRIO — ESCOPO.md § 9, item 1
  escolaTitulo: 'A escola',
  escola: [
    'O Mundo Mágico abriu em Goioerê em 1985 e nunca saiu daqui. Já viu quatro décadas de crianças passarem por essa porta — algumas voltaram como pais.',
    'Escola de cidade pequena tem uma coisa que rede grande não copia: ninguém aqui é número. O professor sabe o nome da criança e sabe quando alguma coisa não está certa.',
  ],

  // PROVISÓRIO — ESCOPO.md § 9, item 2
  percursoTitulo: 'O percurso',
  percursoLinha:
    'A criança entra no berçário e sai no 9º ano. Catorze anos sem trocar de escola.',

  estruturaTitulo: 'A escola por dentro',

  ondeTitulo: 'Onde estamos',

  contatoTitulo: 'Venha conhecer',
  contatoTexto: 'Chame no WhatsApp e a gente marca um horário para você visitar.',
}

/* Faixa de confiança: o que o pai checa antes de decidir.
   Só entram fatos confirmados. */
export const confianca = [
  {
    id: 'anos',
    forte: '40 anos em Goioerê',
    linha: 'Desde 1985, no mesmo endereço. Não é escola que abriu ano passado.',
  },
  {
    id: 'ciclo',
    forte: 'Do berçário ao 9º ano',
    linha: 'Educação Infantil e Fundamental completos. Sem trocar de escola no meio.',
  },
  {
    id: 'docentes',
    // PROVISÓRIO — ESCOPO.md § 9, item 5
    forte: 'Professores que ficam',
    linha: 'O corpo docente é o que a escola aponta como seu diferencial.',
  },
  {
    id: 'visita',
    forte: 'Visita quando quiser',
    linha: 'Marque um horário e conheça as salas, a quadra e as pessoas.',
  },
]
