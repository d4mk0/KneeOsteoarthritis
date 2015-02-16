jQuery(document).ready(function($){

	$('a[href^="#"]').click(function(){  
		var target = $(this.hash);  
		if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');  
		if (target.length == 0) target = $('html');  
		$('html, body').animate({ scrollTop: target.offset().top - 15 }, 500);  
		return false; 
	});

	$(function(){
	    initNavOpener();
	    hideMenuAfterClick();
	    // initScroll();
	});

	function initNavOpener(){
	    $('.opener-nav') .click(
	        function(){
	            $('.navigation-block').toggleClass('expanded');
	        }
	    ) 
	}

	function hideMenuAfterClick() {
	    if($(window).width() < 769) {
	        $('.navigation a').on('click', function() {
	            $('.navigation-block').removeClass('expanded');
	        })
	    }
	}

	var fixmeTop = $('#definition').offset().top;
	$(window).scroll(function() {
	    var currentScroll = $(window).scrollTop();
	    if (currentScroll >= fixmeTop) {
	        $('#nav').addClass('fixed');
	    } else {
	        $('#nav').removeClass('fixed');
	    }
	});

	$('#nav li a').click(function() {
	    $('#nav li.active').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
});