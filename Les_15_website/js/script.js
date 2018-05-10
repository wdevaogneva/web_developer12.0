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

new WOW().init();