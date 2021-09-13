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


	let flags = $(".pricing-page .flags .flags-data .flags-content"),
		currencyCard = $(".currency .cards");
	flags.click(function () {
		$(this).addClass("active").siblings().removeClass("active");
		currencyCard.hide();
		$($(this).data("flag")).css("display", "flex");
		console.log($(this).data("flag"));
	})

	window.addEventListener('resize', function (e) {
		if (e.target.innerWidth >= 1024) {
			$('.navbar').removeClass('is-active')
		}
	})

	new WOW().init();

	var swiper = new Swiper(".homeSlider", {
		autoplay: {
			delay: 10000
		},
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	$('.menu-btn').click(function () {
		$('.navbar').toggleClass('is-active')
	})
});


var
	pathes = document.querySelectorAll(".contact-content .pathes"),
	countries = document.querySelectorAll(".contact-content .country"),
	countriesArray = Array.from(countries);


	countriesArray.forEach((country) => {
		country.addEventListener("mouseenter", function (e) {
			countriesArray.forEach((ele) => {
				ele.classList.remove("active");
			});
	
			e.currentTarget.classList.add("active");
	
			document
				.querySelector("." + e.currentTarget.dataset.country)
				.classList.add("active");
		});
	
		//   Remove active from Pathes on mouseleave
		country.addEventListener("mouseleave", function (e) {
			this.classList.remove("active");
			document
				.querySelector("." + e.currentTarget.dataset.country)
				.classList.remove("active");
		});
	});