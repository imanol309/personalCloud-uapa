
# API de Archivos

Este proyecto es una API REST para gestionar archivos y usuarios. Permite las operaciones CRUD (crear, leer, actualizar, eliminar) tanto para usuarios como para archivos.

## Rutas

La API expone las siguientes rutas:

### Usuarios

- GET /users - Obtiene todos los usuarios
- GET /users/{id} - Obtiene un usuario por ID
- POST /users - Crea un nuevo usuario 
- PUT /users/{id} - Actualiza un usuario existente
- GET /users/{id}/files - Obtiene los archivos de un usuario

### Archivos

- GET /files - Obtiene todos los archivos
- POST /files - Crea un nuevo archivo
- PUT /files/{id} - Actualiza un archivo existente
- DELETE /files/{id} - Elimina un archivo

## Instalación

1. Clona este repositorio
2. Ejecuta `composer install` para instalar dependencias
3. Copia `.env.example` a `.env` y configura las variables de entorno
4. Importa el script SQL `database.sql` para crear la estructura de la base de datos
5. Ejecuta el servidor PHP integrado con `php -S localhost:8000`
6. La API estará disponible en `http://localhost:8000`

## Tecnologías

- PHP 7.4
- MySQL
- DotEnv

La API utiliza PHP con el patron MVC para el código y MySQL como base de datos. Las variables de entorno se cargan con DotEnv.

## Autores

- Imanol Perez 
- Ismanol Garcia 
- Yery Perez