<template>
  <div id="app">
    
    <div class="mui-content dayupdateo">
      <strong style="font-size:18px;">每日最新</strong>
            <ul class="selectbox mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-5 mui-col-sm-4">
                    <a href="#date">
                        <span>&nbsp;&nbsp;&nbsp;2017-11-21</span>
                        <span class="mui-icon mui-icon-arrowdown"></span>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4">
                    <a href="#product">
                        <span>&nbsp;&nbsp;&nbsp;女装</span>
                        <span class="mui-icon mui-icon-arrowdown"></span>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                    <a href="#all">
                        <span>综合</span>
                        <span class="mui-icon mui-icon-arrowdown"></span>
                    </a>
                </li>
                <li id="btn_page" class="mui-table-view-cell mui-media mui-col-xs-1 mui-col-sm-1">
                    &nbsp;<span class="mui-icon mui-icon-bars" num="2"></span>
                </li>
            </ul> 
            <h6 class="num">1453 商品</h6>
            <ul class="procuctbox mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-6">
                    <a href="#">
                        <img class="mui-media-object" src="./assets/images/shuijiao.jpg">
                        <div class="mui-media-body">蕾丝雪纺连衣裙女装夏...</div>
                        <div class="price">￥25.00</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6">
                    <a href="#">
                        <img class="mui-media-object" src="./assets/images/muwu.jpg">
                        <div class="mui-media-body">1926#实拍纯棉2017...</div>
                        <div class="price">￥25.00</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6">
                    <a href="#"><img class="mui-media-object" src="./assets/images/cbd.jpg">
                        <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                        <div class="price">￥25.00</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6">
                    <a href="#">
                        <img class="mui-media-object" src="./assets/images/yuantiao.jpg">
                        <div class="mui-media-body">9655#蕾丝连衣裙中长...</div>
                        <div class="price">￥25.00</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6">
                    <a href="#">
                        <img class="mui-media-object" src="./assets/images/cbd.jpg">
                        <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                        <div class="price">￥25.00</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6">
                    <a href="#">
                        <img class="mui-media-object" src="./assets/images/yuantiao.jpg">
                        <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                        <div class="price">￥25.00</div></a></li>
            </ul>
        </div>
        
        <!--右上角弹出菜单-->
		<div id="date" class="mui-popover">
      <div class="mui-popover-arrow"></div>
      <div class="mui-scroll-wrapper">
          <div class="mui-scroll">
              <ul class="mui-table-view">
                  <li class="mui-table-view-cell"><a href="#">Item1</a>
                  </li>
                  <li class="mui-table-view-cell"><a href="#">Item2</a>
                  </li>
                  <li class="mui-table-view-cell"><a href="#">Item3</a>
                  </li>
                  <li class="mui-table-view-cell"><a href="#">Item4</a>
                  </li>
                  <li class="mui-table-view-cell"><a href="#">Item5</a>
                  </li>
                  <li class="mui-table-view-cell"><a href="#">Item6</a>
                  </li>
                  <li class="mui-table-view-cell"><a href="#">Item7</a>
                  </li>
                  <li class="mui-table-view-cell"><a href="#">Item8</a>
                  </li>
                  <li class="mui-table-view-cell"><a href="#">Item9</a>
                  </li>
                  <li class="mui-table-view-cell"><a href="#">Item10</a>
                  </li>
              </ul>
          </div>
      </div>
    </div>
  </div>
</template>


<script>
//注意这个公共JS插件在事VUE项目中的位置，如果其它组件都是都是以这个app.vue为入口模板，那么放在这里就没有问题，特别理解此层父子组件嵌套路由及视图的关系
//以实现手机端不同页面之间的跳转。待续
import "./assets/js/mui.min.js";
// 1、vue操作数据并渲染视图在生命周期的各个组成部分及钩子函数...
// 2、vue操作数据并渲染视图对DATA部分操作，双向数据绑定、组件之间数据传递等..
// 3、模拟根据请求什么API，传递请求参数，响应回怎样的数据来.AJAX与后台数据(MOCK.JSON)的交互，建义引入axio...
export default {
  name: "app",
  data() {
    return {
      // msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>
<script>
    // 相当于引入的一个外部的插件，在此主模板组件(APP.vue)中SCRIPT部分一般是用来进行VM或CONTROLLERS的:
    $(function (){
		$('#btn_page').on('click',function(){
            var num = $(this).find('span').attr('num');
            if (num == 2){
                $(this).find('span').addClass('iconfont icon-fenlei');
                $(this).find('span').attr('num',3);
                $('.procuctbox .mui-table-view-cell').addClass("mui-col-xs-4").removeClass("mui-col-xs-6");
            }else if(num == 3){
                $(this).find('span').removeClass('iconfont icon-fenlei');
                $(this).find('span').attr('num',2);
                $('.procuctbox .mui-table-view-cell').addClass("mui-col-xs-6").removeClass("mui-col-xs-4");
            }
        })
	});
</script>
    

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
