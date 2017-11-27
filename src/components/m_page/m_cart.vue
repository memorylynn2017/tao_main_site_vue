<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content cart mb50">
            <!-- 空 -->
            <!-- mui-hidden -->
            <div class="cart-empty mui-block">
                <img class="icon" src="https://pro.modao.cc/uploads2/images/724/7242796/raw_1484124596.png" alt="">
                <p>您的购物车还是空的，赶紧行动吧！</p>
                <a class="mui-btn mui-btn-danger btn" href="">马上进货</a>
            </div>

            <!-- 有 -->
            <div class="cart-have mui-block mt10">
                <h5 class="mui-content-padded cart-nav">
                    <span class="mui-pull-left title">共有3款商品</span>
                    <span class="mui-icon iconfont icon-lajixiang mui-pull-right del"></span>
                </h5>
                <div class="mui-card cart-list">
                    <form class="mui-input-group">
                        <div class="mui-input-row mui-checkbox mui-left cart-item">
                            <input name="checkbox" value="1" type="checkbox">
                            <div class="cart-item-con">
                                <div class="media-pic">
                                    <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                    <p>￥
                                        <span class="fs-16">48</span> .00</p>
                                </div>
                                <div class="media-body">
                                    <p class="title mui-ellipsis">1591#蕾丝连衣裙蕾丝1591#蕾丝连衣裙蕾丝1591#蕾丝连衣裙蕾丝</p>
                                    <span class="num">4件</span>
                                    <div class="desc">
                                             粉色:M/1件;L/1件;
                                        <br/>粉色:M/1件;L/1件;
                                        <br/>粉色:M/1件;L/1件;
                                        <br/>粉色:M/1件;L/1件;
                                    </div>
                                    <a class="btn" href="javascript:;">修改</a>
                                </div>
                            </div>
                        </div>
                        <div class="mui-input-row mui-checkbox mui-left cart-item">
                            <input name="checkbox" value="1" type="checkbox">
                            <div class="cart-item-con">
                                <div class="media-pic">
                                    <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                    <p>￥
                                        <span class="fs-16">48</span> .00</p>
                                </div>
                                <div class="media-body">
                                    <p class="title mui-ellipsis">1591#蕾丝连衣裙蕾丝1591#蕾丝连衣裙蕾丝1591#蕾丝连衣裙蕾丝</p>
                                    <span class="num">4件</span>
                                    <div class="desc">
                                        粉色:M/1件;L/1件;<br/> 粉色:M/1件;L/1件;
                                    </div>
                                    <a class="btn" href="javascript:;">修改</a>
                                </div>
                            </div>
                        </div>
                        <div class="mui-input-row mui-checkbox mui-left cart-item">
                            <input name="checkbox" value="1" type="checkbox">
                            <div class="cart-item-con">
                                <div class="media-pic">
                                    <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                    <p>￥
                                        <span class="fs-16">48</span> .00</p>
                                </div>
                                <div class="media-body">
                                    <p class="title mui-ellipsis">1591#蕾丝连衣裙蕾丝1591#蕾丝连衣裙蕾丝1591#蕾丝连衣裙蕾丝</p>
                                    <span class="num">4件</span>
                                    <div class="desc">
                                        粉色:M/1件;L/1件;<br/> 粉色:M/1件;L/1件;
                                    </div>
                                    <a class="btn" href="javascript:;">修改</a>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>

        <!-- 尾部 -->
        <footerBar></footerBar>

        <!--结算功能-->
        <nav id="footer_settlement" class="mui-bar mui-bar-tab te-settlement">
            <div class="mui-input-row mui-checkbox mui-left mui-pull-left settlement-all">
                <input name="checkbox" value="1" type="checkbox">
                <span>全选 合计: ￥552.00</span>
            </div>
            <a class="settlement-btn mui-pull-right" href="javascript:;">
                <span>去结算(13)</span>
            </a>
        </nav>
    </div>
</template>

<script>
import headBar from "../public/m/header-oth";
import footerBar from "../public/m/footer";
export default {
    name: 'app',
    data() {
        return {
            headTitle: '进货车'
        }
    },
    components: {
        headBar,
        footerBar
    }
}
</script>
<style lang="less" scoped>
.mui-checkbox {
    input[type=checkbox] {
        left: 10px;
        width: 20px;
        height: 20px;
        &:checked:before {
            color: #dd171e;
        }
        &:before {
            font-size: 20px;
        }
    }
}

.cart {
    // 空
    .cart-empty {
        margin-top: 105px;
        text-align: center;
        .icon {
            width: 120px;
            opacity: 0.1;
        }
        p {
            margin: 20px 0 30px 0;
            color: #949494;
        }
        .btn {
            padding: 0;
            width: 180px;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            background: #E51C23;
            border-radius: 0;
        }
    } // 有
    .cart-have {
        .cart-nav {
            margin: 0;
            padding: 0 15px;
            height: 30px;
            background-color: #fff;
            .title {
                margin: 8px 0 8px 22px;
            }
            .del {
                margin: 7px 0;
            }
        }
        .cart-list {
            margin: 0;
            border-radius: 0;
            box-shadow: none;
            .cart-item {
                background: #FAFAFA;
                margin-bottom: 10px;
                height: 142px;
                &:last-child {
                    margin-bottom: 0;
                }
                &:after {
                    height: 0;
                }
                input[type=checkbox] {
                    top: 50px;
                } //图片内容块
                .cart-item-con {
                    padding-left: 40px;
                    padding-top: 15px;
                    color: #323232;
                    .media-pic {
                        float: left;
                        margin-right: 16px;
                        width: 84px;
                        img {
                            width: 84px;
                            height: 84px;
                        }
                        p {
                            font-size: 12px;
                            color: #323232;
                            text-align: center;
                        }
                    }
                    .media-body {
                        position: relative;
                        padding-left: 100px;
                        padding-right: 15px;
                        .title {
                            margin-bottom: 2px;
                            width: 140px;
                            color: #323232;
                        }
                        .num {
                            position: absolute;
                            right: 15px;
                            top: 0;
                            color: #E51C23;
                        }
                        .desc {
                            padding: 5px 10px;
                            height: 61px;
                            border: 1px solid #dedede;
                            background-color: #fff;
                            overflow-y: auto;
                        }
                        .btn {
                            float: right;
                            position: absolute;
                            display: inline-block;
                            right: 15px;
                            bottom: -30px;
                            width: 55px;
                            height: 24px;
                            line-height: 24px;
                            text-align: center;
                            font-size: 12px;
                            color: #323232;
                            background-color: #fff;
                            border: 1px solid #dedede;
                        }
                    }
                }
            }
        }
    }
}

// 结算
.te-settlement {
    background: #fff;
    .settlement-all {
        height: 50px;
        input[type=checkbox] {
            top: 15px;
        }
        span {
            padding-left: 40px;
            line-height: 50px;
        }
    }
    .settlement-btn {
        display: inline-block;
        width: 114px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        background: #E51C23;
    }
}
</style>