<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content orderdetail mb50">
            <ul class="mui-table-view te-table-view">
                <li class="mui-table-view-cell">
                    余额支付<span>(账户余额￥0.00)</span>
                    <div class="mui-switch mui-switch-mini">
                        <div class="mui-switch-handle"></div>
                    </div>
                </li>
                <li class="mui-table-view-cell mui-checkbox">
                    <img class="icon-img mui-pull-left" src="https://pro.modao.cc/uploads3/images/1198/11983105/raw_1503118030.jpeg" alt="">
                    微信支付
                    <input name="checkbox" value="1" type="checkbox">
                </li>

                <li class="mui-table-view-cell mt10">
                    共3款商品 166件 ￥972.00
                    <a class="mui-btn mui-pull-right" href="#">已付款</a>
                </li>

                <li class="mui-table-view-cell mt10">
                    <span class="mui-pull-left">配送方式：<span>国内快递</span></span>
                    <span class="mui-pull-right">缺货处理：<span>有货先发</span></span>
                </li>
                <li class="mui-table-view-cell">
                    <span class="mui-pull-left">商品金额：<span class="c-red">￥967.00</span></span>
                    <span class="mui-pull-right">运费金额：<span class="c-red">￥5.00</span></span>
                </li>

                <li class="mui-table-view-cell mt10">
                    <span class="mui-pull-left">支付方式: <span>微信支付</span></span>
                    <span class="mui-pull-right">2017-08-23 18:30</span>
                </li>
                <li class="mui-table-view-cell">
                    <span class="mui-pull-left">实发160件 ￥842.00</span>
                    <span class="mui-pull-right">缺货6件 ￥130.00</span>
                </li>

                <li class="mui-table-view-cell mt10">
                    <!-- 左右分 -->
                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline te-product">
                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                            <span>1591</span>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-9">
                            <a href="#">男装</a>
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
            headTitle: '订单详情'
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
.orderdetail{
    .te-table-view{
        background-color: transparent;
        >.mui-table-view-cell{
            font-size: 14px;
            background-color: #fff;
        }
        .te-product{
            
        }
    }
}
</style>