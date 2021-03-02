function calculaArea(base, altura, forma = 'Q'){
    switch(forma){
        case 'Q': // quadrilatero
            return base * altura
            break
        case 'T': // triangulo
            return base * altura / 2
            break
        case 'E': // elipse
            return (base / 2) * (altura / 2) * Math.PI
    }
}
console.log(calculaArea(2,3))
console.log(calculaArea(5,3,'T'))
console.log(calculaArea(4.5,4.5,'E'))

// 1) Parâmetros opicionais devem vir após os obrigatórios
// 2) pode haver mais de um parametro opicional