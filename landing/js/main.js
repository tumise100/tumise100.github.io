$(function () {
  $(document).scroll(function () {
	  var $nav = $(".sticky-topt");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

const element = document.querySelector('.unlock-text');
element.classList.add('animate_animate', 'animate_zoomIn');
