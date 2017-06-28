/* by:Yangyunhe——David Yang
***阴阳师轮播图插件
***插件支持轮播所需图片数量为至少为四张
***在调用该插件时传入图片数量
*/
(function($) {
	$.fn.gallery_slider = function(options) {
	  var _ops = $.extend({
	      imgNum: 5 , //图片数量
	      gallery_item_left: '.prev' , //左侧按钮
	      gallery_item_right: '.next' , //右侧按钮
	      gallery_left_middle: '.gallery_left_middle', //左侧图片容器
	      gallery_right_middle: '.gallery_right_middle', //左侧图片容器
	      threeD_gallery_item: '.threeD_gallery_item' //图片容器
	  }, options);
	  var _this = $(this),
	  		_imgNum = _ops.imgNum, //图片数量
	  		_gallery_item_left = _ops.gallery_item_left, //左侧按钮
	  		_gallery_item_right = _ops.gallery_item_right, //右侧按钮
	  		_gallery_left_middle = _ops.gallery_left_middle, //左侧图片容器
	  		_gallery_right_middle = _ops.gallery_right_middle, //左侧图片容器
	  		_threeD_gallery_item = _ops.threeD_gallery_item; //图片容器
	  		
  	//左侧按钮绑定点击事件
  	_this.find(_gallery_item_left).on('click',function(){
			var idx = parseInt(_this.find(_gallery_left_middle).index());
			//当前展示图片逻辑
			_this.find(_threeD_gallery_item).eq(idx).removeClass('gallery_left_middle').addClass('front_side');
			//当idx值为0时，执行逻辑
			_this.find(_threeD_gallery_item).eq(idx == 0 ? idx + _imgNum - 1 : idx - 1).removeClass('gallery_out').addClass('gallery_left_middle');
			//当idx值为_imgNum - 3时，执行逻辑
			_this.find(_threeD_gallery_item).eq(idx == _imgNum - 3 ? idx + 2 : idx - _imgNum + 2).removeClass('gallery_right_middle').addClass('gallery_out');
			//当idx值为_imgNum - 2时，执行逻辑
			_this.find(_threeD_gallery_item).eq(idx == _imgNum - 2 ? idx + 1 : idx - _imgNum + 1).removeClass('front_side').addClass('gallery_right_middle');
		})
		//右侧按钮绑定点击事件
		_this.find(_gallery_item_right).on('click',function(){
			var idx = parseInt(_this.find(_gallery_right_middle).index());
			//当前展示图片逻辑
			_this.find(_threeD_gallery_item).eq(idx).removeClass('gallery_right_middle').addClass('front_side');
			//当idx值为0时，执行逻辑
			_this.find(_threeD_gallery_item).eq(idx == 0 ? idx + _imgNum - 1 : idx - 1).removeClass('front_side').addClass('gallery_left_middle');
			//当idx值为1时，执行逻辑
			_this.find(_threeD_gallery_item).eq(idx == 1 ? idx + _imgNum - 2 : idx - 2).removeClass('gallery_left_middle').addClass('gallery_out');
			//当idx值为_imgNum - 2时，执行逻辑
			_this.find(_threeD_gallery_item).eq(idx == _imgNum - 2 ? idx + 1 : idx - _imgNum + 1).removeClass('gallery_out').addClass('gallery_right_middle');
		})
	};
})(jQuery);