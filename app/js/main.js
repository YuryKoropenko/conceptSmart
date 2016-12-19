$(document).ready(function() {
/*Pop-up back-call*/
	$(".phone__communication").magnificPopup();
	$(".c-description__one-click").magnificPopup();
/*nav toggle*/
	$(".menu__item a").on("click", function() {
		return false
	});
	$(".menu__item").hover(function() {
		$(this).children(".submenu").stop(false, false).fadeIn(300);
	}, function() {
		$(this).children(".submenu").stop(false, false).fadeOut(300);
	});
/*phone*/
	$(".back-call-phone").mask("+7 (999) 999-99-99", {placeholder: "+7 (xxx) xxx-xx-xx"});
/*menu-toggle*/
	$(".nav__toggle").on("click", function() {
		$(this).parent().children(".nav").stop(true, false).fadeToggle(300);
		return false
	});
/*select*/
	$('select').each(function(){
		$(this).siblings('p').text( $(this).children('option:selected').text() );
	});
	$('select').change(function(){
		$(this).siblings('p').text( $(this).children('option:selected').text() );
	});
	$(".checkout-b__select").on("click", function() {
		$(this).parent().children("p").toggleClass("checkout-b__active");
	});
/*card*/
	$(".popup-img").click(function(){	// Событие клика на маленькое изображение
		var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup-img-active' />"+ // Само увеличенное фото
						 "</div>"); 
		$(".popup").fadeIn(800); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 800);
		});
	});
	/**/
	$(".c-description__tabs").lightTabs();
});