// console.log(123);

$(function(){
	$('.five_section_con_two_bottom h6').on('click',function(){
		$('.five_section_con_two_bottom h5').css('display','block');
		$(this).css('display','none');
	});
	$('.five_section_con_two_bottom h5').on('click',function(){
		$('.five_section_con_two_bottom h6').css('display','block');
		$(this).css('display','none');
	});
	$('.five_section_con_three li').on('click',function(){
		$('.five_section_con_three li').removeClass('active');
		$(this).addClass('active');
		// console.log(this);
	});
})