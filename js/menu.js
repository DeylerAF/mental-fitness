// Selecciona el elemento con la clase "cross" y le asigna una función al hacer clic
const cross = document.querySelector(".cross");
cross.onclick = function(){
    // Agrega o quita la clase "active" al elemento "cross"
    cross.classList.toggle("active");
    // Selecciona el elemento con la clase "header" y le agrega o quita la clase "active"
    const header = document.querySelector(".header");
    header.classList.toggle("active");
    // Selecciona el elemento con la clase "nav-bar" y le agrega o quita la clase "active"
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    // Selecciona el elemento con la clase "ubicacion" y le agrega o quita la clase "active"
    const ubicacion = document.querySelector(".ubicacion");
    ubicacion.classList.toggle("active");
}

// Selecciona el elemento con la clase "ubicacion-item" y le asigna una función al hacer clic
const ubicacionItem = document.querySelector(".ubicacion-item");
ubicacionItem.onclick = function(){
    // Agrega o quita la clase "active" al elemento "ubicacionItem"
    ubicacionItem.classList.toggle("active");
}

// Selecciona el elemento con la clase "nav-item" y le asigna una función al hacer clic
const navItem = document.querySelector(".nav-item");
navItem.onclick = function(){
    // Agrega o quita la clase "active" al elemento "navItem"
    navItem.classList.toggle("active");
}
