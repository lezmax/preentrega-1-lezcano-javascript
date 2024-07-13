alert("Bienvenido Usuario!, antes de ingresar al juego, necesitamos que completes algunos datos")

const nombre = prompt("ingrese su nombre");
console.log("su nombre es: " + nombre);
alert("Hola! " + nombre)

const edad = Number(prompt("ingrese su edad"));
if (edad > 18) {
    alert("Great! - puede continuar, COMENZAMOS!")

    const opcion = Number(prompt("¿Qué pájaro pone el huevo más pequeño?:\n1 - colibri\n2 - avestruz\n3 - aguila"))
    if (opcion === 1) {
        alert("LA RESPUESTA ES...")
    } else if (opcion === 2) {
        alert("LA RESPUESTA ES...")
    } else if (opcion === 3) {
        alert("LA RESPUESTA ES...")
    } else {
        alert("Opción incorrecta, FIN")
    }

    switch (opcion) {
        case 1:
            alert("- CORRECTA -")
            break;
        case 2:
            alert("INCORRECTA, Has perdido!")
            break;
        case 3:
            alert("INCORRECTA, Has perdido!")
            break;
        default:
            alert("Opción incorrecta, FIN")
            break;
    }

    // const opcion ("¿Los escorpiones pertenecen a la misma familia que…?:\n1 - los ratones\n2 - las lagartijas\n3 - las arañas")
    // if (opcion === 1) {
    //     alert("LA RESPUESTA ES...")
    // } else if (opcion === 2) {
    //     alert("LA RESPUESTA ES...")
    // } else if (opcion === 3) {
    //     alert("LA RESPUESTA ES...")
    // } else {
    //     alert("Opción incorrecta, FIN")
    // } 

    // switch (opcion) {
    //     case 1:
    //         alert("INCORRECTA, Has perdido!")
    //         break;
    //     case 2:
    //         alert("INCORRECTA, Has perdido!")
    //         break;
    //     case 3:
    //         alert("- CORRECTA -")
    //         break;
    //     default:
    //         alert("Opción incorrecta, FIN")
    //         break;
    // }

} else {
    alert("STOP - hasta aqui llego, ¡Game over!")
}

alert("FIN")