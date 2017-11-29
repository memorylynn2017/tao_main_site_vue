<template>
    <div class="app">
        <!-- 头部 -->
        <headBar></headBar>

        <div class="mui-content mb50">
            <!-- 分类导航 -->
            <ul class="mui-table-view mui-grid-view top-noline bottom-noline te-table-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-2">
                    <a href="/M_girlclose">女装</a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-2">
                    <a href="#">男装</a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-2">
                    <a href="#">童装</a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-2">
                    <a href="#">内衣</a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-2">
                    <a href="#">鞋帽</a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-2">
                    <a href="#">箱包</a>
                </li>
            </ul>

            <!--焦点图-->
            <div id="home_slider" class="mui-slider te-slider">
                <div class="mui-slider-group mui-slider-loop">
                    <!--循环必须-->
                    <div class="mui-slider-item mui-slider-item-duplicate">
                        <a href="#">
                            <img src="http://www.taoee.com/upload/image/2017/06/01/14/8a76a117ab4f4048837c9be9594b111e.jpeg">
                        </a>
                    </div>

                    <div class="mui-slider-item">
                        <a href="#">
                            <img src="http://www.taoee.com/upload/image/2017/01/14/20/f3baa12857b54bf8b09dc73d143936ee.jpeg">
                        </a>
                    </div>
                    <div class="mui-slider-item">
                        <a href="#">
                            <img src="http://www.taoee.com/upload/image/2017/06/01/14/c82288878d9942f39b67d6d9502a1c0c.jpeg">
                        </a>
                    </div>
                    <div class="mui-slider-item">
                        <a href="#">
                            <img src="http://www.taoee.com/upload/image/2017/06/01/14/8a76a117ab4f4048837c9be9594b111e.jpeg">
                        </a>
                    </div>

                    <div class="mui-slider-item mui-slider-item-duplicate">
                        <a href="#">
                            <img src="http://www.taoee.com/upload/image/2017/01/14/20/f3baa12857b54bf8b09dc73d143936ee.jpeg">
                        </a>
                    </div>
                </div>
                <div class="mui-slider-indicator">
                    <div class="mui-indicator mui-active"></div>
                    <div class="mui-indicator"></div>
                    <div class="mui-indicator"></div>
                </div>
            </div>

            <!-- 分类导航2 -->
            <!-- <ul class="mui-table-view mui-grid-view top-noline bottom-noline te-table-view te-navlist2">
                <li class="mui-table-view-cell mui-media mui-col-xs-3">
                    <a href="/M_daynews">
                        <span class="icon"><img src="https://pro.modao.cc/uploads3/images/1197/11971719/raw_1503045357.jpeg" alt=""></span>
                        <span class="label">每日新款</span>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3">
                    <a href="javascript:;">
                        <span class="icon"><img src="https://pro.modao.cc/uploads3/images/1252/12524601/raw_1504850996.jpeg" alt=""></span>
                        <span class="label">优质商家</span>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3">
                    <a href="javascript:;">
                        <span class="icon"><img src="https://pro.modao.cc/uploads3/images/1193/11938059/raw_1502955822.jpeg" alt=""></span>
                        <span class="label">TOP100</span>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3">
                    <a href="javascript:;">
                        <span class="icon"><img src="https://pro.modao.cc//uploads3/images/1197/11971719/raw_1503045357.jpeg" alt=""></span>
                        <span class="label">6块6特批</span>
                    </a>
                </li>
            </ul> -->

            <div class="te-slider-indicator">
                <a class="te-control-item" href="/M_daynews">
                    <span class="icon"><img src="https://pro.modao.cc/uploads3/images/1197/11971719/raw_1503045357.jpeg" alt=""></span>
                    <span class="label">每日新款</span>
                </a>
                <a class="te-control-item" href="/M_seller">
                    <span class="icon"><img src="https://pro.modao.cc/uploads3/images/1252/12524601/raw_1504850996.jpeg" alt=""></span>
                    <span class="label">优质商家</span>
                </a>
                <a class="te-control-item" href="/M_top100">
                    <span class="icon"><img src="https://pro.modao.cc/uploads3/images/1193/11938059/raw_1502955822.jpeg" alt=""></span>
                    <span class="label">TOP100</span>
                </a>
                <a class="te-control-item" href="javascript:;">
                    <span class="icon"><img src="https://pro.modao.cc/uploads3/images/1197/11971719/raw_1503045357.jpeg" alt=""></span>
                    <span class="label">6块6特批</span>
                </a>
                <a class="te-control-item" href="javascript:;">
                    <span class="icon"><img src="https://pro.modao.cc/uploads3/images/1254/12544227/raw_1504927542.png" alt=""></span>
                    <span class="label">当季精选</span>
                </a>
                <a class="te-control-item" href="javascript:;">
                    <span class="icon"><img src="https://pro.modao.cc/uploads3/images/1254/12543942/raw_1504926913.png" alt=""></span>
                    <span class="label">外贸热销</span>
                </a>
                <a class="te-control-item" href="javascript:;">
                    <span class="icon"><img src="https://pro.modao.cc/uploads3/images/1252/12526180/raw_1504852556.png" alt=""></span>
                    <span class="label">大码女装</span>
                </a>
            </div>

            <!-- 每日更新 -->
            <div class="daynew mt10">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell top">
                        <a class="mui-navigate-right">
                            <span class="mui-icon mui-icon-paperplane"></span>今日上新 1303</a>
                    </li>
                </ul>
                <!-- 多出一个containcolmn -->
                <ul class="mui-table-view mui-grid-view containcolmn rowpic" style="padding: 0 0px 10px 0;">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="/M_produclists">
                            <img class="mui-media-object " src="https://pro.modao.cc/uploads3/images/1140/11404475/raw_1501155257.jpeg">
                            <div class="mui-media-body">￥43.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="/M_produclists">
                            <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1140/11404460/raw_1501155239.jpeg">
                            <div class="mui-media-body">￥20.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="/M_produclists">
                            <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg">
                            <div class="mui-media-body">￥25.00</div>
                        </a>
                    </li>
                </ul>
                <ul class="mui-table-view rowpic">
                    <li class="mui-table-view-cell mui-media">
                        <a href="/M_produclists">
                            <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg">
                            <div class="mui-media-body">
                                <p class="title">2020#2017新款圆领修身蕾丝连衣裙女夏 高腰绣花短裙荷叶边裙子</p>
                                <p class='des mui-ellipsis'>绮梦服饰</p>
                                <p class="price">
                                    <span class="now">￥50.00</span>
                                    <span class="old">￥55.00</span>
                                </p>
                                <div class="btn">
                                    <button type="button" class="mui-btn">推荐商品</button>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <a href="/M_produclists">
                            <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1145/11455306/raw_1501411910.jpeg">
                            <div class="mui-media-body">
                                <p class="title">实拍实价 鬼手鬼脸魔童短袖男女情侣款宽松T恤 561#</p>
                                <p class='des mui-ellipsis'>摩登时代旗舰店</p>
                                <p class="price">
                                    <span class="now">￥35.00</span>
                                    <span class="old">￥40.00</span>
                                </p>
                                <div class="btn">
                                    <button type="button" class="mui-btn">推荐商品</button>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <a href="/M_produclists">
                            <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1188/11882746/raw_1502795033.jpeg">
                            <div class="mui-media-body">
                                <p class="title">实拍实价 鬼手鬼脸魔童短袖男女情侣款宽松T恤 562#</p>
                                <p class='des mui-ellipsis'>绮梦服饰</p>
                                <p class="price">
                                    <span class="now">￥35.00</span>
                                    <span class="old">￥40.00</span>
                                </p>
                                <div class="btn">
                                    <button type="button" class="mui-btn">推荐商品</button>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- 七日爆款 -->
            <div class="popular">
                <h4 class="title">
                    <i></i>7日爆款</h4>
                <ul class="procuctbox mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="/M_produclists">
                            <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1140/11404475/raw_1501155257.jpeg" style="height:200px;">
                            <div class="mui-media-body">幸福就是可以一起睡觉</div>
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="/M_produclists">
                            <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1140/11404460/raw_1501155239.jpeg" style="height:200px;">
                            <div class="mui-media-body">想要一间这样的木屋，静静的喝咖啡</div>
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="/M_produclists"><img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg" style="height:200px;">
                            <div class="mui-media-body">Color of SIP CBD</div>
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="/M_produclists">
                            <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1140/11404456/raw_1501155230.jpeg" style="height:200px;">
                            <div class="mui-media-body">静静看这世界</div>
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="/M_produclists">
                            <img class="mui-media-object" src="https://pro.modao.cc/uploads2/images/705/7059785/raw_1483087449.jpeg" style="height:200px;">
                            <div class="mui-media-body">静静看这世界</div>
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="/M_produclists">
                            <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1125/11254297/raw_1500731190.jpeg" style="height:200px;">
                            <div class="mui-media-body">静静看这世界</div>
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 尾部 -->
        <footerBar></footerBar>
    </div>
</template>

<script>
import headBar from "../public/m/header-Top";
import footerBar from "../public/m/footer";
export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to m.taoee.com'
        }
    },
    components: {
        headBar,
        footerBar
    }
}
</script>
<style lang="less" scoped>
.mui-table-view:before,
.mui-table-view:after,
.mui-table-view-cell:after {
    height: 0;
}







/* 导航 */

.te-table-view {
    &.mui-table-view {
        margin: 0;
        padding: 0;
        .mui-table-view-cell {
            margin: 0;
            padding: 0;
            line-height: 40px;
            a {
                margin: 0!important;
                font-size: 14px;
                color: #323232;
            }
        }
    }
}









/* 导航2 */

// .te-navlist2 {
//     &.mui-table-view {
//         .mui-table-view-cell {
//             line-height: 1;
//             a {
//                 padding: 15px 0;
//                 span {
//                     display: block;
//                 }
//                 .icon {
//                     line-height: 0;
//                     img {
//                         width: 38px;
//                         height: 38px;
//                     }
//                 }
//                 .label {
//                     margin-top: 5px;
//                     line-height: 1;
//                     font-size: 12px;
//                 }
//             }
//         }
//     }
// }

.te-slider-indicator {
    padding: 10px;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
    background-color: #fff;

    .te-control-item {
        display: inline-block;
        background-color: #fff;
        padding: 15px 0px;
        width: 85px;
        text-align: center;
        span {
            display: block;
        }
        .icon {
            line-height: 0;
            img {
                width: 38px;
                height: 38px;
            }
        }
        .label {
            margin-top: 5px;
            line-height: 1;
            font-size: 12px;
            color: #323232;
        }
    }
}








/* 焦点图 */

.te-slider {
    .mui-slider-indicator {
        left: 10px;
        text-align: left;
        .mui-indicator {
            margin: 1px 3px;
        }
    }
}

// 每日更新
.daynew {
    margin-bottom: 10px;
    .mui-table-view {
        .mui-table-view-cell {
            &.top {
                padding: 10px 15px;
                &>a:not(.mui-btn) {
                    margin: -11px -15px -22px;
                }
            }
            .mui-navigate-right {
                font-size: 12px;
                color: #646464;
                .mui-icon {
                    font-size: 18px;
                }
            }
        }
        &.rowpic {
            // background: #efeff4;
            .mui-table-view-cell {
                background: #ffffff;
                margin-top: 10px;
                &>a:not(.mui-btn) {
                    white-space: normal;
                }
                .mui-media-object {
                    line-height: 122px;
                    width: 112px;
                    max-width: 112px;
                    height: 130px;
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
                        .old {
                            font-size: 14px;
                            color: #888;
                            line-height: 20px;
                            vertical-align: bottom;
                            text-decoration: line-through;
                        }
                    }
                    .btn {
                        text-align: right;
                        margin-top: 4px;
                        .mui-btn {
                            font-size: 12px;
                            color: #fff;
                            background: #fa0046;
                            border: none;
                            line-height: 20px;
                            padding: 0 6px;
                        }
                    }
                }
            }
        }
    }
}

//七日爆款
.popular {
    background: #fff;
    .title {
        padding-top: 15px;
        text-align: center;
        color: #e02d2d;
        i {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url("/src/assets/images/pop.png") no-repeat center center / 100% 100%;
            vertical-align: bottom;
            margin-right: 6px;
        }
    }
    .procuctbox {
        .mui-table-view-cell {
            .mui-media-body {
                font-size: 12px;
                color: #323232;
                line-height: 17px;
                text-align: left;
                overflow: hidden;
                text-overflow: ellipsis;
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