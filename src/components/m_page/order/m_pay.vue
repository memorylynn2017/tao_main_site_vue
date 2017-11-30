<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content pay mb50">
            <div class="pay-con">
                <div class="info">
                    <h5>状态: <span>待支付</span></h5>
                    <h5>订单号: <span>9000001</span></h5>
                    <h5>下单时间: <span>2017-08-30 22:36</span></h5>
                </div>
                <div class="money">
                    应付款：<span>￥972.00</span>
                </div>
            </div>

            <ul class="mui-table-view mt15">
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
            </ul>
        </div>

        <nav class="mui-bar mui-bar-tab footer-btn40">
            <a id="btn_pay" class="mui-btn mui-btn-block btn-receiver" href="javascript:;">去支付</a>
        </nav>

        <div class="pay-frame mui-hidden">
            <div class="pay-box">
                <div class="pay-title">
                    <a id="btn_close" class="mui-icon mui-icon-closeempty mui-pull-left" href="javascript:;"></a>
                    <span>支付</span>
                </div>
                <div class="pay-con">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell txt-center">
                            <h5>淘亿</h5>
                            <h1 class="mt10">￥972.00</h1>
                        </li>
                        <li class="mui-table-view-cell">
                            <a href="javascript:;" class="mui-navigate-right mui-left">
                                招商银行信用卡(0427)
                            </a>
                        </li>
                    </ul>
                    <a class="mui-btn mui-btn-success mui-btn-block mt20 pay-btn" href="/myorder">确认支付</a>
                </div>
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
            headTitle: '收银台'
        }
    },
    components: {
        headBar
    }
}
$(function() {
    $('#btn_pay').on('click',function(){
        $('.pay-frame').removeClass('mui-hidden').addClass('mui-block');
    })
    $('#btn_close').on('click',function(){
        $('.pay-frame').addClass('mui-hidden');
    })
});
</script>
<style lang="less" scoped>
// 底部按钮
.mui-bar-tab{
    &.footer-btn40{
        height: 40px;
        .mui-btn{
            margin: 0;
            padding: 0;
            top: 0;
            height: 40px;
            line-height: 40px;
            color: #fff;
            background: #E51C23;
            border: 0;
            border-radius: 0;
        }
    }
}
// 付款
.pay{
    .pay-con{
        .info{
            padding: 10px 15px;
            h5{
                margin-top: 10px;
                color: #000;
            }
        }
        .money{
            padding: 0 15px;
            height: 50px;
            line-height: 50px;
            color: #E51C23;
            background: #fff;
        }
    }

    .mui-table-view{
        .mui-table-view-cell{
            padding: 15px;
            height: 50px;
            font-size: 14px;
            &.mui-checkbox input{
                top: 10px;
                &:checked:before {
                    color: #dd171e;
                }
            }
        }
        .icon-img{
            margin-right: 10px;
            height: 18px;
        }
    }

}
// 付款弹框
.pay-frame{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    z-index: 99;
    .pay-box{
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-140px,-140px);
        width: 280px;
        height: 280px;
        background: #fff;
        border: none;
        border-radius: 6px;
        .pay-title{
            height: 48px;
            line-height: 48px;
            border-bottom: 2px solid #c9e8ca;
            text-align: center;
            a{
                width: 48px;
                height: 48px;
                line-height: 48px;
                font-size: 30px;
                color: #888;
            }
            span{
                margin-left: -48px;
            }
        }
        .pay-con{
            padding: 0 15px;
            color: #000;
            h1{
                font-weight: 300;
            }
            .pay-btn{
                padding: 10px 0;
                font-size: 16px;
            }
        }
    }
}
</style>