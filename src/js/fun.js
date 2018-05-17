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
		var num = $('.tw_show').html();
		num++;
		$('.tw_show').html(num);
	});

	$('.tw_minus').on('click',function(){
		var num = $('.tw_show').html();
		num--;
		if(num <= 0){
			num = 0;
		}
		$('.tw_show').html(num);
	});
	$('.tw_add').on('click',function(){
		$('.pop-up').fadeTo('slow',1,'swing');
		$('.pop-up').css('z-index',111);
	});
	$('.pop_up_top a').on('click',function(){
		$('.pop-up').fadeTo('slow',0,'swing');
		$('.pop-up').css('z-index',-111);
	});

	$('.ceng_left_left img').on('click',function(){
		$('.ceng_left_left img').removeClass('jingzi_ctiv');
		$(this).addClass('jingzi_ctiv');
		$('#jingzi li').removeClass('jingzi_active');
		$('#jingzi li').eq($('.ceng_left_left img').index($(this))).addClass('jingzi_active');
	});
	var index = 0;
	var timer = null;
	function auto(){
			timer = setInterval(function(){
			$('.ceng_left_left img').removeClass('jingzi_ctiv');
			$('.ceng_left_left img').eq(index).addClass('jingzi_ctiv');
			$('#jingzi li').removeClass('jingzi_active');
			$('#jingzi li').eq(index).addClass('jingzi_active');
			index++;
			if(index >=4) {
				index = 0;
			}
		},2000);
	};
	auto();
	$('#jingzi li').on('mouseenter',function(){
		clearInterval(timer);

	});	
	$('#jingzi li').on('mouseleave',function(){
		auto();
	});

		$('.fi_header_left_shanghai').on('mouseenter',function(){
		$('.me_address').css('display','block');
	});
	$('.me_address').on('mouseleave',function(){
		$('.me_address').css('display','none');
	});
});