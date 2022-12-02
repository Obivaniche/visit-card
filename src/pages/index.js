/* Стили */
import './index.css';

/* Сылки */
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

/* Открытие меню */
const menuIcon = document.querySelector('.menu__icon');
const menuContainer = document.querySelector('.menu__container');
const main = document.querySelector('.main');

if (menuIcon) {
    menuIcon.addEventListener('click', function (e) {
        menuIcon.classList.toggle('menu__icon_active');
        menuContainer.classList.toggle('menu__container_active');
        main.classList.toggle('main_lock');
    });
};

/* Скролл и закрытие меню */
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            if (menuIcon.classList.contains('menu__icon_active')) {
                menuIcon.classList.remove('menu__icon_active');
                menuContainer.classList.remove('menu__container_active');
                main.classList.remove('main_lock');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
};

