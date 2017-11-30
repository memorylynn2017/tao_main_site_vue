<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content search">
            <div class="mui-slider te-slider">
                <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted te-slider-nav">
                    <a class="mui-control-item mui-active" href="#goods">
                        商品退款
                    </a>
                    <a class="mui-control-item" href="#store">
                        运费退款
                    </a>
                </div>
                <div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-6 te-slider-line"></div>
                <div class="mui-slider-group te-slider-con">
                    <div id="goods" class="mui-slider-item mui-control-content mui-active">
                        <img class="icon" src="https://pro.modao.cc/uploads3/images/1207/12077997/raw_1503468774.png" alt="">
                        <p>暂无交易记录</p>
                    </div>
                    <div id="store" class="mui-slider-item mui-control-content">
                        <img class="icon" src="https://pro.modao.cc/uploads3/images/1207/12077997/raw_1503468774.png" alt="">
                        <p>暂无交易记录</p>
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>

<script>
import headBar from "../../public/m/header-oth";
export default {
    name: 'app',
    data() {
        return {
            headTitle: '订单退款'
        }
    },
    components: {
        headBar
    }
}
</script>
<style lang="less" scoped>
.te-bar-search {
    height: 55px;
    background: #fff;
    box-shadow: none;
    border-bottom: 1px solid #c5c5c5;
    .mui-title {
        left: 20px;
        right: 55px;
        input {
            margin: 9px 0;
            height: 36px;
            color: #888;
            background: #EEEEEE;
            font-size: 14px;
            font-weight: 400;
            text-align: left;
        }
    }
    .te-nav-text {
        width: 40px;
        height: 55px;
        line-height: 55px;
        text-align: center;
        color: #646464;
        font-size: 14px;
    }
}

.search {
    .te-slider{
        // 导航
        .te-slider-nav{
            position: fixed;
            top: 44px;
            background: #fff;
            border-bottom: 1px solid #c8c7cc;
            z-index: 99;
            .mui-control-item{
                line-height: 44px;
                color: #888;
                &.mui-active{
                    color: #E51C23;
                }
            }
        }
        // 线
        .te-slider-line{
            position: fixed;
            top: 86px;
            background-color: #E51C23;
            z-index: 99;
        }
        // 内容
        .te-slider-con{
            padding-top: 54px;
            .mui-slider-item{
                border: 0;
                min-height: 600px; 
                background: #fff;
                text-align: center;
                .icon{
                    margin-top: 105px;
                    width: 120px;
                }
                p {
                    margin: 20px 0 30px 0;
                    color: #949494;
                }
            }
        }
    }
}
</style>