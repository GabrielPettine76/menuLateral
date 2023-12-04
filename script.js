const menu = document.querySelector(".menuToggle");
const navegacion = document.querySelector('.navigation');
//funcion para acivar menu hambuersa
menu.onclick = function(){
    navegacion.classList.toggle('open');
}
//selecciono los elelmentos de los li
const lista = document.querySelectorAll('.list');
//remuevo la clase active y se la agrego al elemnto 
// que elija utilizando el this para dirirgirma a cada uno que seleciono
function activarLink (){
    lista.forEach((e)=>{
        e.classList.remove('active');
        this.classList.add('active');
    });
}
//llamo a funcion para que cuando haga click seleccione el li
lista.forEach((e)=>{
    e.addEventListener('click',activarLink);
})
