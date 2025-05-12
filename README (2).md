en la siguiente pagina web contiene titulo uno titulo dos cuerpo de texto color de fondo y cuerpo de texto.
git init
git add
git commit -m 
git Branch -M main
git remote add origin
git push -u origin main
body {
    font-family: Arial, sans-serif;
    background: url('https://example.com/ark-background.jpg') no-repeat center center fixed;
    background-size: cover;
    color: #fff;
    margin: 0;
    padding: 0;
}

header {
    background: rgba(44, 62, 80, 0.9);
    color: white;
    text-align: center;
    padding: 20px;
}

section {
    padding: 20px;
    background: rgba(0, 0, 0, 0.7);
    margin: 20px;
    border-radius: 10px;
}

h1, h2 {
    color: #16a085;
}

p {
    color: #bdc3c7;
    line-height: 1.6;
}

a {
    color: #16a085;
    text-decoration: none;
    font-weight: bold;
}

a:hover {
    color: #1abc9c;
}

footer {
    background: rgba(44, 62, 80, 0.9);
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
}
// script.js

// Mostrar alerta al hacer clic en un encabezado
document.addEventListener("DOMContentLoaded", () => {
    const mainTitle = document.querySelector("header h1");
    const sectionTitles = document.querySelectorAll("section h2");

    mainTitle.addEventListener("click", () => {
        alert("¡Bienvenido a ARK: Survival Evolved!");
    });

    sectionTitles.forEach(title => {
        title.addEventListener("click", () => {
            alert(`Estás leyendo: ${title.textContent}`);
        });
    });

    // Cambiar el color del header al pasar el mouse
    const header = document.querySelector("header");
    header.addEventListener("mouseenter", () => {
        header.style.backgroundColor = "#e0f7fa";
    });
    header.addEventListener("mouseleave", () => {
        header.style.backgroundColor = "";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleTheme");
    const body = document.body;

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-theme");

        if (body.classList.contains("dark-theme")) {
            toggleButton.textContent = "Tema Claro";
        } else {
            toggleButton.textContent = "Tema Oscuro";
        }
    });
});
