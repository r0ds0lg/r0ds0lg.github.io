/*
  Fetch te permite solicitar recursos por medio
  de la red, generalmente hacia otros servidores

  Se utiliza el protocolo HTTP

  A traves de una URL se obtendrá una respuesta

  la respuesta puede ser un objeto de javascript
  o puede ser texto plano
*/

// Fetch aplicado al API de rick and morty

// let respuesta = function(info) {
//   console.log(info)
// }

// let respuesta = function(res) {
//   console.log(res);
//   document.body.innerHTML +=
//     `
//       <div>
//         <img src="${res.results[0].image}">
//         <div>${res.results[0].name}</div>
//       </div>
//     `
// }



let respuesta = function(objeto) {
  document.body.innerHTML +=
  `
  <div> 
    <img src= "${objeto.results[9].image}">
    <dl>
    <dt><b>Character Name:</b> ${objeto.results[9].name}</dt>
      <dd><b>Status:</b> ${objeto.results[9].status}</dd>
      <dd><b>Species:</b> ${objeto.results[9].species}</dd>
      <dd><b>Gender:</b> ${objeto.results[9].gender}</dd>
      <dd><b>Origin:</b> ${objeto.results[9].origin.name}</dd>
    </dl>
    </hr>
    <img src= "${objeto.results[10].image}">
    <dl>
    <dt><b>Character Name:</b> ${objeto.results[10].name}</dt>
      <dd><b>Status:</b> ${objeto.results[10].status}</dd>
      <dd><b>Species:</b> ${objeto.results[10].species}</dd>
      <dd><b>Gender:</b> ${objeto.results[10].gender}</dd>
      <dd><b>Origin:</b> ${objeto.results[10].origin.name}</dd>
  </div>
  
  `
}

fetch("https://rickandmortyapi.com/api/character/")
  .then(response => response.json()) //indica que es un objeto de java Script (lo transforma)
  .then(respuesta) //indica una funcion el objeto convertido con toda la info que viene del servidor