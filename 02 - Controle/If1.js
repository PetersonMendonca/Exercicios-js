function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado')
    } else if(nota >=5 && nota <=6){
        console.log('Esta de exame')
    } else {
        console.log('Reprovado')
    }
}

soBoaNoticia(7)
soBoaNoticia(6)
soBoaNoticia(3)

function seForVerdadeEuFalo(valor){
    if(valor){ // transforma variavel em boolean
        console.log('É Verdade... ' + valor)
    }
}

seForVerdadeEuFalo(true)
seForVerdadeEuFalo(false)
seForVerdadeEuFalo()