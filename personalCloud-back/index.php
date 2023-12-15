<?php
// Package for variable of enviromennt
require 'vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$conexion = new mysqli($_ENV["MYSQLHOST"], $_ENV["MYSQLUSER"], $_ENV["MYSQLPASSWORD"], $_ENV["MYSQL_DATABASE"]);

if ($conexion->connect_error) {
    die("Error en la conexion de la base de datos" . $conexion->connect_error);
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

function getData($conexion, $table)
{
    $slq = "SELECT * FROM " . $table;
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