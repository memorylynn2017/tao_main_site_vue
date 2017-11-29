<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <!-- 导航 -->
        <nav class="nav-fun">
            <ul class="selectbox mui-table-view mui-grid-view ">
                <li class="mui-table-view-cell mui-media mui-col-xs-5 mui-col-sm-5">
                    <select name="select_state" id="">
                        <option value="0" selected="true">在售商品</option>
                        <option value="1">下架商品</option>
                    </select>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-5 mui-col-sm-5 active">
                    <a href="#addPopover">
                        <span>分类</span>
                    </a>
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

        <div class="mui-content collect mb50">
            <ul class="procuct-list mui-table-view">
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1227/12274164/raw_1504083312.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="num">800</p>
                            <p class="price">￥25.00</p>
                        </div>
                    </a>
                    <a class="mui-btn btn-addcart" href="javascript:;">加入进货车</a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="num">800</p>
                            <p class="price">￥25.00</p>
                        </div>
                    </a>
                    <a class="mui-btn btn-addcart" href="javascript:;">加入进货车</a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1188/11882752/raw_1502795055.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="num">800</p>
                            <p class="price">￥25.00</p>
                        </div>
                    </a>
                    <a class="mui-btn btn-addcart" href="javascript:;">加入进货车</a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="num">800</p>
                            <p class="price">￥25.00</p>
                        </div>
                    </a>
                    <a class="mui-btn btn-addcart" href="javascript:;">加入进货车</a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1145/11455314/raw_1501411935.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="num">800</p>
                            <p class="price">￥25.00</p>
                        </div>
                    </a>
                    <a class="mui-btn btn-addcart" href="javascript:;">加入进货车</a>
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
  name: "app",
  data() {
    return {
      headTitle: "收藏商品"
    };
  },
  components: {
    headBar
  }
};
</script>
<style lang="less" scoped>
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
      border-right: 1px solid #e6e6e6;
      span {
        font-size: 0.85em;
      }
      &:last-child {
        border: none;
      }
      > a:not(.mui-btn) {
        margin: 0;
        padding: 0;
      }

      select {
        margin: 0;
        padding: 0;
        width: 70%;
      }
    }
  }
}

.collect {
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
      border: none;
      > a:not(.mui-btn) {
        margin: 15px 16px 15px 13px;
        .mui-media-object {
          width: 90px;
          max-width: 90px;
          height: 100px;
        }
        .mui-media-body {
          .title {
            color: #000;
            white-space: normal;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .num {
            margin-top: 5px;
            color: #323232;
          }
          .price {
            margin-top: 10px;
            color: #e51c23;
          }
        }
      }
      .btn-addcart {
        position: absolute;
        top: auto;
        bottom: 0;
        font-size: 12px;
      }
    }
  }
}
</style>