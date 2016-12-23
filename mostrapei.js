$(document).ready(function() {

	(function () {
	    var width = screen.width,
	        height = screen.height;
	    setInterval(function () {
	        if (screen.width !== width || screen.height !== height) {
	            width = screen.width;
	            height = screen.height;
	            $(window).trigger('resolutionchange');
	        }
	    }, 50);
	}());

	$(".button-collapse").sideNav({

	 	menuWidth: 240, // Default is 240
	    edge: 'right', // Choose the horizontal origin
	    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
	    draggable: true // Choose whether you can drag to open on touch screens

	});

	$('.scrollspy').scrollSpy({
	 	scrollOffset: 0
	});

    $('.carousel.carousel-slider').carousel({full_width: true});


    $('.carousel').carousel({dist:0});

    window.setInterval(function() {
    	$('.carousel').carousel('next')
    }, 4000);

    $(window).bind('resolutionchange', function() {
    	$('.button-collapse').sideNav('hide');
    });

});
