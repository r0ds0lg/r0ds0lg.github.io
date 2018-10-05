// Ejercicio para el día 3 Calculadora

// Utilizar css para darle una
// mejor presentación al html

// Generar funciones para las acciones
// de sumar, restar, multiplicar y dividir
// (Aún no se escribirá la funcionalidad)
function suma () {
   result.value=  parseFloat(numUno.value) + parseFloat(numDos.value);
}

function resta () {
    result.value = numUno.value - numDos.value;
}

function divide () {
    result.value = numUno.value / numDos.value;
}

function multiplica () {
    result.value = numUno.value * numDos.value;
}

function reset () {
    numUno.value = "  ";
    numDos.value = "  ";
    result.value = "  ";
}

// Generar variables que obtengan la
// referencia a los elementos de html
// (3 inputs y 4 botones)
let numUno = document.querySelector('.num1');
let numDos = document.querySelector('.num2');
let result = document.querySelector('.resultado');

 
//botones
let adicion = document.querySelector('.botonMas');
let sustrae = document.querySelector('.botonMenos');
let por = document.querySelector('.botonPor');
let entre = document.querySelector('.botonEntre');
let limpia = document.querySelector('.botonClear');


// Asignar eventos a los botones para que
// ejecuten las funciones correspondientes

adicion.addEventListener('click', suma);
sustrae.addEventListener('click', resta);
por.addEventListener('click', multiplica);
entre.addEventListener('click', divide);
limpia.addEventListener('click', reset)

// Escribir la funcionalidad de las 4
// posibles operaciones de la calculadora
function detectarEnter (e) {
    if (e.key === 'Enter'){
       suma() 
    }
}
numDos.addEventListener('keyup', detectarEnter)