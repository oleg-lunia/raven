$('.slider').slick({
    infinite: true,
    slidesToShow:1,
    slidesToScroll:1,
    responsive: [
      {
        breakpoint: 988,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });


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