const menu__open = document.querySelector('.nav__menu');
const menu__close = document.querySelector('.nav__close');
const nav__ul = document.querySelector('.nav__ul');
const drop = document.querySelectorAll('.ul__info');
const info = document.querySelectorAll('.info__1');
const arrowUp = document.querySelectorAll('.arrow__up');
const arrowDown = document.querySelectorAll('.arrow__down');

menu__open.addEventListener('click', () => {
    menu__open.className = 'nav__menu--open';
    menu__close.className = 'nav__close--active';
    nav__ul.className = 'nav__ul--active';
});

menu__close.addEventListener('click', () => {
    menu__open.className = 'nav__menu';
    menu__close.className = 'nav__close';
    nav__ul.className = 'nav__ul';
});

drop.forEach((item, index) => {
    item.addEventListener('click', () => {
        info[index].classList.toggle('info__1--active');

        arrowUp[index].classList.toggle('arrow__up--active');
        arrowDown[index].classList.toggle('arrow__down--active');
    });
});