// novo recurso do ES2015

const pessoa = {
    nome: 'Peterson',
    idade: 24,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

console.log(pessoa.nome)
console.log(pessoa.idade)

// com destructuring

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome, bemHumorada} = pessoa
console.log(sobrenome,bemHumorada)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)
