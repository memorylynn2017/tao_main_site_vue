<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content orderdetail mb50">
            <ul class="mui-table-view te-table-view">
                <li class="mui-table-view-cell order-header">
                    <div class="mui-pull-left left">
                        <p>订单号 9000003</p>
                        <p>2017-08-21 11:30</p>
                    </div>
                    <span class="mui-pull-right right">
                        <span class="mui-btn iconfont icon-huoche2"></span>
                        已发货
                    </span>
                </li>
                <li class="mui-table-view-cell order-express">
                    <a href="/ordertracking">
                        <div class="mui-pull-left left">
                            <p class="fs-14"><span class="mui-btn iconfont icon-huoche2"></span>申通快递 [448655467555]</p>
                            <p class="fs-12">发货时间 2017-08-22 17:30 查询电话 95311</p>
                        </div>
                        <span class="mui-icon mui-icon-forward mui-pull-right right"></span>
                    </a>
                </li>

                <li class="mui-table-view-cell mt10">
                    共3款商品 166件 ￥972.00
                    <a class="mui-btn mui-pull-right" href="#">已付款</a>
                </li>

                <li class="mui-table-view-cell mt10">
                    <span class="mui-pull-left">配送方式：<span>国内快递</span></span>
                    <span class="mui-pull-right">缺货处理：<span>有货先发</span></span>
                </li>
                <li class="mui-table-view-cell">
                    <span class="mui-pull-left">商品金额：<span class="c-red">￥967.00</span></span>
                    <span class="mui-pull-right">运费金额：<span class="c-red">￥5.00</span></span>
                </li>

                <li class="mui-table-view-cell mt10">
                    <span class="mui-pull-left">支付方式: <span>微信支付</span></span>
                    <span class="mui-pull-right">2017-08-23 18:30</span>
                </li>
                <li class="mui-table-view-cell">
                    <span class="mui-pull-left">实发160件 ￥842.00</span>
                    <span class="mui-pull-right">缺货6件 ￥130.00</span>
                </li>

                <li class="mui-table-view-cell mt10">
                    <!-- 左右分 -->
                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline te-product">
                        <li class="mui-table-view-cell mui-media mui-col-xs-3 te-product-pic">
                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                            <span class="fs-14">1591</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-9 te-product-con">
                            <h5 class="head clearfix">
                                <span class="mui-pull-left title">2517#蕾丝连衣裙蕾丝2517#蕾丝连衣裙蕾丝</span>
                                <span class="mui-pull-right">VIP￥48.00</span>
                            </h5>
                            <ul class="ullist">
                                <li>
                                    <span class="mui-pull-left">粉色 M1</span>
                                    <span class="txt-center">实发 1</span>
                                    <span class="mui-pull-right">￥48.00</span>
                                </li>
                                <li>
                                    <span class="mui-pull-left">粉色 M1</span>
                                    <span class="txt-center">实发 1</span>
                                    <span class="mui-pull-right">￥48.00</span>
                                </li>
                                <li>
                                    <span class="mui-pull-left">粉色 M1</span>
                                    <span class="txt-center">实发 1</span>
                                    <span class="mui-pull-right">￥48.00</span>
                                </li>
                                <li>
                                    <span class="mui-pull-left">粉色 M1</span>
                                    <span class="txt-center">实发 1</span>
                                    <span class="mui-pull-right">￥48.00</span>
                                </li>
                                <li>
                                    <span class="mui-pull-left">粉色 M1</span>
                                    <span class="txt-center">实发 1</span>
                                    <span class="mui-pull-right">￥48.00</span>
                                </li>
                            </ul>
                            <h5 class="txt-right c-red">
                                实发3件 ￥146.00
                            </h5>
                        </li>
                    </ul>
                </li>

                <li class="mui-table-view-cell mt10">
                    <!-- 左右分 -->
                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline te-product">
                        <li class="mui-table-view-cell mui-media mui-col-xs-3 te-product-pic">
                            <img src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg" alt="">
                            <span class="fs-14">1591</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-9 te-product-con">
                            <h5 class="head clearfix">
                                <span class="mui-pull-left title">2517#蕾丝连衣裙蕾丝2517#蕾丝连衣裙蕾丝</span>
                                <span class="mui-pull-right">VIP￥48.00</span>
                            </h5>
                            <ul class="ullist">
                                <li>
                                    <span class="mui-pull-left">粉色 M1</span>
                                    <span class="txt-center">实发 1</span>
                                    <span class="mui-pull-right">￥48.00</span>
                                </li>
                            </ul>
                            <h5 class="txt-right c-red">
                                实发3件 ￥146.00
                            </h5>
                        </li>
                    </ul>
                </li>

                <li class="mui-table-view-cell mt10">
                    <!-- 左右分 -->
                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline te-product">
                        <li class="mui-table-view-cell mui-media mui-col-xs-3 te-product-pic">
                            <img src="https://pro.modao.cc/uploads3/images/1145/11455302/raw_1501411901.jpeg" alt="">
                            <span class="fs-14">1591</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-9 te-product-con">
                            <h5 class="head clearfix">
                                <span class="mui-pull-left title">2517#蕾丝连衣裙蕾丝2517#蕾丝连衣裙蕾丝</span>
                                <span class="mui-pull-right">VIP￥48.00</span>
                            </h5>
                            <ul class="ullist">
                                <li>
                                    <span class="mui-pull-left">粉色 M1</span>
                                    <span class="txt-center">实发 1</span>
                                    <span class="mui-pull-right">￥48.00</span>
                                </li>
                                <li>
                                    <span class="mui-pull-left">粉色 M1</span>
                                    <span class="txt-center">实发 1</span>
                                    <span class="mui-pull-right">￥48.00</span>
                                </li>
                                <li>
                                    <span class="mui-pull-left">粉色 M1</span>
                                    <span class="txt-center">实发 1</span>
                                    <span class="mui-pull-right">￥48.00</span>
                                </li>
                                <li>
                                    <span class="mui-pull-left">粉色 M1</span>
                                    <span class="txt-center">实发 1</span>
                                    <span class="mui-pull-right">￥48.00</span>
                                </li>
                                <li>
                                    <span class="mui-pull-left">粉色 M1</span>
                                    <span class="txt-center">实发 1</span>
                                    <span class="mui-pull-right">￥48.00</span>
                                </li>
                                <li>
                                    <span class="mui-pull-left">粉色 M1</span>
                                    <span class="txt-center">实发 1</span>
                                    <span class="mui-pull-right">￥48.00</span>
                                </li>
                                <li>
                                    <span class="mui-pull-left">粉色 M1</span>
                                    <span class="txt-center">实发 1</span>
                                    <span class="mui-pull-right">￥48.00</span>
                                </li>
                                <li>
                                    <span class="mui-pull-left">粉色 M1</span>
                                    <span class="txt-center">实发 1</span>
                                    <span class="mui-pull-right">￥48.00</span>
                                </li>
                                <li>
                                    <span class="mui-pull-left">粉色 M1</span>
                                    <span class="txt-center">实发 1</span>
                                    <span class="mui-pull-right">￥48.00</span>
                                </li>
                                <li>
                                    <span class="mui-pull-left">粉色 M1</span>
                                    <span class="txt-center">实发 1</span>
                                    <span class="mui-pull-right">￥48.00</span>
                                </li>

                            </ul>
                            <h5 class="txt-right c-red">
                                实发3件 ￥146.00
                            </h5>
                        </li>
                    </ul>
                </li>

                <li class="mui-table-view-cell mt10 order-address">
                    <span class="mui-icon iconfont icon-dizhi mui-pull-left"></span>
                    <p>收货人: 陈坤彬     13610012164</p>
                    <p>广东省广州市海珠区 南洲路119号华南至友5楼508（原粮油仓库）</p>
                </li>

                <li class="mui-table-view-cell mt10 order-message">
                    <h5>留言备注</h5>
                    <textarea id="textarea" rows="3" placeholder="选填，输入你的留言（100字以内）..."></textarea>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import headBar from "../../public/m/header-oth";
export default {
    name: 'app',
    data() {
        return {
            headTitle: '订单详情'
        }
    },
    components: {
        headBar
    }
}
</script>
<style lang="less" scoped>
.c-red{
    color: #E51C23;
}
.orderdetail{
    &.mui-content>.mui-table-view:first-child {
        margin-top: 0;
    }
    .mui-table-view.te-table-view{
        background-color: transparent;
        >.mui-table-view-cell{
            font-size: 14px;
            background-color: #fff;
        }
        
        .mui-table-view.te-product{
            padding: 0;
            >.mui-table-view-cell{
                vertical-align: top;
                margin: 0;
                padding: 0;
            }
            .te-product-pic{
                img{
                    width: 100%;
                }
            }
            .te-product-con{
                padding-left: 10px;
                .head{
                    .title{
                        width: 150px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        text-align: left;
                    }
                }
                .ullist{
                    li{
                        height: 30px;
                        line-height: 30px;
                        font-size: 14px;
                        color: #646464;
                        border-bottom: 1px solid #e2e2e2;
                    }
                }
            }
        }
        // 订单头部
        .order-header{
            height: 60px;
            background: url(https://pro.modao.cc/uploads3/images/1206/12060163/raw_1503399865.jpeg) center center;
            .left p{
                color: #fff;
            }
            .right{
                line-height: 36px;
                color: #fff;
                .mui-btn{
                    padding: 7px 5px;
                    color: inherit;
                    background-color: transparent;
                    font-size: 18px;
                    border: 0;
                }
            }
        }
        // 快递
        .order-express{
            height: 78px;
            .left p{
                line-height: 24px;
                color: #000;
                .mui-btn{
                    padding: 0 5px;
                    color: #7d7d7d;
                    background-color: transparent;
                    font-size: 18px;
                    border: 0;
                }
            }
            .right{
                line-height: 56px;
                color: #000;
            }
        }
        // 地址
        .order-address{
            .mui-icon{
                margin-right: 10px;
                height: 60px;
                line-height: 60px;
                font-size: 20px;
                color: #e1e1e1;
            }
            p{
                color: #646464;
            }
        }
        // 留言
        .order-message{
            h5{
                color: #000;
            }
            textarea{
                margin: 0;
                font-size: 14px;
                border: 0;
                background-color: #f6f6f6;
            }
        }
    }
}
</style>