<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content find mb50">
            <div class="main">
                <!-- 图片块 -->
                <div class="pic-block">
                    <img class="media-img" src="https://pro.modao.cc/uploads3/images/1145/11455306/raw_1501411910.jpeg">
                    <div class="media-body">
                        <p class="title mui-ellipsis">2020#2017新款圆领修身蕾丝连衣裙女夏 高腰绣花短裙荷叶边裙子</p>
                        <p class="price">
                            <span class="now">￥33.00</span>
                            <span class="old">销量 106</span>
                        </p>
                        <span class="shop-name">钰紫芊芊</span>
                    </div>
                </div>

                <!-- 功能按钮 -->
                <ul class="mui-table-view mui-grid-view top-noline bottom-noline te-btns-fun mt30">
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="javascript:;">
                            <span class="mui-icon iconfont icon-heart-copy-copy icon_heart"></span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="/carthave">
                            <span class="mui-icon iconfont icon-gouwuche1 icon_cart">
                                <span class="mui-badge">999</span>
                            </span>
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
import headBar from "../public/m/header-oth";
import footerBar from "../public/m/footer";
export default {
    name: 'app',
    data() {
        return {
            headTitle: '发现'
        }
    },
    components: {
        headBar,
        footerBar
    }
}
</script>
<style lang="less" scoped>
.find {
    .main {
        padding: 20px 40px;
        .pic-block {
            padding: 8px;
            border: 1px solid #dedede;
            background-color: #fff;
            .media-img {
                width: 100%;
            }
            .media-body {
                position: relative;
                margin-top: 5px;
                .title {
                    margin-bottom: 5px;
                    color: #000;
                }
                .price {
                    font-size: 164x;
                    color: #000;
                    span {
                        margin-right: 10px;
                        font-weight: 600;
                    }
                }
                .shop-name {
                    position: absolute;
                    right: 0;
                    bottom: -15px;
                    font-size: 12px;
                }
            }
        }
    } //功能按钮
    .te-btns-fun {
        background-color: rgba(255, 255, 255, 0);
        a {
            display: inline-block;
            padding: 0;
            width: 66px;
            height: 66px;
            line-height: 66px;
            background: #fff;
            border: 4px solid #BBBBBB;
            border-radius: 50%;
            
            .icon_heart{
                color: #dd171e;
            }
            .icon_cart{
                color: #272727;
            }
            .mui-icon {
                font-size: 24px;
                .mui-badge{
                    margin: 0;
                    padding: 0px 2px;
                    top: 8px;
                    left: 50%;
                    background: #272727;
                }
            }
        }
    }
}
</style>