// Função sem retorno em javascript
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2) // ira retornar NaN
imprimirSoma(2, 3, 4, 5)

// Função com Retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
