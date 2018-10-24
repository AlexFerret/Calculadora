//CALCULADORA//

operacion=document.getElementById('display');

function concatenar(dato){
	operacion.value+=dato;
}

function igual(){
	total=eval(operacion.value);
	operacion.value=total;
}

function borrar(){
	operacion.value="";
}

function acceso(){
	password = operacion.value;
	if (password == "007") {
		window.location.assign("PantallaSecreta.html")
	}
}

//NOTAS//

texto = document.getElementById('texto');
notas = document.getElementById('notas');

window.addEventListener('load',cargar, true);

function cargar(){
	if (localStorage.getItem('notas')) {
			notas.innerHTML = localStorage.getItem('notas');
		}
}

function agregar(){
	notas.innerHTML += "<li>" + texto.value + "</li>";
	localStorage.setItem('notas',notas.innerHTML);
	texto.value = "";
}

