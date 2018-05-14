$(function(){
	var vall = null;
	$('.fi_shop_center h1').on('click',function(){
		$(this).css('background-position','-515px -289px');
		$(this).css('transition','all 0.5s');
		$('.pop-up').fadeTo('slow',1,'swing');
		$('.pop-up').css('z-index',111);
		// var vall = parseInt($('.fi_add').html());
		// vall++;
		// console.log(vall+1);
	});
	$('.pop_up_top a').on('click',function(){
		$('.pop-up').fadeTo('slow',0,'swing');
		$('.pop-up').css('z-index',-111);
	});
	$('#login_one').on('click',function(){
		$('.pop-up').fadeTo('slow',0,'swing');
	});
	$('#shopping').on('click',function(){
		$(this).css('background','#f8be3b');
	});
});



