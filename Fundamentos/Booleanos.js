let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

/* Transformar um valor numerico em resultado boleano
 * Utilizando do ! que é uma negação, e !! volta o valor original
*/

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = 33))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN) // Not a Number - não e um numero
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra...finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = 'Peterson'
console.log(nome || 'Desconhecido')

