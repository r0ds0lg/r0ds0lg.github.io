
//Botón de inicio 
function iniciarJuego(){
  toggleBtnJuega();
  document.getElementById('ventanas').classList.add('activo');
  agregarEventosPlayer ()
}

function toggleBtnJuega(){
  document.querySelector('.botonJugar').classList.toggle('hidden');
}

document.querySelector('.botonJugar').addEventListener('click', iniciarJuego)



// REFERENCIAS html document

//botones ataques jugador 1
let btnPiedra = document.querySelector('#rock');
let btnPapel = document.querySelector('#paper');
let btnTijera = document.querySelector('#scissors');

//botones ataques jugador 2
let btnPiedraOp = document.querySelector('#rockOp');
let btnPapelOp = document.querySelector('#paperOp');
let btnTijeraOp = document.querySelector('#scissorsOp');

//Funcion que arroja el ID del elemento al que se le dio click
function jugar(e) {
  let opcionjugador = e.target.getAttribute('id') + "Op";
  btnPiedra.classList.remove('selecIz');
  btnPapel.classList.remove('selecIz');
  btnTijera.classList.remove('selecIz');
  btnPiedraOp.classList.remove('selecDer');
  btnPapelOp.classList.remove('selecDer');
  btnTijeraOp.classList.remove('selecDer');
  e.target.classList.add('selecIz');

//Random:
  let ataques = [btnPiedraOp, btnPapelOp, btnTijeraOp]
  let iAtaques = Math.floor(Math.random() * ataques.length);
  let opcionAzar = ataques[iAtaques];
  opcionAzar.classList.add('selecDer');
  let cpu = opcionAzar.getAttribute('id')

  //arreglo leyenda estatus de la partida
  const leyendaResultado = ['Ganaste', 'Empate', 'Perdiste'];
  console.log(opcionjugador, cpu);

  if (opcionjugador === cpu) {
    document.querySelector('h1').innerText = leyendaResultado[1];
  } else if ((opcionjugador === 'rockOp' && cpu === 'scissorsOp') || (opcionjugador === 'scissorsOp' && cpu=== 'paperOp')|| (opcionjugador === 'paperOp' && cpu === 'rockOp')) {
    document.querySelector('h1').innerText = leyendaResultado[0];
    incrementarContadorPlayer1()
  } else {
    document.querySelector('h1').innerText = leyendaResultado[2];
    incrementarContadorOponente() 
  }  
}


//arreglo leyenda Fin Partida
let finPartida = ['Ganaste partida', 'Perdiste partida'];

//variables Score que aparecen en el contador
let score1 = 0;
let score2 = 0;


//funciones incremento Contador
function incrementarContadorPlayer1(){
  //contador SCORE
  score1 += 1;
  document.querySelector('.score1').innerText= score1;
  if (score1 === 3) {
  document.querySelector('h1').innerText= finPartida[0];
  quitarEventosJugador ();
  quitarEventosOponente ();
  resetContador ();
  jugadorFantasta.classList.add('ganador');
  jugadorMuerte.classList.add('perdedor');
  }
}

function incrementarContadorOponente(){
  //contador SCORE
  score2 += 1;
  document.querySelector('.score2').innerText= score2;
  if (score2 === 3) {
  document.querySelector('h1').innerText= finPartida[1];
  quitarEventosJugador ();
  quitarEventosOponente ();
  resetContador ();
  jugadorMuerte.classList.add('ganador');
  jugadorFantasta.classList.add('perdedor');
  }
}

function resetContador () {
  document.querySelector('.score1').innerText= 0;
  document.querySelector('.score2').innerText= 0;
}

 //AGREGAR event Listener click en botones JUGADOR
function agregarEventosPlayer () {
  btnPiedra.addEventListener('click', jugar);
  btnPapel.addEventListener('click', jugar);
  btnTijera.addEventListener('click', jugar);
}

//AGREGAR event Listener click en botones JUGADOR
function agregarEventosOponente () {
  btnPiedraOp.addEventListener('click', jugar);
  btnPapelOp.addEventListener('click', jugar);
  btnTijeraOp.addEventListener('click', jugar);
}

  //ELIMINAR event Listener click en botones JUGADOR
function quitarEventosJugador () {
  btnPiedra.removeEventListener('click', jugar);
  btnPapel.removeEventListener('click', jugar);
  btnTijera.removeEventListener('click', jugar);
}

 //ELIMINAR event Listener click en botones OPONENTE
function quitarEventosOponente () {
  btnPiedraOp.removeEventListener('click', jugar);
  btnPapelOp.removeEventListener('click', jugar);
  btnTijeraOp.removeEventListener('click', jugar);
}



//variable referente al boton de 2 jugadores
let oponente = document.querySelector('#boton2');

//variable referente al boton de 1 jugador
let unJugador = document.querySelector('#boton1');

//Funciones referentes a cambio de clase en botones de numero de Jugadores
function cambioBtnUnJugador (){
  unJugador.classList.add('active')
  oponente.classList.remove('active');
  oponente.classList.add('inactive'); 
  //si el boton uno es selccionado entonces deshabilitar click en los botones del oponente
  quitarEventosOponente ()
}

function cambioBtn2Jugadores (){
  oponente.classList.add('active');
  unJugador.classList.remove('active');
  unJugador.classList.add('inactive'); 
}

document.querySelector('#boton1').addEventListener('click', cambioBtnUnJugador);
document.querySelector('#boton2').addEventListener('click', cambioBtn2Jugadores);

//Personajes
let jugadorFantasta = document.querySelector('.player1')
let jugadorMuerte = document.querySelector('.player2');


//APUNTES:

//Obtener id segun click ataque JUGADOR1
// btnPiedra.addEventListener('click', jugar);
// btnPapel.addEventListener('click', jugar);
// btnTijera.addEventListener('click', jugar);

/*Obtener id segun click ataque OPONENTE
// btnPiedraOp.addEventListener('click', jugar);
// btnPapelOp.addEventListener('click', jugar);
// btnTijeraOp.addEventListener('click', jugar);



//arreglo ataques y opciones al azar
// let ataques = [btnPiedraOp, btnPapelOp, btnTijeraOp]
// let iAtaques = Math.floor(Math.random() * ataques.length);
// let opcionAzar = ataques[iAtaques];

//Arreglo resultado Match
// let leyendaResultado = ['Ganaste', 'Empate', 'Perdiste']; */





