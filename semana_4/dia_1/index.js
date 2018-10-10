let miEtiqueta = document.querySelector("h1");
miEtiqueta.innerText='Tu nombre es:';

//Nombre Dinámico
let nombreDinamico = document.querySelector("h2");
let nombre = window.prompt("Ingresa tu Nombre");
nombreDinamico.innerText = nombre;

let numH3 = document.querySelector('input[type="number"]');
numH3.focus()
function muestraDupliado () {
    let num = numH3.value;
    const muestraNum = document.querySelector("h3");
    return muestraNum.innerText = `${nombre} haz duplicado el No. ${num} \n tu resultado es = ${num*2}`;
}

function detectarEnter (e) {
    if (e.key === 'Enter'){
       muestraDupliado() 
    }
}


numH3.addEventListener('keyup', detectarEnter);

numH3.addEventListener('click', muestraDupliado);

