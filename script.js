let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
  document.querySelector('.container').classList.toggle("show-menu"); /* Ao acontecer o evento click ele adiciona a classe show-menu */
});