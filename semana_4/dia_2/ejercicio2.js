/* 
        Ejercicio 2
        Hacer una aplicación que se usará para proteger una boveda,
        con un input pediran la clave al usuario y cuando el usuario
        presione un botón checará si la contraseña es correcta
    */

let input1 = document.querySelector('input[type="text"]');
let input2 = document.querySelector('input[type="password"]');
let input3 = document.querySelector('input.txt');
let dameClic = document.querySelector('button');
let usuario = input1.value;
let acceso = input3.value;



function estatus (){
    let contraseña = input2.value;
    let usuario = input1.value;
    let usuarioBoveda = "Admin1";
    let passBoveda = "1234";
    if (contraseña === passBoveda && usuario === usuarioBoveda) {
        input3.value = "Acceso concedido"
    } else if (contraseña !== passBoveda || usuario !== usuarioBoveda) {
        input3.value = "Acceso denegado"
        window.alert ('Vuelva a intentarlo')
    }         
}

dameClic.addEventListener('click', estatus);












