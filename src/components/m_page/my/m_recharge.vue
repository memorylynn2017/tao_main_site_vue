<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content recharge">
            <ul class="mui-table-view mt15">
                <li class="mui-table-view-cell">
                    <a href="/rechargealibaba" class="mui-navigate-right">
                        <img class="mui-pull-left mr10" src="https://pro.modao.cc/uploads3/images/1231/12316324/raw_1504182002.jpeg" alt="">
                        支付宝充值
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="/rechargebank" class="mui-navigate-right">网银在线充值</a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="/rechargeline" class="mui-navigate-right">线下银行转账</a>
                </li>
            </ul>
        </div>
        <div class="prompt">
            <p>温馨提示</p>
            <p>1.请在弹出窗口完成支付，支付成功后请返回 “会员中心” 页面查看入账情况。</p>
            <p>2.如果提交后页面打不开可以尝试：1.清理IE缓存。2.换个浏览器或上网环境。3.卸载3721或者谷歌工具条</p>
            <p>3.在充值过程中如果出现网页错误或打开缓慢时，请先查询银行或者相关支付方式的交易记录，检查扣款是否成功</p>
            <p>然后查看淘亿账户是否已成功充值，若没有确认，请不要反复刷新页面，以防止重复购买。</p>
        </div>  
    </div>
</template>

<script>
import headBar from "../../public/m/header-oth";
export default {
    name: 'app',
    data() {
        return {
            headTitle: '线下充值'
        }
    },
    components: {
        headBar
    }
}
</script>
<style lang="less" scoped>
.recharge{
    .mui-table-view{
        .mui-table-view-cell{
            height: 50px;
            font-size: 14px;
            a{
                margin: -6px -15px;
                img{
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
}
//提示
.prompt{
    position: absolute;
    padding: 20px;
    bottom: 0;
}
</style>