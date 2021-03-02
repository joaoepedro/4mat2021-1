let nota = 7.2
let situacao

/*
if (nota >=6){
    situacao = 'APROVADO'
} else {
    situacao = 'REPROVADO'
}


if (nota >=6) situacao = 'APROVADO'
else situacao = 'REPROVADO'
*/

// As 3 partes do operador ternario 
// 1ª parte: CONDIÇÃO - o que iria depois do IF 
// Entre 1ª e 2ª parte -> ? (pergunta)
// 2ª parte: resultado caso a condição seja VERDADEIRA
// Entre a 2ª e 3ª partes -> : (else)
// 3ª parte: resultado caso a condição seja FALSA
situacao = (nota >=6 ? 'APROVADO' : 'REPROVADO')

console.log(situacao)