<?php

// Package for variable of enviromennt
require 'vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$conexion = new mysqli($_ENV["MYSQLHOST"], $_ENV["MYSQLUSER"], $_ENV["MYSQLPASSWORD"], $_ENV["MYSQLDATABASE"]);

if ($conexion->connect_error) {
    die("Error en la conexion de la base de datos" . $conexion->connect_error);
}

header("Content-Type: application/json");
$metodo = $_SERVER['REQUEST_METHOD'];

// Optener PATH de la url
$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$params = explode('/', $url);


switch ($metodo) {
    case 'GET':
        if ($params[1] == 'users') {
            if ($params[2]) {
                getDataFileForUser($conexion, $params[2]);
            } else {
                getData($conexion, 'users');
            }
        } else if ($params[1] == 'file') {
            getData($conexion, 'file');
        } else {
            echo 'No existe ese metodo';
        }
        break;
    case 'POST':
        if ($params[1] == 'users') {
            PostDataUser($conexion, 'users');
        }
        if ($params[1] == 'file') {
            PostDataFile($conexion, 'file');
        }
        break;
    case 'PUT':
        if ($params[1] == 'users') {
            if ($params[2]) {
                updateDataUser($conexion, $params[2]);
            }
        }
        if ($params[1] == 'file') {
            if ($params[2]) {
                updateDataFile($conexion, $params[2]);
            }
        }
        break;
    case 'DELETE':
        if ($params[1] == 'file') {
            if ($params[2]) {
                deleteDataFile($conexion, $params[2]);
            }
        }
        break;
    default:
        echo 'No existe ese metodo';
        break;
}

function validateAPIKey()
{
    if ($_GET['api_key'] != $_ENV["API_KEY"]) {
        die('API Key inválida');
    }
}

function getData($conexion, $table)
{
    validateAPIKey();
    $sql = "SELECT * FROM " . $table;
    $result = $conexion->query($sql);
    if ($result->num_rows > 0) {
        $datos = array();
        while ($fila = $result->fetch_assoc()) {
            $datos[] = $fila;
        }
        echo json_encode($datos);
    }
}

function getDataId($conexion, $table, $id)
{
    validateAPIKey();
    $sql = "SELECT * FROM '$table' id = '$id'";
    $result = $conexion->query($sql);
    if ($result->num_rows > 0) {
        $datos = array();
        while ($fila = $result->fetch_assoc()) {
            $datos[] = $fila;
        }
        echo json_encode($datos);
    }
}

function getDataFileForUser($conexion, $id)
{
    validateAPIKey();
    $sql = "SELECT * FROM file WHERE id IN (SELECT id_file FROM users WHERE id = '$id')";
    $result = $conexion->query($sql);
    if ($result->num_rows > 0) {
        $datos = array();
        while ($fila = $result->fetch_assoc()) {
            $datos[] = $fila;
        }
        echo json_encode($datos);
    }
}

function PostDataUser($conexion, $table)
{
    validateAPIKey();
    $fechaActual = new DateTime();
    $fechaActual = $fechaActual->format('Y-m-d');
    $dato = json_decode(file_get_contents("php://input"), true);
    $body = [
        'name' => $dato['name'],
        'password' => $dato['password'],
        'date' => $dato['date'],
        'profile_img' => $dato['profile_img'],
        'profile_tips' => $dato['profile_tips'],
        'status' => $dato['status'],
        'id_file' => $dato['id_file'],
        'access_token' => $dato['access_token'],
    ];
    $sql = "INSERT INTO users(name, password, date, profile_img, profile_tips, status, id_file) 
    VALUES ('{$body['name']}', '{$body['password']}', '{$fechaActual}', '{$body['profile_img']}', '{$body['profile_tips']}', '{$body['status']}',  '{$body['id_file']}', '{$body['access_token']}')";
    $result = $conexion->query($sql);

    if ($result) {
        $dato['id'] = $conexion->insert_id;
        echo json_encode($dato);
    } else {
        echo json_encode(array('error' => 'Error al crear usuario'));
    }
}

function PostDataFile($conexion, $table)
{
    validateAPIKey();
    $fechaActual = new DateTime();
    $fechaActual = $fechaActual->format('Y-m-d');

    $dato = json_decode(file_get_contents("php://input"), true);
    $body = [
        'id' => $dato['id'],
        'type' => $dato['type'],
        'link' => $dato['link'],
        'creation_date' => $dato['creation_date'],
        'name_file' => $dato['name_file'],
    ];
    $sql = "INSERT INTO file(id, type, link, creation_date) 
    VALUES ('{$body['id']}', '{$body['type']}', '{$body['link']}',  '{$fechaActual}', '{$body['name_file']}')";
    $result = $conexion->query($sql);

    if ($result) {
        $dato['id'] = $conexion->insert_id;
        echo json_encode($dato);
    } else {
        echo json_encode(array('error' => 'Error al crear usuario'));
    }
}


function updateDataUser($conexion, $id)
{
    validateAPIKey();
    $dato = json_decode(file_get_contents("php://input"), true);
    $body = [
        'name' => $dato['name'],
        'password' => $dato['password'],
        'profile_tips' => $dato['profile_tips'],
        'status' => $dato['status'],
        'access_token' => $dato['access_token'],
    ];
    $sql = "UPDATE users SET name = '{$body['name']}', password = '{$body['password']}', 
    profile_tips = '{$body['profile_tips']}', status = '{$body['status']}', 
    access_token = '{$body['access_token']}' WHERE id = $id";
    $result = $conexion->query($sql);

    if ($result) {
        echo json_encode(array('mensaje' => 'Usuario actualizado'));
    } else {
        echo json_encode(array('error' => 'Error al crear usuario'));
    }
}

function updateDataFile($conexion, $id)
{
    validateAPIKey();
    $fechaActual = new DateTime();
    $fechaActual = $fechaActual->format('Y-m-d');

    $dato = json_decode(file_get_contents("php://input"), true);
    $body = [
        'type' => $dato['type'],
        'link' => $dato['link'],
        'name_file' => $dato['name_file'],
    ];
    $sql = "UPDATE file SET type = '{$body['type']}', link = '{$body['link']}', 
    name_file = '{$body['name_file']}' WHERE id = $id";
    $result = $conexion->query($sql);

    if ($result) {
        echo json_encode(array('mensaje' => 'Archivo actualizado'));
    } else {
        echo json_encode(array('error' => 'Error al crear Archivo'));
    }
}

function deleteDataFile($conexion, $id)
{
    validateAPIKey();
    $fechaActual = new DateTime();
    $fechaActual = $fechaActual->format('Y-m-d');

    $dato = json_decode(file_get_contents("php://input"), true);
    $sql = "DELETE FROM file WHERE id = $id";
    $result = $conexion->query($sql);
    if ($result) {
        echo json_encode(array('mensaje' => 'Archivo eliminando correctamente'));
    } else {
        echo json_encode(array('error' => 'Error al eliminar Archivo'));
    }
}


?>