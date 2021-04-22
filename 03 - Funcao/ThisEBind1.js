const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e ORietado a Objetos (OO)

// bind amarra objeto para ele ser o dono da execução do metodo
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()