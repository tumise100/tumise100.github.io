$(document).ready(function() {
	var scrollLink = $('.nav-link');

	//Smooth scrolling

	scrollLink.click(function(e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);


	})
})
