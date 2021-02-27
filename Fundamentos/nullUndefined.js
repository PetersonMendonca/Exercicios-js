let valor // não inicializada
console.log(valor) // Logo o valor será Undefined

valor = null // ausencia de valor
console.log(valor)
// console.log(valor.toString()) //  isso retornara um erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(produto.preco) 
console.log(!!produto.preco)
console.log(produto) 

produto.preco = null // Sem preço
console.log(produto.preco)
console.log(!!produto.preco)
console.log(produto)