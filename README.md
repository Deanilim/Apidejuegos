# Apidejuegos
Este proyecto utiliza la API de RAWG para mostrar una lista de juegos en función de diferentes categorías y términos de búsqueda.

Descripción
La aplicación permite a los usuarios explorar juegos por categorías específicas como Acción, Aventura y Estrategia, o buscar juegos por nombre utilizando la API de RAWG. La interfaz de usuario está construida en HTML y JavaScript, proporcionando una experiencia interactiva y dinámica.

Requisitos
Para utilizar esta aplicación, necesitas:

Un navegador web moderno (Google Chrome, Firefox, etc.)
Conexión a Internet para acceder a la API de RAWG
Configuración
Obtener una clave de API de RAWG

Regístrate en el sitio web de RAWG y genera tu clave de API desde el dashboard de API.
Clonar el repositorio

Clona este repositorio en tu máquina local:

bash
Copiar código
git clone https://github.com/Deanilim/Apidejuegos.git
cd Apidejuegos
Configurar la clave de API

Abre el archivo app.js y reemplaza '3481cda6aa1b4a4a89132da25c4b6e5d' con tu clave de API de RAWG:

javascript
Copiar código
const apiKey = 'TU_CLAVE_API'; // Reemplaza con tu clave de API
Estructura del Proyecto
index.html: El archivo principal HTML que contiene la estructura de la página.
app.js: Contiene el código JavaScript que interactúa con la API de RAWG para buscar y mostrar juegos.
Recursos
Documentación de la API de RAWG
Licencia
Este proyecto es de uso libre.
