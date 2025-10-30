const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem usar callback
let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callbak
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

// Com callback e com arrow function

const notasBaixas3 = notas.filter(nota => nota < 7) // filter percorre o array e adiciona em outro array se a resposta for verdadeira

console.log(notasBaixas3)

