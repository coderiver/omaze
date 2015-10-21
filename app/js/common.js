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
							dots: false
						}
					}
				]
			});
			preview.slick({
				asNavFor: '.js-slider',
				slidesToShow: 7,
				swipe: false,
				mobileFirst: true,
				centerMode: true,
				centerPadding: 10,
				focusOnSelect: true,
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
			item     = shipping.find('.js-shipping-item'),
			head     = shipping.find('.js-shipping-head'),
			list     = shipping.find('.js-shipping-list');
		head.on('click', function () {
			list.addClass('is-active');
			return false;
		});
		link.on('click', function () {
			var _this = $(this),
				index = _this.index(),
				text  = _this.text();
			link.removeClass('is-active');
			_this.addClass('is-active');
			item.removeClass('is-active');
			item.eq(index).addClass('is-active');
			head.text(text);
			list.removeClass('is-active');
			return false;
		});
	}());

	// masks
	(function () {
		var wrap        = $('.js-card-wrap'),
			number      = $('.js-card-number'),
			numberFull  = $('.js-card-number-full'),
			numberShort = $('.js-card-number-short'),
			date        = $('.js-card-date'),
			cvv         = $('.js-card-cvv'),
			preview     = $('.js-card-preview'),
			item        = $('.js-card-item'),
			visa        = $('.js-card-visa'),
			mastercard  = $('.js-card-mastercard'),
			amex        = $('.js-card-amex'),
			discover    = $('.js-card-discover');
		if (wrap.length) {
			number.mask('0000 0000 0000 0000', {
				placeholder: 'XXXX XXXX XXXX XXXX',
				onComplete: function (cep) {
					wrap.addClass('is-active');
					numberShort.val(cep.substring(15));
					date.focus();
				},
				onKeyPress: function (cep, e, field, options) {
					getCreditCardType(cep);
				}
			});
			numberShort.on('focus', function () {
				wrap.removeClass('is-active');
				number.focus();
			});
			// date
			date.mask('00/00', {
				placeholder: 'MM/YY',
				onComplete: function () {
					cvv.focus();
				}
			});
			// cvv
			cvv.mask('000', {
				placeholder: 'CVV'
			});
			cvv.on('focus', function () {
				preview.addClass('is-active');
			});
			cvv.on('blur', function () {
				preview.removeClass('is-active');
			});
		};
		function getCreditCardType (accountNumber){
			//start without knowing the credit card type
			item.removeClass('is-active');
			//first check for MasterCard
			if (/^5[1-5]/.test(accountNumber)) {
				item.removeClass('is-active');
				mastercard.addClass('is-active');
			}
			//then check for Visa
			else if (/^4/.test(accountNumber)) {
				item.removeClass('is-active');
				visa.addClass('is-active');
			}
			//then check for AmEx
			else if (/^3[47]/.test(accountNumber)) {
				item.removeClass('is-active');
				amex.addClass('is-active');
				number.mask('0000 0000 0000 000', {
					onComplete: function (cep) {
						wrap.addClass('is-active');
						numberShort.val(cep.substring(15));
						date.focus();
					}
				});
			}
			//then check for Discover
			else if (/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/.test(accountNumber)) {
				item.removeClass('is-active');
				discover.addClass('is-active');
			}
		}
	}());

	// select
	(function () {
		var select = $('.js-select');
		if (select.length) {
			select.each(function () {
				var _this = $(this);
				_this.on('change', function () {
					var selected = _this.find('option:selected');
					    text     = selected.text();
					_this.prev().text(text);
				});
			});
		};
	}());

	// checkbox
	(function () {
		var country  = $('.js-checkout-select-country'),
			state    = $('.js-checkout-label-state'),
			stateAll = $('.js-checkout-label-state-all'),
			wrap     = $('.js-checkout-wrap-state'),
			wrapAll  = $('.js-checkout-wrap-state-all');
		country.on('change', function () {
			var selected = $(this).find('option:selected');
			    value    = selected.val();
			if (value !== 'us') {
				state.hide();
				stateAll.show();
				wrap.hide();
				wrapAll.show();
			}
			else {
				state.show();
				stateAll.hide();
				wrap.show();
				wrapAll.hide();
			}
		});
	}());

	// product
	(function () {
		var product = $('.js-product');
		if (product.length) {
			product.each(function () {
				var _this = $(this),
					btn   = _this.find('.js-product-btn'),
					form  = _this.find('.js-product-form');
				btn.on('click', function () {
					var _this = $(this),
						textEdit  = _this.data('text-edit'),
						textClose = _this.data('text-close');
					if (_this.hasClass('is-active')) {
						_this.removeClass('is-active');
						_this.text(textEdit);
						form.removeClass('is-active');
					}
					else {
						_this.addClass('is-active');
						_this.text(textClose);
						form.addClass('is-active');
					}
					return false;
				});
			});
		};
	}());
	
});