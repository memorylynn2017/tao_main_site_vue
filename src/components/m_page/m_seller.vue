<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <!-- 二级导航 -->
        <nav class="nav-fun clearfix">
            <ul class="selectbox mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4 mui-active">
                    <a href="#date">
                        <span>时间</span>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#product">
                        <span>销量</span>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#all">
                        <span>人气</span>
                    </a>
                </li>
            </ul>
            <a class="te-page mui-pull-right" href="#">
                <span class="mui-icon iconfont icon-fenlei" num="3"></span>
            </a>
        </nav>

        <div class="mui-content seller mb50">
            <ul class="mui-table-view procuct-list">
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="/src/assets/images/shuijiao.jpg">
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
                        <img class="mui-media-object mui-pull-left" src="/src/assets/images/shuijiao.jpg">
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
                        <img class="mui-media-object mui-pull-left" src="/src/assets/images/shuijiao.jpg">
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
                        <img class="mui-media-object mui-pull-left" src="/src/assets/images/shuijiao.jpg">
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
                        <img class="mui-media-object mui-pull-left" src="/src/assets/images/shuijiao.jpg">
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
                        <img class="mui-media-object mui-pull-left" src="/src/assets/images/shuijiao.jpg">
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
                        <img class="mui-media-object mui-pull-left" src="/src/assets/images/shuijiao.jpg">
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
            </ul>
        </div>

    </div>
</template>

<script>
import headBar from "../public/m/header-oth";
export default {
  name: "app",
  data() {
    return {
      headTitle: "优质商家"
    };
  },
  components: {
    headBar
  }
};
</script>
<style lang="less" scoped>
// 二级导航
.nav-fun {
  position: fixed;
  top: 44px;
  width: 100%;
  z-index: 10;
  background: #fff;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;

  .selectbox {
    display: inline-block;
    background: #fff;
    &.mui-grid-9 {
      float: left;
      width: 300px;
      .mui-table-view-cell {
        padding: 10px 0;
        height: 40px;
        text-align: center;
        border: none;
        &.mui-active {
          color: #e51c23;
          background: #fff;
          border-bottom: 2px solid #e51c23;
        }
        span {
          font-size: 0.85em;
        }
        > a:not(.mui-btn) {
          padding: 0;
        }
      }
    }
  }
  .te-page {
    padding: 1px 0;
    width: 40px;
    height: 38px;
    line-height: 40px;
    text-align: center;
    border-left: 1px solid #e6e6e6;
    .mui-icon {
      font-size: 1.2em;
      color: #797979;
    }
  }
}
.mui-bar-nav ~ .mui-content {
  padding-top: 88px;
}
.seller {
    &.mui-content {
        > .mui-table-view:first-child {
        margin-top: 0;
        }
    }

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