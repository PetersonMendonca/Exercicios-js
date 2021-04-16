const escola = "Cod3r"

console.log(escola.charAt(4)) // charAt() retorna o caracter da posição determinada 
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // retorna o valor do caracter na tabela ASCI
console.log(escola.indexOf(3)) // Retorna o valor do indice do caracter

console.log(escola.substring(1)) // do indice 1 até o final
console.log(escola.substring(0, 3)) // do indice 0 ate 3 sem mostrar o indice 3

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e')) // imprimir 'e' no local que houver digito 3

console.log('Ana,Maria,Pedro'.split(',')) // ira criar um array utilizando a ',' como separador
