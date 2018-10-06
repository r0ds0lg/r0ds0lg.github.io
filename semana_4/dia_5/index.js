// Crear una app que te diga cual es tu
// indice de masa corporal

// Utilizar css para que se vea presentable

// Usar inputs para pedir los datos

// La formula es  peso(kg) / altura(m) ^ 2


//inputs
let peso = document.querySelector('.peso');
let altura = document.querySelector('.altura');
let result = document.querySelector('.calculo');

//Leyenda segun IMC
let leyenda = document.querySelector('.msn');

//botones
let calcular = document.querySelector('.send');
let limpiar = document.querySelector('.clear');


function masaCorporal () { 
    let calculo = parseFloat(peso.value) / parseFloat((altura.value ^ 2));
    calculo = calculo.toFixed(2);
    result.value = calculo;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    if (genero === 'femenino') {
        if (calculo === 10 && calculo <14 ) {
            document.getElementById('icon2').src="imagenes/green scale.png"
            leyenda.innerText="Grasa esencial";
        }
        if (calculo === 14 && calculo <21 ) {
            document.getElementById('icon2').src="imagenes/green scale.png"
            leyenda.innerText="Atleta";
        }
        if (calculo === 21 && calculo <25) {
            document.getElementById('icon2').src="imagenes/green scale.png"
            leyenda.innerText="En forma";
        }
        if (calculo === 25 && calculo <32) {
            document.getElementById('icon2').src="imagenes/yellow scale.png"
            leyenda.innerText="Sobrepeso";
        }
        if (calculo >=32) {
            document.getElementById('icon2').src="imagenes/red scale.png"
            leyenda.innerText="Obesidad";
        }
    } 
    else {
        if (genero === 'masculino') {
            if (calculo === 2 && calculo <6 ) {
                document.getElementById('icon2').src="imagenes/green scale.png"
                leyenda.innerText="Grasa esencial";
            }
            if (calculo === 6 && calculo <14 ) {
                document.getElementById('icon2').src="imagenes/green scale.png"
                leyenda.innerText="Atleta";
            }
            if (calculo === 14 && calculo <18) {
                document.getElementById('icon2').src="imagenes/green scale.png"
                leyenda.innerText="En forma";
            }
            if (calculo === 18 && calculo <26) {
                document.getElementById('icon2').src="imagenes/yellow scale.png"
                leyenda.innerText="Sobrepeso";
            }
            if (calculo >=26) {
                document.getElementById('icon2').src="imagenes/red scale.png"
                leyenda.innerText="Obesidad";
            }
        }
    }
}
 
 function detectarEnter (e) {
    if (e.key === 'Enter'){
       masaCorporal() 
    }
}
altura.addEventListener('keyup', detectarEnter);

calcular.addEventListener('click', masaCorporal);


 


 

 

