<template>
    <div id="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content search">
            <div class="mui-content-padded searchtitle">
                <a href="/search">
                <div class="mui-input-row mui-search">
                    <input type="search" class="mui-input-clear" placeholder="搜索商品名称或编号">
                </div>
                </a>
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

        <!-- 尾部 -->
        <footerBar :footerNavId="footerNavId"></footerBar>
    </div>
</template>

<style lang="less">
.mui-segmented-control.mui-segmented-control-inverted.mui-segmented-control-vertical .mui-control-item {
    border: 2px solid transparent;
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item{
    width:100%;
    line-height: 50px;
    font-size: 14px;
    color: #323232;
    border: 2px solid transparent;
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
    color: #e51c23;
    border-left: 2px solid #e51c23;
    border-bottom: 0!important;
    background: #ffffff;
}
//================
.procducttype {
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
.mui-control-content {
    display: block;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
    width: 60%;
    max-width: 60%;
    height: auto;
}
.search {
    .searchtitle {
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
        }
    }
}
</style>
<style lang="less" scoped>
.search {
    .mui-row.mui-fullscreen>[class*="mui-col-"] {
        height: 100%;
    }
    .mui-fullscreen {
        top: 100px;
        margin-bottom: 50px;
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
import headBar from "../public/m/header-oth";
import footerBar from "../public/m/footer";
export default {
  name: 'app',
    data() {
        return {
            headTitle: '搜索',   //导航标题
            footerNavId: 2,   //底部导航id
        };
    },
    mounted() {
        mui.init();
        
        var controls = document.getElementById("segmentedControls");
        var contents = document.getElementById("segmentedControlContents");
        var html = [];
        var left = ['女装', '男装', '童装', '内衣', '鞋帽', '箱包'];
        var i = 1,
            j = 1,
            m = left.length + 1,
            n = 0;
        for (; i < m; i++) {
            html.push('<a class="mui-control-item" data-index="' + (i - 1) + '" href="#content' + i + '">' + left[i - 1] +
                '</a>');
        }
        controls.innerHTML = html.join('');
        html = [];
        var right = [{
            'title': '女装',
            'products': [{
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1194/11949081/raw_1502969139.jpeg',
                'des': '连衣裙'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1194/11949083/raw_1502969140.jpeg',
                'des': 'T恤'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1194/11949081/raw_1502969139.jpeg',
                'des': '雪纺衫'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1194/11949145/raw_1502969456.jpeg',
                'des': '衬衫'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1194/11949169/raw_1502969590.jpeg',
                'des': '外套'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1194/11949187/raw_1502969649.jpeg',
                'des': '卫衣'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1194/11949239/raw_1502969809.jpeg',
                'des': '毛针织衫'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1194/11949317/raw_1502970094.jpeg',
                'des': '风衣'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1194/11949353/raw_1502970190.jpeg',
                'des': '背心吊带'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1249/12499702/raw_1504773129.jpeg',
                'des': '时尚套装'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1249/12499424/raw_1504772888.jpeg',
                'des': '牛仔外套'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1249/12499579/raw_1504773037.jpeg',
                'des': '牛仔裙'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1249/12499001/raw_1504772562.jpeg',
                'des': '马甲'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1249/12499830/raw_1504773225.jpeg',
                'des': '牛仔裤'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12500157/raw_1504773521.jpeg',
                'des': '职业女装'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12500015/raw_1504773352.jpeg',
                'des': '休闲裤'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12500016/raw_1504773353.jpeg',
                'des': '打底裤'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12500013/raw_1504773352.jpeg',
                'des': '西装裤'
            }]
        }, {
            'title': '男装',
            'products': [{
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12502423/raw_1504775740.jpeg',
                'des': '卫衣'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12502425/raw_1504775741.jpeg',
                'des': '夹克'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12502428/raw_1504775741.jpeg',
                'des': '针织衫/毛衣'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12502420/raw_1504775738.jpeg',
                'des': '运动套装'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12502424/raw_1504775740.jpeg',
                'des': '风衣'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12502426/raw_1504775741.jpeg',
                'des': '背心'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12502430/raw_1504775742.jpeg',
                'des': '套装'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12502433/raw_1504775743.jpeg',
                'des': 'T恤'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12502434/raw_1504775743.jpeg',
                'des': '衬衫'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12502432/raw_1504775742.jpeg',
                'des': '西服'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12502435/raw_1504775744.jpeg',
                'des': 'POLO衫'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12502438/raw_1504775745.jpeg',
                'des': '牛仔裤'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12502439/raw_1504775745.jpeg',
                'des': '休闲裤'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12502440/raw_1504775746.jpeg',
                'des': '西裤'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12502441/raw_1504775746.jpeg',
                'des': '棉裤'
            }]
        }, {
            'title': '童装',
            'products': [{
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12505568/raw_1504779094.jpeg',
                'des': '连衣裙'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12505568/raw_1504779094.jpeg',
                'des': '连衣裙'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12505568/raw_1504779094.jpeg',
                'des': '连衣裙'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12505568/raw_1504779094.jpeg',
                'des': '连衣裙'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12505568/raw_1504779094.jpeg',
                'des': '连衣裙'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12505568/raw_1504779094.jpeg',
                'des': '连衣裙'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12505568/raw_1504779094.jpeg',
                'des': '连衣裙'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12505568/raw_1504779094.jpeg',
                'des': '连衣裙'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12505568/raw_1504779094.jpeg',
                'des': '连衣裙'
            }]
        }, {
            'title': '内衣',
            'products': [{
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12505967/raw_1504779669.jpeg',
                'des': '连衣裙'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12505967/raw_1504779669.jpeg',
                'des': '连衣裙'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12505967/raw_1504779669.jpeg',
                'des': '连衣裙'
            }]
        }, {
            'title': '鞋帽',
            'products': [{
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12506897/raw_1504781685.jpeg',
                'des': '连衣裙'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12506897/raw_1504781685.jpeg',
                'des': '连衣裙'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12506897/raw_1504781685.jpeg',
                'des': '连衣裙'
            }]
        }, {
            'title': '箱包',
            'products': [{
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12506261/raw_1504780189.jpeg',
                'des': '连衣裙'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12506261/raw_1504780189.jpeg',
                'des': '连衣裙'
            }, {
                'url': 'javascript:;',
                'img': 'https://pro.modao.cc/uploads3/images/1250/12506261/raw_1504780189.jpeg',
                'des': '连衣裙'
            }]
        }];
        for (i = 1; i < m; i++) {
            var title = right[i - 1].title
            html.push('<div id="content' + i + '" class="mui-control-content"><h5 class="title">' + title +
                '</h5><ul class="mui-table-view mui-grid-view">');

            var $this = right[i - 1].products;
            n = $this.length + 1;

            for (j = 1; j < n; j++) {
                var url = $this[j - 1].url;
                var img = $this[j - 1].img;
                var des = $this[j - 1].des;
                html.push('<li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="' + url +
                    '"><img class="mui-media-object" src="' + img + '"><div class="mui-media-body">' + des +
                    '</div></a></li>');
            }
            html.push('</ul></div>');
        }
        contents.innerHTML = html.join('');
        //默认选中第一个
        controls.querySelector('.mui-control-item').classList.add('mui-active');
        //			contents.querySelector('.mui-control-content').classList.add('mui-active');
        window.onload = function () {
            var controlsElem = document.getElementById("segmentedControls");
            var contentsElem = document.getElementById("segmentedControlContents");
            var controlListElem = controlsElem.querySelectorAll('.mui-control-item');
            var contentListElem = contentsElem.querySelectorAll('.mui-control-content');
            var controlWrapperElem = controlsElem.parentNode;
            var controlWrapperHeight = controlWrapperElem.offsetHeight;
            var controlMaxScroll = controlWrapperElem.scrollHeight - controlWrapperHeight; //左侧类别最大可滚动高度
            var maxScroll = contentsElem.scrollHeight - contentsElem.offsetHeight; //右侧内容最大可滚动高度
            console.log(document.getElementById("segmentedControlContents").scrollHeight);
            console.log(contentsElem.scrollHeight);
            console.log(contentsElem.offsetHeight);
            console.log(maxScroll);
            var controlHeight = controlListElem[0].offsetHeight; //左侧类别每一项的高度
            var controlTops = []; //存储control的scrollTop值
            var contentTops = [0]; //存储content的scrollTop值
            var length = contentListElem.length;
            for (var i = 0; i < length; i++) {
                controlTops.push(controlListElem[i].offsetTop + controlHeight);
            }
            for (var i = 1; i < length; i++) {
                var offsetTop = contentListElem[i].offsetTop;
                console.log(offsetTop);
                console.log(offsetTop + 100 - maxScroll);
                if (offsetTop + 100 >= maxScroll) {
                    var height = Math.max(offsetTop + 100 - maxScroll, 100);
                    var totalHeight = 0;
                    var heights = [];
                    for (var j = i; j < length; j++) {
                        var offsetHeight = contentListElem[j].offsetHeight;
                        totalHeight += offsetHeight;
                        heights.push(totalHeight);
                    }
                    for (var m = 0, len = heights.length; m < len; m++) {
                        contentTops.push(parseInt(maxScroll - (height - heights[m] / totalHeight * height)));
                    }
                    break;
                } else {
                    contentTops.push(parseInt(offsetTop));
                }
            }
            contentsElem.addEventListener('scroll', function () {
                var scrollTop = contentsElem.scrollTop;
                for (var i = 0; i < length; i++) {
                    var offsetTop = contentTops[i];
                    var offset = Math.abs(offsetTop - scrollTop);
                    //						console.log("i:"+i+",scrollTop:"+scrollTop+",offsetTop:"+offsetTop+",offset:"+offset);
                    if (scrollTop < offsetTop) {
                        if (scrollTop >= maxScroll) {
                            onScroll(length - 1);
                        } else {
                            onScroll(i - 1);
                        }
                        break;
                    } else if (offset < 20) {
                        onScroll(i);
                        break;
                    } else if (scrollTop >= maxScroll) {
                        onScroll(length - 1);
                        break;
                    }
                }
            });
            var lastIndex = 0;
            //监听content滚动
            var onScroll = function (index) {
                if (lastIndex !== index) {
                    lastIndex = index;
                    var lastActiveElem = controlsElem.querySelector('.mui-active');
                    lastActiveElem && (lastActiveElem.classList.remove('mui-active'));
                    var currentElem = controlsElem.querySelector('.mui-control-item:nth-child(' + (index + 1) +
                        ')');
                    currentElem.classList.add('mui-active');
                    //简单处理左侧分类滚动，要么滚动到底，要么滚动到顶
                    var controlScrollTop = controlWrapperElem.scrollTop;
                    if (controlScrollTop + controlWrapperHeight < controlTops[index]) {
                        controlWrapperElem.scrollTop = controlMaxScroll;
                    } else if (controlScrollTop > controlTops[index] - controlHeight) {
                        controlWrapperElem.scrollTop = 0;
                    }
                }
            };
            //滚动到指定content
            var scrollTo = function (index) {
                contentsElem.scrollTop = contentTops[index];
            };
            mui(controlsElem).on('tap', '.mui-control-item', function (e) {
                console.log(12321)
                scrollTo(this.getAttribute('data-index'));
                return false;
            });

        }
    },
    components: {
        headBar,
        footerBar
    }
};
</script>