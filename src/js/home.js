$(function(){
	var vall = null;
	$('.fi_shop_center h1').on('click',function(){
		$(this).css('background-position','-515px -289px');
		$(this).css('transition','all 0.5s');
		$('.pop-up').fadeTo('slow',1,'swing');
		$('.pop-up').css('z-index',611);
		var prev = $('.fi_add').html();
		prev++;
		$('.fi_add').html(prev);
		var money = parseInt($('.fi_money'));
		money += 188;
		$('.fi_money').html(money);

		$('.fi_body').css('display','block');
		$('.fi_body').css('z-index',600);

		
		var prevv = $('#shopping span').html();
		prevv++;
		$('#shopping span').html(prevv);
		
	});
	$('.pop_up_top a').on('click',function(){
		$('.pop-up').fadeTo('slow',0,'swing');
		$('.pop-up').css('z-index',-611);
		$('.fi_body').css('display','none');
		$('.fi_body').css('z-index',-600);
	});
	$('#login_one').on('click',function(){
		$('.pop-up').fadeTo('slow',0,'swing');
		$('.pop-up').css('z-index',-600);
		$('.fi_body').css('display','none');
		$('.fi_body').css('z-index',-600);
	});
	$('#shopping').on('click',function(){
		$(this).css('background','#f8be3b');
	});


	$('.fi_header_left_shanghai').on('mouseenter',function(){
		$('.me_address').css('display','block');
	});
	$('.me_address').on('mouseleave',function(){
		$('.me_address').css('display','none');
	});


	$('.fi_header_right_a').on('mouseenter',function(){
		$('.fi_header_dingone').css('display','block');
		$('.fi_header_dingone').css('color','#999');
		$('.me_notice').css('display','block');
	});
	$('.me_notice').on('mouseleave',function(){
		$('.me_notice').css('display','none');
		$('.fi_header_dingone').css('display','none');
	});
});



