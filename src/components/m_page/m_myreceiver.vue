<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content receiver mb50">
            <ul class="block-list mui-table-view">
                <li class="mui-table-view-cell mui-media">
                    <div class="desc">
                        <span>收货人: 陈坤彬</span>
                        <span>13610012164</span>
                    </div>
                    <p class="address">广东省广州市海珠区 南洲路119号华南至友5楼508（原粮油仓库）</p>
                    <div class="mui-input-row mui-checkbox mui-left function">
                        <input name="checkbox" value="1" type="checkbox">
                        <span class="txt">设置为默认地址</span>
                        <a class="mui-btn btn" href="javascript:;">删除</a>
                        <a class="mui-btn btn" href="/myreceiveredit">编辑</a>
                    </div>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <div class="desc">
                        <span>收货人: 陈坤彬</span>
                        <span>13610012164</span>
                    </div>
                    <p class="address">广东省广州市海珠区 南洲路119号华南至友5楼508（原粮油仓库）</p>
                    <div class="mui-input-row mui-checkbox mui-left function">
                        <input name="checkbox" value="1" type="checkbox">
                        <span class="txt">设置为默认地址</span>
                        <a class="mui-btn btn" href="javascript:;">删除</a>
                        <a class="mui-btn btn" href="/myreceiveredit">编辑</a>
                    </div>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <div class="desc">
                        <span>收货人: 陈坤彬</span>
                        <span>13610012164</span>
                    </div>
                    <p class="address">广东省广州市海珠区 南洲路119号华南至友5楼508（原粮油仓库）</p>
                    <div class="mui-input-row mui-checkbox mui-left function">
                        <input name="checkbox" value="1" type="checkbox">
                        <span class="txt">设置为默认地址</span>
                        <a class="mui-btn btn" href="javascript:;">删除</a>
                        <a class="mui-btn btn" href="/myreceiveredit">编辑</a>
                    </div>
                </li>

            </ul>
        </div>

        <nav class="mui-bar mui-bar-tab">
            <a class="mui-btn mui-btn-block btn-receiver" href="/myreceiveradd">新建收货地址</a>
        </nav>
    </div>
</template>

<script>
import headBar from "../public/m/header-oth";
export default {
    name: 'app',
    data() {
        return {
            headTitle: '收货地址'
        }
    },
    components: {
        headBar
    }
}
</script>
<style lang="less" scoped>
.mui-checkbox {
    input[type=checkbox] {
        width: 20px;
        height: 20px;
        &:checked:before {
            color: #dd171e;
        }
        &:before {
            font-size: 20px;
        }
    }
}
.receiver{
    &.mui-content {
        > .mui-table-view:first-child {
            margin-top: 0;
        }
    }
    .block-list{
        background-color: transparent;
        .mui-table-view-cell{
            margin-top: 10px;
            padding: 0 15px;
            background-color: #fff;
            .desc{
                margin-top: 10px; 
                font-size: 14px;
                span{
                    margin-right: 20px;
                }
            }
            .address{
                margin: 5px 0 5px; 
                color: #000;
            }
            .function{
                height: 45px;
                line-height: 45px;
                color: #888888;
                border-top: 1px solid #c8c7cc;
                input[type=checkbox] {
                    left: 0;
                    top: 12px;
                }
                .txt{
                    padding-left: 24px;
                    font-size: 14px;
                }
                .btn{
                    margin: 7px 0 7px 10px;
                    padding: 0;
                    width: 80px;
                    height: 30px;
                    line-height: 30px;
                    border-radius: 0;
                }
            }
        }
    }
}
// 收货按钮
.btn-receiver{
    margin: 0;
    padding: 0;
    top: 0;
    height: 50px;
    line-height: 50px;
    color: #fff;
    background: #E51C23;
    border: 0;
    border-radius: 0;
}
</style>