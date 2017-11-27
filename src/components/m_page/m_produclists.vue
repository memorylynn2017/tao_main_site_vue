<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>
        <div class="mui-content product-detail">
            <!-- 图片轮播 -->
            <div id="slider" class="mui-slider banner" >
                <div class="mui-slider-group mui-slider-loop">
                    <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
                    <div class="mui-slider-item mui-slider-item-duplicate">
                        <a href="#">
                            <img src="https://pro.modao.cc/uploads3/images/1227/12275135/raw_1504084162.jpeg">
                        </a>
                    </div>
                    <!-- 第一张 -->
                    <div class="mui-slider-item">
                        <a href="#">
                            <img src="https://pro.modao.cc/uploads3/images/1227/12275101/raw_1504084137.jpeg">
                        </a>
                    </div>
                    <!-- 第二张 -->
                    <div class="mui-slider-item">
                        <a href="#">
                        	<img src="https://pro.modao.cc/uploads3/images/1227/12275108/raw_1504084144.jpeg">
                            
                        </a>
                    </div>
                    <!-- 第三张 -->
                    <div class="mui-slider-item">
                        <a href="#">
                        	 <img src="https://pro.modao.cc/uploads3/images/1227/12275118/raw_1504084152.jpeg">
                           
                        </a>
                    </div>
                     <div class="mui-slider-item">
                        <a href="#">
							 <img src="https://pro.modao.cc/uploads3/images/1227/12275127/raw_1504084157.jpeg">
                           
                        </a>
                    </div>
                    <!-- 第四张 -->
                    <div class="mui-slider-item">
                        <a href="#">

                            <img src="https://pro.modao.cc/uploads3/images/1227/12275135/raw_1504084162.jpeg">
                        </a>
                    </div>
                    <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
                    <div class="mui-slider-item mui-slider-item-duplicate">
                        <a href="#">
                            <img src="https://pro.modao.cc/uploads3/images/1227/12275101/raw_1504084137.jpeg">
                        </a>
                    </div>
                </div>
                <div class="mui-slider-indicator">
                    <div class="mui-indicator mui-active"></div>
                    <div class="mui-indicator"></div>
                    <div class="mui-indicator"></div>
                    <div class="mui-indicator"></div>
                </div>
            </div>
            <div class="product-msg">
                <p class="des">1591#蕾丝连衣裙蕾丝拼接网纱吊带薄款性感V领低胸流苏吊带无袖连衣裙</p>
                <div class="msg1 qf">
                    <span class="price fl">￥48.00</span>
                    <span class="vip fl">VIP (登录查看)</span>
                    <button class="mui-btn fr">找同款</button>
                </div>
                <div class="msg2 qf">
                    <span class="fl">货号 1591</span>
                    <span class="fl">销量 1</span>
                    <span class="fl">收藏 2</span>
                    <span class="fr">2017-08-17上新</span>
                </div>
            </div>
            <ul class="mui-table-view kucun server">
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right">
                        <span>服务</span>
                        <span><i></i>实拍</span>
                        <span><i></i>退现</span>
                        <span><i></i>代发</span>
                    </a>
                </li>
            </ul>
            <ul class="mui-table-view checkmsg">
                <li class="mui-table-view-cell">
                    <span class="label">颜色</span>
                    <span class="checkitem"><i>蓝色</i><i>白色</i><i>粉色</i><i>黑色</i></span>
                </li>
                <li class="mui-table-view-cell">
                    <span class="label">尺码</span>
                    <span class="checkitem"><i>S</i><i>M</i><i>L</i><i>XL</i></span>
                </li>
            </ul>
            <ul class="mui-table-view kucun">
                <li class="mui-table-view-cell type">
                    <span>JM欧美女装<i></i></span>
                    <button class="mui-btn fr">联系商家</button>
                </li>
                <li class="mui-table-view-cell shop">
                    <a class="mui-navigate-right">
                        <span class="mui-badge">进店逛逛</span>
                        <span>佰润 2F B2042</span>
                        <span>商品 79</span>
                    </a>
                </li>
            </ul>
            <div class="product-content">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">商品详情</li>
                </ul>
                <div class="picbox">
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274164/raw_1504083312.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274169/raw_1504083313.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274170/raw_1504083314.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274171/raw_1504083314.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274173/raw_1504083315.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274174/raw_1504083316.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274269/raw_1504083405.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274278/raw_1504083415.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274290/raw_1504083424.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274304/raw_1504083434.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274310/raw_1504083441.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274322/raw_1504083448.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274333/raw_1504083455.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274337/raw_1504083460.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274360/raw_1504083478.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274364/raw_1504083480.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274372/raw_1504083485.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274388/raw_1504083504.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274395/raw_1504083513.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274403/raw_1504083518.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274426/raw_1504083539.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274461/raw_1504083567.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274466/raw_1504083571.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274484/raw_1504083587.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274490/raw_1504083592.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274502/raw_1504083606.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274516/raw_1504083611.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274528/raw_1504083617.jpeg" alt=""></p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import headBar from "../public/m/header-oth";
export default {
  name: 'app',
    data() {
        return {
            headTitle: ' 1591#蕾丝连衣裙蕾丝拼接网纱吊带...'
        };
    },
    components: {
        headBar
    }
};
</script>


<style lang="less" scoped>
.qf {
    *zoom: 1;
}
.qf:after {
    content: '';
    display: table;
    clear: both;
}
.fl {float: left;}
.fr {float: right;}
.product-detail {
    .mui-table-view:before,.mui-table-view:after {
        height: 0;
    }
    .mui-btn {
        padding: 2px 12px;
        font-size: 12px;
        color: #646464;
    }
    .product-msg {
        background: #fff;
        padding: 5px 15px;
        margin-bottom: 10px;
        .des {
            font-size: 14px;
            color: #646464;
            line-height: 20px;
        }
        .msg1 {
            .price {
                font-size: 20px;
                color: #e51c23;
                line-height: 30px;
                margin-right: 30px;
            }
            .vip {
                font-size: 14px;
                color: #646464;
                line-height: 30px;
            }
            .mui-btn {
                margin-top: 4px;
            }
        }
        .msg2 {
            font-size: 12px;
            color: #888;
            line-height: 30px;
            span.fl {
                margin-right: 15px;
            }
        }
    }
    .kucun {
        margin-bottom: 10px;
        .mui-navigate-right {
            font-size: 14px;
            color: #888;
            .mui-badge {
                font-size: 14px;
                color: #646464;
                background: #fff;
                right: 25px;
            }
        }
        .type {
            color: #f58605;
            i {
                display: inline-block;
                width: 18px;
                height: 18px;
                background: url("../../assets/images/d1.png") no-repeat center center;
                vertical-align: middle;
                margin-left: 10px;
            }
        }
        .last {
            font-size: 14px;
            color: #aaa;
        }
    }
    .product-content {
        .mui-table-view-cell {
            font-size: 14px;
            color: #000;
        }
        .picbox {
            p {
                margin-bottom: 0;
                img {
                    width: 100%;
                    vertical-align: top;
                }
            }
        }
    }
    .server {
        span {
            color: #666;
            margin-right: 18px;
            i {
                display: inline-block;
                width: 16px;
                height: 16px;
                background: url("../../assets/images/d2.png") no-repeat center center;
                vertical-align: middle;
                margin-right: 5px;
            }
            &:first-child {
                color: #888;
            }
        }
    }
    .checkmsg {
        margin-bottom: 10px;
        .mui-table-view-cell {
            font-size: 14px;
            .label {
                color: #888;
                margin-right: 15px;
            }
            .checkitem {
                color: #323232;
                i {
                    font-style: normal;
                    margin-right: 18px;
                }
            }
        }
    }
    .shop {
        span {
            margin-right: 15px;
            color: #aaa;
            &.mui-badge {
                margin-right: 0;
                color: #323232;
            }
        }
    }
}
.mui-popover {
    background: #fff!important;
    .checkbox {
        li {
            float: left;
            width: 70px;
            font-size: 14px;
            color: #888;
            line-height: 26px;
            text-align: center;
            border: 1px solid #888;
            list-style: none;
            margin: 0 10px;
            margin-bottom: 20px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }
    .numbox {
        background: #f7f7f7;
        padding: 12px 30px 2px;
        margin-top: -20px;
        .type {
            margin-bottom: 10px;
            .label {
                font-size: 14px;
                color: #323232;
                line-height: 32px;
            }
            .mui-numbox {
                .mui-btn {
                    background: #fff;
                }
                .mui-input-numbox {
                    background: #fffdcf;
                }
                .mui-btn-numbox-plus {
                    color: #e51c23;
                }
            }
        }
    }
    .checkresult {
        padding: 20px 15px;
        background: #fff;
        .mui-input-row {
            label {
                width: 22%;
                font-size: 14px;
                color: #323232;
            }
        }
        .mui-input-row label~textarea {
            width: 78%;
            margin-bottom: 0;
            padding-left: 8px;
            border: 1px solid #e51c23;
            font-size: 14px;
            color: #323232;
            border-radius: 0;
        }
    }
}
</style>