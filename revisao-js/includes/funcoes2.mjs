// Neste arquivo há apenas um item sendo exportado, e é uma function
// Podemos usar export default

export default function dobraVet (vet) {
    // cria um novo vetor com elementos ao dobro do valor do vetor original
    let res = []
    for (let n of vet) res.push(n * 2)
    return res
}