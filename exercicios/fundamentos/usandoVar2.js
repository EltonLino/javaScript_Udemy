var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
// O var não respeita o escopo de bloco, apenas o de função
// Evitar usar o var, usar o let ou const
// Usar o var apenas se for necessário
//fuja do escopo global, ou seja, não declare variáveis fora de funções