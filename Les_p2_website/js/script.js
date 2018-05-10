/*=====всплывающее окно=====*/

window.jQuery || document.write('<script src="js/jquery-3.2.1.slim.min.js"><\/script>');

/*конструкция обозначает, что выполнение кода начнется сразу же,
как наш документ будет загружен*/
$(document).ready(function(){
	$('.header-contacts__button').on("click", function(){
		$('.overlay').show();

	});

	$('.popup-close').on("click", function(){
		$('.overlay').hide();

	});

});








/*=====инициация анимационного файла WOW=====*/

new WOW().init();

/*=====слайдер с http://kenwheeler.github.io/slick/=====*/

$('.production-slider__top').slick({
 	arrows: false,
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	prevArrow: '<div class="slider-arrow slider-arrow__left slider-arrow__left_feedback"></div>',
 	nextArrow: '<div class="slider-arrow slider-arrow__right slider-arrow__right_feedback"></div>',
 	asNavFor: '.production-slider__bottom',
 	responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
      }
    }
  ]

});

$('.production-slider__bottom').slick({
 	arrows: true,
 	slidesToShow: 4,
 	slidesToScroll: 1,
 	prevArrow: '<div class="slider-arrow slider-arrow__left_prod slider-arrow__left"></div>',
 	nextArrow: '<div class="slider-arrow slider-arrow__right_prod slider-arrow__right"></div>',
 	asNavFor: '.production-slider__top',
 	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }
  ]

 });

$('.feedback-slider').slick({
	arrows: true,
	slidesToShow: 3,
 	slidesToScroll: 1,
 	prevArrow: '<div class="slider-arrow slider-arrow__left_feedback slider-arrow__left"></div>',
 	nextArrow: '<div class="slider-arrow slider-arrow__right_feedback slider-arrow__right"></div>',
 		responsive: [
 	   {
 	     breakpoint: 768,
 	     settings: {
 	       slidesToShow: 2
 	     }
 	   },
 	   {
 	     breakpoint: 576,
 	     settings: {
 	       slidesToShow: 1
 	     }
 	   }
 	 ]

});


$('.main-slider').slick({
	arrows: true,
	slidesToShow: 1,
 	slidesToScroll: 1,
 	prevArrow: '<div class="slider-arrow slider-arrow__left_feedback slider-arrow__left"></div>',
 	nextArrow: '<div class="slider-arrow slider-arrow__right_feedback slider-arrow__right"></div>',
 	/*autoplay: true,*/
  autoplaySpeed: 2000,
});


/*===== раскрывающееся меню =====*/
/*проверяем документ на загрузку*/
$(document).ready(function(){
	var link = $('.menu-mobile-link');
	var link_active = $('.menu-mobile-link_active');
	var menu_on = $('.menu');
	var menu_ul = $('.menu-ul');
	var menu_li = $('.menu-li');
	var menu_link = $('.menu-link');
	var menu = $('.menu_min');
	

	link.click(function(){
		/*добавляем класс*/
		link.toggleClass('menu-mobile-link_active');
		menu_on.toggleClass('menu_min');
		menu_ul.toggleClass('menu_min-ul');
		menu_li.toggleClass('menu_min-li');
		menu_link.toggleClass('menu_min-link');
		
		menu.toggleClass('menu_min_active');

	});	

	link_active.click(function(){
		/*удаляем класс*/
		link.removeClass('menu-mobile-link_active');
	/*	menu.removeClass('menu_min_active');
		menu_link.removeClass('menu_min-link');
		menu_li.removeClass('menu_min-li');
		menu_ul.removeClass('menu_min-ul');*/
		menu_on.removeClass('menu_min');
	});

});
