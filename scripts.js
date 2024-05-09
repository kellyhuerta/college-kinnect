// Back to Top Button functionality
window.onscroll = function () {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		document.getElementById('backToTopBtn').style.display = 'block';
	} else {
		document.getElementById('backToTopBtn').style.display = 'none';
	}
};

function topFunction() {
	$('html, body').animate({ scrollTop: 0 }, 'slow');
}

// Smooth Scrolling for all anchor links
$(document).ready(function () {
	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			if (
				location.pathname.replace(/^\//, '') ==
					this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length
					? target
					: $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					event.preventDefault();
					$('html, body').animate(
						{
							scrollTop: target.offset().top,
						},
						1000,
						function () {
							target.focus();
							if (!target.is(':focus')) {
								target.attr('tabindex', '-1');
								target.focus();
							}
						}
					);
				}
			}
		});

	// Delayed Content Display only on "Home" page
	if ($('body').hasClass('home')) {
		$('.main-content').hide().delay(500).fadeIn(2000);
	}

	// Random Welcome Message on "Home" page
	$(document).ready(function () {
		var greetings = [
			'Welcome to College Kinnect!',
			'Discover Connections, Discover Campus Life!',
			'Join Us and Start Your Journey Today!',
		];
		var randomGreeting =
			greetings[Math.floor(Math.random() * greetings.length)];
		$('#welcomeMessage').text(randomGreeting);
	});

	// Fade toggle for an image on "About Us" page
	$(document).ready(function () {
		$('#toggleImageBtn').click(function () {
			var image = $(this).parent().find('img');
			var caption = $(this).parent().find('figcaption');
			image.fadeToggle('slow');
			caption.fadeToggle('slow');
		});
	});

	// Accordion functionality on "About Us" page
	$(document).ready(function () {
		$('.accordion')
			.off('click')
			.on('click', function () {
				$(this).toggleClass('active');
				var panel = $(this).next('.panel');
				if (panel.css('max-height') !== '0px') {
					panel.css('max-height', '0');
				} else {
					panel.css('max-height', panel.prop('scrollHeight') + 'px');
				}
			});
	});

	// Interactive form feedback on the "Contact Us" page
	$('input, textarea')
		.focus(function () {
			$(this).css('background-color', '#ddd');
		})
		.blur(function () {
			$(this).css('background-color', '#ffffff');
		});
});
