var provider = new firebase.auth.GoogleAuthProvider();
console.log("provider");

provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

  let logInBtn = document.querySelector(".logIn");
  let logOutBtn = document.querySelector(".logOut");


  function googleLogIn (){
    firebase.auth().signInWithPopup(provider)
    .then(logInCorrecto)
    .catch(loginErroneo);

  }
  
  logInBtn.addEventListener("click", googleLogIn);

  let cambioDeUsuario = function(usuario){
      let leyenda = document.querySelector('.cta');
      console.log(leyenda);
      let eMailUsuario = document.querySelector('.mail');

      if(usuario){
        leyenda.innerText = usuario.displayName;
        eMailUsuario.innerText = usuario.email;
        logInBtn.classList.add('hidden');
    //   } else if (usuario !==true) {
    //     leyenda.innerText ='Ha ocurrido un error al iniciar sesión';
    //     eMailUsuario.innerText = " ";
      } else {
        leyenda.innerText = " ";
        eMailUsuario.innerText = " ";
      }
    
      console.log('Ha ocurrido un cambio de usuario');
      console.log(usuario)
  }

  firebase.auth().onAuthStateChanged(cambioDeUsuario);

// function hideBtn (){

// }

  let logInCorrecto = function(resultado) {
      console.log('Login exitoso');
      console.log(resultado);
  }

  let loginErroneo = function(resultado) {
      console.log('Ha ocurrido un error al iniciar sesión');
  }

  let cerrarSesion = function() {
      firebase.auth().signOut();
      let leyenda = document.querySelector('.cta');
      leyenda.innerText = "Cierre de sesión exitoso";
      logInBtn.classList.remove('hidden');
  }

  logOutBtn.addEventListener("click", cerrarSesion);

let dataBase = firebase.database()
let incrementCont = 0;

let actualizarContador = function (valor) {
    dataBase.ref('/contador').set(valor);
}

let cambioContadorFb = function (respuesta) {
    valorDataBase = respuesta.val();
    cambioCont.innerText = valorDataBase;
}

let valorDataBase = 0;
let contadorBtn = document.querySelector('.contadorBtn');
let cambioCont = document.querySelector('.spanCont');


contadorBtn.addEventListener("click", function(){
    dataBase.ref('/contador').set(valorDataBase+1);
});
console.log(contadorBtn);

dataBase.ref('/contador').on('value', cambioContadorFb);

