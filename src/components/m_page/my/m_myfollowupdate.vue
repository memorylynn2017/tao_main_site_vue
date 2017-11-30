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
                        <a href="/M_produclists">
                            <img class="mui-media-object" src="https://img.vvic.com/1510655025963_485698.png">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="/M_produclists">
                            <img class="mui-media-object" src="https://img.vvic.com/1507720186670_469743.png">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="/M_produclists">
                            <img class="mui-media-object" src="https://img.vvic.com/1510994570484_62426.jpg?x-oss-process=image/crop%2Cx_39%2Cy_0%2Cw_534%2Ch_800/resize%2Cw_200%2Ch_300">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="/M_produclists">
                            <img class="mui-media-object" src="https://img.vvic.com/1510632943541_517341.jpg?x-oss-process=image/crop%2Cx_144%2Cy_97%2Cw_470%2Ch_704/resize%2Cw_200%2Ch_300">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="/M_produclists">
                            <img class="mui-media-object" src="https://img.vvic.com/1511593516793_588000.jpg?x-oss-process=image/crop%2Cx_123%2Cy_0%2Cw_534%2Ch_800/resize%2Cw_200%2Ch_300">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="/M_produclists">
                            <img class="mui-media-object" src="https://img.vvic.com/1510040027707_860892.png">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                </ul>
            </div>
            
            <!-- 上架产品模块 -->
            <div class="product-block">
                <div class="prodect-shop clearfix">
                    <div class="mui-pull-left info">
                        <h5 class="name">猫女郎</h5>
                        <h6 class="address">大西豪 4楼 422</h6>
                    </div>
                    <div class="mui-pull-right date">2017-09-08</div>
                </div>
                <ul class="procuct-list mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="/M_produclists">
                            <img class="mui-media-object" src="https://img.vvic.com/1509590981459_881200.jpg?x-oss-process=image/crop%2Cx_67%2Cy_0%2Cw_534%2Ch_800/resize%2Cw_220%2Ch_330">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="/M_produclists">
                            <img class="mui-media-object" src="https://img.vvic.com/1509245615230_214751.jpg?x-oss-process=image/crop%2Cx_144%2Cy_0%2Cw_534%2Ch_800/resize%2Cw_220%2Ch_330">
                            <div class="price">￥25.00</div>
                        </a>
                    </li>
                </ul>
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