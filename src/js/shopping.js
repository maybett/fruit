$(function(){
	$('#six_list #six_list_login a').on('click',function(){
		// $('#six_list li').index($(this));
		// console.log($('#six_list li a').index($(this)));
		var fff = $('#six_list #six_list_login a').index($(this));
		var eee = $('#six_list #six_list_login').eq(fff);
		eee.css('display','none');
	});
	$('#ttt_one').on('click',function(){
		var prev = $('#rrr_one').html();
		prev++;
		$('#rrr_one').html(prev);
	});
	$('#ggg_one').on('click',function(){
		var prev = $('#rrr_one').html();
		prev--;
		if( prev <= 0){
			prev = 0;
		}
		$('#rrr_one').html(prev);
	});
	$('#ttt_two').on('click',function(){
		var prev = $('#rrr_two').html();
		prev++;
		$('#rrr_two').html(prev);
	});
	$('#ggg_two').on('click',function(){
		var prev = $('#rrr_two').html();
		prev--;
		if( prev <= 0){
			prev = 0;
		}
		$('#rrr_two').html(prev);
	});
	$('#ttt_three').on('click',function(){
		var prev = $('#rrr_three').html();
		prev++;
		$('#rrr_three').html(prev);
	});
	$('#ggg_three').on('click',function(){
		var prev = $('#rrr_three').html();
		prev--;
		if( prev <= 0){
			prev = 0;
		}
		$('#rrr_three').html(prev);
	});

		$('.fi_header_left_shanghai').on('mouseenter',function(){
		$('.me_address').css('display','block');
	});
	$('.me_address').on('mouseleave',function(){
		$('.me_address').css('display','none');
	});
});