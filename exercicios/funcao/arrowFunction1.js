let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2* a
}

dobro = a => 2 * a // return implícito

console.log(dobro(Math.PI))

ola = () => 'Olá'
ola = _ => 'Olá' // Essa é um opção ao código acima, quando não temos paramentros passados, podemos usar o underline no lugar do parenteses
console.log(ola())