		$(document).ready(function(){
		$(".nav").removeClass("default");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 20) {
					$(".nav").addClass("default").fadeIn('fast');
				} else {
					$(".nav").removeClass("default").fadeIn('fast');
				};
			});
			$("a[href*=#]").bind("click", function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top
					}, 1000);
					e.preventDefault();
			});
				return false;
		});