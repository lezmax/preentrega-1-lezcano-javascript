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

} else {
    alert("STOP - hasta aqui llego, ¡Game over!")
}

    alert("igual, te regalo y te cuento, algunas caracteristicas interesantes sobre el Colibri")
    alert("Saben cuanto mide un Colibri?... solamente su pico mide 2cm y su cuerpo alrededor de 17cm aprox.")
    function suma(num1, num2) {
        let res = num1 + num2;
        return res
    }
    let Resultado = suma(2, 17);
    alert(Resultado + " cm, en total, es lo que mide un colibri promedio.")


    alert("Mas datos sobre nuestro querido Colibri:")

    const colibri = {
        Significado: "Alegria-Sanacion-Adaptabilidad",
        color: "iridiscente - es decir cambia, de colores metálicos dependiendo desde que punto me mires",
        rapidez: "70 aleteos por segundo el movimiento de sus alas",
    };
    let Significado = colibri.Significado;
    console.log(Significado);

    let color = colibri.color;
    console.log(color);

    for (let key in colibri) {
        console.log(key,colibri[key]);
    }

    // ---guia ej.---

    // const numeros = [1, 2, 3, 4, 5];
    // const resultado = numeros.filter(numero => {
    //     if (numero %2 === 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });

    // console.log("resultado", resultado);

    const tipos = [
        {colibri:'rutilante', tamaño: 20},
        {colibri: 'pardo', tamaño: 11},
        {colibri: 'orejimorado', tamaño: 12},
        {colibri: 'verdemar', tamaño: 40}
    ];

    const grandes = tipos.filter(p => p.tamaño >= 15);
    console.log(grandes);

alert("FIN")