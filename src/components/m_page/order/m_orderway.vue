<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content shortage mb50">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-checkbox">
                    申通快递
                    <input name="checkbox" value="1" type="checkbox">
                </li>
                <li class="mui-table-view-cell mui-checkbox">
                    顺丰快递
                    <input name="checkbox" value="1" type="checkbox">
                </li>
                <li class="mui-table-view-cell h-auto no-bg cell-btn">
                    <a href="/orderconfirm">确定</a>
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
            headTitle: '配送方式'
        }
    },
    components: {
        headBar
    }
}
</script>
<style lang="less" scoped>
.mui-checkbox input{
    top: 10px;
    &:checked:before {
        color: #dd171e;
    }
}
.mui-table-view{
    background-color: transparent;
    &:after{
        height: 0;
    }
    .mui-table-view-cell{
        margin-top: 10px;
        padding: 14px 15px;
        font-size: 14px;
        height: 50px;
        background-color: #fff;
        &:after{
            height: 0;
        }
        &.h-auto{
            height: auto;
        }
        &.no-bg{
            background: transparent;
        }
        //提交按钮
        &.cell-btn{
            margin-top: 60px;
            padding: 0 30px;
            a{
                margin: 0;
                padding: 0;
                height: 40px;
                line-height: 40px;
                color: #fff;
                background-color: #E51C23;
                text-align: center;
            }
        }
    }
}
</style>