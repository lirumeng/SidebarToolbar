requirejs.config({
	paths:{
		// 为jquery-3.1.1.min.js指定别名jquery.js
		jquery: 'jquery-3.1.1.min'
	}
});

// 调用定义的模块
// 引入定义的jquery模块
requirejs(['jquery', 'validate'], function ($, validate) {
	console.log(validate.isEqual(2, 2));
});
