$(document).ready(function() {
/*Pop-up back-call*/
	$(".phone__communication").magnificPopup();
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
});