<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <!-- 导航 -->
        <nav class="nav-fun">
            <div class="mui-col-xs-10 mui-pull-left">
                <div class="mui-input-row mui-search input-search-frame">
                    <input type="search" class="mui-input-clear input-search" placeholder="搜索商品名称或编号">
                </div>
            </div>
            <div class="mui-col-xs-2 mui-pull-left">
                <a class="mui-btn btn-edit" href="javascript:;">编辑</a>
            </div>
        </nav>

        <div class="mui-content collect mb50">
            <ul class="procuct-list mui-table-view">
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="num">8001</p>
                            <p class="price">￥25.00</p>
                        </div>
                    </a>
                    <a class="mui-btn btn-addcart" href="javascript:;">已下架</a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1140/11404456/raw_1501155230.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="num">8002</p>
                            <p class="price">￥25.00</p>
                        </div>
                    </a>
                    <a class="mui-btn btn-addcart" href="javascript:;">已下架</a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1145/11455302/raw_1501411901.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="num">8003</p>
                            <p class="price">￥25.00</p>
                        </div>
                    </a>
                    <a class="mui-btn btn-addcart" href="javascript:;">已下架</a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1145/11455314/raw_1501411935.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="num">8004</p>
                            <p class="price">￥25.00</p>
                        </div>
                    </a>
                    <a class="mui-btn btn-addcart" href="javascript:;">已下架</a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1145/11455309/raw_1501411925.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="num">8005</p>
                            <p class="price">￥25.00</p>
                        </div>
                    </a>
                    <a class="mui-btn btn-addcart" href="javascript:;">已下架</a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1140/11404454/raw_1501155225.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="num">8006</p>
                            <p class="price">￥25.00</p>
                        </div>
                    </a>
                    <a class="mui-btn btn-addcart" href="javascript:;">已下架</a>
                </li>
                
            </ul>
            
        </div>

    </div>
</template>

<script>
import headBar from "../../public/m/header-oth";
export default {
    name: 'app',
    data() {
        return {
            headTitle: '下架提醒'
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
    height: 40px;
    background: #fff;
    z-index: 10;
    border-top: 1px solid #c5c5c5;
    border-bottom: 1px solid #c5c5c5;
    
    .input-search-frame{
        &.mui-active:before {
            top: 25px;
            left: 10px;
            font-size: 16px;
        }
        .input-search{
            margin: 2px 0;
            font-size: 12px;
            background: #fff;
        }
    }
    .mui-btn.btn-edit{
        padding-top: 9px;
        padding-bottom: 9px;
        border: none;
    }
}

.collect{
    &.mui-content {
        > .mui-table-view:first-child {
        margin-top: 0;
        }
    }

    padding-top: 84px;
    .procuct-list{
        background-color: transparent;
        .mui-table-view-cell{
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
                    .title{
                        color: #000;
                        white-space: normal;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                    }
                    .num{
                        margin-top: 5px;
                        color: #323232;
                    }
                    .price{
                        margin-top: 10px;
                        color: #E51C23;
                    }
                }
            }
            .btn-addcart{
                position: absolute;
                top: auto;
                bottom: 0;
                font-size: 12px;
            }
        }
    }
}
</style>