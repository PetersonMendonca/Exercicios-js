// Pergunta se é '1' é igual a 1
console.log('01)', '1' == 1) 
// Pergunta se '1' é exatamente igual a 1
console.log('02)', '1' === 1) 
 // Pergunta se '3' é diferente de 3
console.log('03)', '3' != 3)
// Pergunta se '3' é exatamente diferente de 3
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

// Date(0) data de referencia do javascript
const d1 = new Date(0) 
const d2 = new Date(0)
// Nesse caso não importa o == ou === pois ira comparar endereço de memoria.
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
// Nesse caso é verdadeiro pois estara pegando a desda data de ferencia (0) até a data de hoje em milisegundos, como são Numbers são exatamente iguais.
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)