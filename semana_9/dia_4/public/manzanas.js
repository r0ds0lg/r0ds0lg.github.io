let provider = new firebase.auth.GoogleAuthProvider();
let provider = new firebase.auth.GoogleAuthProvider()
let contenedor = document.querySelector('.contenedor')

let cambioDeUsuario = function(usuario) {
  console.log(usuario)
  if(usuario) {
    contenedor.classList.add('active')
  } else {
    contenedor.classList.remove('active')
  }
}

document.querySelector('.login').addEventListener('click', function() {
  firebase.auth().signInWithPopup(provider)
});

document.querySelector('.logout').addEventListener('click', function() {
  firebase.auth().signOut()
});

firebase.auth().onAuthStateChanged(cambioDeUsuario)

let database = firebase.database()
let mensajes = document.querySelector('.mensajes')

let agregarMensaje = function(respuesta) {
  let mensaje = respuesta.val()
  let template = `
    <div class="mensaje">
      <div>${mensaje.nombre}</div>
      <div>${mensaje.texto}</div>
    </div>
  `
  mensajes.innerHTML += template
  mensajes.scrollTop = 1000000; // No hagan esto en casa
}

database.ref('/mensajes/').limitToLast(5)
  .on('child_added', agregarMensaje)


let mensaje = document.querySelector('input')

mensaje.addEventListener('keyup', function(e) {
  if (e.key !== 'Enter') {
    return
  }

  let texto = mensaje.value
  mensaje.value = ''

  if(texto.length < 1) return alert('no escribiste nada!')

  database.ref('/mensajes/').push({
    texto: texto,
    nombre: firebase.auth().currentUser.displayName
  })
})