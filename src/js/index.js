// navbar ficando fixo
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0)
});
// navbar ficando fixo

// menu hamburguer aparecendo
let menu = document.querySelector("#menu-icon")
let navlist = document.querySelector(".lista-navegacao")

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open")
}
// menu hamburguer aparecendo

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("open")
}

const sr = ScrollReveal ({
    distance: "30px",
    duration: "2600",
    // reset: true
})

sr.reveal('.home-text', {delay: 180, origin:'bottom'})
sr.reveal('.destaque, .cta, .lancamento, .contato', {delay: 80, origin:'bottom'})
