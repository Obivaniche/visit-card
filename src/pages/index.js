/* Стили */
import './index.css';

/* Сылки */
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

/* Открытие меню */
const menuIcon = document.querySelector('.menu__icon');
const menuContainer = document.querySelector('.menu__container');
const main = document.querySelector('.main');

if (menuIcon) {
    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('menu__icon_active');
        menuContainer.classList.toggle('menu__container_active');
        main.classList.toggle('main_lock');
    });
};

/* Скролл и закрытие меню */
if (menuLinks.length > 0) {
    menuLinks.forEach(function (menuLink) {
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

/* Попап */
const popup = document.querySelectorAll('.popup');
const popupHtml = document.querySelector('.popup-html');
const popupCss = document.querySelector('.popup-css');
const popupJs = document.querySelector('.popup-js');
const popupReact = document.querySelector('.popup-react');

const toolsHtml = document.querySelector('.tools-html');
function openPopupHtml() {
    openPopup(popupHtml);
};
toolsHtml.addEventListener('click', openPopupHtml);

const toolsCss = document.querySelector('.tools-css');
function openPopupCss() {
    openPopup(popupCss);
};
toolsCss.addEventListener('click', openPopupCss);

const toolsJs = document.querySelector('.tools-js');
function openPopupJs() {
    openPopup(popupJs);
};
toolsJs.addEventListener('click', openPopupJs);

const toolsReact = document.querySelector('.tools-react');
function openPopupReact() {
    openPopup(popupReact);
};
toolsReact.addEventListener('click', openPopupReact);

function openPopup(popup) {
    document.addEventListener('keydown', closePopupEsc);
    popup.classList.add('popup_opened');
    const main = document.querySelector('.main');
    main.classList.add('main_lock');
};

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
        const main = document.querySelector('.main');
        main.classList.remove('main_lock');
    }
};

function closePopup(popup) {
    document.removeEventListener('keydown', closePopupEsc);
    popup.classList.remove('popup_opened');
    const main = document.querySelector('.main');
    main.classList.remove('main_lock');
};

popup.forEach((popup) =>
    popup.addEventListener('mousedown', (evt) => {
        if (
            evt.target.classList.contains('popup') ||
            evt.target.classList.contains('popup__close-button')
        ) {
            closePopup(popup);
        }
    })
);

/* Проверяем, с какого устройства просматривается сайт */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    /* Код для мобильных устройств */
    /* Активация и деактивация ссылок портфолио */
    const portfolio = document.querySelector('.portfolio');

    const coverLink = portfolio.querySelectorAll('.portfolio__cover-link');

    coverLink.forEach((elem) => {
        elem.addEventListener('click', function (evt) {
            evt.preventDefault();
        });
    });

} else {
    // код для обычных устройств
}