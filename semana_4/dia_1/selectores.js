
let miEtiqueta = document.querySelector("h1")

/* hay dos formas de cambiar el contenido
una es utilizando .innerHTML
*/

// miEtiqueta.innnerHTML = "Me llamo" 
/*para hacerlo dinamico puedo aqui 
asignar window.prompt para que el usuario me de el nombre. Esto acepta 
todo HTML por eso no se utiliza mucho, pues no es seguro
es mas recomendable utilizar .innerText */

miEtiqueta.innerText = "Me llamo"

/*let nombreDinamico = document.querySelector("h2")
nombreDinamico.innerText = window.prompt("Ingresa tu Nombre")
*/

//La manera correcta de hacerlo es la siguiente (aunque la anterior funciona)

let nombreDinamico = document.querySelector("h2")
let nombre = window.prompt("Ingresa tu Nombre")
nombreDinamico.innerText = nombre

// let miCampo1 = document.querySelector('input[type="text"]')
// let miCampo2 = document.querySelector('input[type="password"]')
// let miCampo3 = document.querySelector('input[type="checkbox"]')

function usuario () {
    let usuario = document.querySelector('h2')
    let miCampo = document.querySelector('input[type="text"]')
    usuario.innerText = miCampo.value
}

// miCampo.value  //guarda lo que ingresó el usuario

function duplica () {
    let cambioH3 = document.querySelector('h3')
    let infoCampo = document.querySelector('input')
cambioH3.innerText = parseFloat((infoCampo.value)*2)
}


// document.getElementById('id')
// document.getElementsByClassName('clase')
// document.getElementsByTagName('elemento')

// ejercicio contador

function contador () {
    let valor = document.querySelector('h1')
    let numCampo = document.querySelector('input')
    let campo = valor.innerText = parseFloat((numCampo.value))
}



