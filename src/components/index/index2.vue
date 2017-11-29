<template>
    <div class="app">
        <!-- 头部 -->
        <headBar></headBar>

        <div class="mui-content mb50">
            <!-- 分类导航 -->
            <ul class="mui-table-view mui-grid-view top-noline bottom-noline te-table-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-3">
                    <a href="javascript:;">每日最新</a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3">
                    <a href="javascript:;">优质商家</a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3">
                    <a href="javascript:;">TOP100</a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3">
                    <a href="javascript:;">6块6清仓</a>
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

            <!-- 图标分类导航 -->
            <ul class="mui-table-view mui-grid-view top-noline bottom-noline te-table-view te-navlist">
                <li class="mui-table-view-cell">
                    <a href="/M_daynews">
                        <span class="icon"><img src="/src/assets/images/type.jpg" alt=""></span>
                        <span class="label">女装</span>
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="javascript:;">
                        <span class="icon"><img src="https://pro.modao.cc/uploads3/images/1252/12524601/raw_1504850996.jpeg" alt=""></span>
                        <span class="label">套装</span>
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="javascript:;">
                        <span class="icon"><img src="https://pro.modao.cc/uploads3/images/1193/11938059/raw_1502955822.jpeg" alt=""></span>
                        <span class="label">鞋子</span>
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="javascript:;">
                        <span class="icon"><img src="https://pro.modao.cc//uploads3/images/1197/11971719/raw_1503045357.jpeg" alt=""></span>
                        <span class="label">美妆个护</span>
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="javascript:;">
                        <span class="icon"><img src="https://pro.modao.cc//uploads3/images/1197/11971719/raw_1503045357.jpeg" alt=""></span>
                        <span class="label">男装</span>
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="/M_daynews">
                        <span class="icon"><img src="https://pro.modao.cc/uploads3/images/1197/11971719/raw_1503045357.jpeg" alt=""></span>
                        <span class="label">家居/食品</span>
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="javascript:;">
                        <span class="icon"><img src="https://pro.modao.cc/uploads3/images/1252/12524601/raw_1504850996.jpeg" alt=""></span>
                        <span class="label">包包/配饰</span>
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="javascript:;">
                        <span class="icon"><img src="https://pro.modao.cc/uploads3/images/1193/11938059/raw_1502955822.jpeg" alt=""></span>
                        <span class="label">内衣裤祙</span>
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="javascript:;">
                        <span class="icon"><img src="https://pro.modao.cc//uploads3/images/1197/11971719/raw_1503045357.jpeg" alt=""></span>
                        <span class="label">童装</span>
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="javascript:;">
                        <span class="icon"><img src="https://pro.modao.cc//uploads3/images/1197/11971719/raw_1503045357.jpeg" alt=""></span>
                        <span class="label">瘦身运行</span>
                    </a>
                </li>
            </ul>

            <!-- 每日更新 -->
            <div class="daynew mt10">
                <ul class="mui-table-view rowpic">
                    <li class="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left" src="https://img.vvic.com/1507719252580_839530.jpg?x-oss-process=image/crop%2Cx_238%2Cy_0%2Cw_517%2Ch_775/resize%2Cw_170%2Ch_255">
                            <div class="mui-media-body">
                                <p class="title">2020#2017新款圆领修身蕾丝连衣裙女夏 高腰绣花短裙荷叶边裙子</p>
                                <p class='des mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
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
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left" src="https://img.vvic.com/1505549924612_310743.jpg?x-oss-process=image/crop%2Cx_138%2Cy_0%2Cw_500%2Ch_750/resize%2Cw_170%2Ch_255">
                            <div class="mui-media-body">
                                <p class="title">2020#2017新款圆领修身蕾丝连衣裙女夏 高腰绣花短裙荷叶边裙子</p>
                                <p class='des mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
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
                </ul>
            </div>

            <!-- 七日爆款 -->
            <div class="popular">
                <h4 class="title">
                    <i></i>7日爆款</h4>
                <ul class="procuctbox mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="https://img.vvic.com/1507608544376_814220.jpg?x-oss-process=image/crop%2Cx_155%2Cy_0%2Cw_534%2Ch_800/resize%2Cw_170%2Ch_255">
                            <div class="mui-media-body">幸福就是可以一起睡觉幸福就是可以一起睡觉幸福就是可以一起睡觉幸福就是可以一起睡觉</div>
                            <div class="other clearfix">
                                <span class="price">￥25.00</span>
                                <span class="num">已批253件</span>
                            </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="https://img.vvic.com/1509935030999_964606.jpg?x-oss-process=image/crop%2Cx_154%2Cy_20%2Cw_517%2Ch_775/resize%2Cw_170%2Ch_255">
                            <div class="mui-media-body">想要一间这样的木屋，静静的喝咖啡</div>
                            <div class="other clearfix">
                                <span class="price">￥25.00</span>
                                <span class="num">已批253件</span>
                            </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#"><img class="mui-media-object" src="https://img.vvic.com/1500540907918_823978.jpg?x-oss-process=image/crop%2Cx_93%2Cy_0%2Cw_534%2Ch_800/resize%2Cw_170%2Ch_255">
                            <div class="mui-media-body">Color of SIP CBD</div>
                            <div class="other clearfix">
                                <span class="price">￥25.00</span>
                                <span class="num">已批253件</span>
                            </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="https://img.vvic.com/1507719252580_839530.jpg?x-oss-process=image/crop%2Cx_238%2Cy_0%2Cw_517%2Ch_775/resize%2Cw_170%2Ch_255">
                            <div class="mui-media-body">静静看这世界</div>
                            <div class="other clearfix">
                                <span class="price">￥25.00</span>
                                <span class="num">已批253件</span>
                            </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="https://img.vvic.com/1506237742742_355239.jpg?x-oss-process=image/crop%2Cx_122%2Cy_0%2Cw_534%2Ch_800/resize%2Cw_170%2Ch_255">
                            <div class="mui-media-body">静静看这世界</div>
                            <div class="other clearfix">
                                <span class="price">￥25.00</span>
                                <span class="num">已批253件</span>
                            </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="https://img.vvic.com/1503135131688_972338.jpg?x-oss-process=image/crop%2Cx_0%2Cy_24%2Cw_455%2Ch_682/resize%2Cw_170%2Ch_255">
                            <div class="mui-media-body">静静看这世界</div>
                            <div class="other clearfix">
                                <span class="price">￥25.00</span>
                                <span class="num">已批253件</span>
                            </div>
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
import headBar from "../public/m/header-top2";
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

.te-navlist {
    &.mui-table-view {
        padding: 0 10px;
        .mui-table-view-cell {
            width: 20%;
            line-height: 1;
            a {
                padding: 10px 0;
                span {
                    display: block;
                }
                .icon {
                    line-height: 0;
                    img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                    }
                }
                .label {
                    margin-top: 5px;
                    line-height: 1;
                    font-size: 12px;
                }
            }
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
            background: #efeff4;
            .mui-table-view-cell {
                background: #ffffff;
                margin-top: 10px;
                &>a:not(.mui-btn) {
                    white-space: normal;
                }
                .mui-media-object {
                    line-height: 122px;
                    max-width: 120px;
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
            &>a:not(.mui-btn) {
                white-space: normal;

                .mui-media-body {
                    margin: 2px 0;
                    height: 28px;
                    line-height: 14px;
                    font-size: 12px;
                    color: #323232;
                    text-align: left;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
                .other {
                    margin-top: 5px;
                    .price {
                        float: left;
                        font-size: 14px;
                        color: #e51c23;
                        line-height: 20px;
                        text-align: left;
                    }
                    .num {
                        float: right;
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style>