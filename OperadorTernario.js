/*  
* ira efetuar a comparação de nota >= 7
* usando o caracter de ? ira falar quis ações tomar
* depois ira retornar para se verdadeiro 'Aprovado'
* usando do : para apontar para a outra condição 
* caso seja falso retornara 'Reprofado'
*/
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log('Você esta', resultado(7.8))
console.log('Você esta', resultado(5.8))