<template>
  <div class="app">
       <headBar></headBar>
       <!-- <msgTitle msg-title="dad无可奉告"></msgTitle> -->

       <div class="mui-content dayupdateo">
        <ul class="selectbox mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-5 mui-col-sm-4">
                <a href="#date">
                    <span>&nbsp;&nbsp;&nbsp;2017-11-23</span>
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
                &nbsp;<span class="mui-icon iconfont icon-fenlei" num="3"></span>
            </li>
        </ul> 
        <h6 class="num">1453 商品</h6>
        <ul class="procuctbox mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <a href="#">
                    <img class="mui-media-object" src="../../assets/images/shuijiao.jpg">
                    <div class="mui-media-body">蕾丝雪纺连衣裙女装夏...</div>
                    <div class="price">￥25.00</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <a href="#">
                    <img class="mui-media-object" src="../../assets/images/muwu.jpg">
                    <div class="mui-media-body">1926#实拍纯棉2017...</div>
                    <div class="price">￥25.00</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <a href="#"><img class="mui-media-object" src="../../assets/images/cbd.jpg">
                    <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                    <div class="price">￥25.00</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <a href="#">
                    <img class="mui-media-object" src="../../assets/images/yuantiao.jpg">
                    <div class="mui-media-body">9655#蕾丝连衣裙中长...</div>
                    <div class="price">￥25.00</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <a href="#">
                    <img class="mui-media-object" src="../../assets/images/cbd.jpg">
                    <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                    <div class="price">￥25.00</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <a href="#">
                    <img class="mui-media-object" src="../../assets/images/yuantiao.jpg">
                    <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                    <div class="price">￥25.00</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <a href="#">
                    <img class="mui-media-object" src="../../assets/images/yuantiao.jpg">
                    <div class="mui-media-body">9655#蕾丝连衣裙中长...</div>
                    <div class="price">￥25.00</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <a href="#">
                    <img class="mui-media-object" src="../../assets/images/cbd.jpg">
                    <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                    <div class="price">￥25.00</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <a href="#">
                    <img class="mui-media-object" src="../../assets/images/yuantiao.jpg">
                    <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                    <div class="price">￥25.00</div></a></li>
        </ul>
    </div>
  </div>
 
</template>

<script>
$(function (){
    $('#btn_page').on('click',function(){
        var num = $(this).find('span').attr('num');
        if (num == 3){
            $(this).find('span').addClass('icon-hengpai').removeClass('icon-fenlei');
            $(this).find('span').attr('num',2);
            $('.procuctbox .mui-table-view-cell').addClass("mui-col-xs-6").removeClass("mui-col-xs-4");
        }else if(num == 2){
            $(this).find('span').removeClass('icon-hengpai').addClass('icon-fenlei');;
            $(this).find('span').attr('num',3);
            $('.procuctbox .mui-table-view-cell').addClass("mui-col-xs-4").removeClass("mui-col-xs-6");
        }
    })
});

import headBar from "../public/m/header-oth";
export default {
  name: 'app',
  data() {
    return {};
  },
  components: {
    headBar,
  }
}
</script>



<style scoped>
.dayupdateo {
  margin-top: -0px;
}

.dayupdateo strong {
  position: relative;
  top: -10px;
}
.dayupdateo.mui-content > .mui-table-view:first-child {
  margin-top: 0;
}
.dayupdateo .selectbox {
  padding: 3px 0;
  background: #fdfdfd;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
}
.dayupdateo .selectbox.mui-grid-9 .mui-table-view-cell {
  padding: 5px;
  text-align: left;
  border: none;
}
.dayupdateo .selectbox.mui-grid-9 .mui-table-view-cell span:first-child {
  font-size: 0.85em;
}
.dayupdateo .selectbox.mui-grid-9 .mui-media .mui-icon {
  font-size: 1em;
}
.dayupdateo .selectbox .mui-table-view-cell:nth-child(3) {
  border-right: 1px solid #e6e6e6;
}
.dayupdateo .selectbox.mui-grid-9 .mui-media .mui-icon.mui-icon-home {
  font-size: 1.2em;
}
.dayupdateo .selectbox.mui-grid-9 .mui-table-view-cell > a:not(.mui-btn) {
  padding: 0;
}
.dayupdateo .num {
  line-height: 34px;
  text-align: center;
  background: #fff;
  margin: 0;
}
.dayupdateo .procuctbox {
  border: none !important;
}
.dayupdateo .procuctbox .mui-table-view-cell .mui-media-body {
  font-size: 12px;
  color: #323232;
  line-height: 17px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 2px 0;
}
.dayupdateo .procuctbox .mui-table-view-cell .price {
  font-size: 14px;
  color: #e51c23;
  line-height: 20px;
  text-align: left;
}

#date {
  position: fixed;
  top: 16px;
  right: 6px;
}
</style>





        
   
