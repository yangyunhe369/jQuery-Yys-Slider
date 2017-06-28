# jQuery-Yys-Slider
一个仿阴阳师官网轮播图效果的jQuery插件

该轮播图效果为切换轮播图时利用CSS3D旋转实现的效果。

ps:由于本插件使用了大量CSS3属性，对于低版本浏览器（如ie9以下版本等不支持CSS3属性的浏览器）不兼容。

**demo**：[线上地址](https://yangyunhe369.github.io/jQuery-Yys-Slider/)

## 使用方法

``` javascript
调用轮播插件：
Html：
<div class="content-part part-tese">
  <div class="content-title"></div>
  <div class="shadow"></div>
  <div class="gallery_container">
    <div class="gallery_wrap threeD_gallery_wrap">
    	<div href="javascript:;" class="gallery_item threeD_gallery_item gallery_left_middle">
        <img src="..." class="show">
        <div class="line-t"></div>
        <div class="line-r"></div>
        <div class="line-b"></div>
        <div class="line-l"></div>
      </div>
      <div href="javascript:;" class="gallery_item threeD_gallery_item front_side">
        <img src="..." class="show">
        <div class="line-t"></div>
        <div class="line-r"></div>
        <div class="line-b"></div>
        <div class="line-l"></div>
      </div>
      <div href="javascript:;" class="gallery_item threeD_gallery_item gallery_right_middle">
        <img src="..." class="show">
        <div class="line-t"></div>
        <div class="line-r"></div>
        <div class="line-b"></div>
        <div class="line-l"></div>
      </div>
      <div href="javascript:;" class="gallery_item threeD_gallery_item gallery_out">
        <img src="..." class="show">
        <div class="line-t"></div>
        <div class="line-r"></div>
        <div class="line-b"></div>
        <div class="line-l"></div>
      </div>
      ...
      (<div href="javascript:;" class="gallery_item threeD_gallery_item gallery_out">
        <img src="..." class="show">
        <div class="line-t"></div>
        <div class="line-r"></div>
        <div class="line-b"></div>
        <div class="line-l"></div>
      </div>) * n
      <a class="prev" href="javascript:;"></a>
      <a class="next" href="javascript:;"></a>
    </div>
  </div>
</div>
//当图片数量大于4张时，需再添加类名为".gallery_out"的容器
Javascript：
$(".gallery_container").gallery_slider({
	imgNum: 4 //轮播图数量至少为4张
});
```

## 个人简介
作者：弦云孤赫(David Yang)

职业：web前端开发工程师

爱好：网游、音乐（吉他）

## 联系方式
QQ：314786482

微信：yangyunhe_yyh

坐标：四川成都

