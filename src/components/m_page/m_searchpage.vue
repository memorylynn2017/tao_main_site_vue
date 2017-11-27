<template>
    <div class="mui-content search">
        <div class="mui-content-padded searchtitle">
            <div class="mui-input-row mui-search">
                <input type="search" class="mui-input-clear" placeholder="搜索商品名称或编号">
            </div>
        </div>
        <div class="mui-row mui-fullscreen searchcontent">
            <div class="mui-col-xs-3">
                <div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
                </div>
            </div>
            <div id="segmentedControlContents" class="mui-col-xs-9 procducttype">
            </div>
        </div>
    </div>
</template>


<style lang="less" scoped>
.search {
    .mui-row.mui-fullscreen>[class*="mui-col-"] {
        height: 100%;
    }
    .mui-fullscreen {
        top: 56px;
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
        margin: 10px;
        input[type=search] {
            height: 36px;
            border: 1px solid #e6e6e6;
            background: #fff;
            margin-bottom: 0;
        }
        .mui-search {
            .mui-placeholder {
                font-size: 14px;
                line-height: 36px;
                color: #888;
                .mui-icon {
                    font-size: 16px;
                    color: #888;
                    margin-right: 6px;
                }
            }
            &:before {
                font-size: 16px;
                font-weight: 400;
                line-height: 36px;
                color: #888;
            }
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
                line-height: 50px;
                color: #323232;
                margin: 2px 0;
            }
            .mui-table-view:before,.mui-table-view:after {
                height: 0;
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

</script>