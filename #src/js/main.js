$('.slider').slick({
    infinite: true,
    slidesToShow:1,
    slidesToScroll:1})


document.querySelector('.menu-burger__header').addEventListener('click', function(){
    document.querySelector('.menu-burger__header').classList.toggle('open-menu');
    document.querySelector('.header-nav-ul').classList.toggle("open-menu");
})



document.querySelector('.menu-burger__header').addEventListener('click', function(event){
    document.querySelector('.menu-burger__header').classList.toggle('active');
    document.querySelector('body').classList.toggle("fixed-page");
})


// КНОПКА ВВЕРХ

arrowTop.onclick = function() {
  window.scrollTo(pageXOffset, 0);
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener('scroll', function() {
  arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});


// Настройка фильтра PROJECTS

let btnsFilterContainer = document.querySelector('.button-projects'); 
let removeClass = function(arr, className){
    arr
    .filter(btn => btn.classList.contains(className))
    .map(btn => btn.classList.remove(className));
};

btnsFilterContainer.addEventListener('click', function(e) {
    let target = e.target;
    if (!e.target.closest('button')) return;
    let btn = e.target.closest('button');
    if (btn.classList.contains('active')) return;
    let btns = document.querySelectorAll('.button-projects button');

    // for (let i = 0; i < btns.length; i++) {
    //     let btn = btns[i];
    //     if (btn.classList.contains('active')) {
    //         btn.classList.remove('active');
    //     }
    // }
let arrBtns = Array.prototype.slice.call(btns);

    removeClass(arrBtns, 'active');

    btn.classList.add('active');

    let btnId = btn.id;
    let blocks = document.querySelectorAll('.page-projects-item')
    let arrBlocks = Array.prototype.slice.call(blocks);

    removeClass(arrBlocks, 'hide');
    if (btnId == 'all') return;

    arrBlocks
    .filter(block => (block.dataset.var != btnId))
    .map(block => block.classList.add('hide'));
});