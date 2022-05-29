function guarda() {
	let boton = document.querySelector('#grabar')
	boton.addEventListener('click', nuevaClase)
	mostrarClases()
}

function nuevaClase() {
	let clave = document.querySelector('#valor').value
	let categoria = document.querySelector('#categoria').value
	let referencia = document.querySelector('#referencia').value
	let fecha = document.querySelector('#fecha').value

	let valores = [categoria, referencia, fecha]

	localStorage.setitem(clave, valores)
	alert('Clase guardada')
	location.reload()
}

function mostrarClases() {
	let caja = document.querySelector('#mostrarDatos')
	for(let i=0; i<localStorage.length; i++) {
		let idClase = localStorage.key(i)
		let valor = localStorage.getItem(idClase)

		caja.innerHTML += '<p>Nro clase: '+idClase+'</p><p>Tema: '+valor+'</p>'
	}

	caja.innerHTML += '<p><a href="#" onclick="borrar()">Eliminar clases</a></p>'
}

function  borrar() {
	localStorage.clear()
	location.reload()
	alert('Clases eliminadas')
}

window.addEventListener('load', guardar)