
let googleSearch = document.querySelector('.gSearch')


function busqueda () {
    let buscar = document.querySelector('.searchBx').value;
    console.log(buscar)
    window.location.href="https://www.google.com/search?q=" + buscar
}


function detectarEnter (e) {
    if (e.key === 'Enter'){
       busqueda() 
    }
}

googleSearch.addEventListener('click', busqueda);

let searching = document.querySelector('.searchBx');
searching.addEventListener('keyup', detectarEnter);
