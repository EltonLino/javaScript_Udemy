//Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa // Extrai da estrutura o nome e a idade
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // Ela extrai e atribui a uma variável
console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa // Quando não existe está indefinido ou podemos atribuir um valor padrão a uma variável que não existe
console.log(sobrenome, bemHumorada)

const {endereço: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)