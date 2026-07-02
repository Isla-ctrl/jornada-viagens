const menuprincipal = document.querySelector('.navigation-menu');
const botaoHamburguer = document.querySelector('.navigation-menu img');
botaoHamburguer.addEventListener('click', () => {
    menuprincipal.classList.toggle('menu-ativo');
});