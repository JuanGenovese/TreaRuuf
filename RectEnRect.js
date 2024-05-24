const RectEnRect = (a, b, y, x) => {
    let rectangulosTotales = 0

    const base = (y / a)
    const altura =(x / b)

    if (base >= 1 && altura >= 1) {

       rectangulosTotales = Math.floor(base * altura) 
       return rectangulosTotales
       
    } 

    return 0

}

console.log(RectEnRect(1, 2, 2, 4))
console.log(RectEnRect(1, 2, 3, 5))
console.log(RectEnRect(2, 2, 1, 10))