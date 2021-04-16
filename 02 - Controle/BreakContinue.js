const nums = [1,2,3,4,5,6,7,8,9,10]

for (let i in nums){ // saiu do laço quando chegou no valor 5
    if (i == 5){
        break
    }
    console.log(`${i} = ${nums[i]}`)
}

for (y in nums){
    if (y == 5){ // saiu do laço e voltou no proximo quando chegou no indice 5
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}


// EVITAR ESSA MANEIRA DE CODIGO - EXISTE MEIOS MELHORES
// externo é um rotulo, no caso para esse for
externo: 
for (a in nums){
    for (b in nums){
        if (a == 2 && b == 3) break externo // break rotulado
        console.log(`Par = ${a}, ${b}`)
    }
}

// OBS:  break e continue, funcionam em For, while, switch case