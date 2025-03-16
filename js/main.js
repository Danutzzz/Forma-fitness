console.log("salutt");
function activeCard(zi) {
    const zile = document.querySelectorAll(".zi-orar");
    zile.forEach(zile => zile.classList.remove("active"));
    document.getElementById(zi).classList.add("active");
    const carduri = document.querySelectorAll(".card-orar");
    carduri.forEach(card => (card.style.display = "none"));
    const carduriZi = document.querySelectorAll(`.${zi}-card`);
    carduriZi.forEach(card => (card.style.display = "flex"));
};
function activeClass(className) {
    const clase = document.querySelectorAll(".clasa-gym");
    clase.forEach(clasa => clasa.classList.remove("selected"));

    document.getElementById(className).classList.add("selected");

    const containerClase = document.querySelectorAll(".container-viz-clase");
    containerClase.forEach(container => container.style.display = "none");

    const containerClass = document.getElementById(className + "-class");
    if (containerClass) {
        containerClass.style.display = "flex";
    }
}

document.getElementById("fitness").addEventListener("click", () => activeClass("fitness"));
document.getElementById("muscle").addEventListener("click", () => activeClass("muscle"));
document.getElementById("body").addEventListener("click", () => activeClass("body"));
document.getElementById("yoga").addEventListener("click", () => activeClass("yoga"));
document.getElementById("advanced").addEventListener("click", () => activeClass("advanced"));
let indexCurent = 0;
        let recenzii = document.querySelectorAll(".celula-recenzii");
    function schimbaRecenzie(pas) {
recenzii[indexCurent].classList.remove("vizibil");
    indexCurent = (indexCurent + pas + recenzii.length) % recenzii.length;
    recenzii[indexCurent].classList.add("vizibil");
};
function HAmburgermenu() {
    let navLinks = document.getElementById("Nav_links");
    if (navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
    } else {
        navLinks.classList.add("show");
    }
};
window.addEventListener("scroll", function() {
    let navLinks = document.getElementById("Nav_links");
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 10) {
        navLinks.classList.remove("show");
        navbar.style.backgroundColor = "var(--bgcolor)";
    }
});