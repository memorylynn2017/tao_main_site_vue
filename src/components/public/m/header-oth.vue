<template lang="html">
    <header class="mui-bar mui-bar-nav te-bar-nav">
        <a class="mui-icon mui-icon-left-nav mui-pull-left mui-action-back" href="javascript:;"></a>
        <h1 class="mui-title">{{headTitle}}</h1>
        <a id="btn_open" class="mui-icon iconfont icon-icon-test mui-pull-right"></a>
    </header>
</template>

<style lang="less">
.te-bar-nav {
  background: #fff;
  h1{
    color: #323232;
  }
  a{
    color: #323232;
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  props: ['headTitle']
}
</script>
