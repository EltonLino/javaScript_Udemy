let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // ! simbolo de negação. Se eu colocasse 1 ! ele nega o valor; 2 vezes ele mostra a condição atual

console.log('Os verdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')//string com espaço
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // atribuição dentro do console

console.log('Os falsos....') 
console.log(!!0)
console.log(!!'')//string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // atribuição dentro do console

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // o único valor verdadeiro é o espaço, então ele retorna true
console.log(('' || null || 0 || 'epa')) // retorna o primeiro valor verdadeiro

let nome = ''
console.log(nome || 'Desconhecido') // se nome for falso, retorna Desconhecido


