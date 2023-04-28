let colores = []
for (let index = 1; index <= 5; index++) {
    var color = prompt(ìngresar color nro (${index}))
    color = color.toLocaleLowerCase()
    if(!colores.includes(color))
    colores.push(color)
}
}

console.log(colores);