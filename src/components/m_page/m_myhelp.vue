<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content">
            <!-- 设置 -->
            <div class="setting">

                <ul class="mui-table-view mui-table-view-chevron mt10">
                    <li class="mui-table-view-cell">
                        <a href="#" class="mui-navigate-right">
                            <span class="mui-icon mui-icon-help"></span>常见问题</a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="#" class="mui-navigate-right">
                            <span class="mui-icon mui-icon-email"></span>意见反馈</a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="#" class="mui-navigate-right">
                            <span class="mui-icon mui-icon-location"></span>新手指南</a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="#" class="mui-navigate-right">
                            <span class="mui-icon iconfont icon-fenxiang"></span>关于淘亿</a>
                    </li>
                </ul>

            </div>
        </div>
        
    </div>
</template>

<script>
import headBar from "../public/m/header-oth";
export default {
    name: 'app',
    data() {
        return {
            headTitle: '帮助中心'
        }
    },
    components: {
        headBar
    }
}
</script>
<style lang="less" scoped>
.setting {
    margin-bottom: 80px;
    .mui-table-view {
        .mui-table-view-cell {
            text-align: left;
            a {
                font-size: 16px;
                .mui-icon {
                    margin-right: 10px;
                    font-size: 18px;
                }
            }
        }
    }

}
</style>