<template>
    <div class="app">
        <!-- 头部 -->
        <headBar></headBar>

        <div class="mui-content mb50">
            <!-- 分类导航 -->
            <ul class="mui-table-view mui-grid-view top-noline bottom-noline te-table-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-2">
                    <a href="javascript:;">女装</a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-2">
                    <a href="javascript:;">男装</a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-2">
                    <a href="javascript:;">童装</a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-2">
                    <a href="javascript:;">内衣</a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-2">
                    <a href="javascript:;">鞋帽</a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-2">
                    <a href="javascript:;">箱包</a>
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
            <ul class="mui-table-view mui-grid-view top-noline bottom-noline te-table-view te-navlist2">
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
            </ul>

            <!-- 推荐商品 -->
            <ul class="mui-table-view top-noline bottom-noline te-recom-list">
                <li>
                    <a href="/" rel="recommend">
                        <div class="photo-con">
                            <img class="photo" src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg">
                        </div>
                        <div class="text-con">
                            <h5 class="title">2020#2017新款圆领修身蕾丝连衣裙女夏 高腰绣花短裙荷叶边裙子</h5>
                            <h5 class="shop">摩登时代旗舰店</h5>
                            <h4 class="price"><span class="price-new">￥50.00</span><span class="price-old">￥55.00</span></h4>
                            <span class="label">推荐商品</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="recommend">
                        <div class="photo-con">
                            <img class="photo" src="https://pro.modao.cc/uploads3/images/1145/11455306/raw_1501411910.jpeg">
                        </div>
                        <div class="text-con">
                            <h5 class="title">2020#2017新款圆领修身蕾丝连衣裙女夏 高腰绣花短裙荷叶边裙子</h5>
                            <h5 class="shop">摩登时代旗舰店</h5>
                            <h4 class="price"><span class="price-new">￥50.00</span><span class="price-old">￥55.00</span></h4>
                            <span class="label">推荐商品</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="recommend">
                        <div class="photo-con">
                            <img class="photo" src="https://pro.modao.cc/uploads3/images/1188/11882746/raw_1502795033.jpeg">
                        </div>
                        <div class="text-con">
                            <h5 class="title">2020#2017新款圆领修身蕾丝连衣裙女夏 高腰绣花短裙荷叶边裙子</h5>
                            <h5 class="shop">摩登时代旗舰店</h5>
                            <h4 class="price"><span class="price-new">￥50.00</span><span class="price-old">￥55.00</span></h4>
                            <span class="label">推荐商品</span>
                        </div>
                    </a>
                </li>
            </ul>

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
.te-navlist2 {
    &.mui-table-view {
        .mui-table-view-cell {
            line-height: 1;
            a {
                padding: 15px 0;
                span{
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

// 推荐商品
.te-recom-list{
    background: none;
    li{
        margin-top: 10px;
        background-color: #fff;
        a{
            display: block;
            padding: 10px;
            height: 150px;
            .photo-con{
                float: left;
                margin-right: 10px;
                line-height: 0;
                .photo{
                    width: 120px;
                    height: 130px;
                }
            }
            .text-con{
                position: relative;
                height: 130px;
                h4,h5{
                    margin: 0;
                }
                .title{
                    line-height: 18px;
                }
                .shop{
                    margin-top: 10px;
                }
                .price{
                    margin-top: 10px;
                    font-weight: 400;
                    .price-new{
                        color: #E51C23;
                    }
                    .price-old{
                        margin-left: 10px;
                        color: #888888;
                        font-size: 13px;
                        text-decoration: line-through;
                    }
                }
                .label{
                    display: inline-block;
                    position: absolute;
                    right: 0;
                    bottom: 10px;
                    padding: 3px 6px;
                    line-height: 1;
                    font-size: 12px;
                    color: #fff;
                    background: #FA0046;
                    border-radius: 6px;
                }
            }
        } 
    }
}
</style>