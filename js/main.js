// Burger menu - start

( function () {
    const burgerItem = document.querySelector('.header-mob__burger'); 
    const menu = document.querySelector('.burger-menu'); 
    const menuCloseItem = document.querySelector('.burger-menu__close'); 
    const body = document.querySelector('body');
    burgerItem.addEventListener('click', () => {         
        menu.classList.add('is-active-menu');
    });
    menuCloseItem.addEventListener('click', () => {      
        menu.classList.remove('is-active-menu');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1) {    
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('is-active-menu');
            });
        };
    };
} () );

// Burger menu - end */

// Show aside - start

    function showAside () {
        const asideContent = document.querySelector('.aside-options');
        const dropDown = document.querySelector('.aside-form__drop-down');
        const asideHidden = document.querySelector('.is-hidden');
        dropDown.addEventListener('click', () => {
            asideContent.classList.toggle('is-hidden');
        });
        if (window.innerWidth >= 767) {
            asideContent.classList.remove('is-hidden');
        } else {
            asideContent.classList.add('is-hidden');
        }
    }
    showAside ();
    
// Show aside - end

// Tabs card - start 

const tabsParrent = document.querySelector('.products-options');
const tabButton = document.querySelectorAll('.products-options__item');
const tabContent = document.querySelectorAll('.products-cards__content');

function hideTabContent() {
    tabContent.forEach(item => {
        item.classList.add('hide', 'tab-end');
        item.classList.remove('show', 'tab-start');
    });
    tabButton.forEach(item => {
        item.classList.remove('active-tab');
    });
}

function showTabContent (i = 0) {
    tabContent[i].classList.add('show', 'tab-start');
    tabContent[i].classList.remove('hide', 'tab-end');
    tabButton[i].classList.add('active-tab');
}

hideTabContent();
showTabContent ();

tabsParrent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('products-options__item')) {
        tabButton.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});

// Tabs card - end

// GRID to LINES - start

( function viewCard () {
    const gridButton = document.querySelector('.grid-button');
    const linesButton = document.querySelector('.lines-button');
    const cardsList = document.querySelectorAll('.products-cards__list');
    const viewButtons = document.querySelectorAll('.products-head__btn');

    cardsList.forEach (function (item) {
        linesButton.addEventListener('click', () => {
            item.classList.add('lines-view');
            viewButtons.forEach (function (item, index) {
                if (index == 0) {
                    item.classList.remove('grid-active');
                    item.classList.add('grid-passive');
                }
                if (index == 1) {
                    item.classList.remove('lines-passive');
                    item.classList.add('lines-active');
                }
            });
        });
        gridButton.addEventListener('click', () => {
            item.classList.remove('lines-view');
            viewButtons.forEach (function (item, index) {
                if (index == 0) {
                    item.classList.add('grid-active');
                    item.classList.remove('grid-passive');
                }
                if (index == 1) {
                    item.classList.add('lines-passive');
                    item.classList.remove('lines-active');
                }
            });
        });
    });
} () );

// GRID to LINES - end



