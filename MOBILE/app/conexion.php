<?php

$nombre = 'gsutavo';
$clave = 'gustabejo';
DB::insert('INSERT INTO usuario (usuario_nombre, usuario_contrasena) VALUES (?,?)',array($nombre,$clave));


?>