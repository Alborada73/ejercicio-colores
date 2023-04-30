var colores = []
var listado = document.querySelector("#listado-colores tbody")
for (let index = 1; index <= 5; index++) {
    do {
        var color = prompt(`ìngresar color Nro (${index})`)
        color = color.toLowerCase()

        var agregar = !colores.includes(color)
        if(agregar) {
            colores.push(color)        
        } else {
            alert ("Hubo un error registrando el color. Intente nuevamente")
        }
    } while (!agregar); 
}

mostrarColores();

function mostrarColores() {
    listado.innerHTML = ""
    colores.forEach(color, index) => {
        listado.innerHTML += `
            <tr>
                <td>${color}</td>
                <td style="background: ${color}"></td>
                <td><button type="button" class="btn btn-sm btn-danger" onClick="eliminar(${index})">Eliminar</button></td>
            </tr> 
            `
      
    })
}

function eliminar(indice) {
    if(confirm(`¿Seguro que desea eliminar el color ${colores[indice]}?`)){
        var eliminado = colores.splice(indice, 1)
        alert(`Usted ha eliminado el color ${eliminado[0]}`)
        mostrarColores()

    }


}

