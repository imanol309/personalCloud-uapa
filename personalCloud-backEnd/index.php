<?php
$host = "localhost";
$user = "root";
$pass = "123456789";
$db = "music";


$conexion = new mysqli($_ENV["MYSQLHOST"], $_ENV["MYSQLUSER"], $_ENV["MYSQLPASSWORD"], $_ENV["MYSQL_DATABASE"]);

// Conexion con variables Locales
$conexion = new mysqli($host, $user, $pass, $db);

if ($conexion->connect_error) {
    die ("Error en la conexion de la base de datos, revisa de nuevo" . $conexion->connect_error);
}

header("Content-Type: application/json");
$metodo = $_SERVER['REQUEST_METHOD'];

switch ($metodo) { 
    case 'GET': 
        getData($conexion, 'gender');
        break;
    default:
        echo 'No existe ese metodo';
        break;
}

function getData($conexion, $table) {
    $slq = "SELECT * FROM gender";
    $result = $conexion->query($slq);
    if ($result->num_rows > 0) {
        $datos = array();
        while ($fila = $result->fetch_assoc()) {
            $datos[] = $fila;
        }
        echo json_encode($datos);
    }
}


?>