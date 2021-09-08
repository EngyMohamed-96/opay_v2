$(document).ready(function () {

	var
		maxHeight = 0,
		imgs = $(".careers-page .header-content .content img");

	imgs.each(function () {
		if ($(this).height() > maxHeight) {
			maxHeight = $(this).height();
		}
	})
	imgs.height(maxHeight);


	let flags = $(".pricing-page .flags .flags-data .flags-content");
	flags.click(function () {
		$(this).addClass("active").siblings().removeClass("active");
	})

	window.addEventListener('resize', function (e) {
		if (e.target.innerWidth >= 1024) {
			$('.navbar').removeClass('is-active')
		}
	})

	new WOW().init();

	var swiper = new Swiper(".homeSlider", {
		// autoplay: {
		// 	delay: 10000
		// },
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: ".swiper-pagination",
		},
	});

	$('.menu-btn').click(function () {
		$('.navbar').toggleClass('is-active')
	})
});


var
	pathes = document.querySelectorAll(".contact-content .pathes"),
	countries = document.querySelectorAll(".contact-content .countries"),
	countriesArray = Array.from(countries);

pathes.forEach((path) => {
	path.addEventListener("mouseenter", function (e) {
		pathes.forEach((ele) => {
			ele.classList.remove("active");
		});

		e.currentTarget.classList.add("active");

		document
			.querySelector("." + e.currentTarget.dataset.country)
			.classList.add("active");
	});

	//   Remove active from Pathes on mouseleave
	path.addEventListener("mouseleave", function (e) {
		this.classList.remove("active");
		document
			.querySelector("." + e.currentTarget.dataset.country)
			.classList.remove("active");
	});
});
