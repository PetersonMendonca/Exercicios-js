function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0 

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Esta aqui o numero escolhido ${opcao}`)
    // console.log('Esta aqui o numero escolhido ',opcao)
} while (opcao != -1)

console.log('FICAMOS POR AQUI')