requirejs.config({
	paths:{
		// 为jquery-3.1.1.min.js指定别名jquery.js
		jquery: 'jquery-3.1.1.min'
	}
});

// 调用定义的模块
// 引入定义的jquery模块
requirejs(['jquery', 'backtop'], function ($, backtop) {
	// var scroll = new scrollto.ScrollTo({
	// 	dest: 0,
	// 	speed: 500
	// });

	// $('#backTop').on('click', $.proxy(scroll.move, scroll));
	// $(window).on('scroll', function(){
	// 	checkPosition($(window).height());
	// });

	// checkPosition($(window).height());

	// function checkPosition(pos) {
	// 	if ($(window).scrollTop() > pos) {
	// 		$('#backTop').fadeIn();
	// 	}else {
	// 		$('#backTop').fadeOut();
	// 	}
	// }
	
	// new backtop.BackTop($('#backTop'), {
	// 	mode: 'move',
	// 	pos: 100,
	// 	speed: 2000
	// });
	
	$('#backTop').backtop({
		mode: 'move'
	});
});
