// cambiando clases de un elemento

let x = document.querySelector('.elemento_x');
let y = document.querySelector('.elemento_y');
let z = document.querySelector('.elemento_z');


function toggleClass () {
    let y = document.querySelector('.elemento_y');
    y.classList.toggle('grande')
} 

// classList


// function toggleClassTodas () {
//     let x = document.querySelector('.elemento_x');
//     let y = document.querySelector('.elemento_y');
//     let z = document.querySelector('.elemento_z');
//     if (y) {
//         y.classList.toggle('grande')
//     } else if (x || z) {
//         x.classList.toggle('chico');
//         z.classList.toggle('chico');
//     }
// } 

y.addEventListener('click', toggleClass)
// x.addEventListener('click', toggleClassTodas)
// z.addEventListener('click', toggleClassTodas)