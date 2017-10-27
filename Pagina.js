
var imagenes

$(document).ready(function () {
	
	imagenes = new ListaImagenes()
	
	agregarImagen()
	eventoEnviarImagenes()
	
})

/*
==================================INFORMACION===================================
*/

class ListaImagenes {
	
	constructor () {
		
		this.listaImagenes = [ ]
		
	}
	
	addImagen (imagen) {
		
		if (!this.enLista(imagen)) { // Verifica si esta repetida.
			
			this.listaImagenes.push(imagen) // Agrega la imagen.
			
			return true
			
		}
		
		return false
		
	}
	
	enLista (imagen) {
		
		for (var x = 0; x < this.listaImagenes.length; x ++) {
			
			if (this.listaImagenes[x].name == imagen.name) {
				
				return true
				
			}
			
		}
		
		return false
		
	}
	
	printLista () {
		
		for (var x = 0; x < this.listaImagenes.length; x ++) {
			
			console.log(this.listaImagenes[x])
			
		}
		
	}
	
}

/*
===================================FUNCIONES====================================
*/

function enviarImagenes (noticiaId) {
	
	for (var x = 0; x < imagenes.listaImagenes.length; x ++) {
		
		var imagen = imagenes.listaImagenes[x]
		
		var formData = new FormData()
		formData.append('codigo', 'enviarImagen')
		formData.append('noticiaId', noticiaId)
		formData.append('imagen', imagen)
		
		$.ajax ({
			
			url: 'Post.php',
			type: 'post', 
			datatype: 'html',
			data: formData,
			cache: false,
			contentType: false,
			processData: false
			
		})
		
		.done(function (respuesta) {
			
			console.log(respuesta)
			
		})
		
	}
	
}

/*
====================================EVENTOS=====================================
*/

// Evento de agregar imagen.
function agregarImagen () {
	
	$('#formulario').on('submit', function (evento) {
		
		evento.preventDefault() // Detener el submit.
		
		var imagen = document.getElementById('imagen').files[0]
		
		if (typeof imagen == 'undefined') { // No se escogio imagen.
			
			console.log('No se escogio ninguna imagen')
			
			return
			
		}
		
		imagenes.addImagen(imagen) // Agrega la imagen.
		document.getElementById('formulario').reset() // Resetea formulario.
		imagenes.printLista() // Muestra la lista de imagenes.
		
	})
	
}

// Evento de enviar imagenes.
function eventoEnviarImagenes () {
	
	$('#enviar').on('click', function (evento) {
		
		if (imagenes.listaImagenes.length != 0) { // Lista no vacia.
			
			console.log('Enviando...')
			
			enviarImagenes(1)
			
		} else {
			
			console.log('Nada para enviar')
			
		}
		
	})
	
}
