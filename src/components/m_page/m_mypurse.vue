<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

         <!-- 内容区 -->
        <div class="mui-content">
            <!-- 设置 -->
            <div class="setting">
                

                <!-- 我的订单 -->
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="mui-table-view-cell">
                        <p style="color: #323232;font-size: 14.0px;">可用余额(￥)</p>
                        <br>
                        <span class="fs-24"><strong>0.00</strong></span>
                        <button type="button" class="mui-btn mui-btn-danger" style="width:100px;height:30px;">交易帐单</button>
                    </li>
                </ul>



                <ul class="mui-table-view mui-table-view-chevron mt10">
                    <li class="mui-table-view-cell">
                        <a href="#" class="mui-navigate-right">
                            <span>线下充值提交</span>
                        </a>
                    </li>
                </ul>

                <ul class="mui-table-view mui-table-view-chevron mt10">
                    <li class="mui-table-view-cell">
                        <a href="#" class="mui-navigate-right">
                           </span>订单退款记录</a>
                    </li>
                    
                </ul>

                <ul class="mui-table-view mui-table-view-chevron mt10">
                    <li class="mui-table-view-cell">
                        <a href="#" class="mui-navigate-right">
                           </span>我要提现</a>
                    </li>
                   
                </ul>

                <ul class="mui-table-view mui-table-view-chevron mt10">
                    <li class="mui-table-view-cell">
                        <a href="#" class="mui-navigate-right">
                          </span>提现记录</a>
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
            headTitle: "我的钱包"
        }
    },
    components: {
        headBar
  }
}
</script>
<style lang="less" scoped>

</style>