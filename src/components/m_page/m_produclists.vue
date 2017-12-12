<template>
    <div id="app">
        <!-- 头部 -->
        <headBar :headTitle="product.name"></headBar>
        <div class="mui-content product-detail mb50">
            <!-- 图片轮播 -->
            <div id="slider" class="mui-slider banner" >
                <div class="mui-slider-group mui-slider-loop">
                    <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
                    <div class="mui-slider-item mui-slider-item-duplicate">
                        <a href="javascript:;">
                            <img :src="piclist_last">
                        </a>
                    </div>

                    <div v-for="pic in product.piclist" class="mui-slider-item">
                        <a href="javascript:;">
                            <img :src="pic">
                        </a>
                    </div>

                    <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
                    <div class="mui-slider-item mui-slider-item-duplicate">
                        <a href="javascript:;">
                            <img :src="piclist_first">
                        </a>
                    </div>
                </div>
                <div class="mui-slider-indicator">
                    <div v-for="(pic,index) in product.piclist" class="mui-indicator" :key="index" :class="{'mui-active': !index}"></div>
                </div>
            </div>
            <div class="product-msg">
                <p class="des">{{product.name}}</p>
                <div class="msg1 qf">
                    <span class="price fl">￥{{product.price}}</span>
                    <span class="vip fl">VIP (登录查看)</span>
                    <button class="mui-btn fr">找同款</button>
                </div>
                <div class="msg2 qf">
                    <span class="fl">货号 1591</span>
                    <span class="fl">销量 1</span>
                    <span class="fl">收藏 2</span>
                    <span class="fr">{{ product.update }}上新</span>
                </div>
            </div>
            <ul class="mui-table-view kucun server">
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right">
                        <span>服务</span>
                        <span><i></i>实拍</span>
                        <span><i></i>退现</span>
                        <span><i></i>代发</span>
                    </a>
                </li>
            </ul>
            <ul class="mui-table-view checkmsg">
                <li class="mui-table-view-cell">
                    <span class="label">颜色</span>
                    <span class="checkitem">
                        <i v-for="color in product.colorlist">{{color}}</i>
                    </span>
                </li>
                <li class="mui-table-view-cell">
                    <span class="label">尺码</span>
                    <span class="checkitem">
                        <i v-for="size in product.sizelist">{{size}}</i>
                    </span>
                </li>
            </ul>
            <ul class="mui-table-view kucun">
                <li class="mui-table-view-cell type">
                    <span>JM欧美女装<i></i></span>
                    <button class="mui-btn fr">联系商家</button>
                </li>
                <li class="mui-table-view-cell shop">
                    <a class="mui-navigate-right">
                        <span class="mui-badge">进店逛逛</span>
                        <span>佰润 2F B2042</span>
                        <span>商品 79</span>
                    </a>
                </li>
            </ul>
            <div class="product-content">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">商品详情</li>
                </ul>
                <div class="picbox">
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274164/raw_1504083312.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274169/raw_1504083313.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274170/raw_1504083314.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274171/raw_1504083314.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274173/raw_1504083315.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274174/raw_1504083316.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274269/raw_1504083405.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274278/raw_1504083415.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274290/raw_1504083424.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274304/raw_1504083434.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274310/raw_1504083441.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274322/raw_1504083448.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274333/raw_1504083455.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274337/raw_1504083460.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274360/raw_1504083478.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274364/raw_1504083480.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274372/raw_1504083485.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274388/raw_1504083504.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274395/raw_1504083513.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274403/raw_1504083518.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274426/raw_1504083539.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274461/raw_1504083567.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274466/raw_1504083571.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274484/raw_1504083587.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274490/raw_1504083592.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274502/raw_1504083606.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274516/raw_1504083611.jpeg" alt=""></p>
                    <p><img src="https://pro.modao.cc/uploads3/images/1227/12274528/raw_1504083617.jpeg" alt=""></p>
                </div>
            </div>
        </div>
        <a href="/carthave" class="mui-icon iconfont icon-gouwuche addcart">
            <span class="mui-badge mui-badge-danger" :class="{'mui-hidden':mycart.allnum==0}">{{mycart.allnum}}</span>
        </a>

        <div id="picture" class="mui-popover mui-popover-action mui-popover-bottom" style="display: block!important;">
            <div class="checkbox">
                <ul class="clearfix">
                    <!-- <li>蓝色(3)</li>
                    <li>黄色</li> -->
                    <li v-for="item in product.prolist" @click="selectColor(item)" :class="{'on':item.selected}">{{ item.color }}<span :class="{'mui-hidden':item.num==0}"> ({{ item.num }})</span></li>
                </ul>
            </div>
            <div v-for="item in product.prolist" class="numbox" :class="{'mui-hidden':!item.selected}">
                <div v-for="(sizeitem,index) in item.sizelist" :key="index" class="type clearfix">
                    <span class="label mui-pull-left">{{ sizeitem.name }}</span>
                    <div class="mui-numbox mui-pull-right" data-numbox-min='0'>
                        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="compNum(sizeitem,-1)">-</button>
                        <input class="mui-input-numbox" type="number" disabled v-model="sizeitem.num" />
                        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="compNum(sizeitem,1)">+</button>
                    </div>
                </div>
            </div>
            <div class="checkresult">
                <div class="mui-input-row">
                    <label>已选</label>
                    <!-- <textarea id="textarea" placeholder="">蓝色: S/1件，M/1件，L/1件 粉色: M/1件</textarea> -->
                    <div class="check-con">
                        <ul class="clearfix">
                            <!-- <li>蓝色: S/1件，M/1件，L/1件</li> -->
                            <li v-for="item in product.showSelectPro">{{item}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="btnlist">
                <a class="btn return" href="javascript:;" @click="goback()">返回</a>
                <a class="btn confirm" @click="confirm" href="javascript:;">确定<span :class="{'mui-hidden': product.num==0}"> ( {{product.num}} ) </span></a>
            </div>
        </div>

        <!--底部功能-->
        <nav class="mui-bar mui-bar-tab te-bar-footer">
            <a class="mui-tab-item w-20 weixin" href="javascript:;">
                <span class="mui-icon mui-icon-weixin"></span>
            </a>
            <a class="mui-tab-item w-20 collect" href="javascript:;">
                <span class="mui-icon mui-icon-star"></span>
                <span class="mui-tab-label">收藏</span>
            </a>
            <a class="mui-tab-item w-60 add" href="#picture">
                <span class="mui-tab-label">加入进货车</span>
            </a>
        </nav>
    </div>
</template>

<script>
import headBar from "../public/m/header-oth";
import axios from "axios";
export default {
    name: 'app',
    data() {
        return {
            id: 0,      //商品id
            piclist_first: '',  //第一张
            piclist_last: '',   //最后一张

            product: {},    //产品数据
            mycart: {},     //我的购物车
        }
    },
    components: {
        headBar
    },
    created (){
        this.id =this.$route.query.id;
    },
    mounted () {
        this.$nextTick(function(){
            //读取商品信息
            this.getProductList();
            //读取本地缓存
            if(localStorage.getItem("mycart")){
                // console.log('yes')
                // console.log('购物车：'+this.mycart)
                // console.log('购物车：'+JSON.stringify(this.mycart))  

                this.mycart = JSON.parse(localStorage.getItem("mycart"));
            }else{
                // console.log('no')
                // console.log('购物车：'+this.mycart)
                // console.log('购物车：'+JSON.stringify(this.mycart))  

                this.mycart = {"allnum": 0, "list": []};
                localStorage.setItem("mycart",JSON.stringify(this.mycart));           
            }
        })
    },
    methods:{
        //读取商品信息
        getProductList(){
            let _protocol = document.location.protocol;
            let _host = window.location.hostname;
            let _url = _protocol+"//"+_host+":3000";

            axios.get(_url + "/products").then((result)=>{
                var res = result.data;
                for (var i=0;i<res.length; i++){
                    if (this.id == res[i].id){
                        this.product = res[i];
                        this.piclist_first = this.product.piclist[0];
                        this.piclist_last = this.product.piclist[this.product.piclist.length-1];

                        this.$set(this.product, "prolist", []); //产品列表
                        this.product.colorlist.forEach((value,index)=>{
                            //new一个size数组
                            let size_arr = [];
                            this.product.sizelist.forEach((value,index)=>{
                                size_arr.push({'name':value,'num':0});
                            })
                            this.product.prolist.push({
                                'color': value,
                                'sizelist': size_arr,
                                'selected': false,
                                'num': 0
                            });
                            //设置默认第一个选中
                            this.product.prolist[0].selected = true;
                        })
                        this.$set(this.product, "num", 0);  //选中个数
                        this.$set(this.product, "showSelectPro", []);   //选择商品列表
                    }
                }
            })
        },
        //选择颜色
        selectColor(item){
            this.product.prolist.forEach(function(value, index){
                value.selected = false;
            })
            item.selected = true;
        },
        //克隆对象
        cloneObj(obj){
            var str, newobj = obj.constructor === Array ? [] : {};
            if(typeof obj !== 'object'){
                return;
            } else if(window.JSON){
                str = JSON.stringify(obj), //序列化对象
                newobj = JSON.parse(str); //还原
            } else {
                for(var i in obj){
                    newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i]; 
                }
            }
            return newobj;
        },
        //计算件数（+，-）
        compNum(item,flag){
            if (flag>0){
                item.num++;
            }else{
                item.num--;
                if (item.num<0) item.num = 0;
            }
            this.compPro();
        },
        //计算选择商品列表
        compPro(){
            this.comp_colortype(this.product);
            /*
            设置num总个数
            */
            this.product.num = 0;
            this.product.prolist.forEach((curItem,index)=>{
                this.product.num += curItem.num;
            })
        },
        //计算商品款色的showSelectPro，num的信息
        //item当前的商品款色，updateObj是需要更新的对象
        comp_colortype(updateObj){
            //每次计算先清空列表
            updateObj.showSelectPro = [];
            updateObj.prolist.forEach((item,index)=>{
                /*
                给showSelectPro插入信息
                */
                let str = item.color + ": ";
                let item_allnum = 0;
                item.sizelist.forEach((value,index)=>{
                    //得到已选信息,只用来显示
                    if (value.num > 0){
                        str += value.name + "/" + value.num + "件，";
                    }
                    //计算款色个数
                    item_allnum += value.num;
                })
                str = str.substr(0,str.length-1);
                // 当前所选款色总数量>0
                if (item_allnum>0){
                    updateObj.showSelectPro.push(str);
                }

                /*
                给prolist参数中的num进行修改
                */
                updateObj.prolist.forEach((curItem,index)=>{
                    if (item.color == curItem.color){
                        curItem.num = item_allnum;
                    }
                })
            })
        },
        //返回
        goback(){
            //关闭弹框
            $('.mui-backdrop').removeClass('mui-active').remove();
            $('.mui-popover').removeClass('mui-active');
        },
        //确认商品
        confirm(){
            /*
            更新购物车的商品
            */
            //是否存在此商品，true为存在，false为不存在
            let isProduct = false;
            this.mycart.list.forEach((cartItem,index)=>{
                //存在，修改
                if (cartItem.id == this.product.id){
                    console.log('存在');
                    isProduct = true;

                    //合并上款色数量
                    for (let i=0; i<cartItem.prolist.length; i++){
                        let sizelist = cartItem.prolist[i].sizelist;
                        let p_sizelist = this.product.prolist[i].sizelist;
                        for (let j=0; j<sizelist.length; j++){
                            sizelist[j].num += p_sizelist[j].num;
                        }
                    }

                    //计算
                    this.comp_colortype(cartItem);
                    
                    this.mycart.list.forEach((cartitem,index)=>{
                        let cartitem_num = 0;
                        cartitem.prolist.forEach((item,index)=>{
                            cartitem_num += item.num;
                        })
                        cartitem.num = cartitem_num;
                    })

                    /*
                    设置allnum总个数
                    */
                    this.mycart.allnum = 0;
                    this.mycart.list.forEach((curItem,index)=>{
                        this.mycart.allnum += curItem.num;
                    })
                }
            })

            //不存在，添加
            if (!isProduct){
                console.log('不存在')
                let _product = this.cloneObj(this.product);
                let item = {
                    id: _product.id,
                    name: _product.name,
                    pic: _product.pic,
                    price: _product.price,
                    num: _product.num,
                    prolist: _product.prolist,
                    showSelectPro: _product.showSelectPro
                }
                this.mycart.list.push(item);
            }

            //更新购物车中的总数allnum
            let _allnum = 0;
            this.mycart.list.forEach((value,index)=>{
                _allnum += value.num;
            })
            this.mycart.allnum = _allnum;
            localStorage.setItem("mycart",JSON.stringify(this.mycart));

            /*
            清空当前选择商品
            */
            this.product.num = 0;
            this.product.showSelectPro = [];
            this.product.prolist.forEach((value,index)=>{
                value.num = 0;
                value.sizelist.forEach((sizeitem,index)=>{
                    sizeitem.num = 0;
                })
            })

            console.log(this.mycart)
            //关闭弹框
            this.goback();
        }
    }
}
</script>


<style lang="less" scoped>
.qf {
    *zoom: 1;
}
.qf:after {
    content: '';
    display: table;
    clear: both;
}
.fl {float: left;}
.fr {float: right;}
// 加入购物车
.addcart{
    position: fixed;
    top: 50px;
    right: 10px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: rgba(0,0,0,0.7);
    border-radius: 50%;
    z-index: 99;
    font-size: 20px;
    color: #fff;
    text-align: center;
    .mui-badge{
        margin-left: -20px;
        padding: 1px;
        min-width: 15px;
    }
}
.mui-tab-item{
    &.w-20{
        width: 20%;
    }
    &.w-60{
        width: 60%;
    }
}
.product-detail {
    .mui-table-view:before,.mui-table-view:after {
        height: 0;
    }
    .mui-btn {
        padding: 2px 12px;
        font-size: 12px;
        color: #646464;
    }
    .product-msg {
        background: #fff;
        padding: 5px 15px;
        margin-bottom: 10px;
        .des {
            font-size: 14px;
            color: #646464;
            line-height: 20px;
        }
        .msg1 {
            .price {
                font-size: 20px;
                color: #e51c23;
                line-height: 30px;
                margin-right: 30px;
            }
            .vip {
                font-size: 14px;
                color: #646464;
                line-height: 30px;
            }
            .mui-btn {
                margin-top: 4px;
            }
        }
        .msg2 {
            font-size: 12px;
            color: #888;
            line-height: 30px;
            span.fl {
                margin-right: 15px;
            }
        }
    }
    .kucun {
        margin-bottom: 10px;
        .mui-navigate-right {
            font-size: 14px;
            color: #888;
            .mui-badge {
                font-size: 14px;
                color: #646464;
                background: #fff;
                right: 25px;
            }
        }
        .type {
            color: #f58605;
            i {
                display: inline-block;
                width: 18px;
                height: 18px;
                background: url("../../assets/images/d1.png") no-repeat center center;
                vertical-align: middle;
                margin-left: 10px;
            }
        }
        .last {
            font-size: 14px;
            color: #aaa;
        }
    }
    .product-content {
        .mui-table-view-cell {
            font-size: 14px;
            color: #000;
        }
        .picbox {
            p {
                margin-bottom: 0;
                img {
                    width: 100%;
                    vertical-align: top;
                }
            }
        }
    }
    .server {
        span {
            color: #666;
            margin-right: 18px;
            i {
                display: inline-block;
                width: 16px;
                height: 16px;
                background: url("../../assets/images/d2.png") no-repeat center center;
                vertical-align: middle;
                margin-right: 5px;
            }
            &:first-child {
                color: #888;
            }
        }
    }
    .checkmsg {
        margin-bottom: 10px;
        .mui-table-view-cell {
            font-size: 14px;
            .label {
                color: #888;
                margin-right: 15px;
            }
            .checkitem {
                color: #323232;
                i {
                    font-style: normal;
                    margin-right: 18px;
                }
            }
        }
    }
    .shop {
        span {
            margin-right: 15px;
            color: #aaa;
            &.mui-badge {
                margin-right: 0;
                color: #323232;
            }
        }
    }
}
.mui-popover {
    background: #fff!important;
    .checkbox {
        li {
            float: left;
            width: 70px;
            font-size: 14px;
            color: #888;
            line-height: 26px;
            text-align: center;
            border: 1px solid #888;
            list-style: none;
            margin: 0 10px;
            margin-bottom: 20px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            &.on{
                color: #e51c23;
                border: 1px solid #e51c23;
            }
        }
    }
    .numbox {
        background: #f7f7f7;
        padding: 12px 30px 2px;
        margin-top: -20px;
        .type {
            margin-bottom: 10px;
            .label {
                font-size: 14px;
                color: #323232;
                line-height: 32px;
            }
            .mui-numbox {
                .mui-btn {
                    background: #fff;
                }
                .mui-input-numbox {
                    background: #fffdcf;
                }
                .mui-btn-numbox-plus {
                    color: #e51c23;
                }
            }
        }
    }
    .checkresult {
        padding: 20px 15px;
        background: #fff;
        .mui-input-row {
            label {
                width: 22%;
                font-size: 14px;
                color: #323232;
            }
        }
        .mui-input-row label~textarea {
            width: 78%;
            margin-bottom: 0;
            padding-left: 8px;
            border: 1px solid #e51c23;
            font-size: 14px;
            color: #323232;
            border-radius: 0;
        }
    }
}
// 底部功能
.te-bar-footer{
    .weixin{
        color: #219020;
        background-color: #fff;
        .mui-icon{
            top: 0;
            font-size: 28px;
        }
    }
    .collect{
        color: #fff;
        background-color: #ff8d00;
    }
    .add{
        font-size: 14px;
        color: #fff;
        background-color: #e11920;
    }
}
// 弹框start
.mui-popover {
    background: #fff!important;
    .checkbox {
        ul{
            padding: 10px;
            li {
                float: left;
                width: 70px;
                font-size: 14px;
                color: #888;
                line-height: 26px;
                text-align: center;
                border: 1px solid #888;
                list-style: none;
                margin: 0 8px;
                margin-bottom: 20px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
        }
    }
    .numbox {
        background: #f7f7f7;
        padding: 12px 30px 2px;
        margin-top: -20px;
        .type {
            margin-bottom: 10px;
            .label {
                font-size: 14px;
                color: #323232;
                line-height: 32px;
            }
            .mui-numbox {
                .mui-btn {
                    background: #fff;
                }
                .mui-input-numbox {
                    background: #fffdcf;
                }
                .mui-btn-numbox-plus {
                    color: #e51c23;
                }
            }
        }
    }
    .checkresult {
        padding: 20px 15px;
        background: #fff;
        .mui-input-row {
            label {
                padding: 11px 0;
                width: 20%;
                font-size: 14px;
                color: #323232;
            }
        }
        // .mui-input-row label~textarea {
        //     width: 80%;
        //     margin-bottom: 0;
        //     padding-left: 8px;
        //     border: 1px solid #e51c23;
        //     font-size: 14px;
        //     color: #323232;
        //     border-radius: 0;
        // }
        .mui-input-row .check-con{
            display: inline-block;
            width: 80%;
            min-height: 50px;
            margin-bottom: 0;
            padding: 8px;
            border: 1px solid #e51c23;
            font-size: 14px;
            color: #323232;
            border-radius: 0;
            >ul{
                list-style: none;
            }
        }
    }
    .btnlist{
        height: 40px;
        .btn{
            float: left;
            display: inline-block;
            width: 50%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
            &.return{
                color: #000;
                background-color: #f6f6f6;
            }
            &.confirm{
                color: #fff;
                background-color: #e51c23;
            }
        }
    }
}
// 弹框end
</style>