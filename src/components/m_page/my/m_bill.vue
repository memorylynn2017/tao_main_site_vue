<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content bill">
            <!-- 空 -->
            <!-- mui-hidden -->
            <div class="bill-empty mui-block">
                <img class="icon" src="https://pro.modao.cc/uploads3/images/1207/12077997/raw_1503468774.png" alt="">
                <p>暂无交易记录</p>
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
            headTitle: '交易账单'
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
        left: 10px;
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
.bill {
    min-height: 600px;
    background-color: #fff;
    // 空
    .bill-empty {
        margin-top: 105px;
        text-align: center;
        .icon {
            width: 120px;
            // opacity: 0.1;
        }
        p {
            margin: 20px 0 30px 0;
            color: #949494;
        }
        .btn {
            padding: 0;
            width: 180px;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            background: #E51C23;
            border-radius: 0;
        }
    }
}

</style>