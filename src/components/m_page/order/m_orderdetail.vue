<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content orderdetail mb50">
            
        </div>

    </div>
</template>

<script>
import headBar from "../../public/m/header-oth";
export default {
    name: 'app',
    data() {
        return {
            headTitle: '订单详情'
        }
    },
    components: {
        headBar
    }
}
</script>
<style lang="less" scoped>

</style>