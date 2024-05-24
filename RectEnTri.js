const RectEnTri = (a, b, h, x) => {
    let RectEnTri = 0
    let filas = h / a

    for (let i = 1; i <= filas; i++) {
        let alturaTrapecio = a * i
        
        baseEfectiva = (x * (h - alturaTrapecio))/h;

        let RectEnFila = Math.floor(baseEfectiva / b)

        RectEnTri = RectEnTri + RectEnFila

    }


    return RectEnTri;

}

console.log(RectEnTri(2, 2, 5, 10)) 
console.log(RectEnTri(2, 4, 4, 8))
console.log(RectEnTri(1, 2, 3, 7))
console.log(RectEnTri(2, 4, 20.4, 20.4))