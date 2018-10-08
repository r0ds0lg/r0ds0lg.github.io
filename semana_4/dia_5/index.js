// Crear una app que te diga cual es tu
// indice de masa corporal

// Utilizar css para que se vea presentable

// Usar inputs para pedir los datos

// La formula es  peso(kg) / altura(m) ^ 2

function procesarForm (e) {
    e.preventDefault();
    const peso = +document.querySelector('.peso').value;
    const altura = +document.querySelector('.altura').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    if (camposSonInvalidos(peso, altura)) {
       ocultarContenedorEvaluacion()
       borraImc ()
        
        return false;
    }
    const imc = calculoImc(peso, altura);
    escribeImc(imc);
    muestraEvaluacionIMC (imc, genero)
}

function ocultarContenedorEvaluacion () {
    document.querySelector('.imsn').classList.remove('visible');
}
 
function borraImc () {
    document.querySelector('.resultado-imc').innerText = '';
}

function camposSonInvalidos (peso, altura) {
    if (peso <= 0 || isNaN(peso) || altura <=0 || isNaN(altura)) {
        return true;
    }else{
        return false;
    }
}

//función para calcular IMC
function calculoImc (peso, altura) { 
    return ( peso / Math.pow(altura, 2) ).toFixed(2);
}


// función para escrbir el IMC en h2
function escribeImc (texto) {
    document.querySelector('.resultado-imc').innerText = `${texto}% IMC`;
}

//funcion rangos
function rangosPorGenero (genero) {
    const rangos = {
        femenino: {
            esencial: 14,
            atleta: 21,
            forma: 25,
            sobrepeso: 32
        },
        masculino: {
            esencial: 6,
            atleta: 14,
            forma: 18,
            sobrepeso: 26
        }
    }
    //Ternary Operator
    return genero === 'femenino' ? rangos.femenino : rangos.masculino;
}

function obtenerCategoria(imc, genero) {
    const rangoMin = genero === 'femenino' ? 10 : 2;

//cambiar mensaje según el rango al que corresponda el IMC
    let rangoMax = rangosPorGenero(genero);

    if (imc < rangoMin) {
        return 'desconocido'
    } else if (imc < rangoMax.esencial) {
        return 'esencial';
    } else if (imc < rangoMax.atleta) {
        return 'atleta';
    } else if (imc < rangoMax.forma) {
        return 'forma';
    } else if (imc < rangoMax.sobrepeso) {
        return 'sobrepeso';
    } else {
        return 'obesidad';
    }
}

function obtenerValoresDeEvaluacion (categoria) {
    const cambios = {
        esencial: {img: 'imagenes/yellow-scale.png', leyenda: 'Grasa esencial 👌🏽'},
        atleta: {img:'imagenes/green-scale.png', leyenda: 'Atleta 🏆'},
        forma: {img:'imagenes/green-scale.png', leyenda: 'En forma 😎'},
        sobrepeso: {img:'imagenes/aceptable-img.jpg', leyenda: 'Aceptable 🧐'},
        obesidad: {img:'imagenes/red-scale.png', leyenda: 'Obesidad 🐷'}
    }
    return cambios[categoria];
}

function muestraEvaluacionIMC (imc, genero) {
    const categoria = obtenerCategoria (imc, genero); 
    const valores = obtenerValoresDeEvaluacion (categoria);
    const contenedorEvaluacion = document.querySelector('.imsn');
    if (valores) {
        contenedorEvaluacion.querySelector('img').src = valores.img;
        contenedorEvaluacion.querySelector('p').innerText = valores.leyenda;
        contenedorEvaluacion.classList.add('visible'); 
    } else {
        contenedorEvaluacion.classList.remove('visible');
    }
}
//DRY Don't repeat yourself 
function limpiarForm (event) {
    event.preventDefault();
    document.querySelector('.peso').value = '';
    document.querySelector('.altura').value = '';
    ocultarContenedorEvaluacion ();
    borraImc();
}


document.querySelector('form').addEventListener('submit', procesarForm);
document.querySelector('.clear').addEventListener('click', limpiarForm);