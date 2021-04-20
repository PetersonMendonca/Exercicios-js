function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return console.log(`Valor permitido: ${area}m2`)
    }
}

area(5, 1)
area(50, 10)


