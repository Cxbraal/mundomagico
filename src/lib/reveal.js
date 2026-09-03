import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/* Revelação de leitura.

   Por que não `gsap.from(...)` com scrollTrigger: um `from` fica preso ao
   gatilho para sempre. Quando o ScrollTrigger recalcula — e ele recalcula em
   todo resize, inclusive quando a barra de endereço do celular aparece ou
   some — o elemento volta ao estado inicial e o texto some da tela. Aqui o
   gatilho dispara uma vez e se mata (`once`), então nenhum recálculo depois
   consegue esconder o conteúdo.

   O padrão do CSS é visível: sem JavaScript, ou com movimento reduzido, a
   página inteira continua legível. */

export function useReveal(scope, alvo = '[data-reveal]', extra = {}) {
  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      // A busca precisa ser presa ao escopo. `gsap.utils.toArray` varre o
      // documento inteiro, então cada seção zeraria a opacidade das outras —
      // e as que já tinham revelado (gatilho morto por `once`) nunca voltavam.
      const raiz = scope.current
      if (!raiz) return
      const els = Array.from(raiz.querySelectorAll(alvo))
      if (!els.length) return

      const { from = { opacity: 0, y: 24 }, to = {}, start = 'top 86%' } = extra

      gsap.set(els, from)

      ScrollTrigger.batch(els, {
        start,
        once: true,
        onEnter: (lote) =>
          gsap.to(lote, {
            opacity: 1,
            y: 0,
            scaleX: 1,
            duration: 1.05,
            ease: 'expo.out',
            stagger: 0.08,
            overwrite: true,
            ...to,
          }),
      })
    },
    { scope },
  )
}
