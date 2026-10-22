let menu = document.querySelector(".menu-btn");
let sidebar = document.querySelector(".sidebar");
let overlay = document.querySelector(".overlay");
let colse = document.querySelector(".colse-btn");

menu.onclick = function () {
    sidebar.classList.add("active");
    overlay.classList.add("active");
}

colse.onclick = function () {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}

overlay.onclick = function () {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}