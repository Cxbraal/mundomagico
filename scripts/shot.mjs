/* Captura de tela do site rodando, para revisão.
   Usa o Chrome já instalado na máquina via playwright-core — nada de baixar
   navegador. Roda com o `npm run dev` de pé.

   node scripts/shot.mjs [url] [dir] */

import { chromium } from 'playwright-core'
import { mkdirSync } from 'node:fs'
import { existsSync } from 'node:fs'

const URL = process.argv[2] || 'http://localhost:5173/mundomagico/'
const DIR = process.argv[3] || '.impeccable/review'

const CHROMES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
]

const VIEWS = [
  { nome: 'desktop', width: 1440, height: 900 },
  { nome: 'user-800', width: 800, height: 760 },
  { nome: 'mobile', width: 390, height: 844 },
]

const exe = CHROMES.find((p) => existsSync(p))
if (!exe) {
  console.error('Nenhum Chrome ou Edge encontrado nos caminhos padrão.')
  process.exit(1)
}

mkdirSync(DIR, { recursive: true })

const browser = await chromium.launch({ executablePath: exe })

for (const v of VIEWS) {
  const page = await browser.newPage({
    viewport: { width: v.width, height: v.height },
    deviceScaleFactor: 1,
  })
  await page.goto(URL, { waitUntil: 'networkidle' })

  // A revelação de entrada precisa terminar antes da foto: elemento escondido
  // por tempo de animação vira "elemento faltando" no olho de quem revisa.
  await page.waitForTimeout(2600)

  // Assenta o movimento de entrada antes da foto. Sem isso, tudo que ainda
  // não entrou no viewport sai da captura como se não existisse, e quem revisa
  // conserta um problema que não existe. A foto é da composição, não do tempo
  // das animações — o movimento se verifica ao vivo, não em PNG.
  await page.evaluate(() => {
    document
      .querySelectorAll('[data-reveal], [data-lift], .etapa, .estrutura li, .escala-eixo')
      .forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
    document.querySelectorAll('.thread path').forEach((p) => {
      p.style.strokeDashoffset = '0'
    })
    document.querySelectorAll('.thread .star').forEach((s) => s.classList.add('is-lit'))
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(600)

  await page.screenshot({ path: `${DIR}/${v.nome}.png`, fullPage: true })
  console.log(`${DIR}/${v.nome}.png  ${v.width}x${v.height}`)
  await page.close()
}

await browser.close()
