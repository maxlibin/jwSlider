$(function(){
	
	/** start of animations **/
	// create the function of the first time start animation
	function BoxComeIn() {
		// the mainholder slide in
		$('.holder').stop().animate(
		{ left: 0 }, {
			duration: 1200,
			// using jquery easig plugin for easing.
			easing: 'easeOutQuart'
		});
	}
	// start the funtion 
	BoxComeIn();
	
	function scrollDown(){
		var ulTopMargin = parseInt($('.holder ul').css('marginTop'));
			
			/*------------------------------------------------*/
			/* Get the current index number of the slide in **/
				var myNumeberM  = $('.holder ul li.current').index() + 2;
				// User the Index Number to put into the Current Step Number	
				// Maker Text				
				if(myNumeberM == '7'){
					$('.page_icons p span').text('6');
				} else {
					$('.page_icons p span').text(myNumeberM);
				}
			/*-----------------------------------------------*/	
			$('.holder ul li.current').next().stop(true).fadeIn(function(){
				$(this).addClass('current');
				$(this).prev().stop(true,true).animate({
					marginTop: '-400px',
					opacity: 0	
				},200).fadeOut();
				$(this).prev().removeClass('current');
				$(this).stop(true,true).animate({
					opacity:1,
					marginTop:'0px'	
				},{
					duration:600,
					easing: 'easeOutBack'
				})
			});
			
			$('.contents_holder ul li.current').next().stop(true).fadeIn(function(){
				$(this).addClass('current');
				$(this).prev().stop(true,true).animate({
					marginLeft: '-100px',
					opacity: 0	
				},100).fadeOut();
				$(this).prev().removeClass('current');
				$(this).stop(true,true).animate({
					opacity:1,
					marginLeft:'0px'	
				},{
					duration:600,
					easing: 'easeOutBack'
				})
			});
			
	}
	function scrollUp(){
			/* Get the current index number of the slide in **/				
			var myNumeber  = parseInt ($('.holder ul li.current').index());
			
			if(myNumeber == "0"){
				$('.page_icons p span').text('1');		
			} else {
				$('.page_icons p span').text(myNumeber);
				
			/*-----------------------------------------------*/	
			
			$('.holder ul li.current').prev().stop(true).fadeIn(function(){
				$(this).addClass('current');
				
				$(this).next().stop(true,true).animate({
					marginTop: '400px',
					opacity: 0	
				},200).fadeOut();
				$(this).next().removeClass('current');
				
				$(this).stop(true,true).animate({
					opacity:1,
					marginTop:'0px'	
				},{
					duration:600,
					easing: 'easeOutBack'
				})
				
			});
			
			$('.contents_holder ul li.current').prev().stop(true).fadeIn(function(){
				$(this).addClass('current');
				
				$(this).next().stop(true,true).animate({
					marginLeft: '100px',
					opacity: 0	
				},100).fadeOut();
				$(this).next().removeClass('current');
				
				$(this).stop(true,true).animate({
					opacity:1,
					marginLeft:'0px'	
				},{
					duration:600,
					easing: 'easeOutBack'
				})
			});
			
		}	
	}		
	$('.holder ul li:first').fadeIn(function(){
		$(this).animate({opacity:1, marginTop:'0px'	})	
	});
	$('.contents_holder ul li:first').fadeIn(function(){
		$(this).animate({opacity:1, marginLeft:'0px'	},{
			duration:600,
			easing:	'easeOutBack'
		})	
	});
	// on wheel scroll
	$('body').bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
       scrollUp();
	  // $('#maker').one('mousewheel');
    }
    else {
        scrollDown();
		//$('#maker').one('mousewheel');
		}
	});
	
	$('body').mousewheel(function(event, delta, deltaX, deltaY) {					
		if (delta > 0){
			scrollUp();
		} else {
			scrollDown();	
		}
	});
	
	// on click of right side and leftside
	// click on rightside
	$('.nav a.right').click(function(){
		scrollDown();
		return false;
	})

	// click on left side 
	$('.nav a.left').click(function(){
		 scrollUp();
		 return false;
	})
	

})