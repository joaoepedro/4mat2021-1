let numeros = [10,20,30] // vetor

let carro = {
    marca: 'Volkswagen',
    modelo: 'Fusca',
    ano: 1969,
    cor: 'preto'
}   // objeto

// desestruturação de vetor
let [x,y,z] = numeros
console.log(x)
console.log(y)
console.log(z)

// desestruturação parcial do vetor
// pegar apenas o segundo valor
let [,c,] = numeros
console.log(c)

// pegando apenas o 1 e 2 valor
let [a,b] = numeros
console.log(a)
console.log(b)

// desestruturação de objetos
// o nome das variáveis deve ser IGUAL ao nome das propriedades do objeto
// a ordem das variaveis é INDIFERENTE
// let {ano,modelo,cor,marca} = carro
/* console.log(modelo)
console.log(marca)
console.log(ano)
console.log(cor) */

// Desustruturação parcial: passar apenas o nome das propriedades desejadas

let {marca, ano} = carro
console.log(marca)
console.log(ano)

// renomeando variaveis ao desestruturar
let {marca: brand, ano: year} = carro
console.log(brand)
console.log(year)