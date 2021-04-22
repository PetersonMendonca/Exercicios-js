let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

// no navegador o GLOBAL é WINDOW | ja no VSCode GLOBAL é GLOBAL

const obj = {}
comparaComThis = comparaComThis.bind(obj) // associando ao obj com bind
comparaComThis(global)
comparaComThis(obj)

// Com arrowFunction
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// Function normal (){] - this aponta pro global
// Arrow Function => - this não aponta pro global 

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)