// Acceso al refrigerador
// Crear una funcion que valide
// si la contraseña es correcta
// utilizar negación y regresar
// mensaje de error si es
// incorrecta

// Con igualdad
function comparar(user, pass) {
    let user_bien = 'rob'
    if(user === user_bien && pass === 123) {
        console.log("Acceso concedido")
    } else {
        console.log("Acceso no permitido")
    }
}
comparar('no_es', '123') // No bien
comparar('rob', '123') // Bien

// Con negación
function comparar2(user, pass) {
    if(user !== 'rob' || pass !== '123') {
        console.log("Acceso no permitido")
    } else {
        console.log("Acceso concedido")
    }
}
comparar2('no_es', '123') // No bien
comparar2('rob', '123') // Bien

// Realizar la función Felicidad o Hambre
// Cuando tengo hambre estoy triste,
// Crear una función que reciba un
// parametro hambre y diga si estoy triste 
// o feliz
function felicidadOHambre(tengoHambre) {
    if(tengoHambre === true) {
        console.log("Estoy triste")
    } else {
        console.log("Estoy feliz")
    }
}

felicidadOHambre(true)
felicidadOHambre(false)

// Hacer una funcion que tome un arreglo de
// precios, los elementos seran numeros, 
// debe calcular el total
// Pista 1: arreglo.length
// Pista 2: utilizar for
// Pista 3: mantener el total en 
//          variable fuera del ciclo
function total(arreglo) {
    let suma = 0
    for(var i = 0; i < arreglo.length; i += 1) {
        suma = suma + arreglo[i]
    }
    return suma
}

total([1, 50, 22, 33, 11]) // 117
total([1, 50]) // 51