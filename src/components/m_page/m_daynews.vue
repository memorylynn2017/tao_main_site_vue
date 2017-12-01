<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <!-- 二级导航 -->
        <ul class="selectbox mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-5 mui-col-sm-4">
                <!-- <a href="#date">
                    <span>&nbsp;&nbsp;&nbsp;2017-11-23</span>
                    <span class="mui-icon mui-icon-arrowdown"></span>
                </a> -->
                <select name="" id="">
                    <option value="0">2017-11-23</option>
                    <option value="1">2017-11-22</option>
                    <option value="2">2017-11-21</option>
                    <option value="3">2017-11-20</option>
                </select>
                <span class="mui-icon mui-icon-arrowdown arrow-icon"></span>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4">
                <!-- <a href="#product">
                    <span>&nbsp;&nbsp;&nbsp;女装</span>
                    <span class="mui-icon mui-icon-arrowdown"></span>
                </a> -->
                <select name="" id="">
                    <option v-for="type in types">{{type.name}}</option>
                </select>
                <span class="mui-icon mui-icon-arrowdown arrow-icon"></span>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <!-- <a href="#all">
                    <span>综合</span>
                    <span class="mui-icon mui-icon-arrowdown"></span>
                </a> -->
                <select name="" id="">
                    <option value="0">综合</option>
                    <option value="1">价格</option>
                    <option value="2">时间</option>
                    <option value="3">销量</option>
                </select>
                <span class="mui-icon mui-icon-arrowdown arrow-icon"></span>
            </li>
            <li id="btn_page" class="mui-table-view-cell mui-media mui-col-xs-1 mui-col-sm-1">
                &nbsp;
                <span class="mui-icon iconfont icon-fenlei" num="3"></span>
            </li>
        </ul>

        <div class="mui-content dayupdateo">
            <h6 class="num">1453 商品</h6>
            <ul class="procuctbox mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists">
                        <img class="mui-media-object" src="https://img.alicdn.com/bao/uploaded/i2/858179654/TB26XxDfx6I8KJjSszfXXaZVXXa_!!858179654.jpg">
                        <div class="mui-media-body">蕾丝雪纺连衣裙女装夏...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists">
                        <img class="mui-media-object" src="https://img.alicdn.com/bao/uploaded/i1/858179654/TB2egRxfxTI8KJjSspiXXbM4FXa_!!858179654.jpg">
                        <div class="mui-media-body">1926#实拍纯棉2017...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists"><img class="mui-media-object" src="https://img.alicdn.com/bao/uploaded/i2/73158887/TB2y_hMa7fb_uJkHFNRXXc3vpXa_!!73158887.jpg">
                        <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists">
                        <img class="mui-media-object" src="https://img.alicdn.com/bao/uploaded/i2/340755613/TB2PzicfCfD8KJjSszhXXbIJFXa_!!340755613.jpg">
                        <div class="mui-media-body">9655#蕾丝连衣裙中长...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists">
                        <img class="mui-media-object" src="https://img.alicdn.com/imgextra/i4/2680250671/TB2njMAflfH8KJjy1XbXXbLdXXa_!!2680250671.jpg">
                        <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists">
                        <img class="mui-media-object" src="https://img.alicdn.com/imgextra/i2/2680250671/TB2Tr7LflTH8KJjy0FiXXcRsXXa_!!2680250671.jpg">
                        <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists">
                        <img class="mui-media-object" src="https://img.alicdn.com/bao/uploaded/i2/1578587242/TB1ZcaefcrI8KJjy0FhXXbfnpXa_!!0-item_pic.jpg">
                        <div class="mui-media-body">9655#蕾丝连衣裙中长...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists">
                        <img class="mui-media-object" src="https://img.alicdn.com/bao/uploaded/i3/2260912193/TB2csqfbRLN8KJjSZPhXXc.spXa_!!2260912193.jpg">
                        <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists">
                        <img class="mui-media-object" src="https://img.alicdn.com/bao/uploaded/i4/73158887/TB2GbtbfwvD8KJjy0FlXXagBFXa_!!73158887.jpg">
                        <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists">
                        <img class="mui-media-object" src="https://img.alicdn.com/bao/uploaded/i2/858179654/TB26XxDfx6I8KJjSszfXXaZVXXa_!!858179654.jpg">
                        <div class="mui-media-body">蕾丝雪纺连衣裙女装夏...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists">
                        <img class="mui-media-object" src="https://img.alicdn.com/bao/uploaded/i1/858179654/TB2egRxfxTI8KJjSspiXXbM4FXa_!!858179654.jpg">
                        <div class="mui-media-body">1926#实拍纯棉2017...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="#/M_produclists"><img class="mui-media-object" src="https://img.alicdn.com/bao/uploaded/i2/73158887/TB2y_hMa7fb_uJkHFNRXXc3vpXa_!!73158887.jpg">
                        <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists">
                        <img class="mui-media-object" src="https://img.alicdn.com/bao/uploaded/i2/340755613/TB2PzicfCfD8KJjSszhXXbIJFXa_!!340755613.jpg">
                        <div class="mui-media-body">9655#蕾丝连衣裙中长...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists">
                        <img class="mui-media-object" src="https://img.alicdn.com/imgextra/i4/2680250671/TB2njMAflfH8KJjy1XbXXbLdXXa_!!2680250671.jpg">
                        <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists">
                        <img class="mui-media-object" src="https://img.alicdn.com/imgextra/i2/2680250671/TB2Tr7LflTH8KJjy0FiXXcRsXXa_!!2680250671.jpg">
                        <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists">
                        <img class="mui-media-object" src="https://img.alicdn.com/bao/uploaded/i2/1578587242/TB1ZcaefcrI8KJjy0FhXXbfnpXa_!!0-item_pic.jpg">
                        <div class="mui-media-body">9655#蕾丝连衣裙中长...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists">
                        <img class="mui-media-object" src="https://img.alicdn.com/bao/uploaded/i3/2260912193/TB2csqfbRLN8KJjSZPhXXc.spXa_!!2260912193.jpg">
                        <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="/M_produclists">
                        <img class="mui-media-object" src="https://img.alicdn.com/bao/uploaded/i4/73158887/TB2GbtbfwvD8KJjy0FlXXagBFXa_!!73158887.jpg">
                        <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                        <div class="price">￥25.00</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
$(function() {
    $('#btn_page').on('click', function() {
        var num = $(this).find('span').attr('num');
        if (num == 3) {
            $(this).find('span').addClass('icon-hengpai').removeClass('icon-fenlei');
            $(this).find('span').attr('num', 2);
            $('.procuctbox .mui-table-view-cell').addClass("mui-col-xs-6").removeClass("mui-col-xs-4");
        } else if (num == 2) {
            $(this).find('span').removeClass('icon-hengpai').addClass('icon-fenlei');;
            $(this).find('span').attr('num', 3);
            $('.procuctbox .mui-table-view-cell').addClass("mui-col-xs-4").removeClass("mui-col-xs-6");
        }
    })
});

import headBar from "../public/m/header-oth";
export default {
    name: 'app',
    data() {
        return {
            headTitle: '每日最新',  //导航标题
            footerNavId: 1,   //底部导航id
            types: [
                {id: 1,name: '女装'},
                {id: 2,name: '男装'},
                {id: 3,name: '童装'},
                {id: 4,name: '内衣'},
                {id: 5,name: '箱包'},
                {id: 6,name: '鞋帽'},
            ],
        };
    },
    components: {
        headBar
    }
}
</script>

<style lang="less" scoped>
#date {
    position: fixed;
    top: 16px;
    right: 6px;
}
#date .mui-popover-arrow {
    left: auto;
    right: 6px;
}
// 二级导航
.selectbox {
    position: fixed;
    top: 44px;
    padding: 3px 0;
    background: #fdfdfd;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    z-index: 10;
    &.mui-grid-9 .mui-table-view-cell {
        padding: 5px 0;
        text-align: left;
        border: none;
        span:first-child {
            font-size: 0.85em;
        }
        // 下拉
        select{
            margin-bottom: 0;
            padding: 0 0 0 15px;
        }
        .arrow-icon{
            position: absolute;
            right: 20px;
            top: 8px;
        }
    }
    &.mui-grid-9 .mui-media .mui-icon {
        font-size: 1em;
    }
    .mui-table-view-cell:nth-child(3) {
        border-right: 1px solid #e6e6e6;
    }
    &.mui-grid-9 .mui-media .mui-icon.mui-icon-home {
        font-size: 1.2em;
    }
    &.mui-grid-9 .mui-table-view-cell>a:not(.mui-btn) {
        padding: 0;
    }
}
.dayupdateo {
    margin-top: 0;
    &.mui-content>.mui-table-view:first-child {
       margin-top: 0;
    }
    
    .num {
        line-height: 40px;
        text-align: center;
        background: #fff;
        margin: 0;
    }
    .procuctbox {
        .mui-table-view-cell {
            .mui-media-body {
                font-size: 12px;
                color: #323232;
                line-height: 17px;
                text-align: left;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                margin: 2px 0;
            }
            .price {
                font-size: 14px;
                color: #e51c23;
                line-height: 20px;
                text-align: left;
            }
        }
    }
}
</style>




        
   
