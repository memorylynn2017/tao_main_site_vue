<template>
    <div class="app">

        <div class="mui-content">
            <!-- 设置 -->
            <div class="setting">
                <!-- 头像 -->
                <ul class="mui-table-view mui-table-view-chevron te-my-header">
                    <li class="mui-table-view-cell mui-media">
                        <a class="mui-navigate-right" href="#">
                            <img class="mui-pull-left head-img" id="head-img" src="https://pro.modao.cc/uploads3/images/1208/12080594/raw_1503471295.png">
                            <div class="mui-media-body">
                                <p class="name fs-16">Photoshop</p>
                                <p class="vip fs-12">批发会员</p>
                            </div>
                        </a>
                    </li>
                </ul>

                <!-- 我的订单 -->
                <ul class="mui-table-view mui-table-view-chevron te-order">
                    <li class="mui-table-view-cell te-order-title">
                        <a href="/myorder" class="mui-navigate-right">
                            <span class="fs-14 mui-pull-left">我的订单</span>
                            <span class="fs-12 mui-pull-right">查看全部</span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell te-order-fun">

                        <ul class="mui-table-view noline mui-grid-view">
                            <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                <a href="/myorder">
                                    <h3><span class="mui-icon iconfont icon-wallet_icon"></span></h3>
                                    <h6>待付款</h6>
                                </a>
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                <a href="/myorder">
                                    <h3><span class="mui-icon iconfont icon-huoche-copy"></span></h3>
                                    <h6>待收货</h6>
                                </a>
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                <a href="/myorder">
                                    <h3><span class="mui-icon iconfont icon-dui"></span></h3>
                                    <h6>已完成</h6>
                                </a>
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                <a href="/myorder">
                                    <h3><span class="mui-icon iconfont icon-lajixiang"></span></h3>
                                    <h6>已取消</h6>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>


                <ul class="mui-table-view mui-table-view-chevron mt10">
                    <li class="mui-table-view-cell">
                        <a href="/mypurse" class="mui-navigate-right">
                            <span class="mui-icon iconfont icon-qianbao"></span>
                            <span>我的钱包</span>
                        </a>
                    </li>
                </ul>

                <ul class="mui-table-view mui-table-view-chevron mt10">
                    <li class="mui-table-view-cell">
                        <a href="/mycollect" class="mui-navigate-right">
                            <span class="mui-icon mui-icon-star"></span>收藏商品</a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="/myfollow" class="mui-navigate-right">
                            <span class="mui-icon iconfont icon-heart-outline"></span>店铺关注</a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="/myfollowupdate" class="mui-navigate-right">
                            <span class="mui-icon iconfont icon-yuanxuxian"></span>关注上新</a>
                    </li>
                </ul>

                <ul class="mui-table-view mui-table-view-chevron mt10">
                    <li class="mui-table-view-cell">
                        <a href="/mybrowse" class="mui-navigate-right">
                            <span class="mui-icon iconfont icon-zuji"></span>我的足迹</a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="/mysupply" class="mui-navigate-right">
                            <span class="mui-icon iconfont icon-lightning"></span>快速补货</a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="/myoffshelf" class="mui-navigate-right">
                            <span class="mui-icon iconfont icon-lingdang"></span>下架提醒</a>
                    </li>
                </ul>

                <ul class="mui-table-view mui-table-view-chevron mt10">
                    <li class="mui-table-view-cell">
                        <a href="#" class="mui-navigate-right">
                            <span class="mui-icon iconfont icon-zaixiankefu"></span>在线客服</a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="/myreceiver" class="mui-navigate-right">
                            <span class="mui-icon iconfont icon-dizhi"></span>收货地址</a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="/myhelp" class="mui-navigate-right">
                            <span class="mui-icon mui-icon-help"></span>帮助中心</a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="#">
                            <span class="mui-icon mui-icon-phone"></span>4000301668</a>
                    </li>
                </ul>
                

            </div>
        </div>

        <!-- 尾部 -->
        <footerBar></footerBar>
    </div>
</template>

<script>
import footerBar from "../public/m/footer";
export default {
    name: 'app',
    data() {
        return {}
    },
    components: {
        footerBar
    }
}
</script>
<style lang="less" scoped>
.setting {
    margin-bottom: 80px;
    .mui-table-view {
        .mui-table-view-cell {
            text-align: left;
            a {
                font-size: 16px;
                .mui-icon {
                    margin-right: 10px;
                    font-size: 18px;
                }
            }
        }
    }
    // 头像
    .te-my-header{
        .mui-table-view-cell{
            a{
                height: 120px;
                color: #fff;
                background: url(https://pro.modao.cc/uploads3/images/1206/12060737/raw_1503401192.jpeg);
                .head-img{
                    margin: 20px 10px 20px 0;
                    width: 60px;
                    height: 60px;
                }
                .mui-media-body{
                    margin: 30px 0 0 0;
                    p{
                        color: #fff;
                    }
                }
                &:after{
                    color: #fff;
                }
            }
        }
    }
    // 订单
    .te-order{
        .te-order-title{
            span{
                font-size: 14px;
            }
        }
        .te-order-fun{
            margin: 0;
            padding: 0;
            .mui-table-view{
                .mui-table-view-cell{
                    text-align: center;
                    .mui-icon{
                        margin: 0;
                        font-size: 26px;
                    }
                    h6{
                        margin-top: 8px;
                    }
                }                 
            }
        }
    }
}
</style>