//referencias 
let divModal = document.querySelector('.modalBackground');
let closeMbtn = document.querySelector('.closeBtn');

//Funciones

//Detecta source
let src = function imageSelect (e){
    src = e.target.src;
    if (!src) return 
    console.log(src);
    openModal()
}

//Muestra imagen
function openModal () {
    document.querySelector('.openModal').style.backgroundImage = "url("+ src + ")";
    divModal.classList.add('visible');
}

//Cierra modal
function closeModal() {
divModal.classList.remove('visible');
} 

//Detecta tecla Escape y corre funcion para cerrar modal
function detectarEsc (e) {
    if (e.key === "Escape"){
    closeModal();
    }
}

//Eventos
closeMbtn.addEventListener('click', closeModal);
document.addEventListener('keyup', detectarEsc);
document.addEventListener ('click', src);




