$('#showModal').click(function (e){
  e.preventDefault()
  $('#myModal').modal('show')
})

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});



$(document).ready(function(){

	$('.slide-section').click(function(e){
		var linkHref = $(this).attr('href');
		// console.log($(linkHref).offset().top);
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top
		}, 1000);

		e.preventDefault();
	});

});
// (function($) {
//   "use strict"; // Start of use strict
//
//   // Smooth scrolling using jQuery easing
//   $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: (target.offset().top - 54)
//         }, 1000, "easeInOutExpo");
//         return false;
//       }
//     }
//   });
//
//   // Closes responsive menu when a scroll trigger link is clicked
//   $('.js-scroll-trigger').click(function() {
//     $('.navbar-collapse').collapse('hide');
//   });
//
//   // Activate scrollspy to add active class to navbar items on scroll
//   $('body').scrollspy({
//     target: '#mainNav',
//     offset: 54
//   });
//
// })(jQuery); // End of use strict
// $('.carousel').carousel({
//   interval: 2000
// });
