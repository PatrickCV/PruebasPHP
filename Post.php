<?php

$codigo = $_POST['codigo'];

if ($codigo == 'enviarImagen') {
	
	$noticiaId = $_POST['noticiaId'];
	$imagen = $_FILES['imagen'];
	
	agregarImagen($noticiaId, $imagen);
	
}

function agregarImagen ($noticiaId, $imagen) {
	
	echo 'NoticiaId: ' . $noticiaId;
	echo "\n";
	echo 'Nombre: ' . $imagen['name'];
	
	$dir = 'Imagenes/' . $noticiaId . '/'; // Dirrectorio para determinada noticia.
	
	// Verificar directorio.
	if (!is_dir($dir)) { // No existe el directorio.
		
		if(!mkdir($dir, 0777)) { // Crear el directorio.
			
			return; // No se pudo crear el directorio.
			
		}
		
	}
	
	$dir_imagen = $dir . basename($imagen['name']); // Directorio de la imagen
	
	if (move_uploaded_file($imagen['tmp_name'], $dir_imagen)) {
		
		chmod($dir_imagen, 0777);
		
		echo "\n";
		echo "\n";
		echo 'Se guardo';
		
	}
	
}

?>
