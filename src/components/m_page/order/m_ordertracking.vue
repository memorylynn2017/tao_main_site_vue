<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content orderdetail mb50">
            <ul class="mui-table-view te-table-view">
                <li class="mui-table-view-cell order-header">
                    <span class="mui-pull-left left">
                        订单号 9000003
                    </span>
                    <span class="mui-pull-right right">
                        2017-08-21 11:30
                    </span>
                </li>
                <li class="mui-table-view-cell order-express">
                    <a href="javascript:;">
                        <div class="mui-pull-left left">
                            <p class="fs-14"><span class="mui-btn iconfont icon-huoche2"></span>申通快递 [448655467555]</p>
                            <p class="fs-12">发货时间 2017-08-22 17:30 查询电话 95311</p>
                        </div>
                        <button type="button" class="mui-btn mui-pull-right btn">物流跟踪</button>
                    </a>
                </li>

                <li class="mui-table-view-cell order-process">
                    <ul class="process-ul">
                        <li class="on">
                            <span class="point"></span>
                            <p>订单已发货 申通快递<br/>运单号448655467555<br/>2017-08-21 18:05</p>
                        </li>
                        <li>
                            <span class="point"></span>
                            <p>订单已扫描，打包成功<br/>2017-08-21 18:05</p>
                        </li>
                        <li>
                            <span class="point"></span>
                            <p>订单已扫描，打包成功<br/>2017-08-21 18:05</p>
                        </li>
                        <li>
                            <span class="point"></span>
                            <p>订单已扫描，打包成功<br/>2017-08-21 18:05</p>
                        </li>
                        <li>
                            <span class="point"></span>
                            <p>订单已扫描，打包成功<br/>2017-08-21 18:05</p>
                        </li>
                        <li>
                            <span class="point"></span>
                            <p>订单已扫描，打包成功<br/>2017-08-21 18:05</p>
                        </li>
                        <li>
                            <span class="point"></span>
                            <p>订单已扫描，打包成功<br/>2017-08-21 18:05</p>
                        </li>
                    </ul>
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
            headTitle: '订单跟踪'
        }
    },
    components: {
        headBar
    }
}
</script>
<style lang="less" scoped>
.c-red{
    color: #E51C23;
}
.mui-table-view:after{
    height: 0;
}
.orderdetail{
    &.mui-content>.mui-table-view:first-child {
        margin-top: 0;
    }
    .mui-table-view.te-table-view{
        background-color: transparent;
        >.mui-table-view-cell{
            font-size: 14px;
            background-color: #fff;
        }
        
        // 订单头部
        .order-header{
            height: 60px;
            background: url(https://pro.modao.cc/uploads3/images/1206/12060163/raw_1503399865.jpeg) center center;
            .left{
                line-height: 36px;
                color: #fff;
            }
            .right{
                line-height: 36px;
                color: #fff;
                .mui-btn{
                    padding: 7px 5px;
                    color: inherit;
                    background-color: transparent;
                    font-size: 18px;
                    border: 0;
                }
            }
        }
        // 快递
        .order-express{
            height: 78px;
            .left p{
                line-height: 24px;
                color: #000;
                .mui-btn{
                    padding: 0 5px;
                    color: #7d7d7d;
                    background-color: transparent;
                    font-size: 18px;
                    border: 0;
                }
            }
            .right{
                line-height: 56px;
                color: #000;
            }
            .btn{
                padding: 3px 6px;
                font-size: 12px;
            }
        }
        // 地址
        .order-address{
            .mui-icon{
                margin-right: 10px;
                height: 60px;
                line-height: 60px;
                font-size: 20px;
                color: #e1e1e1;
            }
            p{
                color: #646464;
            }
        }
        // 过程
        .order-process{
            margin: 10px;
            .process-ul{
                padding: 30px 0;
                li{
                    list-style: none;
                    height: 90px;
                    .point{
                        position: relative;
                        float: left;
                        display: inline-block;
                        width: 26px;
                        height: 100%;
                        &:before{
                            content: '';
                            display: inline-block;
                            position: absolute;
                            left: 6px;
                            top: 6px;
                            width: 1px;
                            height: 84px;
                            background: #bbbbbb;
                        }
                        &:after{
                            content: '';
                            display: inline-block;
                            position: absolute;
                            width: 13px;
                            height: 13px;
                            background: #bbbbbb;
                            border-radius: 50%;
                        }
                    }
                    p{
                        color: #888888;
                    }
                    //到达状态
                    &.on{
                        .point:before{
                            background: #259B24;
                        }
                        .point:after{
                            background: #259B24;
                        }
                    }
                    &:last-child{
                        .point:before{
                            height: 0;
                        }
                    }
                }
            }
        }
    }
}
</style>