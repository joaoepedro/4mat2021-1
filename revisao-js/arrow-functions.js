// Caracteristicas dessa Função:
// 1) tem apenas 1 argumento
// 2) Seu corpo tem apenas uma linha de código, com return

function quadrado (n){
    return n * n // n ** 2 ou Math.pow
}

// Reescrevendo a função anterior como arrow function
// 1) Os parenteses em torno do argumento sao omitidos
// 2) A palavra function, antes do argumento, é substituida por => dps do argumento
// 3) As chaves sao omitidas
// 4) A palavra return é omitida

const quadrado2 = n => n * n

console.log(quadrado(8), quadrado2(8))

// Função com mais de 1 argumento
function potencia (b, e) {
    return b ** e
}

// com +1 argumentos deve-se utilizar os parenteses em torno dos argumentos
const potencia2 = (b, e) => b ** e

console.log(potencia(2,6), potencia2(2,6))

// Função sem argumentos
function megasena(){
    // retorna um numero aleatorio entre 1 e 60
    // Math.random() -> retorna um numero aleatorio entre 0 e 1
    // Multiplicando por 60 -> temos um numero fracionario entre 1 e 59
    // Soma 1 -> ajusta a faixa para 1 e 60
    // floor() -> retira as casas decimais
    return Math.floor(Math.random() * 60 + 1)
}

console.log(megasena(), megasena(), megasena())

// quando nao ha argumentos o parenteses marcam o lugar deles
const megasena2 = () => Math.floor(Math.random() * 60 + 1)

console.log(megasena2(), megasena2(), megasena2())

// Função com mais de uma linha de codigo no corpo
function somaTudo(...nums){
    let soma = 0
    for(let n of nums) soma += n
    return soma
}

// Arrow function
// Voltam as chaves {}

let somaTudo2 = (...nums) => {
    let soma = 0
    for(let n of nums) soma += n
    return soma
}

// Conclusão: o formato Arrow Function é indicado quando a função se resolve em
// apenas 1 linha (ou poucas linhas, como exceção).