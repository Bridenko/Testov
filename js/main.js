window.addEventListener('DOMContentLoaded', () => {

    // Burger menu - start

    (function () {
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
    }());

    // Burger menu - end

    // Aside - start

    // show aside

    function showAside() {
        const asideContent = document.querySelector('.aside-options');
        const dropDown = document.querySelector('.aside-form__head');
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
    showAside();

    // show select
    // const select = document.querySelectorAll('.select');
    // const selectDrop = document.querySelector('.select__button');
    const selectBody = document.querySelectorAll('.select__body');
    const selectHead = document.querySelectorAll('.select__head');
    // const selectCurrent = document.querySelector('.select__current');
    const selectItem = document.querySelectorAll('.select__item ');

    
    [...selectHead].forEach( head => {
        head.addEventListener('click', () => {
            const select = head.closest('.select');
            const selectBody = select.querySelector('.select__body');
            if (selectBody.classList.contains('hide')) {
                openSelect(select, selectBody, head);
            } else {
                closeSelect(select, selectBody, head);
            }
        });
    });
    
    function openSelect(select, selectBody, head) {
        select.classList.add('is-open');
        selectBody.classList.remove('hide');
        selectBody.classList.add('show');
        selectBody.style.border = "2px solid #00D093";
        selectBody.style.borderTop = "none";
        head.style.border = "2px solid #00D093";
        head.style.borderBottom = "none";
        select.querySelector('.select__current').style.marginBottom = '2px';
        select.querySelector('.select__button').classList.add('rotate-button');
    }
    function closeSelect(select) {
        select.classList.remove('is-open');
        const body = select.querySelector('.select__body');
        body.classList.add('hide');
        body.classList.remove('show');
        select.querySelector('.select__head').style.border = "2px solid #BCBCBC";
        select.querySelector('.select__current').style.marginBottom = '0px';
        select.querySelector('.select__button').classList.remove('rotate-button');
    }
    
    selectItem.forEach(item => {
        item.addEventListener('click', () => {
            const select = item.closest('.select');
            select.querySelector('.select__current').innerText = item.innerText;
            closeSelect(select);
        });
    });

    // Aside - end

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

    function showTabContent(i = 0) {
        tabContent[i].classList.add('show', 'tab-start');
        tabContent[i].classList.remove('hide', 'tab-end');
        tabButton[i].classList.add('active-tab');
    }

    hideTabContent();
    showTabContent();

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

    (function viewCard() {
        const gridButton = document.querySelector('.grid-button');
        const linesButton = document.querySelector('.lines-button');
        const cardsList = document.querySelectorAll('.products-cards__list');
        const viewButtons = document.querySelectorAll('.products-head__btn');

        cardsList.forEach(function (item) {
            linesButton.addEventListener('click', () => {
                item.classList.add('lines-view');
                viewButtons.forEach(function (item, index) {
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
                viewButtons.forEach(function (item, index) {
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
    }());

    // GRID to LINES - end

    // Slick slider - start 

    $('.viewed__list').slick({
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1160,
              settings: {
                slidesToShow: 2,
              },
            },
            {
                breakpoint: 850,
                settings: {
                slidesToShow: 1,
              }
            },
            {
                breakpoint: 768,
                settings: {
                arrows: false,
                infinite: true,
                centerMode: false,
                varialableWidth: true,
                slidesToShow: 1,
                centerPadding: '0px',
                touchThreshold: 10,
              }
            }
        ]
        
    });

    // Slick slider - end

});