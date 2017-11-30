<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content order mb50">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell address-btn no-margin no-padding">
                    <a href="/myreceiver">请添加收货地址</a>
                    <img src="https://pro.modao.cc/uploads3/images/1186/11863839/raw_1502770111.png" alt="">
                </li>
                <li class="mui-table-view-cell no-margin no-padding mt10 te-info">
                    <h5 class="te-title pd-15">订单信息</h5>
                    <a class="te-pics" href="javascript:;">
                        <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                            <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                <img src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg" alt="">
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                <img src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg" alt="">
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-pull-right">
                                <span class="allnum">
                                    共<span>25</span>件
                                    <span class="mui-icon mui-icon-forward"></span>
                                </span>
                            </li>
                        </ul>
                    </a>
                </li>
                <li class="mui-table-view-cell bottom-line">
                    <a href="/orderway" class="mui-navigate-right fs-14">配送方式<span class="mui-pull-right mr20">国内快递</span></a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="/ordershortage" class="mui-navigate-right fs-14">缺货处理<span class="mui-pull-right mr20">有货先发</span></a>
                </li>
                <li class="mui-table-view-cell mt10 te-message">
                    <h5>留言备注</h5>
                    <textarea id="textarea" rows="3" placeholder="选填，输入你的留言（100字以内）..."></textarea>
                </li>
                <li class="mui-table-view-cell mt10 te-amount">
                    <h5>商品金额<span class="mui-pull-right red">￥967.00</span></h5>
                    <h5>预计运费<span class="mui-pull-right red">+￥0.00</span></h5>
                </li>
            </ul>
        </div>

        <!--提交-->
        <nav id="footer_settlement" class="mui-bar mui-bar-tab te-settlement">
            <div class="mui-pull-left settlement-all">
                <span>合计: ￥552.00</span>
            </div>
            <a class="settlement-btn mui-pull-right" href="javascript:;">
                <span>提交订单</span>
            </a>
        </nav>
    </div>
</template>

<script>
import headBar from "../../public/m/header-oth";
export default {
    name: 'app',
    data() {
        return {
            headTitle: '确认订单'
        }
    },
    components: {
        headBar
    }
}
</script>
<style lang="less" scoped>
.pd-15{padding: 0 15px;}
.no-margin{margin: 0;}
.no-padding{padding: 0;}
.top-line{border-top: 1px solid #e2e2e2;}
.bottom-line{border-bottom: 1px solid #e2e2e2;}

.order{
    &.mui-content>.mui-table-view:first-child {
        margin-top: 0;
    }
    >.mui-table-view{
        background-color: transparent;
        >.mui-table-view-cell{
            background-color: #fff;
            &:first-child{
                margin: 0;
            }
            &:after{
                height: 0;
            }
            // 请添加收货地址
            &.address-btn{
                background-color: transparent;
                a{
                    margin: 0;
                    height: 98px;
                    line-height: 98px;
                    text-align: center;
                    color: #E51C23;
                }
                img{
                    width: 100%;
                    height: 2px;
                }
            }
            &.te-info{
                .te-title{
                    margin: 0;
                    height: 30px;
                    line-height: 30px;
                    color: #000;
                    background: #fff;
                }
                // 图片信息
                .te-pics{
                    margin: 0;
                    height: 110px;
                    .mui-table-view{
                        height: 110px;
                        background-color: #FAFAFA;
                        >.mui-table-view-cell{
                            padding-top: 13px;
                            img{
                                width: 100%;
                                height: 84px;
                            }
                        }
                        .allnum{
                            line-height: 85px;
                            font-size: 14px;
                            .mui-icon{
                                font-size: 18px;
                            }
                        }
                    }
                }
            }
            // 留言
            &.te-message{
                h5{
                    color: #000;
                }
                textarea{
                    font-size: 14px;
                    border: 0;
                    background-color: #f6f6f6;
                }
            }
            // 金额
            &.te-amount{
                h5{
                    margin: 8px 0;
                    color: #000;
                    .red{
                        color: #E51C23;                        
                    }
                }
            }
        }
    }
    
}



// 结算
.te-settlement {
    background: #fff;
    .settlement-all {
        height: 50px;
        input[type=checkbox] {
            top: 15px;
        }
        span {
            padding-left: 40px;
            line-height: 50px;
        }
    }
    .settlement-btn {
        display: inline-block;
        width: 114px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        background: #E51C23;
    }
}
</style>