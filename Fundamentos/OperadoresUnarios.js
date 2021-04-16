let num1 = 1
let num2 = 2

num1++ // ira acrescentar +1 a varavel, pós fixada
console.log(num1)

--num1 // ira subtrair -1 da variavel, pré fixada - tera prioridade na interpretação
console.log(num1)

// nessa parte, retorna valor falso, pois ira acrecentar valor a num1 antes de comparar, e só ira subtrair após a comparação.
console.log(++num1 === num2--)