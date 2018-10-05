// Crear una historia
// Hacer una función que imprima una historia
// que contenga a un personaje, dentro del parametro
// de la función recibirás el nombre del personaje

function decirHistoria(personaje)
{
    let historia =  `
    Un perro llevaba en la boca un trozo de carne, cuando se
    disponía a pasar un rio, el perro vio reflejada la sombra 
    del trozo de carne que llevaba en el hocico, viendo que la 
    carne que se veía en el agua era más grande y jugosa que el 
    que llevaba consigo.

    El perro se quedó quieto un rato mirando fijamente la imagen, 
    hasta que abrió la boca para agarrarlo; al hacer esto, el trozo 
    de carne que llevaba se le cayó al agua, quedándose el pobre
    perro sin ambos.
    `

    historia = historia.replace(/perro/g, personaje)
    console.log(historia)
}

decirHistoria("gato")
decirHistoria("pato")


// Con el siguiente objeto imprime la direccion en el
// formato que regularmente usan las paqueterías (ver ejemplo)
let direccionx = {
    calle: "Av. Ignacio L. Vallarta",
    numero: 3300,
    ciudad: "Guadalajara",
    estado: "Jalisco",
    pais: "México"
}

// Av. Ignacio L. Vallarta #3300
// Guadalajara, Jalisco, México

// Respuesta
// ...
// template string / template literal
function imprimirDireccion(direccion) {
    console.log(`
    ${direccion.calle} #${direccion.numero}
    ${direccion.ciudad}, ${direccion.estado}, ${direccion.pais}
    `)
}

imprimirDireccion(direccionx)