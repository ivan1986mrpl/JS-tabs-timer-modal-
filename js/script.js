'use strict';

document.addEventListener('DOMContentLoaded', () => {

    //==================== TABS ==========================
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {//скрытие всех табов (контента)
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {//убираем класс активности у кнопок табов
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {//i = 0 === параметр по умолчанию => передаем первый слайд (функция показа таба)
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    //==================== //TABS ==========================
















    



















});