<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <!-- 导航 -->
        <nav class="nav-fun">
            <ul class="selectbox mui-table-view mui-grid-view ">
                <li class="mui-table-view-cell mui-media mui-col-xs-10 mui-col-sm-10">
                    <select name="select_state" id="">
                        <option value="0" selected="true">全部档口</option>
                        <option value="1">近三日内上新</option>
                        <option value="1">近七日内上新</option>
                    </select>
                </li>

                <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
                    <a href="javascript:;">
                        <span>编辑</span>
                    </a>
                    <a class="mui-hidden" href="javascript:;">
                        <span>完成</span>
                    </a>
                </li>
            </ul> 
        </nav>

        <div class="mui-content follow mb50">
            <ul class="mui-table-view procuct-list">
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1140/11404465/raw_1501155243.jpeg">
                        <div class="mui-media-body">
                            <div class="title">
                                <span class="title-con">红苹果二店</span>
                                <span class="mui-icon mui-icon-arrowright mui-pull-right"></span>
                            </div>
                            <p>大西豪 1F B03D</p>
                            <p>商品：58款</p>
                            <p>销量：0件 人气：15</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1145/11455306/raw_1501411910.jpeg">
                        <div class="mui-media-body">
                            <div class="title">
                                <span class="title-con">韩韵霓裳</span>
                                <span class="mui-icon mui-icon-arrowright mui-pull-right"></span>
                            </div>
                            <p>大西豪 1F B03D</p>
                            <p>商品：58款</p>
                            <p>销量：0件 人气：15</p>
                        </div>
                    </a>
                </li>
               
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1140/11404473/raw_1501155253.jpeg">
                        <div class="mui-media-body">
                            <div class="title">
                                <span class="title-con">红苹果二店</span>
                                <span class="mui-icon mui-icon-arrowright mui-pull-right"></span>
                            </div>
                            <p>大西豪 1F B03D</p>
                            <p>商品：58款</p>
                            <p>销量：0件 人气：15</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1140/11404460/raw_1501155239.jpeg">
                        <div class="mui-media-body">
                            <div class="title">
                                <span class="title-con">韩韵霓裳</span>
                                <span class="mui-icon mui-icon-arrowright mui-pull-right"></span>
                            </div>
                            <p>大西豪 1F B03D</p>
                            <p>商品：58款</p>
                            <p>销量：0件 人气：15</p>
                        </div>
                    </a>
                </li>
            </ul>
            
            <div id="addPopover" class="mui-popover mui-content">
                <div class="mui-scroll-wrapper">
                    <ul class="mui-table-view mui-grid-view">
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>连衣裙</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>短裤</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>蕾丝衫</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>礼服</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>两件套</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>半身裙</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>休闲裤</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>连体裤</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4">
                            <span>连体裤</span>
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
            headTitle: '店铺关注'
        }
    },
    components: {
        headBar
    }
}
</script>
<style lang="less" scoped>
// 二级导航
.nav-fun {
    position: fixed;
    top: 44px;
    width: 100%;
    z-index: 10;
    .selectbox {
        display: inline-block;
        background: #fff;
        height: 40px;
        .mui-table-view-cell {
            margin: 4px 0;
            padding: 5px 0;
            text-align: center;
            // border-right: 1px solid #e6e6e6;
            span {
                font-size: 0.85em;
            }
            &:last-child{
                border: none;
            }
            > a:not(.mui-btn) {
                margin: 0;
                padding: 0;
            }

            select{
                margin: 0;
                padding: 0;
                width: 70%;
            }
        }
        
    }
}
.follow {
    &.mui-content {
        > .mui-table-view:first-child {
        margin-top: 0;
        }
    }
    padding-top: 84px;

    .procuct-list {
        background-color: transparent;
        .mui-table-view-cell {
            margin-top: 10px;
            padding: 0;
            background: #fff;
            > a:not(.mui-btn) {
                margin: 0;
                padding: 15px 0;
            }
            .mui-media-object {
                margin: 0 30px;
                width: 100px;
                max-width: 100px;
                height: 110px;
            }
            .mui-media-body {
                .title {
                    position: relative;
                    margin-bottom: 5px;
                    height: 26px;
                    border-bottom: 1px solid #e6e6e6;
                    span {
                        font-size: 14px;
                        &.title-con {
                            color: #e51c23;
                        }
                        &.mui-icon {
                            margin: 0 10px 11px 10px;
                        }
                    }
                }
                p {
                    line-height: 1.8;
                    color: #323232;
                }
            }
        }
    }
}
</style>