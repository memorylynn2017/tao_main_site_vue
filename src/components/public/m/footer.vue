<template>
    <!--底部功能-->
    <nav id="footer_nav" class="mui-bar mui-bar-tab te-bar-footer">
        <a class="mui-tab-item" :class="{'mui-active': 1==footerNavId}" href="/">
            <span class="mui-icon iconfont icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item" :class="{'mui-active': 2==footerNavId}" href="/searchpage">
            <span class="mui-icon iconfont icon-shouye5fenlei1"></span>
            <span class="mui-tab-label">搜索</span>
        </a>
        <a class="mui-tab-item" :class="{'mui-active': 3==footerNavId}" href="/find">
            <span class="mui-icon iconfont icon-yan"></span>
            <span class="mui-tab-label">发现</span>
        </a>
        <a class="mui-tab-item" :class="{'mui-active': 4==footerNavId}" href="/cart">
            <span class="mui-icon iconfont icon-gouwuche"></span>
            <span class="mui-tab-label">进货车</span>
        </a>
        <a class="mui-tab-item" :class="{'mui-active': 5==footerNavId}" href="/myhome">
            <span class="mui-icon iconfont icon-xiaolian"></span>
            <span class="mui-tab-label">我的</span>
        </a>
    </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["footerNavId"],

};
$(function() {
    mui('#footer_nav').on('tap', 'a', function() {
        var id = this.getAttribute('href');
        var href = this.href;
        mui.openWindow({
            id: id,
            url: this.href
        });
    });
});
</script>
<style lang="less">
.te-bar-footer {
    .mui-tab-item {
        color: #323232;
        &.mui-active {
            color: #E51C23;
        }
        .mui-icon {
            font-size: 20px;
            &.icon-shouye5fenlei1 {
                font-size: 18px;
            }
            &.icon-yan {
                top: 0;
                font-size: 22px;
            }
        }
    }
}
</style>