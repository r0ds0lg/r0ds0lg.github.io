
let googleSearch = document.querySelector('.gSearch')


function busqueda () {
    let buscar = document.querySelector('.searchBx').value;
     if (campoEnBlancoInvalido(buscar) === true) {
     buscar = " "
    } else {
    window.location.href="https://www.google.com/search?q=" + buscar;
    }
}


function detectarEnter (e) {
    if (e.key === 'Enter'){
       busqueda() 
    }
}

googleSearch.addEventListener('click', busqueda);

let searching = document.querySelector('.searchBx');
searching.addEventListener('keyup', detectarEnter);

function campoEnBlancoInvalido (buscar) {
    if (buscar === "" || buscar.match(/^ +$/)) {
        return true;
    } else {
        return false;
    }
}