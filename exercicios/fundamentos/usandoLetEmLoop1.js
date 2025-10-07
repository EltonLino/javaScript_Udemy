for (let i = 0; i <10; i++) {
    console.log(i)
}

console.log('i = ', i) // O valor do i neste ponto gera um erro por que ela não está definido, ele esta definido apenas dentro do for.
//Como let tem conceito de bloco, ele fica não visivel depois do loop.