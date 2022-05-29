// JavaScript Document

function iniciar() {
	let boton = document.getElementById('grabar');
	boton.addEventListener('click', nuevoitem, false);
	mostrar();
}
function nuevoitem() {
	let clave = document.getElementById('clave').value;
	let valor = document.getElementById('texto').value;
	sessionStorage.setItem(clave, valor);
	mostrar();
	document.getElementById('clave').value = '';
	document.getElementById('texto').value = '';
}
function mostrar() {
	let cajadatos = document.getElementById('cajadatos');
	cajadatos.innerHTML =
		'<div><button onclick="eliminarTodo()">Eliminar Todo</button></div>';
	for (let f = 0; f < sessionStorage.length; f++) {
		let clave = sessionStorage.key(f);
		let valor = sessionStorage.getItem(clave);
		cajadatos.innerHTML +=
			'<div>' +
			clave +
			' - ' +
			valor +
			'<br/><button onclick="eliminar(\'' +
			clave +
			'\')">Eliminar</button></div>';
	}
}
function eliminar(clave) {
	if (confirm('Est� Seguro?')) {
		sessionStorage.removeItem(clave);
		mostrar();
	}
}
function eliminarTodo() {
	if (confirm('Est� Seguro?')) {
		sessionStorage.clear();
		mostrar();
	}
}
window.addEventListener('load', iniciar, false);
