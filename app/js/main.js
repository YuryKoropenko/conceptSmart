$(document).ready(function() {

	$(".menu__item a").on("click", function() {
		return false
	});
	$(".menu__item").hover(function() {
		$(this).children(".submenu").stop(false, false).fadeIn(300);
	}, function() {
		$(this).children(".submenu").stop(false, false).fadeOut(300);
	});
});