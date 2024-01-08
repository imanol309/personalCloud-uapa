
-- Creando la base de datos que va guardar todos los datos
CREATE DATABASE personalcloud;

-- Crear la table de usuarios para guardar los usuarios
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` text DEFAULT NULL,
  `date` date DEFAULT NULL,
  `profile_img` text,
  `profile_tips` text,
  `status` tinyint(1) DEFAULT NULL,
  `id_file` varchar(255) DEFAULT NULL,
  `access_token ` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `id_file_unique` (`id_file`)
)

-- Crear tabla de file para guardar los archivos 
CREATE TABLE `file` (
  `id` varchar(255) NOT NULL,
  `name_file` text DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `link` text,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `file_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id_file`)
)

-- Script sql para agregar 10 usuarios y valla probando
INSERT INTO users (name, email, password, date, profile_img, profile_tips, status, access_token)
VALUES 
('Juan Perez', 'juan@example.com', 'password1234', '2023-01-01', 'https://example.com/juan.jpg', 'Me gusta leer libros', 1, 'abc123'),
('Maria Lopez', 'maria@example.com', 'qwerty', '2023-01-02', 'https://example.com/maria.jpg', 'Me gusta la música', 1, 'xyz789'), 
('Luis Garcia', 'luis@example.com', 'abcd1234', '2023-01-03', NULL, NULL, 0, NULL),
('Ana Gomez', 'ana@example.com', '1234', '2023-01-04', NULL, 'Me gusta viajar', 1, '123abc'),
('Pedro Torres', 'pedro@example.com', '5678', '2023-01-05', 'https://example.com/pedro.jpg', NULL, 0, NULL),
('Lucia Diaz', 'lucia@example.com', '4321', '2023-01-06', NULL, 'Me gusta la lectura', 1, '987xyz'),
('Jorge Martinez', 'jorge@example.com', '8765', '2023-01-07', NULL, NULL, 0, NULL),  
('Daniela Suarez', 'daniela@example.com', 'abcd4321', '2023-01-08', 'https://example.com/daniela.jpg', 'Me gusta la natación', 1, '456def'),
('Alberto Ruiz', 'alberto@example.com', 'password@123', '2023-01-09', NULL, 'Me gusta el cine', 1, '789ghi'),
('Camila Flores', 'camila@example.com', 'qwe123', '2023-01-10', 'https://example.com/camila.jpg', NULL, 0, NULL);


-- Script sql para agregar 10 archivos y valla probando
INSERT INTO file (id, name_file, type, link, date)
VALUES
(1, 'foto-perfil.jpg', 'image/jpeg', 'https://example.com/fotos/foto-perfil.jpg', '2023-01-01'),
(2, 'cancion.mp3', 'audio/mpeg', 'https://example.com/musica/cancion.mp3', '2023-01-02'),
(3, 'documento.pdf', 'application/pdf', 'https://example.com/documentos/documento.pdf', '2023-01-03'), 
(4, 'video.mp4', 'video/mp4', 'https://example.com/videos/video.mp4', '2023-01-04'),
(5, 'libro.epub', 'application/epub+zip', 'https://example.com/libros/libro.epub', '2023-01-05'),
(6, 'foto-viaje.jpg', 'image/jpeg', 'https://example.com/fotos/foto-viaje.jpg', '2023-01-06'),
(7, 'podcast.mp3', 'audio/mpeg', 'https://example.com/podcasts/podcast.mp3', '2023-01-07'),
(8, 'notas.txt', 'text/plain', 'https://example.com/notas/notas.txt', '2023-01-08'), 
(9, 'datos.csv', 'text/csv', 'https://example.com/datos/datos.csv', '2023-01-09'),
(10, 'articulo.pdf', 'application/pdf', 'https://example.com/documentos/articulo.pdf', '2023-01-10');