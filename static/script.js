/* abre e fecha menu lateral em mobo mobile */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener ('click', () => {
    menuMobile.classList.contains ("bi-list")
    ? menuMobile.classList.replace ("bi-list", "bi-x")
    : menuMobile.classList.replace ("bi-x", "bi-list" );
    body.classList.toggle ("menu-nav-active")
});

/* fecha o menu quando clicar em algum item e muda o icone p/ list */

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace ("bi-x", "bi-list" );
        }
    })
})