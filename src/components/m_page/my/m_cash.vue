<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content cash">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell weixin mt10">
                    <a href="#" class="mui-navigate-right">
                        <img class="mui-pull-left mr10 mt15" src="https://pro.modao.cc/uploads3/images/1198/11983105/raw_1503118030.jpeg" alt="">
                        <div class="mui-pull-left mt10">
                            <p>CK</p>
                            <p>13985899131</p>
                        </div>
                        <span class="mui-pull-right fs-14 mr20 mt20">更新微信</span>
                    </a>
                </li>
                <li class="mui-table-view-cell mt10 money">
                    <h5>提现金额</h5>
                    <div>￥<input type="text"/></div>
                </li>
                <li class="mui-table-view-cell">
                    账户余额￥0.00 <span>全部提现</span>
                </li>

                <li class="mui-table-view-cell mui-input-row mt25 pwd">
                    <label class="fs-14">密码</label>
                    <input type="text" class="fs-14" />
                </li>

                <li class="mui-table-view-cell mt30 pl20 pr20 no-bg">
                   <a href="javascript:" class="btn-submit txt-center">确认提现</a>
                </li>
                <li class="mui-table-view-cell no-bg txt-center">
                    <span>3个工作日内到达微信钱包</span>
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
            headTitle: "余额提现"
        }
    },
    components: {
        headBar
  }
}
</script>
<style lang="less" scoped>
.mui-table-view:after, .mui-table-view-cell:after{
    height: 0;
}
.cash{
    .mui-table-view{
        background-color: transparent;
        .mui-table-view-cell{
            background-color: #fff;
            font-size: 14px;
            &.no-bg{
                background-color: transparent;
            }
            // 微信
            &.weixin{
                padding: 0 15px;
                height: 60px;
                a{
                    margin: 0 -15px;
                    height: inherit;
                    img{
                        width: 30px;
                    }
                }
            }
            // 金额
            &.money{
                input{
                    margin: 0;
                    padding: 0;
                    border: 0;
                }
            }
            // 密码
            &.pwd{
                padding: 0 15px;
                label{
                    padding: 11px 0;
                    width: 15%;
                }
                input{
                    width: 85%;
                }
            }
            //提交
            .btn-submit{
                display: block;
                margin: 0;
                padding: 0;
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