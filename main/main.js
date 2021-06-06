$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 50,
	nav: true,

	autoplay: true,
	autoplayTimeout: 2500,
	autoplaySpeed: 1000,
	animateIn: "fadeIn",
	animateOut: "fadeOut",
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1,
		},
	},
});

var onTop = $(".onTop");

$(window).scroll(function () {
	if ($(this).scrollTop() > 300) {
		console.log("Scrolam Dole: " + $(window).scrollTop());
		onTop.fadeIn(500).css("cursor", "pointer");
		onTop.click(function () {
			$(window).scrollTop(0);
		});
	} else {
		onTop.fadeOut(500);
	}
});


$(document).ready(
   function() {
       $("form").addClass("form-slideIn");
       $("form").on("transitionend", function() {
           $("form").addClass("form-open");
           
           if ($(".form-open").width() > 450) {
            $("label").addClass("opacity");
            $("form h3").addClass("opacity");
            $("form button").addClass("opacity");
           }
       });
       
   } 
);