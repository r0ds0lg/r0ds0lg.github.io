

let src = function imageSelect (e){
    src = e.target.src;
    if (!src) return 
    console.log(src);
    document.querySelector('.openModal').style.backgroundImage = "url("+ src + ")";
    divModal.classList.add('visible');
}


let divModal = document.querySelector('.modalBackground');
let closeMbtn = document.querySelector('.closeBtn');

function closeModal() {
divModal.classList.remove('visible');
} 

closeMbtn.addEventListener('click', closeModal);
document.addEventListener('keyup', detectarEsc);
document.addEventListener ('click', src);



function detectarEsc (e) {
    if (e.key === "Escape"){
    closeModal();
    }
}
