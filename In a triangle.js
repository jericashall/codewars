function isInTriangle(A, B, C, P){
    let ABC = areaTriangle(A[0], A[1], B[0], B[1], C[0], C[1])

    let PAC = areaTriangle(A[0], A[1], P[0], P[1], C[0], C[1])
    let PBC = areaTriangle(P[0], P[1], B[0], B[1], C[0], C[1])
    let PAB = areaTriangle(A[0], A[1], B[0], B[1], P[0], P[1])

    return PAC + PBC + PAB === ABC ? 'Inside' : 'Not inside'
}

function areaTriangle(x1, y1, x2, y2, x3, y3) {
    let pointA = x1 * (y2 - y3)
    let pointB = x2 * (y3 - y1)
    let pointC = x3 * (y1 - y2)
    return Math.abs((pointA + pointB + pointC)/2)
}

let answ = isInTriangle([0,0], [10,30], [20, 0], [10, 15])
console.log(answ)