let dobro = function (a){
    return 2 * a
}

//Função arrow, deve ser armazenada em uma variavel
dobro = (a) => {
    return 2 * a
}

// Função arrow reduzida
dobro = a => 2 * a // Com return implicito
console.log(dobro(Math.PI))

// função normal
let ola = function(){
    return 'Olá'
}
// modo arrow
ola = () => 'Olá' // sem parametros
ola = _ => 'Olá' // 1 unico parametro
console.log(ola()) 