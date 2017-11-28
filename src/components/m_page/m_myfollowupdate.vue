<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>
        
        <div class="mui-content followupdate mb50">
            <!-- 上架产品模块 -->
            <div class="product-block">
                <div class="prodect-shop clearfix">
                    <div class="mui-pull-left info">
                        <h5 class="name">芊芸服饰</h5>
                        <h6 class="address">女人街 3楼 E331A</h6>
                    </div>
                    <div class="mui-pull-right date">2017-09-08</div>
                </div>
                <ul class="procuct-list mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="#">
                            <img class="mui-media-object" src="../../assets/images/shuijiao.jpg">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="#">
                            <img class="mui-media-object" src="../../assets/images/muwu.jpg">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="#">
                            <img class="mui-media-object" src="../../assets/images/shuijiao.jpg">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="#">
                            <img class="mui-media-object" src="../../assets/images/muwu.jpg">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="#">
                            <img class="mui-media-object" src="../../assets/images/shuijiao.jpg">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="#">
                            <img class="mui-media-object" src="../../assets/images/muwu.jpg">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                </ul>
            </div>
            
            <!-- 上架产品模块 -->
            <div class="product-block">
                <div class="prodect-shop clearfix">
                    <div class="mui-pull-left info">
                        <h5 class="name">芊芸服饰</h5>
                        <h6 class="address">女人街 3楼 E331A</h6>
                    </div>
                    <div class="mui-pull-right date">2017-09-08</div>
                </div>
                <ul class="procuct-list mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="#">
                            <img class="mui-media-object" src="../../assets/images/shuijiao.jpg">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="#">
                            <img class="mui-media-object" src="../../assets/images/muwu.jpg">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="#">
                            <img class="mui-media-object" src="../../assets/images/shuijiao.jpg">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- 上架产品模块 -->
            <div class="product-block">
                <div class="prodect-shop clearfix">
                    <div class="mui-pull-left info">
                        <h5 class="name">芊芸服饰</h5>
                        <h6 class="address">女人街 3楼 E331A</h6>
                    </div>
                    <div class="mui-pull-right date">2017-09-08</div>
                </div>
                <ul class="procuct-list mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="#">
                            <img class="mui-media-object" src="../../assets/images/shuijiao.jpg">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="#">
                            <img class="mui-media-object" src="../../assets/images/muwu.jpg">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="#">
                            <img class="mui-media-object" src="../../assets/images/shuijiao.jpg">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="#">
                            <img class="mui-media-object" src="../../assets/images/muwu.jpg">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="#">
                            <img class="mui-media-object" src="../../assets/images/shuijiao.jpg">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="#">
                            <img class="mui-media-object" src="../../assets/images/muwu.jpg">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                </ul>
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
            headTitle: '关注上新'
        }
    },
    components: {
        headBar
    }
}
</script>
<style lang="less" scoped>
img{vertical-align: middle;}
.followupdate {

    .product-block{
        margin-top: 10px;
        .prodect-shop{
            padding: 0 10px;
            height: 50px;
            background: #fff;
            .info{
                .name{
                    margin: 10px 0 0 0;
                }
                .address{
                    margin: 5px 0 0 0;
                }
            }
            .date{
                line-height: 50px;
                font-size: 12px;
            }
        }
        .procuct-list{
            padding: 0 10px 0 0;
            .mui-table-view-cell{
                margin-right: 0;
                padding: 10px 0 0 12px;
                .price{
                    height: 42px;
                    line-height: 42px;
                    font-size: 12px;
                    color: #323232;
                }
                &:nth-child(n+4){
                    padding: 0 0 0 12px;
                }
            }
        }
    }
}
</style>