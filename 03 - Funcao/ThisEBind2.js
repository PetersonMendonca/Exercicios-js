function Pessoa(){
    this.idade = 0

    const self = this
    // dispara uma função em um determinado intervalo
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // tempo passado em milesegundos
}

new Pessoa