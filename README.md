🌐 Página Web ARK: Survival Evolved

Este proyecto es una página web sencilla con diseño atractivo y funcionalidades interactivas usando HTML, CSS y JavaScript. Está inspirada en el videojuego **ARK: Survival Evolved**.

📸 Vista previa

Incluye títulos, secciones, fondo personalizado, interacciones con el usuario y un cambio de tema claro/oscuro.

---

🧰 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)
- Git & GitHub

---

🎨 Estilos principales (`style.css`)

El diseño utiliza:

- Fondo con imagen fija a pantalla completa.
- Encabezados con colores personalizados.
- Secciones con fondo semitransparente.
- Texto legible con tipografía moderna.
- Footer fijo al final de la página.

```css
body {
    font-family: Arial, sans-serif;
    background: url('https://example.com/ark-background.jpg') no-repeat center center fixed;
    background-size: cover;
    color: #fff;
    margin: 0;
    padding: 0;
}
...


⚙️ Funcionalidad (script.js)
Muestra alertas al hacer clic en títulos.

Cambia el color del encabezado al pasar el mouse.

Alterna entre tema claro y tema oscuro mediante un botón.

js
Copiar
Editar
document.addEventListener("DOMContentLoaded", () => {
    const mainTitle = document.querySelector("header h1");
    ...
});


🚀 Cómo subir a GitHub
Ejecuta los siguientes comandos en tu terminal:

bash
Copiar
Editar
git init
git add .
git commit -m "Primer commit"
git branch -M main
git remote add origin https://github.com/usuario/repositorio.git
git push -u origin main

Desarrollado con ❤️ por [Daniel Sánchez]