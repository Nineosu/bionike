document.addEventListener('DOMContentLoaded', () => {
    // header search
    const searchBtns = document.querySelectorAll('.header__search-btn'),
          searchMenu = document.querySelector('.search__menu'),
          searchMenuStand = searchMenu.querySelector('.search__menu-stand');

    searchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            searchMenu.classList.add('show');
        });
    });
    searchMenuStand.addEventListener('click', (e) => {
        searchMenu.classList.remove('show');
    });

    // modal
    if (document.querySelector('.modal-btn')) {
        const modalBtn = document.querySelectorAll('.modal-btn'),
              modals = document.querySelectorAll('.modal');

        modalBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                modals.forEach(modal => {
                    const closeBtn = modal.querySelector('.modal__close');
                    
                    if (btn.getAttribute('data-modal') == modal.getAttribute('data-modal')) {
                        modal.classList.add('show');
                    }

                    closeBtn.addEventListener('click', () => {
                        modal.classList.remove('show');
                    });
                });
            });
        });
            
    }

    // Menu pick
    menuItems = document.querySelectorAll('.header__menu-item'),
    subMenus = document.querySelectorAll('.header__submenu');

    function clearClass(items, selector) {
        items.forEach(item => {
            if (item.classList.contains(selector)) {
                item.classList.remove(selector);
            }
        });
    }
    
    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            if (item.classList.contains('item-picked')) {
                item.classList.remove('item-picked');
                clearClass(subMenus, 'item-picked');
            } else {
                clearClass(menuItems, 'item-picked');
                clearClass(subMenus, 'item-picked');
                item.classList.add('item-picked');
                subMenus.forEach(menu => {
                    if (item.getAttribute('data-menu') == menu.getAttribute('data-menu')) {
                        menu.classList.add('item-picked');
                    }
                });
            }
        });
    });

    // Select cards
    if (document.querySelectorAll('.select__card-menu')) {
        const cardsMenu = document.querySelectorAll('.select__card-menu');

        cardsMenu.forEach(menu => {
        const subMenu = menu.querySelector('.product__card-submenu'),
              selectedItem = menu.querySelector('.selected-item');

        menu.addEventListener('click', (e) => {
            subMenu.classList.toggle('menu-show');
            selectedItem.querySelector('.menu__item-arrow').classList.toggle('rotated');

            selectedItem.querySelector('.menu__item-color').src = e.target.querySelector('.menu__item-color').src
            selectedItem.querySelector('.menu__item-title').innerHTML = e.target.querySelector('.menu__item-title').innerHTML

        });
    });
    }

    // Select
    if (document.querySelector('.custom-select-wrapper.checkmarks-select')) {
        const selectWrappers = document.querySelectorAll('.custom-select-wrapper.checkmarks-select');

        selectWrappers.forEach(selectWrapper => {
                const select = selectWrapper.querySelector('.custom-select');
                const optionsContainer = selectWrapper.querySelector('.custom-options');
                const options = selectWrapper.querySelectorAll('.custom-option');
                const arrow = selectWrapper.querySelector('.custom-select-icon');

                select.addEventListener('click', function() {
                optionsContainer.classList.toggle('open');
                arrow.classList.toggle('rotated');
            });

            options.forEach(option => {
                option.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const checkbox = option.querySelector('input[type="checkbox"]');
                    if (!checkbox.disabled) {
                    checkbox.checked = !checkbox.checked;
                    }
                });
            });

            document.addEventListener('click', function(e) {
                if (!selectWrapper.contains(e.target)) {
                    optionsContainer.classList.remove('open');
                }
            });
        });
    }

    if (document.querySelector('.custom-select-wrapper.simple-select')) {
        const selectWrappers = document.querySelectorAll('.custom-select-wrapper.simple-select');

        selectWrappers.forEach(selectWrapper => {
            const select = selectWrapper.querySelector('.custom-select');
            const optionsContainer = selectWrapper.querySelector('.custom-options');
            const options = selectWrapper.querySelectorAll('.custom-option');
            const arrow = selectWrapper.querySelector('.custom-select-icon');

            select.addEventListener('click', function() {
            optionsContainer.classList.toggle('open');
            arrow.classList.toggle('rotated');
            });

            options.forEach(option => {
            option.addEventListener('click', function() {
                select.querySelector('span').textContent = option.textContent;
                select.querySelector('span').setAttribute('data-value', option.getAttribute('data-value'));
                optionsContainer.classList.remove('open');
            });
            });

            document.addEventListener('click', function(e) {
            if (!selectWrapper.contains(e.target)) {
                optionsContainer.classList.remove('open');
            }
            });
        });
    }

    // More btn
    function actionMoreBtn(btn, items, selector) {
        btn.addEventListener('click', () => {
            items.forEach(item => {
                item.classList.add(selector);
            });
            btn.style.display = 'none';
        });
    };

    if (document.querySelector('.product__cards-more')) {
        const moreBtn = document.querySelector('.product__cards-more'),
              productCards = document.querySelectorAll('.product__card');

        actionMoreBtn(moreBtn, productCards, 'show');
    }

    if (document.querySelector('.product__reviews-more')) {
        const moreBtn = document.querySelector('.product__reviews-more'),
              reviews = document.querySelectorAll('.product__reviews-tree');
              
        actionMoreBtn(moreBtn, reviews, 'show');
    }

    if (document.querySelector('.news__container')) {
        const moreBtn = document.querySelector('.product__cards-more'),
              reviews = document.querySelectorAll('.cosmetics__card');
              
        actionMoreBtn(moreBtn, reviews, 'show');
    }

    // Accordion
    if (document.querySelector('.product__accordion-item')) {
        const accordionItems = document.querySelectorAll('.product__accordion-item');

        accordionItems.forEach(item => {
            const question = item.querySelector('.accordion-question'),
                  answer = item.querySelector('.accordion-answer'),
                  icons = item.querySelectorAll('.accordion__ico');
            
            question.addEventListener('click', () => {
                answer.classList.toggle('show');
                icons.forEach(ico => ico.classList.toggle('show'));
            });
        });
    }

    // Counter
    if (document.querySelector('.counter')) {
        const counters = document.querySelectorAll('.counter');

        counters.forEach(counter => {
            const counterValue = counter.querySelector('.counter-value');
            const btns = counter.querySelectorAll('.counter-btn');
            let value = +counterValue.textContent;

            btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if (btn.classList.contains('counter-minus')) {
                        if (value <= 1) {
                            value = 1
                        } else {
                            value -= 1;
                        }
                    } else {
                        value += 1;
                    }
                    counterValue.textContent = value;
                });
            });
        });
    }

    // Tabs
    function tabs(options, tabs, dataAttr, activeClass) {
        options.forEach(option => {
            option.addEventListener('click', () => {
                options.forEach(item => {
                    item.classList.remove(activeClass);
                });
                tabs.forEach(tab => {
                    tab.classList.remove('tab-show');

                    if (option.getAttribute(dataAttr) == tab.getAttribute(dataAttr)) {
                        if (activeClass) {
                            option.classList.add(activeClass);
                        }
                        tab.classList.add('tab-show');
                    }
                });
            });
        });
    };

    if (document.querySelector('.tabs__container')) {
        const tabsOptions = document.querySelectorAll('.tabs-option'),
              tabsItems = document.querySelectorAll('.tabs-item');
        
        const tabsOptions2 = document.querySelectorAll('.tabs-option-2'),
              tabsItems2 = document.querySelectorAll('.tabs-item-2');

        tabs(tabsOptions, tabsItems, 'data-tab')
        tabs(tabsOptions2, tabsItems2, 'data-tab', 'active-option')
    }

    const submenuBlocks = document.querySelectorAll('.header__submenu-block');
          
    submenuBlocks.forEach(block => {
        const blockLink = block.querySelector('.submenu__block-title');
        const list = block.querySelector('.header__submenu-list');
        const ico = block.querySelectorAll('.header__menu-ico');

        blockLink.addEventListener('click', () => {
            list.classList.toggle('show');
            ico.forEach(item => {
                item.classList.toggle('show');
            });
        });

    });

    const burgerBtn = document.querySelector('.burger-btn'),
          burgerMenu = document.querySelector('.menu-section'),
          burgerClose = burgerMenu.querySelector('.header__burger-close');

    burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.add('show');
    });

    burgerClose.addEventListener('click', () => {
        burgerMenu.classList.remove('show');
    });

    // info ballons
    const ballons = document.querySelectorAll('.product__info-ballon');

    ballons.forEach(ballon => {
        const img = ballon.querySelector('.product__ballon-img'),
              block = ballon.querySelector('.info__ballon-block');
        
        img.addEventListener('mouseover', () => {
            block.classList.add('show');
        });
        img.addEventListener('mouseout', () => {
            block.classList.remove('show');
        });
    });

    // Sliders
    const stockSlider = new Swiper('.stock-slider', {
        slidesPerView: 1.3,
        spaceBetween: 24,
        navigation: {
          nextEl: '.stock-next',
          prevEl: '.stock-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            767: {
                slidesPerView: 2
            }
        }
    });

    const faceSlider = new Swiper('.face-slider', {
        slidesPerView: 1.3,
        spaceBetween: 24,
        navigation: {
          nextEl: '.face-next',
          prevEl: '.face-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            767: {
                slidesPerView: 2
            }
        }
    });

    const hairSlider = new Swiper('.hair-slider', {
        slidesPerView: 1.3,
        spaceBetween: 24,
        navigation: {
          nextEl: '.hair-next',
          prevEl: '.hair-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            767: {
                slidesPerView: 2
            }
        }
    });

    const reviewsSlider = new Swiper('.reviews-slider', {
        slidesPerView: 1.3,
        spaceBetween: 24,
        navigation: {
          nextEl: '.reviews-next',
          prevEl: '.reviews-prev',
        },
        breakpoints: {
            992: {
                slidesPerView: 3
            },
            767: {
                slidesPerView: 2
            }
        }
    });

    const cosmeticsSlider = new Swiper('.cosmetics-slider', {
        slidesPerView: 1.3,
        spaceBetween: 24,
        navigation: {
          nextEl: '.cosmetics-next',
          prevEl: '.cosmetics-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            767: {
                slidesPerView: 2
            }
        }
    });

    const productPageSlider = new Swiper('.product-page-slider', {
        slidesPerView: 1.3,
        spaceBetween: 24,
        navigation: {
          nextEl: '.product-page-next',
          prevEl: '.product-page-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            767: {
                slidesPerView: 2
            }
        }
    });

    const articlesSlider = new Swiper('.articles-slider', {
        slidesPerView: 1.3,
        spaceBetween: 24,
        navigation: {
          nextEl: '.articles-next',
          prevEl: '.articles-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            767: {
                slidesPerView: 2
            }
        }
    });
});