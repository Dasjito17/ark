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
