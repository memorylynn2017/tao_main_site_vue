<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content recharge">
            <form class="mui-input-group bottom-noline">

                <!-- 选择银行 -->
                <div class="mui-input-row row mt10 h-auto select-rank">
                    <h5 class="mui-content-padded">选择银行</h5>
                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                        <li class="mui-table-view-cell mui-media mui-checkbox mui-left mui-col-xs-6">
                            <input name="checkbox" value="1" type="checkbox">
                            <img class="pl20" src="https://pro.modao.cc/uploads3/images/1231/12316438/raw_1504182492.gif" alt="">
                        </li>
                        <li class="mui-table-view-cell mui-media mui-checkbox mui-left mui-col-xs-6">
                            <input name="checkbox" value="1" type="checkbox">
                            <img class="pl20" src="https://pro.modao.cc/uploads3/images/1231/12316441/raw_1504182494.gif" alt="">
                        </li>
                        <li class="mui-table-view-cell mui-media mui-checkbox mui-left mui-col-xs-6">
                            <input name="checkbox" value="1" type="checkbox">
                            <img class="pl20" src="https://pro.modao.cc/uploads3/images/1231/12316440/raw_1504182494.gif" alt="">
                        </li>
                        <li class="mui-table-view-cell mui-media mui-checkbox mui-left mui-col-xs-6">
                            <input name="checkbox" value="1" type="checkbox">
                            <img class="pl20" src="https://pro.modao.cc/uploads3/images/1231/12316442/raw_1504182494.gif" alt="">
                        </li>
                        <li class="mui-table-view-cell mui-media mui-checkbox mui-left mui-col-xs-6">
                            <input name="checkbox" value="1" type="checkbox">
                            <img class="pl20" src="https://pro.modao.cc/uploads3/images/1231/12316439/raw_1504182493.gif" alt="">
                        </li>
                    </ul>
                </div>

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
            headTitle: "网银在线充值"
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
            &.h-auto{
                height: auto;
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
        //选择银行
        .select-rank{
            h5{
                margin: 0;
                padding: 10px;
                border-bottom: 1px solid #e2e2e2;
            }
            .mui-table-view .mui-table-view-cell{
                padding-top: 20px;
                input{
                    top: 18px;
                }
            }
        }
    }
}
</style>