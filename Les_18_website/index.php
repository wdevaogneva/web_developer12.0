<?php include 'header.php'; ?>

		<section class="main">

			<div class="container">
				<div class="main-text__form">
					<div class="form-title">
						Получите индивидуальное предложение <br>на производство и поставку гофропродукции
						<span class="form-title__important">
							Образцы упаковки бесплатно!
						</span>
					</div>
					<!-- /.form-title -->
					<form action="mailer/smart.php" method="POST" class="form">
						<input class="form__input" type="tel" name="user_phone" required placeholder="Введите номер телефона" >
						<button class="button button_big" type="submit">Оставить заявку!</button>
						<small class="form-small">*Минимальный заказ 500шт </small>
					</form>
					<!-- /.form -->
				</div>
				<!-- /.main-text__form -->
			</div>
			<!-- /.container -->

			<div class="main-slider">
					<div class="main-slider_slide main-slider_slide-1 dark-bg">
						<div class="container">
								<div class="row">
									<div class="col-12 col-md-5">									
										<div class="main-img hidden-s-mobile">
											<img class= "main-img-old animate-main" src="img/main/main-img.png" alt="Картон">
										</div>
										<!-- /.main-img -->
									</div>
									<!-- /.col-12 col-lg-5-->
						
									<div class="col-12 col-md-7">
										<div class="main-text">
											<h1 class="main-text__title">
												Производство упаковки из гофрокартона
											</h1>
											<!-- /.main-text__title -->
											<div class="main-text__subtitle">
												с доставкой по всей России
											</div>
											<!-- /.main-text__subtitle -->
										</div>
										<!-- /.main-text -->
									</div>
									<!--/.col-12 col-lg-7 -->
								</div>
								<!--/.row -->
							</div>
							<!--/.container -->
						</div>
					<!-- /.slide slide-1-->

					<div class="main-slider_slide main-slider_slide-2 dark-bg">
						<div class="container">
								<div class="row">
									<div class="col-12 col-md-5">									
										<div class="main-img hidden-s-mobile">
											<img class= "main-img-new " src="img/main/main-img-2.png" alt="Лоток">
										</div>
										<!-- /.main-img -->
									</div>
									<!-- /.col-12 col-lg-5-->
						
									<div class="col-12 col-md-7">
										<div class="main-text">
											<h1 class="main-text__title">
												Производство лотков из гофрокартона
											</h1>
											<!-- /.main-text__title -->
											<div class="main-text__subtitle">
												с доставкой по всей России
											</div>
											<!-- /.main-text__subtitle -->
										</div>
										<!-- /.main-text -->
									</div>
									<!--/.col-12 col-lg-7 -->
								</div>
								<!--/.row -->
							</div>
							<!--/.container -->
						</div>
					<!-- /.slide slide-2-->
			</div>
			<!-- /.main-slider-->
		</section>

<?php include 'footer.php'; ?>
