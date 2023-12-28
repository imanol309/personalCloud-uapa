
-- Creando la base de datos que va guardar todos los datos
CREATE DATABASE personalcloud;

-- Crear la table de usuarios para guardar los usuarios
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` text DEFAULT NULL,
  `password` text,
  `date` date DEFAULT NULL,
  `profile_img` text,
  `profile_tips` text,
  `status` tinyint(1) DEFAULT NULL,
  `id_file` int DEFAULT NULL,
  `access_token ` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `id_file_unique` (`id_file`)
)

-- Crear tabla de file para guardar los archivos 
CREATE TABLE `file` (
  `id` int NOT NULL,
  `name_file` text DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `link` text,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `file_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id_file`)
)

-- Extrar los datos de un file dependiendo el usuario que pidas
SELECT * 
FROM file
WHERE id IN (
  SELECT id_file
  FROM users
  WHERE id = id_usuario_especifico
);