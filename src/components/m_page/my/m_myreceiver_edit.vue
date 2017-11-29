<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content receiver mb50">
            <form class="mui-input-group form">
                <div class="form-block">
                    <div class="mui-input-row">
                        <label>收货人：</label>
                        <input type="text" class="mui-input-clear" name="name" value="陈坤彬" />
                    </div>
                    <div class="mui-input-row noline">
                        <label>手机号码：</label>
                        <input type="text" class="mui-input-clear" name="phone" value="13610012164" />
                    </div>
                </div>

                <div class="form-block">
                    <div class="mui-input-row">
                        <label>所在地区：</label>
                        <input type="text" name="area" value="广东省广州市海珠区" />
                        <a class="mui-icon mui-icon-forward mui-pull-right area-btn" href="/myarea"></a>
                    </div>
                    <div class="mui-input-row h-auto noline">
                        <label>详细地址：</label>
                        <textarea id="textarea" rows="5" placeholder="">南洲路119号华南至友5楼508（原粮油仓库）</textarea>
                    </div>
                </div>

                <div class="mui-button-row noline h-auto mt50">
                    <!-- <button type="button" class="mui-btn mui-btn-danger save-btn" onclick="return false;">保 存</button> -->
                    <a class="mui-btn mui-btn-danger save-btn" href="/myreceiver">保 存</a>
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
            headTitle: '编辑收货地址'
        }
    },
    components: {
        headBar
    }
}
</script>
<style lang="less" scoped>
.mui-input-group,
.mui-input-row.noline{
    &:after{
        background-color: transparent;
    }
}
.receiver{
    .mui-input-group.form{
        background-color: transparent;
        .form-block{
            margin-top: 10px;
            background-color: #fff;
            .mui-input-row{
                height: 50px;
                &.h-auto{
                    height: auto;
                }
                label{
                    padding: 0 0 0 15px;
                    line-height: 50px;
                    width: 30%;
                    font-size: 16px;
                }
                label~input,label~textarea {
                    width: 70%;
                }
                input{
                    height: 50px;
                }
                textarea{
                    padding: 15px 0;
                    font-size: 16px;
                }
            }
        }
        .area-btn{
            position: absolute;
            right: 10px;
            width: 30px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: #323232;
            font-size: 24px;
        }
        .save-btn{
            width: 180px;
            height: 40px;
            font-size: 16px;
            background-color: #E51C23;
            border-radius: 0;
        }
    }
}
</style>