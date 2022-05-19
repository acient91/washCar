$ (function () {

  // $('.service__link').on('click', function(e){
  //   e.preventDefault();
  //   $('.service__link').removeClass('.service__link--active');
  //   $(this).addClass('service__link--active');

  //   $('.service__tab').removeClass('service__tab--active');
  //   $($(this).attr('href')).addClass('service__tab--active');
  // });

  $('.service__link').on('click', function (e) {
    e.preventDefault();
    $('.service__link').removeClass('service__link--active');
    $(this).addClass('service__link--active');

    $('.service__wrapper').removeClass('service__wrapper--active');
    $($(this).attr('href')).addClass('service__wrapper--active');
  });


  $(window).scroll(function () {

    if ($(this).scrollTop() != 0) {

      $('.footer__btn').fadeIn();

    } else {

      $('.footer__btn').fadeOut();

    }

  });

  $('.footer__btn').click(function () {

    $('body,html').animate({
      scrollTop: 0
    }, 800);

  });

  $('.services__item-link').on('click', function () {
    $('.services__popup-content').toggleClass('services__popup-content--active')    
  })

  $('.select-style').styler();

  $('.slider__small').slick({  
    asNavFor: '.slider__big',
    slidesToShow: 2,
    dots: false,
    arrows: true,    
    nextArrow: '<button type="button" class="slick-next"><svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM40 9H1V7H40V9Z"    fill="#1F49DB"/></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z" fill="#1F49DB"/></svg></button>',    
  });

  $('.slider__big').slick({
    asNavFor: '.slider__small',
    slidesToShow: 1,
    slidesToScroll: 1,    
    fade: true,
    dots: false,
    arrows: false,
  });
})


// $(document).ready(function () {
//   //Скрыть PopUp при загрузке страницы    
//   PopUpHide();
// });
// //Функция отображения PopUp
// function PopUpShow() {
//   $(".services__popup").show();
// }
// //Функция скрытия PopUp
// function PopUpHide() {
//   $(".services__popup").hide();
// }




