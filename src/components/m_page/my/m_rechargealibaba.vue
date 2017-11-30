<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content recharge">
            <form class="mui-input-group bottom-noline">
                <div class="mui-input-row row mt10">
                    <label class="fs-16">充值金额</label>
                    <input type="text" class="fs-16" placeholder="输入金额">
                </div>
                <div class="mui-button-row row no-bg mt50 pl20 pr20">
                    <a href="javascript:" class="btn-submit">立即充值</a>
                </div>
                <div class="mui-input-row mui-checkbox mui-left row no-bg pl20 pr20 mt15">
                    <input name="checkbox" value="1" type="checkbox">
                    <span>我已阅读同意 会员账户交易服务协议</span>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
import headBar from "../../public/m/header-oth";
export default {
    name: 'app',
    data() {
        return {
            headTitle: "支付宝充值"
        }
    },
    components: {
        headBar
  }
}
</script>
<style lang="less" scoped>
.mui-input-group:after, .mui-input-group:before, .mui-input-group .mui-input-row:after{
    height: 0;
}
.mui-checkbox input{
    width: 22px;
    height: 22px;;
    &:before{
        font-size: 22px;
    }
    &:checked:before {
        color: #dd171e;
    }
}
.recharge{
    .mui-input-group{
        background-color: transparent;
        >.row{
            height: 50px;
            background-color: #fff;
            &.no-bg{
                background-color: transparent;
            }
            label{
                width: 30%;
                padding: 16px 15px;
            }
            input[type="text"]{
                width: 70%;
                margin: 5px 0;
                border: 1px solid #e8e8e8;
            }

            &.mui-checkbox{
                font-size: 14px;
                input{
                    top: -1px;
                }
                span{
                    padding-left: 26px;
                }
            }
            

            //提交
            .btn-submit{
                display: block;
                width: 100%;
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                color: #fff;
                background-color: #E51C23;
            }
        }
    }
}
</style>