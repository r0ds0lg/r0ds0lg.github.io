/* 
Ejercicio3
Modificar el ejercicio anterior para que tenga un numero de intentos
debe decir acceso denegado aún cuando la contrseña esté correcta.
y debe haber un contador externo mostrando el numero de intentos
*/

let input1 = document.querySelector('input[type="text"]');
let input2 = document.querySelector('input[type="password"]');
let input3 = document.querySelector('input.txt');
let dameClic = document.querySelector('button');
let acceso = input3.value;
let nIntentos = 3;



function estatus (){
    let contraseña = input2.value;
    let usuario = input1.value;
    let usuarioBoveda = "Admin1";
    let passBoveda = "1234";
    if ((contraseña === passBoveda && usuario === usuarioBoveda) && nIntentos > 0) {
            input3.value = "Acceso concedido";
    } else if (contraseña !== passBoveda || usuario !== usuarioBoveda) {
        if (nIntentos === 0) {
            window.alert ("Intentos agotados");
        } else {
            nIntentos = nIntentos -1;
            input3.value = "Acceso denegado";
            window.alert ("Intento de acceso denegado, quedan " + nIntentos + " intentos.");
        }
        if (nIntentos === 0 && (contraseña !== passBoveda || usuario !== usuarioBoveda)) {
            input3.value = ("Cuenta bloqueada")
            window.alert ("Por seguridad su cuenta ha sido bloqueada temporalmente")
        }
    }         
}

dameClic.addEventListener('click', estatus);



