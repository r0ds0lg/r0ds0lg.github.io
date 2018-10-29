let next = null;
let prev = null;

let respuesta = function(objeto) {
    next = objeto.info.next;
    prev = objeto.info.prev;
    for(l=0; l<20; l++){
  document.querySelector('.contengoCards').innerHTML +=
  
  `
  <div class="card">
  <div class="contengoNumyNam">
      <div class="numeroId">${objeto.results[l].id}</div>
      <div class="name">${objeto.results[l].name}</div>
  </div>
  <div class="imageCard">
      <img class="imageCard" src="${objeto.results[l].image}">
  </div>
      <div class="contengoInfo">
      <div class="specie">Specie: ${objeto.results[l].species}</div>
      <div class="gender">Gender: ${objeto.results[l].gender}</div>
      <div class="origin">Origin: ${objeto.results[l].origin.name}</div>
  </div>
  `
    }
    console.log(objeto)
}

fetch("https://rickandmortyapi.com/api/character/")
  .then(response => response.json()) //indica que es un objeto de java Script (lo transforma)
  .then(respuesta) //indica una funcion el objeto convertido con toda la info que viene del servidor


function goThroughPages (e){
    document.querySelector('.contengoCards').innerHTML =
    ` `
    let arrowClicked = e.target.getAttribute('id'); 
    if (arrowClicked === 'nextBtn') {
        fetch(next)
        .then(response => response.json())
        .then(respuesta)
    } else if (arrowClicked === 'backBtn') {
        fetch(prev)
        .then(response => response.json())
        .then(respuesta)
    }
    
}

let select = document.querySelector('.Filter');
console.log("filtro " + select.value)
function filter(){
    if (select.value === "all"){
        document.querySelector('.contengoCards').innerHTML =
        ` `
        fetch("https://rickandmortyapi.com/api/character/")
        .then(response => response.json())
        .then(respuesta)
    }
    else if(select.value === "name"){
        document.querySelector('.contengoCards').innerHTML =
        ` `
        fetch(`https://rickandmortyapi.com/api/character/?name=a`)
        .then(response => response.json())
        .then(respuesta)
    }
    else if (select.value === "alien" || "human" || "humanoid" || "unknown" || "poopybutthole" || "mytholog" 
    || "animal" || "vampire" || "robot" || "cronenberg" || "disease" || "parasite"){
        document.querySelector('.contengoCards').innerHTML =
        ` `
        fetch(`https://rickandmortyapi.com/api/character/?species=${select.value}`)
        .then(response => response.json())
        .then(respuesta)
    }
    else if(select.value === "male" || "female" || "unknown"){
        document.querySelector('.contengoCards').innerHTML =
        ` `
        fetch(`https://rickandmortyapi.com/api/character/?gender=${select.value}`)
        .then(response => response.json())
        .then(respuesta)
    }
       
}
select.addEventListener('input', filter)


let btnNext= document.querySelector('#nextBtn');
let btnBack= document.querySelector('#backBtn');

btnNext.addEventListener('click', goThroughPages);
btnBack.addEventListener('click', goThroughPages);


  // let respuesta = function(objeto) {
  //   document.body.innerHTML +=
  //   `
  //   <div> 
  //     <img class="imageCard" src= "${objeto.results[9].image}">
  //     <dl>
  //     <dt><b>Character Name:</b> ${objeto.results[9].name}</dt>
  //       <dd><b>Status:</b> ${objeto.results[9].status}</dd>
  //       <dd><b>Species:</b> ${objeto.results[9].species}</dd>
  //       <dd><b>Gender:</b> ${objeto.results[9].gender}</dd>
  //       <dd><b>Origin:</b> ${objeto.results[9].origin.name}</dd>
  //     </dl>
  //     </hr>
  //     <img src= "${objeto.results[10].image}">
  //     <dl>
  //     <dt><b>Character Name:</b> ${objeto.results[10].name}</dt>
  //       <dd><b>Status:</b> ${objeto.results[10].status}</dd>
  //       <dd><b>Species:</b> ${objeto.results[10].species}</dd>
  //       <dd><b>Gender:</b> ${objeto.results[10].gender}</dd>
  //       <dd><b>Origin:</b> ${objeto.results[10].origin.name}</dd>
  //   </div>
    
  //   `
  // }