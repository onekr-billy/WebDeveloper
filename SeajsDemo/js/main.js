

;(function(){
	
	seajs.config({
		alias:{
			'jsa':'./js/a',
			'jsb':'./js/b',
			'jquery':'./js/jquery-1.81'
		},
		preload:['jquery'],
		debug:2,//2 自动添加版本号， true 启用debug
		base:'./js/',
		map:[],
		charset:'utf-8'
	});

	//启动文件，一般不用于加在js 模块
	/*
	seajs.use(['a'],function(a){
		console.log(a);
		a.run();
	});
*/

})();