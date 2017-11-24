<template>
    <div id="app" class="mui-views" data-view="1">
        



        <!-- 尾部 -->
        <footerBar></footerBar>
    </div>
</template>

<script>
import footerBar from "../public/m/footer";
export default {
    name: 'app',
    data() {
        return {}
    },
    components: {
        footerBar
    }
}
</script>