const botones = document.querySelectorAll(".abrir,.cerrar")
const navegacion = document.querySelector(".hamb")
const fondo = document.querySelector("#bird")

/*botones[0].addEventListener ("click", function(){
	navegacion.classList.toggle("desplegado")
})
botones[1].addEventListener ("click", function(){
	navegacion.classList.toggle("desplegado")
})

for (var i = 0; i < botones.length; i++) {
	botones[i].addEventListener ("click", function(){
	navegacion.classList.toggle("desplegado")
	});
}
*/

botones.forEach(boton => {
	boton.addEventListener("click", function(){
		navegacion.classList.toggle("desplegado");
		fondo.classList.toggle("blur");
	})
})








/*
function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.remove("mystyle");
}
*/