const cross = document.querySelector(".cross");
cross.onclick = function(){
    cross.classList.toggle("active");
    const header = document.querySelector(".header");
    header.classList.toggle("active");
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    const ubicacion = document.querySelector(".ubicacion");
    ubicacion.classList.toggle("active");
}

const ubicacionItem = document.querySelector(".ubicacion-item");
ubicacionItem.onclick = function(){
    ubicacionItem.classList.toggle("active");
}

const navItem = document.querySelector(".nav-item");
navItem.onclick = function(){
    navItem.classList.toggle("active");
}
