// Modals

// Variable global dentro del exploradores
window

// Alert
// window.alert("esta es una alerta")

// Confirm (alerta con respuesta si o no)
if(window.confirm("Seguro")) {
    window.alert("Si")
} else {
    window.alert("No")
}

/* Ejercicio1 
    Declarar 2 variable con numeros.
    Preguntar con un confirm si desea sumar,
    En caso de si, mosrar la suma de los 2 con alert, en caso de no , mostrar la resta
*/

let a = 70
let b = 20
if (window.confirm ("¿Desea sumar las cantidades?")) {
        window.alert (a + b)
} else {
    window.alert(a - b)
}

// Prompt (solo regresa la informacion que proporciona el usuario)
// debe de guardarse el valor en una variable para que no quede volando el dato
// todo lo que se teclea en un prompt se considera texto
let nombre = window.prompt("Ingresa tu nombre")
window.alert(`Mi nombre es ${nombre}"`)

// Convertir texto a numero

// parseFloat ("6.4")  convierte a  numero con decimales
//  parseInt ("6.2") convierte a numero entero, en este caso a 6

/* Ejercicio 2
    Pedir dos valores con prompt y mostrar con alert la suma de los 2
*/

let numero1 = window.prompt("Ingresa el primer numero");
let numero2 = window.prompt("Ingresa el segundo numero");
let num1 = parseFloat(numero1);
let num2 = parseFloat(numero2);
let suma = num1 + num2 
window.alert(`La suma da un total de ${suma}`)

/* otras formas de resolverlo

let numero1 = window.prompt("Ingresa el primer numero");
let numero2 = window.prompt("Ingresa el segundo numero");
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
let suma = numero1 + numero2 
window.alert(`La suma da un total de ${suma}`)

OTRA forma mas
*/

let numero1 = parseFloat(window.prompt("Ingresa el primer numero"));
let numero2 = parseFloat(window.prompt("Ingresa el segundo numero"));
let suma = numero1 + numero2 
window.alert(`La suma da un total de ${suma}`)


//  Ejercicio 3
/* Comiste en un restaurant y el mesero te trae la terminal
    para que pagues, debes ingresar cuánto pagarás, una vez ingresado te
    pregunta si deseas agregar propina, imprime el total que te cobraron
    a tu tarjeta
*/

let cta = parseFloat (window.prompt ("Ingrese cantidad a pagar"));
    if(window.confirm("¿Desea agregar propina?")) {
    window.alert("Gracias")
let propina =  parseFloat (window.prompt("Ingrese el porcentaje de propina"))
cta = cta + cta*propina/100
    window.alert (cta)
    } else {
    window.alert("Gracias")
    window.alert(cta)
    }
     