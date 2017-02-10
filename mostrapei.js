$(document).ready(function() {

	$(".button-collapse").sideNav({

	 	menuWidth: 240, // Default is 240
	    edge: 'right', // Choose the horizontal origin
	    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
	    draggable: true // Choose whether you can drag to open on touch screens

	});

	$('.scrollspy').scrollSpy({
	 	scrollOffset: 0
	});

    $(document).ready(function(){
      $('.slider').slider({full_width: true, indicators: false});
    });

    $('.address-wrapper').hover(function() {
    	$(this).children('.balloon').fadeToggle(300);
    });

     $(document).ready(function(){
	    $('.modal').modal();
  	});

});
