const RectEnRect = (a, b, y, x) => {
    let rectangulosTotales = 0

    let panelesEnBase = (x / b)
    let panelesEnAltura =(y / a)

    if (panelesEnBase >= 1 && panelesEnAltura >= 1) {

       rectangulosTotales = Math.floor(panelesEnBase * panelesEnAltura) 
       return rectangulosTotales
       
    } 

    return 0

}

console.log(RectEnRect(1, 2, 2, 4))
console.log(RectEnRect(1, 2, 3, 5))
console.log(RectEnRect(2, 2, 1, 10))
console.log(RectEnRect(2, 1, 3, 5))