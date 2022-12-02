import './index.css';

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
};

const iconMenu = document.querySelector('.menu__icon');
if(iconMenu) {
    const menuContainer = document.querySelector('.menu__container');
    iconMenu.addEventListener('click', function(e){
        iconMenu.classList.toggle('.menu__icon_active');
        menuContainerclassList.toggle('.menu__container_active');
    });
};