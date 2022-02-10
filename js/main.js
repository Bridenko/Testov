/* Burger menu - start */

( function () {
    const burgerItem = document.querySelector('.header-mob__burger'); /* При нажатии на бургер */
    const menu = document.querySelector('.burger-menu'); /* Ищем меню */
    const menuCloseItem = document.querySelector('.burger-menu__close'); /* Нажимая на кнопу close закрываем выпадающее меню */
    // const menuLinks = document.querySelectorAll('.burger-menu__link'); /* При нажатии на ссылки закрывается выпадающее меню */
    burgerItem.addEventListener('click', () => {         /* Активируем выпадающее меню */
        menu.classList.add('is-active-menu')
    });
    menuCloseItem.addEventListener('click', () => {      /* Нажимая на кнопу close закрываем выпадающее меню */
        menu.classList.remove('is-active-menu')
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1) {    /* При нажатии на ссылки закрывается выпадающее меню */
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('is-active-menu');
            });
        };
    };
} () );

/* Burger menu - end */




