// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN - Not a Number
imprimirSoma(2, 10, 4, 5, 6, 7) // Pega os dois primeiros e ignora o resto
imprimirSoma() // NaN - Not a Number

// Função com retorno
function soma(a, b = 0) { // b = 0 é um valor padrão, quando o valor não for passado ele assume o valor 0
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) // 2 + 0
console.log(soma()) // NaN - Not a Number