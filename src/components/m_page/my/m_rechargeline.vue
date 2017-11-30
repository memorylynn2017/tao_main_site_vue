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
                <div class="mui-input-row row mt10">
                    <label class="fs-16">选择银行</label>
                    <select name="rank" id="">
                        <option>请选择</option>
                        <option>西联汇款</option>
                        <option>农业银行</option>
                        <option>工商银行</option>
                        <option>马来西亚银行</option>
                        <option>其他</option>
                    </select>
                </div>
                <div class="mui-input-row row mt10">
                    <label class="fs-16">交易凭证</label>
                    <input type="file" name="" />
                </div>
                <div class="mui-input-row row mt10 h-auto remarks">
                    <h5>银行备注信息</h5>
                    <textarea id="textarea" rows="3" placeholder=""></textarea>
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
            headTitle: "线下银行充值"
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
            input[type="text"],input[type="file"],select{
                width: 70%;
                margin: 5px 0;
                border: 1px solid #e8e8e8;
            }
            input[type="file"]{
                margin: 10px 0;
            }
            select{
                margin: 7px 0;
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

            // 备注
            &.remarks{
                padding: 15px;
                h5{
                    margin-bottom: 10px;
                    font-size: 16px;
                    color: #000;
                }
                textarea{
                    margin: 0;
                    font-size: 14px;
                    border: 0;
                    background-color: #f6f6f6;
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