<template>
    <div class="app">
        <!-- 搜索框 -->
        <header class="mui-bar mui-bar-nav te-bar-search">
            <h1 class="mui-title">
                <form action="/search_result.htm">
                    <div class="mui-input-row">
                        <input type="search" name="keyword" placeholder="搜索商品名称或编号" required>
                    </div>
                </form>
            </h1>
            <a href="javascript:;" class="te-nav-text mui-pull-right mui-action-back">取消</a>
        </header>

        <div class="mui-content search">
            <div class="mui-slider te-slider">
                <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted te-slider-nav">
                    <a class="mui-control-item mui-active" href="#goods">
                        商品
                    </a>
                    <a class="mui-control-item" href="#store">
                        店铺
                    </a>
                </div>
                <div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-6 te-slider-line"></div>
                <div class="mui-slider-group te-slider-con">
                    <div id="goods" class="mui-slider-item mui-control-content mui-active">
                        <h5 class="mui-content-padded clearfix">
                            <div class="mui-pull-left">
                                <span class="iconfont icon-shijian"></span>
                                <span class="title">最近搜索</span>
                            </div>
                            <a class="iconfont icon-lajixiang mui-pull-right"></a>
                        </h5>
                        <div class="near-search-con">
                            暂无搜索历史
                        </div>
                        <h5 class="mui-content-padded clearfix">
                            <div class="mui-pull-left">
                                <span class="iconfont icon-huo"></span>
                                <span class="title">热门搜索</span>
                            </div>
                        </h5>
                        <div class="hot-search-con">
                            <a class="hot-btn" href="#">外套</a>
                            <a class="hot-btn" href="#">羽绒</a>
                            <a class="hot-btn" href="#">毛衣</a>
                            <a class="hot-btn" href="#">背心</a>
                            <a class="hot-btn" href="#">短裤</a>
                            <a class="hot-btn" href="#">包</a>
                            <a class="hot-btn" href="#">半裙</a>
                            <a class="hot-btn" href="#">裙</a>
                            <a class="hot-btn" href="#">鞋</a>
                            <a class="hot-btn" href="#">上衣</a>
                            <a class="hot-btn" href="#">打底</a>
                            <a class="hot-btn" href="#">风衣</a>
                            <a class="hot-btn" href="#">针织</a>
                            <a class="hot-btn" href="#">衬衫</a>
                            <a class="hot-btn" href="#">阔腿裤</a>
                            <a class="hot-btn" href="#">套装</a>
                            <a class="hot-btn" href="#">卫衣</a>
                            <a class="hot-btn" href="#">连衣裙</a>
                            <a class="hot-btn" href="#">连衣裤</a>
                            <a class="hot-btn" href="#">背带裙</a>
                        </div>
                    </div>
                    <div id="store" class="mui-slider-item mui-control-content">
                        <h5 class="mui-content-padded clearfix">
                            <div class="mui-pull-left">
                                <span class="iconfont icon-shijian"></span>
                                <span class="title">最近搜索</span>
                            </div>
                            <a class="iconfont icon-lajixiang mui-pull-right"></a>
                        </h5>
                        <div class="near-search-con">
                            暂无搜索历史
                        </div>
                        <h5 class="mui-content-padded clearfix">
                            <div class="mui-pull-left">
                                <span class="iconfont icon-huo"></span>
                                <span class="title">热门搜索</span>
                            </div>
                        </h5>
                        <div class="hot-search-con">
                            <a class="hot-btn" href="#">红苹果</a>
                            <a class="hot-btn" href="#">衣品会服饰</a>
                            <a class="hot-btn" href="#">天衣无缝</a>
                            <a class="hot-btn" href="#">猫女郞</a>
                            <a class="hot-btn" href="#">芊芸服饰</a>
                            <a class="hot-btn" href="#">JM欧美女装</a>
                            <a class="hot-btn" href="#">唯美精品</a>
                            <a class="hot-btn" href="#">芊语轩服饰</a>
                            <a class="hot-btn" href="#">依媚儿服饰</a>
                            <a class="hot-btn" href="#">圆圆服饰</a>
                            <a class="hot-btn" href="#">麦时尚</a>
                            <a class="hot-btn" href="#">金典依佳</a>
                            <a class="hot-btn" href="#">果果网络服饰</a>
                            <a class="hot-btn" href="#">小熊服饰</a>
                            <a class="hot-btn" href="#">左右时尚</a>
                            <a class="hot-btn" href="#">恋衣坊</a>
                        </div>
                    
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>


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
    padding-top: 55px;
    .te-slider{
        .te-slider-nav{
            background: #fff;
            .mui-control-item{
                line-height: 44px;
                color: #888;
                &.mui-active{
                    color: #E51C23;
                }
            }
        }
        .te-slider-line{
            height: 1px;
            background-color: #E51C23;
        }
        .te-slider-con{
            .iconfont{
                color: #646464;
            }
            .mui-slider-item{
                border-bottom: 0;
                background-color: #fff;
                .mui-content-padded{
                    margin: 15px;
                    .title{
                        font-size: 16px;
                    }
                }
                .near-search-con{
                    min-height: 60px;
                    text-align: center;
                }
                .hot-search-con{
                    padding: 10px 0 0 20px;
                    .hot-btn{
                        display: inline-block;
                        margin: 0 15px 15px 0;
                        padding: 0 10px;
                        height: 23px;
                        line-height: 23px;
                        font-size: 12px;
                        color: #646464;
                        background: #F1F1F1;
                        border-radius: 12px;
                    }
                }
            }
        }
    }
}
</style>