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
		console.log(123);
		$(this).css('border','1px solid black');
	});
});