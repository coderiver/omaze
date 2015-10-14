head.ready(function() {

	// slider
	(function () {
		var sl      = $('.js-slider'),
			preview = $('.js-slider-preview');
		if (sl.length) {
			sl.slick({
				asNavFor: '.js-slider-preview',
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
				asNavFor: '.js-slider',
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

	// counter
	(function () {
		var counter = $('.js-counter');
		if (counter.length) {
			counter.countdown("2016/01/01", function(event) {
				$('.js-counter-days').text(event.strftime('%D'));
				$('.js-counter-hours').text(event.strftime('%H'));
				$('.js-counter-mins').text(event.strftime('%M'));
				$('.js-counter-secs').text(event.strftime('%S'));
			});
		};
	}());

	// sizes
	(function () {
		var link  = $('.js-sizes-link'),
			sizes = $('.js-sizes');
		link.on('click', function () {
			sizes.slideToggle();
			return false;
		});
	}());

	// tabs
	(function () {
		var tabs = $('.js-tabs'),
			link = tabs.find('.js-tabs-link'),
			item = tabs.find('.js-tabs-item');
		link.on('click', function () {
			var _this = $(this),
				index = _this.index();
			link.removeClass('is-active');
			_this.addClass('is-active');
			item.removeClass('is-active');
			item.eq(index).addClass('is-active');
			return false;
		});
	}());

	// tabs
	(function () {
		var shipping = $('.js-shipping'),
			link     = shipping.find('.js-shipping-link'),
			item     = shipping.find('.js-shipping-item');
		link.on('click', function () {
			var _this = $(this),
				index = _this.index();
			link.removeClass('is-active');
			_this.addClass('is-active');
			item.removeClass('is-active');
			item.eq(index).addClass('is-active');
			return false;
		});
	}());
	
});