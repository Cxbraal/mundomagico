# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React + GSAP, build estático. Escolha do usuário (03/09/2026).

**Deploy: GitHub Pages** (confirmado pelo usuário). Consequências que o build
tem que respeitar: sem backend e sem PHP em produção; repositório `mundomagico`, logo
`base: '/mundomagico/'` no Vite; roteamento
tem que ser client-side ou single-page puro; todos os assets em caminho
relativo.

## Users

**Primário:** pai ou mãe em Goioerê/PR (cidade de interior, ~29 mil habitantes) e
região, decidindo onde matricular um filho de 0 a 14 anos. Chega no site pelo
celular, geralmente à noite, quase sempre depois de ver um anúncio ou um post da
escola no Instagram/Facebook, ou por indicação de outro pai. Está comparando duas
ou três escolas locais. Decisão é emocional (meu filho vai ser bem cuidado?),
social (o que os outros pais falam) e prática (preço, distância, horário).

**Secundário:** família já matriculada, voltando para achar contato, endereço ou
uma informação pontual.

## Product Purpose

Colégio particular de Educação Infantil e Ensino Fundamental em Goioerê/PR, em
operação desde 1985. O site existe para converter matrícula: fazer o pai que
nunca entrou na escola confiar o suficiente para dar o próximo passo (mandar
mensagem, ligar, agendar visita). Sucesso = contato iniciado.

## Positioning

Quarenta anos na mesma cidade, com corpo docente que a escola trata como seu
diferencial central. É uma escola pequena de cidade pequena — a promessa que uma
rede grande não consegue copiar é continuidade e atenção nominal: o professor
sabe o nome da criança, e há pais que estudaram ali. A campanha própria da escola
usa a frase "melhor colégio da região" (peça em `media/images (8).jpg`) — é a voz
deles, não um fato verificado por terceiro.

## Operating Context

- Cidade de interior do noroeste do Paraná. Base econômica agrícola.
- A escola já opera um app próprio para pais (Prisma Mobile / LV Sistemas) com
  comunicados, calendário, notas, frequência e financeiro. O site não substitui
  isso.
- Presença social ativa: Instagram **`@mundomagico_mmc`** (confirmado pelo
  usuário) e Facebook `MundoMagicoDaCrianca.com.br`. As redes são hoje o canal
  principal — o site precisa conviver com elas, não competir. O perfil
  `@colegiommagico` apareceu na busca pública mas NÃO foi confirmado como da
  escola; não usar.
- Ciclo de matrícula com campanhas sazonais ("condições especiais para
  matrículas no 2º semestre").

## Capabilities and Constraints

**Confirmado:**
- Etapas: Educação Infantil (a escola parte do berçário / Jardim I e II) e
  Ensino Fundamental até o 9º ano.
- Endereço: Av. Brasília, 1133 — Jd. Colina Verde, Goioerê/PR, CEP 87360-000.
- Telefone: (44) 3522-1119.
- Estrutura física registrada em base pública: pátio coberto, quadra esportiva
  coberta, biblioteca, parquinho, pátio descoberto, internet banda larga.
- Escopo de páginas pedido: Hero, Quem Somos, Sobre, Localização, Contato
  (one-page).
- Contato pelo site: **WhatsApp** `554435221119` (`https://wa.me/554435221119`),
  sem botão flutuante. CTAs levam à conversa.
- Performance é requisito explícito: 60fps, sem travamento em celular fraco —
  público majoritariamente mobile e em rede móvel de interior.

**Não decidido / não inventar:**
- Mensalidade, número de alunos, número de professores, índice de aprovação,
  material didático adotado, período (manhã/tarde/integral) — nenhum confirmado.
- Nome da mantenedora/direção, textos oficiais de missão e história.
- Se há transporte escolar, contraturno, ou atividades extracurriculares.

## Brand Commitments

- Nome de marca em uso: **Colégio Mundo Mágico**. Razão social nos registros
  públicos: "Mundo Mágico da Criança — Esc. Educ. Inf. e Ens. Fund."
- Logo obrigatório e em destaque no hero: `media/images (7).jpg`. Emblema
  hexagonal contendo globo meridianado, cartucho com "MUNDO MÁGICO", fita
  "DESDE 1985"; wordmark caixa-alta condensado pesado, "COLÉGIO" menor com três
  chevrons.
- Paleta herdada: azul profundo a azul médio, branco. Sem segunda cor de marca
  registrada nas peças vistas.
- Peças de campanha usam um acento manuscrito para a oferta sazonal.
- 1985 é ativo de marca — está gravado no emblema.

## Evidence on Hand

- `media/images (7).jpg` — logo sobre fundo azul (JPG, não vetor).
- `media/derived/logo-branco.png` e `media/derived/logo-azul.png` — derivados com
  fundo transparente, alpha extraído da luminância. `logo-branco.png` é o asset
  principal do site.
- `media/images (8).jpg` — peça de campanha de matrícula 2026, mostra a
  tipografia secundária, o acento manuscrito e o tom de voz.
- Dados públicos de diretório escolar (endereço, telefone, etapas, estrutura).

**Ausências que o build não pode fabricar:** não existe nenhuma foto da escola,
das salas, da fachada, dos professores ou dos alunos. Não existe depoimento de
pai, nota de avaliação, prêmio, ou texto institucional aprovado. Toda superfície
que pediria foto real precisa ser resolvida graficamente ou entregue como slot
identificado, com lista do que a escola tem que fornecer.

## Product Principles

1. **Confiança antes de encanto.** O pai decide com medo de errar. Cada seção
   tem que reduzir risco percebido, não impressionar.
2. **Quarenta anos é o argumento.** Continuidade e permanência na cidade são o
   que nenhuma escola nova em Goioerê pode alegar. 1985 aparece cedo.
3. **O professor é o produto.** O diferencial declarado é o corpo docente.
   Precisa ter peso estrutural, não uma linha perdida.
4. **Nunca fingir prova.** Sem foto real e sem depoimento, o site não simula
   nenhum dos dois. Slot honesto ou solução gráfica.
5. **Celular fraco em rede fraca é o dispositivo de referência.** Qualquer
   escolha visual que custe fluidez perde.

## Accessibility & Inclusion

Público adulto amplo, muitos em leitura ao ar livre e em telas pequenas: alvo de
contraste WCAG AA no mínimo, corpo de texto nunca abaixo de 16px, alvos de toque
generosos, e `prefers-reduced-motion` respeitado em todo o sistema de animação.
