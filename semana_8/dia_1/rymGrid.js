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


let btnNext= document.querySelector('#nextBtn');
let btnBack= document.querySelector('#backBtn');

btnNext.addEventListener('click', goThroughPages);
btnBack.addEventListener('click', goThroughPages);

let category = {
    chStatus: ['alive', 'dead', 'unknownStat'],
    species: ['alien', 'animal', 'cronenberg', 'disease', 'human', 'humanoid', 'mytholog', 'parasite', 'poopybutthole', 'robot', 'unknownSpecie', 'vampire'],
    gender: ['male', 'female', 'unknownGen']
}

let catSelected = document.querySelector('.filter');

function filter() {
    //All
    if (catSelected.value === "all"){
        document.querySelector('.contengoCards').innerHTML =
        ` `
        fetch("https://rickandmortyapi.com/api/character/")
        .then(response => response.json())
        .then(respuesta)
    }
    // Filter by species
    else if(category.species.indexOf(catSelected.value) !== -1){
        if (catSelected.value === "unknownSpecie") {

        document.querySelector('.contengoCards').innerHTML =
        ` `
        fetch("https://rickandmortyapi.com/api/character/?species=unknown")
        .then(response => response.json())
        .then(respuesta)
        }
    document.querySelector('.contengoCards').innerHTML =
    ` `
    fetch(`https://rickandmortyapi.com/api/character/?species=${catSelected.value}`)
    .then(response => response.json())
    .then(respuesta)
    }
    // Filter by gender
    else if(category.gender.indexOf(catSelected.value) !== -1) {
        if (catSelected.value === "unknownGen") {

        document.querySelector('.contengoCards').innerHTML =
        ` `
        fetch("https://rickandmortyapi.com/api/character/?gender=unknown")
        .then(response => response.json())
        .then(respuesta)
        } 

        document.querySelector('.contengoCards').innerHTML =
        ` `
        fetch(`https://rickandmortyapi.com/api/character/?gender=${catSelected.value}`)
        .then(response => response.json())
        .then(respuesta)
    }
    // Filter by status
    else if(category.chStatus.indexOf(catSelected.value) !== -1) {
        if (catSelected.value === "unknownStat") {
            document.querySelector('.contengoCards').innerHTML =
            ` `
            fetch("https://rickandmortyapi.com/api/character/?status=unknown")
            .then(response => response.json())
            .then(respuesta)
        }
        document.querySelector('.contengoCards').innerHTML =
        ` `
        fetch(`https://rickandmortyapi.com/api/character/?status=${catSelected.value}`)
        .then(response => response.json())
        .then(respuesta)
    }  
}
catSelected.addEventListener('input', filter)

