
// Flow de authentication
let provider = new firebase.auth.GoogleAuthProvider()
let cambioDeUsuario = function(usuario) {
  // Si no hay usuario solicita login
  if(!usuario) {
    firebase.auth().signInWithPopup(provider)
  }
}
firebase.auth().onAuthStateChanged(cambioDeUsuario)


// Descarga de archivos de firebase storage
// https://firebase.google.com/docs/storage/web/download-files

// Subida de archivos de firebase storage
// https://firebase.google.com/docs/storage/web/upload-files


// Sacamos una referencia al storage
let storage = firebase.storage().ref()


// Creamos una funcion que cambie la imagen
// del elemento, el parametro es la url
let mostrar = function(url) {
  let imagen = document.querySelector('img')
  imagen.src = url 
}

// Esta función le solicitará a firebase
// el url de la imagen
let solicitarLink = function() {
  storage.child('/test.jpg')
  .getDownloadURL()
  .then(mostrar)
}

// Llamamos la función para que cargue la
// imagen cuando cargue la página
solicitarLink()


// Finalmente manejamos el input para subir
// la imagen que seleccionemos
let input = document.querySelector('input')
document.querySelector('.guardar').addEventListener('click', function() {
  if(input.files.length) {
    storage.child('test.jpg')
      .put(input.files[0])
      .then(solicitarLink)
  }
})