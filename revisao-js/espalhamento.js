console.log(Math.min(14, 7, -3, 23, 34)) // Retorna o menor valor
console.log(Math.max(14, 7, -3, 23, 34)) // Retorna o maior valor

let numeros = [14, 7, -3, 23, 34]

// usando espalhamento para 'desmontar' o vetor
console.log(Math.min(...numeros)) // 3 pontinhos (...vetor)
console.log(Math.max(...numeros))

let maisNumeros = [4, 0, 11, ...numeros, 8, 19, 26]
console.log(maisNumeros)

// Função com parâmetros (ou argumentos) de resto
function somaTudo(...nums) {
    let soma = 0
    for (let n of nums) soma += n
    return soma
}

console.log(somaTudo(12, 45, -5))
console.log(somaTudo(2, 76, -2, 41, 19, 11, 22, 30))

// argumento convencional + argumento de resto 
function calcular(oper, ...nums) {
    let res
    switch (oper) {
        case '+':
            // res = 0
            // for (let n of nums) soma += n
            res = somaTudo(...nums)
            break;

        case '*':
            res = 1
            for (let n of nums) res *= n
            break

        default:
            break;
    }
    return res
}

console.log(calcular('*', 12, 45, -5))
console.log(calcular('+', 2, 76, -2, 41, 19, 11, 22, 30))

// como chamar a função somaTudo() para processar o vetor maisNumeros? 
console.log(somaTudo(...maisNumeros)) // desmonta o vetor (maisNumeros) pra função montar novamente
console.log(calcular('+', ...maisNumeros))