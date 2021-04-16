function tratarErroELanca(erro){
    //throw new Error('Houve um erro e nosso suporte ja foi avisado')
    //throw 10
    //throw false
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    // toUpperCase converte todas as letras para maiusculo
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELanca(e)
    } finally { // finally sempre sera chamado
        console.log('Final')
    }
}

const obj = {name: 'Peterson'}
imprimirNomeGritado(obj)