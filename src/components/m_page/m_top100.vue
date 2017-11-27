<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>
        <!-- 导航 -->
        <div class="tablinks">
            <div id="segmentedControl" class="mui-segmented-control">
                <a class="mui-control-item mui-active" href="#product"><span>商品</span></a>
                <a class="mui-control-item" href="#shop"><span>店铺</span></a>
            </div>
        </div>
        <div class="mui-content top100">
            <div class="tabboxs">
                <div id="product" class="mui-control-content  mui-active">
                    <ul class="mui-table-view rowpic">
                        <li class="mui-table-view-cell mui-media first">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left" src="/src/assets/images/shuijiao.jpg">
                                <div class="mui-media-body">
                                    <p class="title">2020#2017新款圆领修身蕾丝连衣裙女夏 高腰绣花短裙荷叶边裙子</p>
                                    <p class='des mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                                    <p class="price qf">
                                        <span class="now fl">￥50.00</span>
                                        <span class="ranking fr"></span>
                                    </p>
                                    <div class="salenum">销量2912件</div>
                                </div>
                            </a>
                        </li>
                        <li class="mui-table-view-cell mui-media two">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left" src="/src/assets/images/cbd.jpg">
                                <div class="mui-media-body">
                                    <p class="title">2020#2017新款圆领修身蕾丝连衣裙女夏 高腰绣花短裙荷叶边裙子</p>
                                    <p class='des mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                                    <p class="price qf">
                                        <span class="now fl">￥50.00</span>
                                        <span class="ranking fr"></span>
                                    </p>
                                    <div class="salenum">销量2912件</div>
                                </div>
                            </a>
                        </li>
                        <li class="mui-table-view-cell mui-media three">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left" src="/src/assets/images/yuantiao.jpg">
                                <div class="mui-media-body">
                                    <p class="title">2020#2017新款圆领修身蕾丝连衣裙女夏 高腰绣花短裙荷叶边裙子</p>
                                    <p class='des mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                                    <p class="price qf">
                                        <span class="now fl">￥50.00</span>
                                        <span class="ranking fr"></span>
                                    </p>
                                    <div class="salenum">销量2912件</div>
                                </div>
                            </a>
                        </li>
                        <li class="mui-table-view-cell mui-media">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left" src="/src/assets/images/muwu.jpg">
                                <div class="mui-media-body">
                                    <p class="title">2020#2017新款圆领修身蕾丝连衣裙女夏 高腰绣花短裙荷叶边裙子</p>
                                    <p class='des mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                                    <p class="price qf">
                                        <span class="now fl">￥50.00</span>
                                        <span class="ranking fr"></span>
                                    </p>
                                    <div class="salenum">销量2912件</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="shop" class="mui-control-content shopcontent">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media first">
                            <a href="javascript:;">
                                <div class="mui-media-object mui-pull-left"><span>1</span></div>
                                <div class="mui-media-body">
                                    <div class="mui-table">
                                        <div class="mui-table-cell mui-col-xs-7">
                                            <h5>苏格服饰</h5>
                                            <p class="mui-h6 mui-ellipsis">博美123</p>
                                        </div>
                                        <div class="mui-table-cell mui-col-xs-5 mui-text-right">
                                            <div class="nummsg">
                                                <p>销量: 2057</p>
                                                <p>上传: 182057</p>
                                            </div>
                                            <div class="symbol">
                                                <span>—</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="mui-table-view-cell mui-media two">
                            <a href="javascript:;">
                                <div class="mui-media-object mui-pull-left"><span>2</span></div>
                                <div class="mui-media-body">
                                    <div class="mui-table">
                                        <div class="mui-table-cell mui-col-xs-7">
                                            <h5>苏格服饰</h5>
                                            <p class="mui-h6 mui-ellipsis">博美123</p>
                                        </div>
                                        <div class="mui-table-cell mui-col-xs-5 mui-text-right">
                                            <div class="nummsg">
                                                <p>销量: 2057</p>
                                                <p>上传: 182057</p>
                                            </div>
                                            <div class="symbol">
                                                <span>—</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="mui-table-view-cell mui-media three">
                            <a href="javascript:;">
                                <div class="mui-media-object mui-pull-left"><span>3</span></div>
                                <div class="mui-media-body">
                                    <div class="mui-table">
                                        <div class="mui-table-cell mui-col-xs-7">
                                            <h5>苏格服饰</h5>
                                            <p class="mui-h6 mui-ellipsis">博美123</p>
                                        </div>
                                        <div class="mui-table-cell mui-col-xs-5 mui-text-right">
                                            <div class="nummsg">
                                                <p>销量: 2057</p>
                                                <p>上传: 182057</p>
                                            </div>
                                            <div class="symbol">
                                                <span>—</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="mui-table-view-cell mui-media">
                            <a href="javascript:;">
                                <div class="mui-media-object mui-pull-left"><span>4</span></div>
                                <div class="mui-media-body">
                                    <div class="mui-table">
                                        <div class="mui-table-cell mui-col-xs-7">
                                            <h5>苏格服饰</h5>
                                            <p class="mui-h6 mui-ellipsis">博美123</p>
                                        </div>
                                        <div class="mui-table-cell mui-col-xs-5 mui-text-right">
                                            <div class="nummsg">
                                                <p>销量: 2057</p>
                                                <p>上传: 182057</p>
                                            </div>
                                            <div class="symbol">
                                                <span>—</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
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
            headTitle: 'TOP100'
        }
    },
    components: {
        headBar
    }
}

$(function() {
    mui.init();

    mui('.mui-scroll-wrapper').scroll();
    mui('body').on('shown', '.mui-popover', function(e) {
        //console.log('shown', e.detail.id);//detail为当前popover元素
    });
    mui('body').on('hidden', '.mui-popover', function(e) {
        //console.log('hidden', e.detail.id);//detail为当前popover元素
    }); 
});
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
.mui-table-view:before, .mui-table-view:after,.mui-table-view-cell:after {
    height: 0;
}

// 导航
.tablinks {
    position: fixed;
    top: 44px;
    z-index: 10;
    .mui-segmented-control {
        padding-top: 0;
        border: none;
        background: #fff;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        .mui-control-item {
            font-size: 14px;
            color: #323232;
            height: 30px;
            border: none;
            span {
                display: inline-block;
                padding: 0 8px;
                border-bottom: 2px solid transparent;
            }
            &:first-child {
                border-right: 1px solid #e6e6e6;
            }
            &.mui-active {
                color: #e51c23;
                background: #fff;
                span {
                    border-bottom: 2px solid #e51c23;
                }
            }
        }
    }
}
.mui-bar-nav~.mui-content {
    padding-top: 95px;
}
.top100 {
    .tabboxs {
        .mui-table-view {
            &.rowpic {
                background: #efeff4;
                .mui-table-view-cell {
                    background: #ffffff;
                    margin-bottom: 10px;
                    &>a:not(.mui-btn) {
                        white-space: normal;
                    }
                    .mui-media-object {
                        line-height: 139px;
                        max-width: 120px;
                        height: 137px;
                    }
                    .mui-media-body {
                        .title {
                            font-size: 14px;
                            color: #323232;
                            line-height: 20px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                        }
                        .des {
                            font-size: 14px;
                            color: #888;
                            line-height: 20px;
                            padding: 7px 0;
                        }
                        .price {
                            .now {
                                font-size: 16px;
                                color: #e51c23;
                                line-height: 23px;
                                margin-right: 10px;
                            }
                            .ranking {
                                display: inline-block;
                                width: 36px;
                                height: 36px;
                                background: url("/src/assets/images/m/t4.png") no-repeat center center;
                            }
                        } 
                        .salenum {
                            font-size: 14px;
                            color: #888;
                            line-height: 26px;
                            text-align: right;
                        }
                    }
                    &.first {
                        .ranking {
                            background: url("/src/assets/images/m/t1.png") no-repeat center center!important;
                        }
                    }
                    &.two {
                        .ranking {
                            background: url("/src/assets/images/m/t2.png") no-repeat center center!important;
                        }
                    }
                    &.three {
                        .ranking {
                            background: url("/src/assets/images/m/t3.png") no-repeat center center!important;
                        }
                    }
                }
            }
        }
        .shopcontent {
            .mui-table-view-cell>a:not(.mui-btn) {
                margin-right: 0;
            }
            .mui-table-view-cell {
                padding-right: 0;
                border-bottom: 1px solid #f4f4f4;
                .mui-pull-left {
                    width: 44px;
                    height: 44px;
                    color: #323232;
                    text-align:center;
                    line-height: 44px;
                    border-radius: 50%;
                    border: 1px solid #e6e6e6;
                }
                &.first {
                    .mui-pull-left {
                        color: #fff;
                        background: #f8537d;
                        border-color: #f8537d;
                    }
                }
                &.two {
                    .mui-pull-left {
                        color: #fff;
                        background: #fed03c;
                        border-color: #fed03c;
                    }
                }
                &.three {
                    .mui-pull-left {
                        color: #fff;
                        background: #96d8e8;
                        border-color: #96d8e8;
                    }
                }
                .mui-table-cell {
                    h5 {
                        color: #323232;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    .mui-h6 {
                        color: #888;
                    }
                    &.mui-text-right {
                        padding-right: 26px;
                        position: relative;
                        .nummsg {
                            padding: 0 8px;
                            font-size: 12px;
                            color: #888;
                            text-align: left;
                            border-left: 1px solid #e6e6e6;
                            border-right: 1px solid #e6e6e6;
                        }
                        .symbol {
                            position: absolute;
                            top: 50%;
                            right: 5px;
                            transform: translateY(-50%);
                            font-size: 12px;
                            color: #9c9c9c;
                            font-weight: 800;
                        }
                    }
                }
            }
        }
    }
}
</style>