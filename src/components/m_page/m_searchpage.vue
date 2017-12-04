<template>
    <div id="app">
        <!-- 头部 -->
        <!-- <headBar :headTitle="headTitle"></headBar> -->

        <div class="mui-content search">
            <div class="mui-content-padded searchtitle">
                <a class="mui-icon mui-icon-home search-home mui-pull-left"  href="javascript:;"></a>
                <a class="input-a" href="/search">搜索商品名称或编号</a>
                <a class="mui-icon iconfont icon-fangdajing search-fangdajing mui-pull-right"  href="javascript:;"></a>
            </div>
            <div class="mui-row mui-fullscreen searchcontent">
                <div class="mui-col-xs-3">
                    <div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
                        <a v-for="(type,index) in typeList" :key="index" class="mui-control-item" :class="{'mui-active': typeid==(index+1)}" :data-index="index" href="javascript:;" @click="tab_type(index+1)"> 
                            {{type.name}}
                        </a>
                    </div>
                </div>
                <div id="segmentedControlContents" class="mui-col-xs-9 procducttype">
                    <div v-for="(type,index) in typeList" :key="index" :id="'content'+(index+1)" class="mui-control-content" :class="{'mui-hidden': typeid!=(index+1)}">
                        <router-link :to="{path: type.adlink}">
                            <img class="img-ad" :src="type.adimg" alt="">
                        </router-link>
                        <h5 class="title">{{type.name}}</h5>
                        <ul class="mui-table-view mui-grid-view">
                            <li v-for="(item,index) in type.detail" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4">
                                <router-link :to="{path: item.link}">
                                    <img class="mui-media-object" :src="item.img">
                                    <div class="mui-media-body">{{item.name}}</div>
                                </router-link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <!-- 尾部 -->
        <!-- <footerBar :footerNavId="footerNavId"></footerBar> -->
    </div>
</template>


<style lang="less" scoped>
.search {
    .mui-row.mui-fullscreen>[class*="mui-col-"] {
        height: 100%;
    }
    .mui-fullscreen {
        top: 50px;
        // top: 100px;
        // margin-bottom: 50px;
    }
    
    .mui-col-xs-3,
    .mui-col-xs-9 {
        overflow-y: auto;
        height: 100%;
    }
    
    .mui-segmented-control .mui-control-item {
        line-height: 50px;
        width: 100%;
    }
    
    .mui-control-content {
        display: block;
    }
    
    .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
        background-color: #fff;
    }



    .searchtitle {
        margin: 0;
        padding: 10px;
        background-color: #f7f7f7;
        input[type=search] {
            height: 36px;
            border: 1px solid #e6e6e6;
            background: #fff;
            margin-bottom: 0;
        }
        // .mui-search {
        //     .mui-placeholder {
        //         font-size: 14px;
        //         line-height: 36px;
        //         color: #888;
        //         .mui-icon {
        //             font-size: 16px;
        //             color: #888;
        //             margin-right: 6px;
        //         }
        //     }
        //     &:before {
        //         font-size: 16px;
        //         font-weight: 400;
        //         line-height: 36px;
        //         color: #888;
        //     }
        // }
        height: 50px;
        padding: 0!important;
        .search-home{
            float: left;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 22px;
            color: #757575;
            display: inline-block;
        }
        .input-a{
            display: inline-block;
            position: absolute;
            left: 50px;
            right: 50px;
            margin: 10px 0;
            padding: 0 20px;
            height: 30px;
            line-height: 30px;
            background: #fff;
            border: 1px solid #d5d5d5;
            border-radius: 15px;
            font-size: 13px;
            color: #757575;
        }
        .search-fangdajing{
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 22px;
            color: #757575;
            display: inline-block;
        }
    }
    .searchcontent {
        background: #fff;
        border-top: 1px solid #e6e6e6;
        .mui-col-xs-3 {
            background: #f5f5f5;
        }
        .mui-segmented-control.mui-segmented-control-inverted .mui-control-item {
            width: 100%;
        }
        .mui-segmented-control.mui-segmented-control-inverted.mui-segmented-control-vertical .mui-control-item {
            border: 2px solid transparent;
        }
        .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
            color: #e51c23;
            border-left: 2px solid #e51c23;
            background: #ffffff;
        }
        .mui-segmented-control .mui-control-item {
            font-size: 14px;
            line-height: 50px;
            color: #323232;
        }
        .procducttype {
            padding: 0 6px;
            .title {
                line-height: 30px;
                color: #323232;
                margin: 2px 0;
            }
            .img-ad{
                margin-top: 5px;
                width: 100%;
            }
            .mui-table-view:before,.mui-table-view:after {
                height: 0;
            }
            .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
                width: 60%;
                max-width: 60%;
            }
            .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
                font-size: 14px;
                color: #323232;
            }
        }
    }
}
</style>
<script>
import headBar from "../public/m/header-oth";
import footerBar from "../public/m/footer";
import axios from "axios";
export default {
  name: 'app',
    data() {
        return {
            headTitle: '搜索',   //导航标题
            footerNavId: 2,     //底部导航id
            typeList: {},       //分类列表
            typeid: 1,      //选择id，默认为1
        };
    },
    mounted() {
        //获取type
        this.getType();
    },
    methods:{
        getType(){
            let _protocol = document.location.protocol;
            let _host = window.location.hostname;
            let _url = _protocol+"//"+_host+":3000";

            axios.get(_url + "/producttype").then((result)=>{
                //console.log(result.data)
                this.typeList = result.data;
            })
        },
        //切换分类
        tab_type(index){
            this.typeid = index;
        }
    },
    components: {
        headBar,
        footerBar
    }
};
</script>