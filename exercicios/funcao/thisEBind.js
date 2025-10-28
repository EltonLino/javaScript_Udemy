const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao) // Nesse caso o this acessa o parametro saudacao associado a pessoa
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflto entre paradigmas: funcional e Orientado a Objetos
//this está em outro contexto

const falarDePessoa = pessoa.falar.bind(pessoa) // Metodo responsável por amarrar um determinado objeto para ser o dono da execução do metodo, sempre que o metodo for chamado.
falarDePessoa()