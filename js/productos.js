let item = document.querySelector('#lista');

function guardar() {
	sessionStorage.setItem('apunte', item.innerHTML);
	alert('Datos guardados');
}

function mostrar() {
	if (sessionStorage.getItem('apunte')) {
		item.innerHTML = sessionStorage.getItem('apunte');
	}
}

function borrar() {
	sessionStorage.clear();
	location.reload();
	alert('Datos eliminados');
}
