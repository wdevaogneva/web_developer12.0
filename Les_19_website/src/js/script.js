/*=====всплывающее окно=====*/

/*конструкция обозначает, что выполнение кода начнется сразу же,
как наш документ будет загружен*/
$(document).ready(function(){

	// Маска ввода номера телефона (плагин maskedinput)
	$("#number").mask("+7(999)999-99-99");
	$("#number2").mask("+7(999)999-99-99");
	$("#number3").mask("+7(999)999-99-99");

	// Всплывающее окно-форма
	$('.header-contacts__button').on("click", function(){
		$('.overlay').show();
	});

	$('.button_contacts').on("click", function(){
		$('.overlay').show();
	});

	$('.popup-close').on("click", function(){
		$('.overlay').hide();
	});	

	 	//===== раскрывающееся меню =====

	var link = $('.menu-mobile-link');
	var link_active = $('.menu-mobile-link_active');
	var menu_on = $('.menu');
	var menu_ul = $('.menu-ul');
	var menu_li = $('.menu-li');
	var menu_link = $('.menu-link');
	var menu = $('.menu_min');

	link.click(function(){
		/*добавляем классы*/
		link.toggleClass('menu-mobile-link_active');
		menu_on.toggleClass('menu_min');
		menu_ul.toggleClass('menu_min-ul');
		menu_li.toggleClass('menu_min-li');
		menu_link.toggleClass('menu_min-link');
		menu.toggleClass('menu_min_active');

	});	

	link_active.click(function(){
		/*удаляем классы*/
		link.removeClass('menu-mobile-link_active');
		menu.removeClass('menu_min_active');
		menu_link.removeClass('menu_min-link');
		menu_li.removeClass('menu_min-li');
		menu_ul.removeClass('menu_min-ul');
		menu_on.removeClass('menu_min');
	});


	// Закрытие модульного окна-формы по клику вне попапа
	// работает, но блокрует закрытие по кнопке.(подозрение, что дело в z-index)
	/*$(document).mouseup(function (e) { // по клику вне попапа
	if (e.target!=menu[0]&&menu.has(e.target).length === 0){
		link.removeClass('menu-mobile-link_active');
		menu.removeClass('menu_min_active');
		menu_link.removeClass('menu_min-link');
		menu_li.removeClass('menu_min-li');
		menu_ul.removeClass('menu_min-ul');
		menu_on.removeClass('menu_min');
		}
	});*/

});


//отправка формы на почту через ajax.

$(document).ready(function(){
	$('#main-form').submit(function() {
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thx').fadeIn();
			$(this).find('input').val('');
			$('#main-form').trigger('reset');
		});
		return false;
	});	
});

$(document).ready(function(){
	$('#form').submit(function() {
				$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
			}).done(function() {
				$('.js-overlay-thx').fadeIn();
				$(this).find('input').val('');
				$('#form').trigger('reset');
			});
			return false;
	});	
});

$(document).ready(function(){
	$('#offer-form').submit(function() {
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thx').fadeIn();
			$(this).find('input').val('');
			$('#offer-form').trigger('reset');
		});
		return false;
	});	
});

	// Закрытие окна «спасибо»
$('.js-close-thx').click(function() { // по клику на крестик
	$('.js-overlay-thx').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup-thx');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-thx').fadeOut();
    }
});
  // Закрытие модульного окна-формы по клику вне попапа
$(document).mouseup(function (e) {
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay').fadeOut();
    }
});



//=====инициация анимационного файла WOW=====

new WOW().init();

//=====слайдер с http://kenwheeler.github.io/slick/=====

$('.production-slider__top').slick({
 	arrows: false,
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	fade: true,
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
 	slidesToShow: 3,
 	slidesToScroll: 1,
 	focusOnSelect: true,
 	centerMode: true,
 	prevArrow: '<div class="slider-arrow slider-arrow__left_prod slider-arrow__left"></div>',
 	nextArrow: '<div class="slider-arrow slider-arrow__right_prod slider-arrow__right"></div>',
 	asNavFor: '.production-slider__top',
 	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
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
 	     breakpoint: 992,
 	     settings: {
 	       slidesToShow: 2
 	     }
 	   },
 	   {
 	     breakpoint: 768,
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
 	autoplay: true,
  autoplaySpeed: 2000,
});







