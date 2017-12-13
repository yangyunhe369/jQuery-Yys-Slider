/* by:Yangyunhe——David Yang
***阴阳师轮播图插件
***插件支持轮播所需图片数量为至少为四张
***在调用该插件时传入图片数量
*/
(function($) {
  $.fn.gallery_slider = function(options) {
    var _ops = $.extend({
        imgNum: 5 ,                                         //图片数量
        imgArr: [],                                         //图片地址数组
        slider_html: '',                                    //轮播容器html结构
    }, options);
    var _this = $(this),
        _imgNum = _ops.imgNum,                              //图片数量
        _imgArr = _ops.imgArr,                              //图片地址数组
        _slider_html = _ops.slider_html,                    //轮播容器html结构
        _gallery_item_left = '.prev',                       //左侧按钮class
        _gallery_item_right = '.next',                      //右侧按钮class
        _front_side = '.front_side',                        //中间图片容器class
        _gallery_left_middle = '.gallery_left_middle',      //左侧图片容器class
        _gallery_right_middle = '.gallery_right_middle',    //右侧图片容器class
        _gallery_out = '.gallery_out',                      //隐藏图片容器class
        _threeD_gallery_item = '.threeD_gallery_item',      //图片容器class
        gallery_out_html=``,                                //隐藏图片容器html结构
        gallery_out_htmlNum = _imgNum - 3;                  //隐藏图片容器数量                      
    //拼接隐藏容器html结构
    if(gallery_out_htmlNum > 0){
      for(var i = 0;i < gallery_out_htmlNum;i++){
        gallery_out_html += `<div href="javascript:;" class="gallery_item threeD_gallery_item gallery_out">
          <img src="${_imgArr[3+i]}" class="show">
          <div class="img-cover"></div>
        </div>`
      }
    }
    //拼接轮播容器html结构
    _slider_html = `<div class="gallery_wrap threeD_gallery_wrap">
        <div href="javascript:;" class="gallery_item threeD_gallery_item gallery_left_middle">
          <img src="${_imgArr[0]}" class="show">
          <div class="img-cover"></div>
        </div>
        <div href="javascript:;" class="gallery_item threeD_gallery_item front_side">
          <img src="${_imgArr[1]}" class="show">
          <div class="img-cover"></div>
        </div>
        <div href="javascript:;" class="gallery_item threeD_gallery_item gallery_right_middle">
          <img src="${_imgArr[2]}" class="show">
          <div class="img-cover"></div>
        </div>`+gallery_out_html+
        `</div>
      <div class="prev"></div>
      <div class="next"></div>
    </div>`;
    //添加轮播容器html结构到DOM中
    _this.append(_slider_html);
        
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