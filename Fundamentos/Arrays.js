const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // por não ter valor retora 'undefined'

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)
console.log(valores.length)

console.log(valores.pop()) // função para retirar ultimo valor do array
console.log(valores)

delete valores[0] // excluir valores d array
console.log(valores)

console.log(typeof valores)