# jQuery-Yys-Slider
一个仿阴阳师官网轮播图效果的jQuery插件

该轮播图效果为切换轮播图时利用CSS3D旋转实现的效果。

ps:由于本插件使用了大量CSS3属性，对于低版本浏览器（如ie9以下版本等不支持CSS3属性的浏览器）不兼容。

**demo**：[线上地址](https://yangyunhe369.github.io/jQuery-Yys-Slider/)
**代码详解**：[博客链接](http://www.yangyunhe.me/2017/jquery-yysSlider/)

## 下载源码

```
git clone https://github.com/yangyunhe369/jQuery-Yys-Slider.git
```
## 项目截图
![yys](http://www.yangyunhe.me/2017/jquery-yysSlider/test.png)

## 使用方法

``` javascript
调用轮播插件：
Html：
<div class="gallery_container"></div>
Javascript：
$(".gallery_container").gallery_slider({
	imgNum: 4, //轮播图数量至少为4张
  imgArr: [
    'images/xxx.jpg',
    'images/xxx.jpg',
    'images/xxx.jpg',
    'images/xxx.jpg'
  ]
});
```
## 项目更新

2017.08.01 — 优化代码，取消自定义class，自动填充html结构。

## 说明

如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

## 个人简介
作者：弦云孤赫(David Yang)

职业：web前端开发工程师

爱好：网游、音乐（吉他）

## 联系方式
QQ：314786482

微信：yangyunhe_yyh

坐标：四川成都

