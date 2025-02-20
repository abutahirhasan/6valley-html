document.addEventListener("DOMContentLoaded", () => {
	("use strict");

	//>> Sticky Header Js Start <<//
	$(window).scroll(function () {
		if ($(this).scrollTop() > 250) {
			$("#header-sticky").addClass("sticky");
		} else {
			$("#header-sticky").removeClass("sticky");
		}
	});

	//>> Wow Animation Start <<//
	new WOW().init();

	//>> Nice Select Start <<//
	$("select").niceSelect();

	//>> Testimonial Slider Start <<//
	const bannerSectionWrap = new Swiper(".banner-section-wrap", {
		spaceBetween: 30,
		speed: 1500,
		loop: true,
		effect: "fade",
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			1199: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 1,
			},
			575: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
	});

	//>> Testimonial Slider Start <<//
	const testimonialSlider = new Swiper(".testimonial-slider", {
		spaceBetween: 30,
		speed: 1500,
		loop: true,
		navigation: {
			nextEl: ".array-prev",
			prevEl: ".array-next",
		},
		breakpoints: {
			1199: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 1,
			},
			575: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
	});
});