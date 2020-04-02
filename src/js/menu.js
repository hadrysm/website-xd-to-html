export const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const navLinks = document.querySelectorAll(' .menu__item');

export const toogleNav = () => {
    burger.classList.toggle('burger-active');
    menu.classList.toggle('menu-active');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `fadeIn 0.5s ease forwards ${index / 7 +
                0.2}s`;
        }
    });
};
