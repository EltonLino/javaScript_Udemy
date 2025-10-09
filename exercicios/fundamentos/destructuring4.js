function rand([min=0, max = 1000]){
    if(min > max) [min, max] = [max, min] // Se o min for maio que o max, invertermos a variável
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40])) // min maior que máximo
console.log(rand([992])) // min 992 máx valor padrão
console.log(rand([,10])) // min assume valor padrãoe declaramos o máximo
console.log(rand([])) //min e máx com os valores padrão