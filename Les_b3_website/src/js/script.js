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
 	asNavFor: '.production-slider__bottom'

});

$('.production-slider__bottom').slick({
 	arrows: true,
 	slidesToShow: 4,
 	slidesToScroll: 1,
 	prevArrow: '<div class="slider-arrow slider-arrow__left_prod slider-arrow__left"></div>',
 	nextArrow: '<div class="slider-arrow slider-arrow__right_prod slider-arrow__right"></div>',
 	asNavFor: '.production-slider__top',
 	 


 });

$('.feedback-slider').slick({
	arrows: true,
	slidesToShow: 3,
 	slidesToScroll: 1,
 	prevArrow: '<div class="slider-arrow slider-arrow__left_feedback slider-arrow__left"></div>',
 	nextArrow: '<div class="slider-arrow slider-arrow__right_feedback slider-arrow__right"></div>',

});


$('.main-slider').slick({
	arrows: true,
	slidesToShow: 1,
 	slidesToScroll: 1,
 	prevArrow: '<div class="slider-arrow slider-arrow__left_feedback slider-arrow__left"></div>',
 	nextArrow: '<div class="slider-arrow slider-arrow__right_feedback slider-arrow__right"></div>',
 	autoplay: true,
  autoplaySpeed: 2000,
});
