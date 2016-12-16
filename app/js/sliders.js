$(document).ready(function() {
/*_____Слайдер_____*/
	$('.slider').bxSlider({
		captions: true,
		ticker: false,
		controls: false
	});
	$('.card-slider').bxSlider({
		pagerCustom: '.bx-pager',
		controls: false
	});
});