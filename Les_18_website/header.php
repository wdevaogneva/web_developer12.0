<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<link rel="icon" href="img/box-ico.png">
		<title>ДОБРЫЙ КАРТОН</title>

		<!-- bootstrap -->
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<!-- Анимация -->
		<link href="css/animate.css" rel="stylesheet">

		<!-- слайдер -->
		<link rel="stylesheet" href="slick/slick.css">
		<link rel="stylesheet" href="slick/slick-theme.css">
		
		<!-- <link href="css/fotorama.css" rel="stylesheet"> -->
		<link href="css/style.css?1.0.5" rel="stylesheet">
		<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript">
    </script>
    <script src="js/map-script.js"></script>
    <!-- Yandex.Metrika counter --> 
    <script type="text/javascript" >
     (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter47954588 = new Ya.Metrika({ id:47954588, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); 
  	</script>
	  <noscript>
	  	<div>
	  		<img src="https://mc.yandex.ru/watch/47954588" style="position:absolute; left:-9999px;" alt="" />
	   	</div>
	  </noscript>
	  <!-- /Yandex.Metrika counter -->
	</head>

	<body>

		



		<header class="header" id="about-company">
			<div class="header-fix">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-2 col-md-12">
							<div class="menu-mobile">
								<a href="#menu" class="menu-mobile-link">
									<span class="menu-mobile__line">						
									</span>
									<div class="menu-mobile__text">меню</div>
								</a>						
							</div>
							<!-- /.menu-mobile -->
						</div>
						<!-- /.col-1 -->
				
						<div class="col-2 col-md-4">
							<div class="header-logo">
							</div>
							<!-- /.header__logo -->
						</div>
						<!-- /.col-3 -->
						<div class="col-8 col-md-8">
							<div class="header-contacts">
								<div class="header-contacts__phones">
									<div class="header-contacts__phone">8 (347) <span>271-54-28</span></div>
									<!-- /.header-contacts__phone -->
									<div class="header-contacts__phone phone-right">8 (937) <span>363-30-00</span></div>
									<!-- /.header-contacts__phone -->
								</div>
								<!-- /.header-contacts__phones -->
								<button class="header-contacts__button button" value="Заказать">
									<img src="img/phone-call-ico.png" alt="Телефон">
									<span class="hidden-mobile">Заказать звонок</span>
								</button>
								<!-- /.header-contacts__button -->
							</div>
							<!-- /.header__contacts -->
						</div>
						<!-- /.col-9 -->
					</div>
					<!-- /.row -->
				</div>
				<!-- /.container -->
			</div>
			<!-- /.header-fix -->
		</header>



<!-- ============================================= -->


<section class="navigation">
	<div class="menu" id="menu-close"	>
		<div class="container">
			<ul class="menu-ul">
				<li class="menu-li">
					<a href="index.php" class="menu-link menu-link-first">о компании</a>
				</li>
				<li class="menu-li">
					<a href="advantages.php" class="menu-link">преимущества</a>
				</li>
				<li class="menu-li">
					<a href="production.php" class="menu-link">производство</a>
				</li>
				<li class="menu-li">
					<a href="offer.php" class="menu-link">склад</a>
				</li>
				<li class="menu-li">
					<a href="products.php" class="menu-link">продукция</a>
				</li>
				<li class="menu-li">
					<a href="clients.php" class="menu-link">наши клиенты</a>
				</li>
				<li class="menu-li">
					<a href="feedback.php" class="menu-link">сертификаты</a>
				</li>
				<li class="menu-li">
					<a href="feedback.php" class="menu-link">отзывы</a>
				</li>
				<li class="menu-li">
					<a href="contacts.php" class="menu-link">контакты</a>
				</li>
			</ul>
		</div>
		<!-- /.menu -->
	</div>
	<!-- /.container -->

	</section>
<!-- /.menu -->
 <!-- ============================================= -->
	<!-- модальное окно -->
	<div class="overlay">
		<div class="popup">
			<div class="popup-title">
				Форма обратной связи
			</div>
			<!-- /.popup-title -->
			<div class="popup-close">
				&times;
			</div>
			<!-- /.popup-close -->
			<div class="popup-form">
				<form action="mailer/smart.php" method="POST" class="main-form" onsubmit="yaCounter47954588.reachGoal('submitOk', function () { alert('Спасибо за обращение! Мы скоро Вам перезвоним!');}); return true;">
					<div class="popup-form-header">
						Получите индивидуальное предложение
						<span>на производство и поставку изделий</span>
					</div>
					<!-- /.popup-form-header -->
					<label for="phone" class="popup-form__label">Введите ваш номер телефона:</label>
					<input type="tel" class="popup-form__input" name="user_phone" required placeholder="+7 (XXX) XXX-XX-XX">
					<button class="button popup-form__btn" value="отправить">
						Оставить заявку!
					</button>
					<div class="popup-form__note">*Минимальный заказ 500шт 
					</div>
				</form>
			</div>
			<!-- /.popup-form -->
		</div>
		<!-- /.popup -->
	</div>
	<!-- /.overlay -->

	



<!-- ============================================= -->