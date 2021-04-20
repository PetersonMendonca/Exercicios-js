function soma(){
    let soma = 0
    // arguments é array interno de padrao vem vazio
    for (let i in arguments){ 
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 3.3, 'teste'))
console.log(soma(1.1, 2.2, 'teste'))