$(function() {
    const menuButton = document.querySelector('.menu__button');
    const mobileMenu = document.querySelector('.mobile-menu');
    menuButton.addEventListener('click', () => {
        console.log('clicked');
        let expanded = menuButton.getAttribute('aria-expanded') === 'true' ? true :false ;
        menuButton.setAttribute('aria-expanded', !expanded);
        menuButton.classList.toggle('menu__button--open');
        mobileMenu.classList.toggle('mobile-menu--open');
    });
})