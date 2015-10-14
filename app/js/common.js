head.ready(function() {

	// slider
	(function () {
		var sl      = $('.js-slider'),
			preview = $('.js-slider-preview');
		if (sl.length) {
			sl.slick({
				asNavFor: '.js-slider',
				slidesToShow: 1,
				dots: true,
				mobileFirst: true,
				responsive: [
					{
						breakpoint: 719,
						settings: {
							slidesToShow: 1,
							dots: false,
							arrows: false
						}
					}
				]
			});
			preview.slick({
				asNavFor: '.js-slider-preview',
				slidesToShow: 7,
				swipe: false,
				mobileFirst: true,
				responsive: [
					{
						breakpoint: 719,
						settings: {
							slidesToShow: 5
						}
					},
					{
						breakpoint: 819,
						settings: {
							slidesToShow: 6
						}
					},
					{
						breakpoint: 1023,
						settings: {
							slidesToShow: 7
						}
					}
				]
			});
		};
	}());

	// similar
	(function () {
		var similar = $('.js-similar');
		if (similar.length) {
			similar.slick({
				arrows: false,
				slidesToShow: 2,
				variableWidth: true,
				mobileFirst: true,
				responsive: [
					{
						breakpoint: 1023,
						settings: {
							variableWidth: false,
							slidesToShow: 3
						}
					}
				]
			});
		};
	}());
	
});