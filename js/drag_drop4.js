// JavaScript Document

function iniciar() {
	let imagenes = document.querySelectorAll('#cajaimagenes > img');
	for (let i = 0; i < imagenes.length; i++) {
		imagenes[i].addEventListener('dragstart', arrastrado, false);
		imagenes[i].addEventListener('dragend', finalizado, false);
	}
	soltar = document.getElementById('lienzo');
	lienzo = soltar.getContext('2d');
	soltar.addEventListener(
		'dragenter',
		function (e) {
			e.preventDefault();
		},
		false
	);
	soltar.addEventListener('dragenter', entrando, false);
	soltar.addEventListener(
		'dragover',
		function (e) {
			e.preventDefault();
		},
		false
	);
	soltar.addEventListener('drop', soltado, false);
}
function entrando(e) {
	e.preventDefault();
	soltar.style.background = '#ffffff';
}
function finalizado(e) {
	elemento = e.target;
	elemento.style.visibility = 'hidden';
}
function arrastrado(e) {
	elemento = e.target;
	e.dataTransfer.setData('Text', elemento.getAttribute('id'));
	e.dataTransfer.setDragImage(e.target, 0, 0);
}
function soltado(e) {
	e.preventDefault();
	let id = e.dataTransfer.getData('Text');
	let elemento = document.getElementById(id);
	let posx = e.pageX - soltar.offsetLeft;
	let posy = e.pageY - soltar.offsetTop;
	lienzo.drawImage(elemento, posx, posy);
}
window.addEventListener('load', iniciar, false);
