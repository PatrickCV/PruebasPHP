<!DOCTYPE html>

<html>
	
	<head>
		
		<title>Pruebas</title>
		
		<meta CHARSET = 'utf-8'>
		
		<script SRC = 'jquery.min.js'></script>
		<script SRC = 'Pagina.js'></script>
		
	</head>
	
	<body>
		
		<form ID = 'formulario' METHOD = 'post' ENCTYPE = 'multipart/form-data'>
			
			<label FOR = 'archivo'>
				Imagen
			</label>
			<input ID = 'imagen' NAME = 'imagen' TYPE = 'file'>
			</br>
			</br>
			<input TYPE = 'submit' VALUE = 'Agregar'>
			
		</form>
		
		</br>
		</br>
		
		<button ID = 'enviar'>
			Enviar
		</button>
		
	</body>
	
</html>
