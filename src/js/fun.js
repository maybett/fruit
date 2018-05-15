$(function(){
	$('.tw_ma_right').on('mouseenter',function(){
		$('.max_ma').css('display','block');
		$('.max_ma').css('z-index',111);
	});
	$('.max_ma').on('mouseleave',function(){
		$('.max_ma').css('display','none');
		$('.max_ma').css('z-index',-111);
	});
	$('.distribution_box').on('click',function(){
		$(this).css('border','1px solid black');
	});
	$('.distribution_box').on('click',function(){
		$('.address').css('display','block');
		$('.address').css('z-index',111);
		$('.ding').css('display','block');
		$('.ding').css('z-index',112);
	});
	$('.ding').on('click',function(){
		// $('.address').css('border-color','#ddd')
		$('.address').css('display','none');
		$('.address').css('z-index',0);
		$('.ding').css('display','none');
		$('.ding').css('z-index',0);
	});
	$('.tw_plus').on('click',function(){
		// console.log($('.tw_show').html());
	});
	$('.tw_add').on('click',function(){
		$('.pop-up').fadeTo('slow',1,'swing');
		$('.pop-up').css('z-index',111);
	});
	$('.pop_up_top a').on('click',function(){
		$('.pop-up').fadeTo('slow',0,'swing');
		$('.pop-up').css('z-index',-111);
	});
});