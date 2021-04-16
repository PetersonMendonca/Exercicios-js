// Função em JS é First-Class Object (Citizens)
// Higher-order Function
// É quando trata a função com um dado

// Criar de forma literal
function fun1(){

}

// Armazenar em uma variavel
const fun2 = function (){

}

// Armazenar em um Array
const array = [function(){

}]

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar função como parametro
function run(fun){
    fun()
}

run(function() { console.log('Execultando...')})

// Um função pode retornar/conter uma função
function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)

// outra forma
const cincoMais = soma(2, 3)
cincoMais(4)
