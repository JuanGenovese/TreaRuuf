const RectEnSup = (a, b, y, x, sX, sY) => {
    let rectEnFiguraCompleta = 0
    
    let panelesEnBase1 = Math.floor(x / b)
    let panelesEnAltura = Math.floor(y / a)

    let panelesEnBase2 = Math.floor((x - sX) / b)

    let panelesEnBaseChica = Math.floor(sX / b)
    let panelesEnAlturaChica = Math.floor((y - sY)/a)

    if (panelesEnBase1 >= 1 && panelesEnAltura >= 1 && panelesEnBase2 >= 1) {

        let rectangulosTotales1 = (panelesEnBase1 * panelesEnAltura) 
        let rectangulosTotales2 = (panelesEnBase2 * panelesEnAltura)
        let rectangulosTotales3 = (panelesEnBaseChica * panelesEnAlturaChica)

        rectEnFiguraCompleta = rectangulosTotales1 + rectangulosTotales2 + rectangulosTotales3

        return rectEnFiguraCompleta
    } 
}

console.log(RectEnSup(2, 2, 4, 6, 1.5, 2.5))
console.log(RectEnSup(1, 1.5, 4.5, 3.5, 1.5, 3.5))
