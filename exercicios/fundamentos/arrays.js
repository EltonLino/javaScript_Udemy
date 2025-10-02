const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // undefined
valores[4] = 10
console.log(valores)
console.log(valores.length)
valores.push({id: 3}, false, null, 'teste') // adiciona elementos no array
console.log(valores)
console.log(valores.pop()) // remove o último elemento do array
delete valores[0] // deleta o elemento do índice 0, mas não altera o tamanho do array
console.log(valores)