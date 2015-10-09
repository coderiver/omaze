head.ready(function() {

	// search
	(function () {
		var btn    = $('.js-btn-search'),
			search = $('.search');
		btn.on('click', function () {
			btn.toggleClass('is-active');
			search.slideToggle();
		});
	}());

	// slider
	(function () {
		var sl = $('.js-sl');
		if (sl.length) {
			sl.slick({
				slidesToShow: 2,
				slidesToScroll: 2
			});
		};
	}());

	// history
	(function () {
		var sl = $('.js-history');
		if (sl.length) {
			sl.slick({
				rows: 2,
				slidesPerRow: 2
			});
		};
	}());

	// pacients
	(function () {
		var sl = $('.js-pacients');
		if (sl.length) {
			sl.slick({
				slidesToShow: 2,
				slidesToScroll: 2
			});
		};
	}());

	// accordion
	(function () {
		var accordion = $('.js-accordion'),
			head      = $('.js-accordion-head');
			body      = $('.js-accordion-body');
		head.on('click', function () {
			var _this  = $(this),
				parent = _this.parent(),
				_body  = _this.next();
			if (!parent.hasClass('is-active')) {
				accordion.removeClass('is-active');
				parent.addClass('is-active');
				body.slideUp();
				_body.slideDown();
			}
			else {
				accordion.removeClass('is-active');
				body.slideUp();
			}
		});
	}());
	
});