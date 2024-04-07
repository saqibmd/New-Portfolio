const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
