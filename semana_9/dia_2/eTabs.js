//Referencias
let tabs = document.querySelectorAll('.menu');
console.log(tabs)
let i = 0;
let contenido = document.querySelectorAll('.content');
console.log(contenido)


for(i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', addActive);
}

function addActive (e) {
    removeClassMenu ();
    e.currentTarget.classList.add('activeMenu');
    // let tabSelec = e.target.getAttribute('class');
    // console.log(tabSelec);

    if (e.target.classList.contains('tab2')){
        removeClassInfo()
        contenido[1].classList.add('activeCont');
    } 
    else if (e.target.classList.contains('tab3')) {
        removeClassInfo()
        contenido[2].classList.add('activeCont'); 
    }
    else if (e.target.classList.contains('tab4')) {
        removeClassInfo()
        contenido[3].classList.add('activeCont'); 
    }
    else if (e.target.classList.contains('tab1')) {
        removeClassInfo()
        contenido[0].classList.add('activeCont'); 
    }
}

function removeClassInfo () {
    for (let i = 0; i < contenido.length; i++) {
        contenido[i].classList.remove('activeCont');
     }
}

function removeClassMenu () {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('activeMenu');
     }
}


// document.querySelector('.info1').classList.remove('activeCont');
// document.querySelector('.info2').classList.remove('activeCont');
// document.querySelector('.info3').classList.remove('activeCont');
// document.querySelector('.info4').classList.remove('activeCont');

// let combinacionTabs = {
//     naranja: [document.querySelector('.tab1'), document.querySelector('info1')],
//     amarillo: [document.querySelector('.tab2'), document.querySelector('info2')],
//     rosa: [document.querySelector('.tab3'), document.querySelector('info3')],
//     azul: [document.querySelector('.tab4'), document.querySelector('info4')],
// }

