/* Catmull-Rom → cubic bézier.
   Recebe pontos normalizados (0..1) e a caixa em pixels, devolve um `d`
   contínuo e liso. Como a caixa está em pixels reais, o traço nunca é
   escalado — não existe distorção de espessura. */

export function smoothPath(points, w, h, tension = 0.5) {
  if (!points || points.length < 2) return ''

  const p = points.map((pt) => [pt.x * w, pt.y * h])
  const n = p.length
  let d = `M ${round(p[0][0])} ${round(p[0][1])}`

  for (let i = 0; i < n - 1; i++) {
    const p0 = p[i - 1] || p[i]
    const p1 = p[i]
    const p2 = p[i + 1]
    const p3 = p[i + 2] || p2

    const c1x = p1[0] + ((p2[0] - p0[0]) / 6) * tension * 2
    const c1y = p1[1] + ((p2[1] - p0[1]) / 6) * tension * 2
    const c2x = p2[0] - ((p3[0] - p1[0]) / 6) * tension * 2
    const c2y = p2[1] - ((p3[1] - p1[1]) / 6) * tension * 2

    d += ` C ${round(c1x)} ${round(c1y)}, ${round(c2x)} ${round(c2y)}, ${round(p2[0])} ${round(p2[1])}`
  }

  return d
}

const round = (v) => Math.round(v * 10) / 10
