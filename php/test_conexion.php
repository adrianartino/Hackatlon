<?php 
phpinfo();
include 'config.php';
            
if (!function_exists('mysqli_init') && !extension_loaded('mysqli')) {
    echo 'We don\'t have mysqli!!!';
} else {
    echo 'Phew we have it!';
}			
			
			
//conexion bd.
$conexion = new mysqli($Host, $User, $Password, $Dbname, $Port, $Socket)
            or die('No se pudo conectar a la base de datos' . mysqli_connect_error());
			
			
?>