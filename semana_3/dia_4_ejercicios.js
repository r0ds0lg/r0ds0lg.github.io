// Ejercicio de regaño
// Juan hizo travesuras en el salon y la maestra le
// pidio que escribiera todos los numeros desde num1 a num2

function escribir(num1, num2) {
    for(let i = num1; i <= num2; i += 1) {
        console.log(i)
    }
}

escribir(10, 20) // 10 11 12 13 14 15 16 17 18 19 20
escribir(2, 5) // 2 3 4 5
escribir(3, 9) // 3 4 5 6 7 8 9

// Parte 2, mismo ejercicio pero al revez
// Empiezas con el mayor e imprimes hacia el menor



// Ejercicio 3
// Escribe una función que tome un numeroMaximo,
// Imprime una secuencia de numeros que empiezan en 1
// y se duplican cada vez que se imprime, la secuencia
// la secuencia no se debe pasar de numeroMaximo
function hasta(numeroMaximo) {
  // Codigo
}

hasta(15)  // 1  2  4  8
hasta(30)  // 1  2  4  8  16
hasta(100) // 1  2  4  8  16 32 64
