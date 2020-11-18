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


// (function() {
//     'use strict';
    
//     function backToTop() {
//         if (window.pageYOffset > 0) {
//             window.scrollBy(0, -80);
//             setTimeout(backToTop, 0);
//         }
//     }
    
//     var goTopBtn = document.querySelector('.back_to_top');
    
//     goTopBtn.addEventListener('click', backToTop);
// })();