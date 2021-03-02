// ES6 -> ECMAScript versão 6, de 2016

// Todas vez que um arquivo tem export (sem default) a importação precisa acontecer entre chaves (desestruturação)
import { numeros } from './includes/dados.mjs'

// Podemos importar só o que vamos efetivamente usar caso o arquivo exporte mais de um item
// import { somaVet, quadradoVet } from './includes/funcoes.mjs'
import { somaVet } from './includes/funcoes.mjs'

// quando existe export default no arquivo de origem, a importação nao tem chaves
import dobraVet from './includes/funcoes2.mjs'


// Usando os itens importados 
console.log(somaVet(numeros))
// console.log(quadradoVet(numeros))
console.log(dobraVet(numeros))