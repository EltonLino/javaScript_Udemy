let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
// O let respeita o escopo de bloco, diferente do var
// Usar o let quando a variável precisar mudar de valor
// Usar o const quando a variável não precisar mudar de valor
// Evitar o uso do var
//fuja do escopo global, ou seja, não declare variáveis fora de funções
// o let procura a variável no escopo mais próximo, e vai subindo até encontrar a variável ou chegar no escopo global