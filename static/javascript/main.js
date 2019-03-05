'use strict';

var $nav = $('.navbar');
var isMobile = false;



$(document).ready( function(){
 //________________________________________ [ navbar changes on scroll down ]
	function scrolledEvent(){
		if ( $(window).scrollTop() > 60) {
			if (!$nav.hasClass('scrolled')) {
				$nav.addClass("scrolled");
				}
			} else { // scrollTop < 60
				if ($nav.hasClass('scrolled')) {
					$nav.removeClass('scrolled');
				} //end if
			} //end else
		}

	$(window).on('scroll', scrolledEvent);

	//________________________________________ [ navbar button change burger to X on click ]

	$('.navbar-toggle').on('click', function(){
		if (! $(this).hasClass('burgerToX')) { $(this).addClass('burgerToX'); } else { if ($(this).hasClass('burgerToX')){ $(this).removeClass('burgerToX'); } }
		$('.navbar-header').toggleClass('fillHeader' );
	});


//_________________________________________[ smooth scroll to sections when clicking on nav buttons  ]

	if(  $(window).width() < 768 ){ isMobile = true ;}

	$('.linkTo', $nav).click(function(event){
		event.preventDefault();
		var $target = $(event.target);
		//console.log('section offset is:'+ $($target.attr('href')).offset().top);
		if (!isMobile) {
			$("body,html").animate({scrollTop: $($target.attr('href')).offset().top},
				1200,
				'easeInOutCubic'
			); //end animate
		} else {
			$("body,html").animate(	{ scrollTop :  $($target.attr('href')).offset().top - 50 },
				1000,
				'easeInOutCubic'
			);
			$('.navbar-collapse').removeClass('in');
			$('.navbar-toggle').removeClass('burgerToX');
		}
		}); // end click

}); // END DOC READY
