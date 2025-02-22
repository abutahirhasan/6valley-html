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

	$(".bar-toggle").on("click", function (e) {
		e.stopPropagation(); // Prevent click from bubbling to the document
		$(".main-menu").toggleClass("active");
	});

	// Click outside to remove "active" class
	$(document).on("click", function (e) {
		if (!$(e.target).closest(".main-menu, .bar-toggle").length) {
			$(".main-menu").removeClass("active");
		}
	});
	$(".menu-item a").on("click", function (e) {
		if ($(window).width() <= 1199) {
			// Check if the screen width is 1199px or below
			e.preventDefault(); // Prevent default link action
			$(this).siblings("ul").slideToggle(300);
		}
	});

	//>> Wow Animation Start <<//
	new WOW().init();

	//>> Nice Select Start <<//
	$("select").niceSelect();

	//>> Testimonial Slider Start <<//
	const heroSlideWrap = new Swiper(".hero-slide-wrap", {
		spaceBetween: 10,
		speed: 1500,
		loop: true,
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
	const flashSlideWrapper = new Swiper(".flash-slide-wrapper", {
		spaceBetween: 30,
		speed: 1500,
		loop: true,
		navigation: {
			nextEl: ".array-prev",
			prevEl: ".array-next",
		},
		breakpoints: {
			1199: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
			767: {
				slidesPerView: 4,
				spaceBetween: 16,
			},
			575: {
				slidesPerView: 3,
				spaceBetween: 16,
			},
			0: {
				slidesPerView: 2,
				spaceBetween: 12,
			},
		},
	});

	//CountDown Timer
	function startCountdown(durationInSeconds) {
		let countdownTime = durationInSeconds * 1000;
		const countdownElement = {
			days: document.getElementById("days"),
			hours: document.getElementById("hours"),
			minutes: document.getElementById("minutes"),
			seconds: document.getElementById("seconds"),
		};
		function updateCountdown() {
			let timeLeft = countdownTime;
			let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
			let hours = Math.floor(
				(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

			countdownElement.days.textContent = days.toString().padStart(2, "0");
			countdownElement.hours.textContent = hours.toString().padStart(2, "0");
			countdownElement.minutes.textContent = minutes
				.toString()
				.padStart(2, "0");
			countdownElement.seconds.textContent = seconds
				.toString()
				.padStart(2, "0");

			if (countdownTime <= 0) {
				clearInterval(timer);
				alert("Flash Deal Expired!");
			}
			countdownTime -= 1000;
		}
		updateCountdown();
		const timer = setInterval(updateCountdown, 1000);
	}
	startCountdown(23 * 24 * 60 * 60);
});
