window.onload = function () {
    var Close = document.querySelector('.close');
    var Burger = document.querySelector('.burger');
    var Aside = document.querySelector('aside');
    Burger.addEventListener('click', function () {
        Aside.classList.toggle('show-block');
    })
    Close.addEventListener('click', function () {
        Aside.classList.toggle('show-block');
    })
}