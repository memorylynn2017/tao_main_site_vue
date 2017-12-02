<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <!-- 导航 -->
        <nav class="nav-fun">
            <ul class="selectbox mui-table-view mui-grid-view mui-grid-9">
                <li class="all mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                    <a href="#addPopover">
                        <span class="alltxt">全部</span>
                        <span class="mui-icon mui-icon-arrowdown"></span>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 tab_type active">
                    <a href="#time">
                        <span>时间</span>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 tab_type">
                    <a href="#price">
                        <span>价格</span>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 tab_type">
                    <a href="#number">
                        <span>销量</span>
                    </a>
                </li>
            </ul> 
        </nav>

        <div class="girlclose">
            <div class="mui-content">
                <h6 class="num">{{girlClothes_num}} 商品</h6>
                <ul class="procuctbox mui-table-view mui-grid-view">
                    <!-- <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="/M_produclists">
                            <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1125/11254297/raw_1500731190.jpeg">
                            <div class="mui-media-body">蕾丝雪纺连衣裙女装夏...</div>
                            <div class="price">￥25.00</div></a></li> -->
                    <li v-for="item in girlClothes" class="mui-table-view-cell mui-media mui-col-xs-6">
                        <router-link :to="{path:'/M_produclists',query:{id: item.id}}">
                            <div class="mui-media-object">
                                <img :src="item.pic">
                            </div>
                            <div class="mui-media-body">{{item.name}}</div>
                            <div class="price">￥{{item.price}}</div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div id="addPopover" class="mui-popover mui-content">
                <div class="mui-scroll-wrapper">
                    <ul class="mui-table-view mui-grid-view">
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>连衣裙</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>短裤</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>蕾丝衫</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>礼服</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>两件套</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>半身裙</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>休闲裤</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>连体裤</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>连体裤</span>
                        </li>
                    </ul>   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headBar from "../public/m/header-oth";
import axios from "axios";
export default {
    name: 'app',
    data() {
        return {
            headTitle: '全部女装',   //导航标题
            girlClothes: '',
            girlClothes_num: 0,
        }
    },
    components: {
        headBar
    },
    mounted () {
      this.getGirlClothes();
    },
    methods:{
        getGirlClothes(){
            let _protocol = document.location.protocol;
            let _host = window.location.hostname;
            let _url = _protocol+"//"+_host+":3000";

            axios.get(_url + "/girlclothes").then((result)=>{
                this.girlClothes = result.data;
                this.girlClothes_num = result.data.length;
            })
        }
    }
}

$(function() {
    mui.init();

    mui('.mui-scroll-wrapper').scroll();
    mui('body').on('shown', '.mui-popover', function(e) {
        // console.log('shown', e.detail.id);//detail为当前popover元素
    });
    mui('body').on('hidden', '.mui-popover', function(e) {
        // console.log('hidden', e.detail.id);//detail为当前popover元素
    });
    $('.tab_type').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
});
</script>
<style lang="less">
.mui-popover .mui-popover-arrow{
    display: none;
}
</style>
<style lang="less" scoped>
.nav-fun{
    position: fixed;
    top: 44px;
    width: 100%;
    z-index: 10;
    .selectbox {
        position: relative;
        z-index: 999;
        background: #fdfdfd;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        &.mui-grid-9 .mui-table-view-cell {
            padding: 0;
            border: none;
            span:first-child {
                display: inline-block;
                font-size: 14px;
                color: #323232;
                padding: 8px 10px;
                border-bottom: 2px solid transparent;
            }
            &.active {
                span:first-child {
                    color: #e51c23;
                    border-bottom-color: #e51c23;
                }
            }
        }
        &.mui-grid-9 .mui-media .mui-icon {
            font-size: 1em;
        }
        .mui-table-view-cell:nth-child(1) {
            border-right: 1px solid #e6e6e6;
        }
        &.mui-grid-9 .mui-media .mui-icon.mui-icon-home {
            font-size: 1.2em;
        }
        &.mui-grid-9 .mui-table-view-cell>a:not(.mui-btn) {
            padding: 0;
        }
    }
}
.girlclose {
    margin-top: 0;
    padding-top: 86px;
    .mui-content>.mui-table-view:first-child {
       margin-top: 0;
    }
    .mui-table-view:before,.mui-table-view:after {
        height: 0;
    }
    
    .num {
        padding-top: 10px;
        text-align: center;
        background: #fff;
        margin: 0;
    }
    .procuctbox {
        .mui-table-view-cell {
            .mui-media-object {
                margin-bottom: 5px;
                height: 200px;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
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
/* 弹框 */
.mui-popover-arrow {display: none;}
.mui-popover {
    width: 100%;
    border-radius: 0;
    background: #fff;
    box-shadow: none;
    left: 0!important;
    border-top: 1px solid #e6e6e6;
    .mui-scroll-wrapper  {
        margin: 0;
        border-radius: 0;
        position: relative;
    }
    .mui-table-view {
        padding: 15px 15px 30px;
        border-radius: 0;
        background: #fff;
        .mui-table-view-cell {
            span {
                display: inline-block;
                width: 100%;
                font-size: 14px;
                color: #323232;
                line-height: 20px;
                padding: 6px 0;
                border: 1px solid #bbbbbb;
            } 
        }
    }
}

}
</style>