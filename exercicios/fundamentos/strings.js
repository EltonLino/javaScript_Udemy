const escola = "Cod3r"

console.log(escola.charAt(4)) // Reporta o caracter na 4 posição - contagem é de 0 em diante
console.log(escola.charAt(5)) // Quando não existe não da erro, porém não mostra nada 
console.log(escola.charAt(0))
console.log(escola.charCodeAt(3)) // Busca o valor do caracter no indice 3 na tabela Unicode
console.log(escola.indexOf('3')) // mostra em que índice está o caracter

console.log(escola.substring(1)) // Escreve do indice 1 até o final da string
console.log(escola.substring(0,3)) // pega os trÊ primeiros caracteres 0 a 3 não considera o 3

console.log('Escola '.concat(escola).concat("!")) // Concatena as palavras 
console.log(escola.replace(3,'e')) // substitui o valor com a string desejada

console.log('Ana,Maria,Pedro'.split(',')) // Vai separa os elemento da virgula e gera um array



