<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>
        <div class="girlclose">
            <div class="mui-content">
                <ul class="selectbox mui-table-view mui-grid-view mui-grid-9">
                    <li class="all mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                        <a href="#addPopover">
                            <span class="alltxt">全部</span>
                            <span class="mui-icon mui-icon-arrowdown"></span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 active">
                        <a href="#time">
                            <span>时间</span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                        <a href="#price">
                            <span>价格</span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                        <a href="#number">
                            <span>销量</span>
                        </a>
                    </li>
                </ul> 
                <h6 class="num">1453 商品</h6>
                <ul class="procuctbox mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1140/11404475/raw_1501155257.jpeg">
                            <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                            <div class="price">￥25.00</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1140/11404460/raw_1501155239.jpeg">
                            <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                            <div class="price">￥25.00</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#"><img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg">
                            <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                            <div class="price">￥25.00</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1140/11404456/raw_1501155230.jpeg">
                            <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                            <div class="price">￥25.00</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1140/11404454/raw_1501155225.jpeg">
                            <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                            <div class="price">￥25.00</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="https://pro.modao.cc/uploads3/images/1140/11404477/raw_1501155261.jpeg">
                            <div class="mui-media-body">8055#实拍 2017年秋季...</div>
                            <div class="price">￥25.00</div></a></li>
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
</template>

<script>
import headBar from "../public/m/header-oth";
export default {
  name: 'app',
    data() {
        return {
            headTitle: '全部女装'
        };
    },
    components: {
        headBar
    }
};
</script>


<style lang="less" scoped>
.girlclose {
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
    .mui-table-view-cell:nth-child(1) {
      border-right: 1px solid #e6e6e6;
    }
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
  .mui-popover-arrow {
    display: none;
  }
  .mui-popover {
    width: 100%;
    border-radius: 0;
    background: #fff;
    box-shadow: none;
    left: 0 !important;
    border-top: 1px solid #e6e6e6;
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
</style>