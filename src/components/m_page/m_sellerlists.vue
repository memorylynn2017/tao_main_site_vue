<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>
        <div class="mui-content search">
            <div class="mui-content-padded searchtitle">
                <div class="mui-input-row mui-search">
                    <div>
                         <input type="search" class="mui-input-clear" placeholder="搜索本店商品">
                    </div>
                    </br>
                    <div>
                        <span style="color:#323232;font-weight:bold;line-height:23px;" class="fs-16">绮梦服饰</span>
                    </div>
                     <div>
                        <span style="color:#323232;line-height:26px;width:auto;height:26px;" class="fs-13 mui-pull-left">佰润 2F B2042 销量 218</span>
                        <span style="background-color:#fff;color:#323232;line-height:26px;width:95px;height:26px;text-align:center;z-index:63;opacity:0.8;" class="fs-14 mui-pull-right">关注 2</span>
                    </div>
                </div>
            </div>
            <div class="mui-row searchcontent">
                <div class="mui-content">
                    <ul class="selectbox mui-table-view mui-grid-view mui-grid-9">
                        <li class="all mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                            <a href="#addPopover">
                                <span class="alltxt">分类</span>
                                <span class="mui-icon mui-icon-arrowdown"></span>
                            </a>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 active">
                            <a href="#time">
                                <span>上新</span>
                            </a>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                            <a href="#price">
                                <span>销量</span>
                            </a>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                            <a href="#number">
                                <span>价格</span>
                            </a>
                        </li>
                    </ul> 
                    <h6 class="num">79 商品</h6>
                    <ul class="procuctbox mui-table-view mui-grid-view">
                        <li class="mui-table-view-cell mui-media mui-col-xs-6">
                            <a href="#">
                                <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1140/11404460/raw_1501155239.jpeg">
                                <div class="mui-media-body">1926#实拍纯棉2017...</div>
                                <div class="price">￥43.00</div></a></li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-6">
                            <a href="#">
                                <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1140/11404460/raw_1501155239.jpeg">
                                <div class="mui-media-body">1926#实拍纯棉2017...</div>
                                <div class="price">￥20.00</div></a></li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-6">
                            <a href="#"><img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg">
                                <div class="mui-media-body">1926#实拍纯棉2017...</div>
                                <div class="price">￥25.00</div></a></li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-6">
                            <a href="#">
                                <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg">
                                <div class="mui-media-body">1926#实拍纯棉2017...</div>
                                <div class="price">￥33.00</div></a></li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-6">
                            <a href="#">
                                <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1140/11404475/raw_1501155257.jpeg">
                                <div class="mui-media-body">1926#实拍纯棉2017...</div>
                                <div class="price">￥25.00</div></a></li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-6">
                            <a href="#">
                                <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1140/11404475/raw_1501155257.jpeg">
                                <div class="mui-media-body">1926#实拍纯棉2017...</div>
                                <div class="price">￥33.00</div></a></li>
                    </ul>
                </div>
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
                   
                        
                    
            
            
        
        
        <!-- 尾部 -->
        <!-- <footerBar></footerBar> -->
    </div>
</template>

<script>
import headBar from "../public/m/header-oth";
export default {
  name: "app",
  data() {
    return {
      headTitle: "店铺"
    };
  },
  components: {
    headBar
  }
};
</script>
<style lang="less" scoped>
.search {
    background: url("https://pro.modao.cc/uploads3/images/1197/11977291/raw_1503053283.png")
        repeat-x;
    height: 170px;
    .mui-row.mui-fullscreen > [class*="mui-col-"] {
        height: 100%;
    }
    .mui-fullscreen {
        top: 56px;
    }

    .mui-col-xs-3,
    .mui-col-xs-9 {
        overflow-y: auto;
        height: 100%;
    }

    .mui-segmented-control .mui-control-item {
        line-height: 50px;
        width: 100%;
    }

    .mui-control-content {
        display: block;
    }

    .mui-segmented-control.mui-segmented-control-inverted
        .mui-control-item.mui-active {
        background-color: #fff;
    }

    .searchtitle {
        margin: 10px;
        input[type="search"] {
        height: 36px;
        border: 1px solid #e6e6e6;
        background: #fff;
        margin-bottom: 0;
        }
        .mui-search {
        .mui-placeholder {
            font-size: 14px;
            line-height: 36px;
            color: #888;
            .mui-icon {
            font-size: 16px;
            color: #888;
            margin-right: 6px;
            }
        }
        &:before {
            font-size: 16px;
            font-weight: 400;
            line-height: 36px;
            color: #888;
        }
        }
    }

    // .searchcontent {
    //     background: #fff;
    //     border-top: 1px solid #e6e6e6;
    // }
    .searchcontent {
            margin-top: 0;
                .mui-content > .mui-table-view:first-child {
                    margin-top: 0;
                }
                .mui-table-view:before,
                .mui-table-view:after {
                    height: 0;
                }
                .selectbox {
                    position: relative;
                    z-index: 999;
                    background: #fdfdfd;
                    border-top: 1px solid #e6e6e6;
                    border-bottom: 1px solid #e6e6e6;
                    &.mui-grid-9 .mui-table-view-cell {
                    padding: 0;
                    border: none;
                    span:first-child {
                        display: inline-block;
                        font-size: 14px;
                        color: #323232;
                        padding: 8px 10px;
                        border-bottom: 2px solid transparent;
                    }
                    &.active {
                        span:first-child {
                        color: #e51c23;
                        border-bottom-color: #e51c23;
                        }
                    }
                    }
                    &.mui-grid-9 .mui-media .mui-icon {
                    font-size: 1em;
                    }
                    //   .mui-table-view-cell:nth-child(1) {
                    //     border-right: 1px solid #e6e6e6;
                    //   }
                    &.mui-grid-9 .mui-media .mui-icon.mui-icon-home {
                    font-size: 1.2em;
                    }
                    &.mui-grid-9 .mui-table-view-cell > a:not(.mui-btn) {
                    padding: 0;
                    }
                }
                .num {
                    padding-top: 10px;
                    text-align: center;
                    background: #fff;
                    margin: 0;
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
        /* 弹框 */

            .mui-popover {
                width: 100%;
                border-radius: 0;
                background: #fff;
                box-shadow: none;
                left: 0 !important;
                border-top: 1px solid #e6e6e6;
                .mui-popover-arrow {
                    display: none;
                    &::after{
                        top: 0 !important; 
                    }
                }
                .mui-scroll-wrapper {
                    margin: 0;
                    border-radius: 0;
                    position: relative;
                }
                .mui-table-view {
                    padding: 15px 15px 30px;
                    border-radius: 0;
                    background: #fff;
                    .mui-table-view-cell {
                        span {
                        display: inline-block;
                        width: 100%;
                        font-size: 14px;
                        color: #323232;
                        line-height: 20px;
                        padding: 6px 0;
                        border: 1px solid #bbbbbb;
                        }
                }
            }
        }
    }
}


</style>