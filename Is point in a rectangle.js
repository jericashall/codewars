function isInsideRectangle(a, b, c, d, p) {
    let ABC = areaOfTriangle(a[0], a[1], b[0], b[1], c[0], c[1])
    let ADC = areaOfTriangle(a[0], a[1], d[0], d[1], c[0], c[1])

    let PAB = areaOfTriangle(p[0], p[1], a[0], a[1], b[0], b[1])
    let PBC = areaOfTriangle(p[0], p[1], b[0], b[1], c[0], c[1])
    let PAD = areaOfTriangle(p[0], p[1], a[0], a[1], d[0], d[1])
    let PCD = areaOfTriangle(p[0], p[1], c[0], c[1], d[0], d[1])

    return ABC + ADC === PAB + PBC + PAD + PCD
}

function areaOfTriangle(x1, y1, x2, y2, x3, y3) {
    return Math.abs(x1 * (y2 - y3) + x2 * (y3-y1) + x3 * (y1 - y2))/2
}

console.log(isInsideRectangle([10, 10], [10, -10], [-10, -10], [-10, 10], [0, 0]))