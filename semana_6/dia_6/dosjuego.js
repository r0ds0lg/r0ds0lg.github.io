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
  
  
  
function eliminaClaseSelecIZ () {
    btnPiedra.classList.remove('selecIz');
    btnPapel.classList.remove('selecIz');
    btnTijera.classList.remove('selecIz');
  }
  
function eliminaClaseSelecDer () {
    btnPiedraOp.classList.remove('selecDer');
    btnPapelOp.classList.remove('selecDer');
    btnTijeraOp.classList.remove('selecDer');
  }


const ataquesJ = [btnPiedra, btnPapel, btnTijera];
const ataquesO = [btnPiedraOp, btnPapel, btnTijera];

function seleccionJugadorUno (e1, e2) {
    let opcionJugador = e1.target.getAttribute('id');
    if (opcionJugador === ataquesJ[0] || opcionJugador === ataquesJ[1] || opcionJugador === ataquesJ[1]) {
    console.log(opcionJugador);
    eliminaClaseSelecIZ ();
    eliminaClaseSelecDer ();
    e1.target.classList.add('selecIz');
    }

    let opcionOponente = e2.target.getAttribute('id');
    if (opcionOponente === ataquesO[0] || opcionOponente === ataquesO[1] || opcionOponente=== ataquesO[1]) {
    console.log(opcionOponente);
    eliminaClaseSelecIZ ();
    eliminaClaseSelecDer ();
    e.target.classList.add('selecDer');
    } 
    return opcionJugador, opcionOponente;
}



//Funcion que arroja el ID del elemento al que se le dio click
function jueganDos() {
  if (oponente.classList.contains('active')) {
     
    console.log(opcionJugador,opcionOponente);
    }
 }
     
  
// //arreglo leyenda estatus de la partida
//   const leyendaResultado = ['Ganaste', 'Empate', 'Perdiste'];
//   console.log(opcionJugador, opcionOponente);

// //descifrar ganador  
//   if (opcionJugador === opcionOponente) {
//     document.querySelector('h1').innerText = leyendaResultado[1];
//   } else if ((opcionJugador === 'rockOp' && opcionOponente === 'scissorsOp') || (opcionjugador === 'scissorsOp' && opcionOponente=== 'paperOp')|| (opcionjugador === 'paperOp' && opcionOponente === 'rockOp')) {
//     document.querySelector('h1').innerText = leyendaResultado[0];
//     incrementarContadorPlayer1()
//   } else {
//     document.querySelector('h1').innerText = leyendaResultado[2];
//     incrementarContadorOponente() 
//   } 
  

  
  
  //arreglo leyenda Fin Partida
  let finPartida = ['¡Ganaste partida!', 'Perdiste partida'];
  
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
    setTimeout(resetContador, 1250);
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
    setTimeout(resetContador, 1250);
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
    btnPiedra.addEventListener('click', jueganDos);
    btnPapel.addEventListener('click', jueganDos);
    btnTijera.addEventListener('click', jueganDos);
  }
  
//AGREGAR event Listener click en botones JUGADOR
function agregarEventosOponente () {
    btnPiedraOp.addEventListener('click', jueganDos);
    btnPapelOp.addEventListener('click', jueganDos);
    btnTijeraOp.addEventListener('click', jueganDos);
  }
  
//ELIMINAR event Listener click en botones JUGADOR
  function quitarEventosJugador () {
    btnPiedra.removeEventListener('click', jueganDos);
    btnPapel.removeEventListener('click', jueganDos);
    btnTijera.removeEventListener('click', jueganDos);
  }
  
//ELIMINAR event Listener click en botones OPONENTE
function quitarEventosOponente () {
    btnPiedraOp.removeEventListener('click', jueganDos);
    btnPapelOp.removeEventListener('click', jueganDos);
    btnTijeraOp.removeEventListener('click', jueganDos);
  }
  
  //variable referente al boton de 2 jugadores
  let oponente = document.querySelector('#boton2');
  
  //variable referente al boton de 1 jugador
  let unJugador = document.querySelector('#boton1');
  
  
  function cambioBtn2Jugadores (){
    oponente.classList.add('active');
    unJugador.classList.remove('active');
    unJugador.classList.add('inactive');
    unJugador.removeEventListener('clic', jueganDos)   
  }
  
  document.querySelector('#boton2').addEventListener('click', cambioBtn2Jugadores);
  
  //Personajes
  let jugadorFantasta = document.querySelector('.player1')
  let jugadorMuerte = document.querySelector('.player2');
  