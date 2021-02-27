// Objeto é uma coleção de chave-valor
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    telefones: {
        celular1: '19998314648',
        celular2: '19998314547',
        celular3: '19998324446'
    }
}

console.log(prod2)