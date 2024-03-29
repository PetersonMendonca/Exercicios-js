const imprimirResultado = function(nota){
    switch (Math.floor(nota)){ // floor arredonda para baixo
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break // para finalizar apos ler o case 9
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota informada é invalida')
            break
    }
}

imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(7.5)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(6.5)
imprimirResultado(3)
imprimirResultado(2.5)
imprimirResultado('Batata')