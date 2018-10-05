/* para agregar un evento a un elemento se requiere primero usar
    .querySelector
    crear una funcion con la accion que se quiere que se realice al cumplirse 
    el evento
    
    Porteriormente utilizar la función:
    .addEventListener()
    */

    let miBoton = document.querySelector('button');

    function diHola () {
        window.alert('Hola');
    }

    miBoton.addEventListener('click', diHola);

  /* 
    Ejercicio 1
    Asignarle un evento al boton que pida un nombre por medio de un prompt, 
    una vez que lo ingrese el usuario mostrarlo con alert
    */  

    let dameClic = document.querySelector('button');

    function dameNombre () {
        let nombre = window.prompt ('Propociona un nombre');
        window.alert (nombre); 
    }

    dameClic.addEventListener('click', dameNombre);

    let input1 = document.querySelector('input[type=text]')


    //Escribiendo  la funcion dentro el listener
    miBoton.addEventListenerEventListener('click', function() {
        window.alert('hola');
    });

    // puede asinarse unicamente funciones anonimas a una variable

    let miFuncion = function () {
        window.alert()
    };

    /* 
        Ejercicio 2
        Hacer una aplicación que se usará para proteger una boveda,
        con un input pediran la clave al usuario y cuando el usuario
        presione un botón checará si la contraseña es correcta
    */

    let passBoveda = "blahblah2";
    
 