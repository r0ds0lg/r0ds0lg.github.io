// Más operadores aritmeticos
5 * 2   // Multiplicación, resultado: 10
8 / 4   // División, resultado: 2
10 % 3  // Operador modulo, regresa el sobrante de una división, resultado: 1
2 ** 3  // Exponente, 2 elevado a la 3, resultado: 8

let condicion = true
// Continuación de condicionales
if(condicion) {
    // Ejecuta este bloque si se cumple la condicion
} else {
    // Ejecuta esta bloque si NO se cumple la condicion
}

// Operadores de comparación
// >  <  ==  ===

// Expresiones que se evaluan en verdadero o falso
condicion = 5 < 3 // condicion tendría false

// Funciones
// Declaración clasica
function miFuncion(argument) {
    // Código que se ejecuta cuando se llama la función.
    return argument * 2 // return termina la función y regresa un valor
}

let resultado = miFuncion(5) // 10

// Arreglos
let arreglo = [5, 6, 7]

console.log(arreglo[0]) // Imprime 5
console.log(arreglo[2]) // Imprime 7

// Sumar 2 elementos de un arreglo
let calculoArreglos = arreglo[0] + arreglo[2] // 12