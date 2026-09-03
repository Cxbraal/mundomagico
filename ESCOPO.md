# Escopo — Site Colégio Mundo Mágico

Estado: **brief confirmado, nada de código escrito ainda.**
Direção travada: **CARTA CELESTE** (rodada `7a14471b`, carta `assigned`).
Modo: **Persuade**. Build: **code-led**.
Deploy: **GitHub Pages**, repositório `mundomagico` — `base: '/mundomagico/'` no Vite,
URL final `https://<usuario>.github.io/mundomagico/`.

---

## 1. Trabalho e público

Pai ou mãe em Goioerê/PR, no celular, à noite, comparando duas ou três escolas
locais para um filho de 0 a 14 anos. Chegou por indicação ou pelo Instagram
`@mundomagico_mmc`. Decide com medo de errar.

**Sucesso = contato iniciado no WhatsApp.** Nada mais conta.

## 2. Resultado e prova

Ação primária única: abrir conversa no WhatsApp — `https://wa.me/554435221119`.
Sem formulário, sem botão flutuante (decisão do usuário).

A prova disponível é escassa e o site não pode inventar o resto:

| Prova | Status |
|---|---|
| Desde 1985 — 40 anos na mesma cidade | ✅ no emblema |
| Educação Infantil (berçário/Jardim) ao 9º ano | ✅ |
| Endereço, telefone, estrutura física | ✅ |
| Corpo docente como diferencial | ⚠️ declarado, sem nome nem número |
| Fotos, depoimentos, notas, prêmios | ❌ inexistentes — não simular |

## 3. Direção escolhida

**Carta Celeste.** O emblema da escola já é linha branca sobre azul profundo com
um globo meridianado. A página é esse emblema expandido até virar mapa do céu.

- **Autoridade visual:** o próprio logo. Nada é importado de fora da marca.
- **Tese estrutural:** os meridianos do emblema vazam da borda e viram a retícula
  de coordenadas que alinha a página inteira. O layout não tem grid abstrato —
  tem sistema de coordenadas herdado do logo.
- **Cor:** estratégia *Drenched*. Azul profundo (`#01203F`) é o chão de 70%+ da
  superfície; azul de marca (`#015BAF`) é o segundo campo; branco (`#F7FDFA`) é
  a única tinta de desenho e de texto. Latão (`#C9963F`) aparece **uma vez só**,
  na placa de 1985.
- **CTA:** o único campo branco sólido da página inteira é o botão de WhatsApp.
  Sem cor de acento, sem terceira cor. A hierarquia é matemática, não decorativa.
- **Momento focal:** o emblema em escala de objeto celeste no primeiro viewport.

### Doações nomeadas (das cartas recusadas)

1. **Da Capa de Cordão** — um controle físico nomeado transforma a composição
   inteira, não um detalhe.
2. **Da Prateleira de Forno** — gravidade é ordem de leitura; a cor se compromete
   em escala de página.
3. **Do Contador Nixie** — 1985 vira hardware: placa com espessura real, único
   objeto com profundidade física na página.
4. **Do Espécime Bitmap** — o emblema repetido em muitas escalas É a estrutura da
   composição.

### Interação-assinatura (pedida pelo usuário, vinculante)

**A linha do liga-pontos celeste.** Uma única linha branca contínua atravessa o
site inteiro, do topo do hero ao fim do contato. Ela é *desenhada* conforme o
scroll avança e termina exatamente no fim da página. Cada seção é um nó — uma
estrela — que a linha toca ao passar.

Por que essa e não outra: liga-pontos é atividade de criança **e** é como se lê
uma constelação. Resolve o pedido de "infantil e fluido" sem nenhum recurso
infantilizado (sem balão, sem blob, sem arco-íris) e sem sair do mundo escolhido.

Regras que o build tem que cumprir:
- Um único `<path>` SVG, animado por `stroke-dashoffset` com ScrollTrigger em
  `scrub`. Nada de animar layout, nada de reflow.
- A rotação do globo do emblema roda **na mesma timeline de progresso do scroll**.
  Uma assinatura só, um sistema só — não duas animações competindo.
- `prefers-reduced-motion`: a linha renderiza inteira e estática. A página
  continua completa e legível.
- Alvo 60fps em celular fraco. Se a linha custar frames, a linha perde.

### Risco honesto

Página escura e saturada pode ler fria ou corporativa — o oposto do acolhimento
que uma escola que começa no berçário precisa vender. A defesa é voz humana no
texto, escala tipográfica generosa, respiro, e a linha contínua dando movimento.
Se isso falhar, o site fica bonito e distante — e distante não converte matrícula.

## 4. Escopo e limites

**Entrega:** one-page, produção, responsivo. Seções na ordem: Hero · Quem Somos ·
Sobre · Localização · Contato.

**Fora do escopo:** área do aluno, blog, matrícula online, calendário. A escola já
tem app próprio (Prisma Mobile) para isso — o site aponta, não substitui.

**Anti-metas explícitas:**
- Nada de varinha, estrela cintilante, poeira mágica, gradiente roxo. "Mágico"
  entra como orientação e navegação celeste, nunca como fantasia.
- Nada de foto de banco de imagens com criança sorrindo. Sem foto real, o site é
  gráfico.
- Nada de depoimento, número ou selo inventado.
- Nada de botão flutuante de WhatsApp.

## 5. Estados e faixas

- **Sem foto (estado atual):** todas as seções têm que funcionar 100% sem uma
  única fotografia. Onde foto entraria depois, existe moldura desenhada em linha,
  identificada como slot.
- **Com foto (futuro):** os slots recebem imagem sem redesenho.
- **Texto:** "Quem Somos" e "Sobre" entram como rascunho marcado `PROVISÓRIO` até
  a escola aprovar. Faixa realista: 2 a 5 parágrafos curtos por seção.
- **Etapas:** 5 a 8 nós no percurso (Berçário, Jardim I, Jardim II, Fund. I,
  Fund. II).
- **Conexão ruim:** rede móvel de interior. Peso da primeira tela é orçamento,
  não detalhe.

## 6. Interação e layout

- Hierarquia: emblema → manchete → legenda de carta → ação. Uma ação, sempre.
- Topologia: rolagem única, âncoras nos nós da linha. Nav mínima, presa à retícula.
- Responsivo: a retícula fica mais rala no celular, nunca some. A linha vira mais
  vertical e menos serpenteada.
- Toque: alvos generosos; nada depende de hover.
- Feedback: cada nó da linha acende quando a linha chega nele.

## 7. Pendências

### Resolvidas

| # | Item | Resolução |
|---|---|---|
| 1 | WhatsApp | `554435221119` → `https://wa.me/554435221119` |
| 2 | Repositório / deploy | GitHub Pages, repo `mundomagico`, `base: '/mundomagico/'` |
| 3 | Logo com fundo transparente | Gerado local em `media/derived/` |

**Logo — assets derivados.** O original é JPG com fundo azul chapado. O alpha foi
derivado da luminância (o emblema é linha branca pura), o que preserva o
anti-aliasing do traço fino do globo — resultado melhor que remoção genérica de
fundo.

- `media/derived/logo-branco.png` — logo branco, fundo transparente. **Uso
  principal**, é o que vai sobre o azul profundo do site.
- `media/derived/logo-azul.png` — mesma silhueta em `#015BAF`, para qualquer
  fundo claro (favicon, OG image, PDF).

Limitação conhecida: o texto "MUNDO MÁGICO" dentro do cartucho é vazado
(transparente), não branco. Sobre azul isso lê certo. Sobre fundo claro, use a
variante azul. Se um dia aparecer o vetor original (AI/EPS/SVG), ele substitui os
dois — o raster resolve 441px, e o hero pede escala maior.

### Abertas

| # | Pendência | Bloqueia |
|---|---|---|
| 4 | Texto aprovado de Quem Somos / Sobre | Sai rascunho marcado PROVISÓRIO |
| 5 | Período de funcionamento (manhã / tarde / integral) | Seção Sobre |
| 6 | Fotos da escola (fachada, salas, quadra, parquinho) | Slots desenhados ficam vazios |
| 7 | Transporte, contraturno, extracurriculares | Seção Sobre |
| 8 | Confirmar que `554435221119` tem WhatsApp ativo | É o mesmo número do fixo (44) 3522-1119 |

**Nada disso impede começar.** Tudo sai como rascunho identificado.

## 8. O que decidir agora não é

Não escolher: fontes exatas, tokens finais, valores de CSS, texto final. Isso é
trabalho de build, não de brief.

---

## 9. Observações futuras — arrumar depois

Tudo abaixo entrou como **genérico/provisório** por decisão do usuário
(03/09/2026): monta agora, corrige quando a escola mandar o material.

Todo texto provisório no código carrega o marcador `PROVISÓRIO` no comentário
acima dele. Todos os fatos vivem em `src/data/escola.js` — trocar lá muda o site
inteiro, não precisa caçar string em componente.

| # | O que está genérico | Onde | O que precisa vir da escola |
|---|---|---|---|
| 1 | Texto de Quem Somos | `escola.js › quemSomos` | Texto institucional aprovado pela direção |
| 2 | Texto de Sobre / proposta pedagógica | `escola.js › sobre` | Linha pedagógica real, material didático adotado |
| 3 | Período de funcionamento | `escola.js › periodos` | Manhã / tarde / integral, e horários |
| 4 | Fotos da escola | slots desenhados em linha | Fachada, salas, quadra coberta, biblioteca, parquinho |
| 5 | Corpo docente | `escola.js › docentes` | Quantos, formação, tempo de casa. É o diferencial declarado e hoje é a parte mais fraca do site |
| 6 | Transporte, contraturno, extracurriculares | ausente | Confirmar se existem |
| 7 | WhatsApp `554435221119` | `escola.js › whatsapp` | Confirmar que atende WhatsApp — é o mesmo número do fixo |
| 8 | Logo em raster 441px | `public/logo-*.png` | Vetor original (AI/EPS/SVG). Sem ele o emblema no hero tem teto de nitidez |
| 9 | Depoimentos de pais | ausente por princípio | Não existe nenhum. Não inventar. Quando houver, entra como seção nova |
| 10 | Dados de matrícula (valores, prazos, condições) | ausente por princípio | Campanha sazonal muda; entra como faixa editável |

**Regra que não muda:** nenhum desses itens vira número, selo, prêmio ou
depoimento inventado enquanto não vier da escola. Slot honesto ou nada.
