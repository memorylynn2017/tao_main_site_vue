<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>
        
        <div class="mui-content browse mb50">
            <ul class="procuct-list mui-table-view">
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1140/11404437/raw_1501155182.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="price">￥25.00</p>
                            <p class="date">2017-08-23 10:30</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1140/11404434/raw_1501155168.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="price">￥25.00</p>
                            <p class="date">2017-08-23 10:30</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1140/11404430/raw_1501155158.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="price">￥25.00</p>
                            <p class="date">2017-08-23 10:30</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1140/11404394/raw_1501155036.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="price">￥25.00</p>
                            <p class="date">2017-08-23 10:30</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="price">￥25.00</p>
                            <p class="date">2017-08-23 10:30</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1145/11455314/raw_1501411935.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="price">￥25.00</p>
                            <p class="date">2017-08-23 10:30</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="https://pro.modao.cc/uploads3/images/1140/11404454/raw_1501155225.jpeg">
                        <div class="mui-media-body">
                            <p class="title">实拍 新款女衫 V领褶皱抽绳系带棉麻衬衫</p>
                            <p class="price">￥25.00</p>
                            <p class="date">2017-08-23 10:30</p>
                        </div>
                    </a>
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
            headTitle: '浏览记录'
        }
    },
    components: {
        headBar
    }
}
</script>
<style lang="less" scoped>
.browse{
    &.mui-content {
        > .mui-table-view:first-child {
        margin-top: 0;
        }
    }

    .procuct-list{
        background-color: transparent;
        .mui-table-view-cell{
            margin-top: 10px;
            padding: 0;
            background: #fff;
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
                    .price{
                        margin-top: 10px;
                        color: #E51C23;
                    }
                    .date{
                        margin-top: 5px;
                        color: #7E7E7E;
                        text-align: right;
                    }
                }
            }
        }
    }
}
</style>