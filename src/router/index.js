import Vue from "vue";
import Router from "vue-router";
//首页
import M_index from "../components/index/index";
import M_index2 from "../components/index/index2";
//M_index_content
// （1）、每日新款
import M_daynews from "../components/m_page/m_daynews";
// （mock:/api/getproducts_list/:id）
// a、每日新款_动态上新的产品详情
// import M_produclists from "../components/m_page/m_produclists";
// b、每日新款_动态上新的产品详情
// c、每日新款_动态上新的产品详情
// （2）、优质商家
import M_seller from "../components/m_page/m_seller";
// （mock:/api/getsellers_list/:id）
// a、优质商家_动态上新的商家详情
import M_sellerlists from "../components/m_page/m_sellerlists";
// b、优质商家_动态上新的商家详情
// c、优质商家_动态上新的商家详情
// （3）、TOP100
import M_top100 from "../components/m_page/m_top100";
// （4）、6块6特批
// ...



//M_index_Product
// try a try
import M_productypes from "../components/m_page/m_productypes";
import M_produclists from "../components/m_page/m_produclists";
// （1）、girlProduct
import M_girlclose from "../components/m_page/m_girlclose";
// （2）、boyProduct
// ...
// （3）、childProduct
// ...
// （4）、brasProduct
// ...
// （5）、shoesProduct
// ...
// （6）、bagsProduct
// ...




import search from "../components/m_page/m_search";
import searchpage from '../components/m_page/m_searchpage'  //搜索（尾部）
import M_find from "../components/m_page/m_find";
import M_cart from "../components/m_page/m_cart"; //购物车-空
import M_carthave from "../components/m_page/m_carthave"; //购物车-有
import M_myhome from "../components/m_page/my/m_myhome";
//M_myhome_content
// （1）、 我的钱包
import M_mypurse from "../components/m_page/my/m_mypurse";
// （2）、 收藏商品
import M_mycollect from "../components/m_page/my/m_mycollect";
// （3）、 店铺关注
import M_myfollow from "../components/m_page/my/m_myfollow";
// （4）、 关注上新
import M_myfollowupdate from "../components/m_page/my/m_myfollowupdate";
// （5）、 我的足迹
import M_mybrowse from "../components/m_page/my/m_mybrowse";
// （6）、 快速补货
import M_mysupply from "../components/m_page/my/m_mysupply";
// （7）、 下架提醒
import M_myoffshelf from "../components/m_page/my/m_myoffshelf";

// （8）、 在线客服
// ...
// （9）、 收货地址
import M_myreceiver from "../components/m_page/my/m_myreceiver";
import M_myreceiver_add from "../components/m_page/my/m_myreceiver_add";
import M_myreceiver_edit from "../components/m_page/my/m_myreceiver_edit";
import M_myarea from "../components/m_page/my/m_myarea";
// （10）、 帮助中心
import M_myhelp from "../components/m_page/my/m_myhelp";

//M_myhome_order
import M_myorder from "../components/m_page/my/m_myorder";
// （1）、 待付款
// ...
// （2）、 待收货
// ...
// （3）、 已完成
// ...
// （4）、 已取消


//确认订单
// （1）、 收银台
import M_pay from "../components/m_page/order/m_pay";
// （2）、 确认订单
import M_orderconfirm from "../components/m_page/order/m_orderconfirm";
// （3）、 配送方式
import M_orderway from "../components/m_page/order/m_orderway";
// （4）、 缺货处理
import M_ordershortage from "../components/m_page/order/m_ordershortage";
// （5）、 订单详情
import M_orderdetail from "../components/m_page/order/m_orderdetail";
// （6）、 订单跟踪
import M_ordertracking from "../components/m_page/order/m_ordertracking";




Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/", //首页1
      component: M_index
    },
    {
      path: "/index", //首页2
      component: M_index2
    },

    {
      path: "/search", //搜索页面
      component: search
    },
    {
      path: "/searchpage", //搜索页面（尾部）
      component: searchpage
    },
    //主页_产品分类列表
    {
      path: "/M_productypes", //产品分类
      component: M_productypes
    },
    //主页_产品详情列表
    {
      path: "/M_produclists", //产品详情
      component: M_produclists
    },
    //主页_商家分类列表
    // {
    //   path: "/M_sellertypes", //商家分类
    //   component: M_sellertypes
    // },
    //主页_商家详情列表
    {
      path: "/M_sellerlists", //商家详情
      component: M_sellerlists
    },

    //主页_每日新款列表
    {
      path: "/M_daynews", //每日新款
      component: M_daynews
    },
    {
      path: "/M_seller", //优质商家
      component: M_seller
    },

    {
      path: "/M_top100", //TOP100
      component: M_top100
    },
    //分类导航
    {
      path: "/M_girlclose", //女装
      component: M_girlclose
    },

    {
      path: "/find", //发现
      component: M_find
    },
    {
      path: "/cart", //进货车
      component: M_cart
    },
    {
      path: "/carthave", //进货车
      component: M_carthave
    },
    //我的_模块里的功能
    {
      path: "/myhome", //我的
      component: M_myhome
    },
    {
      path: "/mypurse", //我的钱包
      component: M_mypurse
    },
    {
      path: "/mycollect", //我的收藏商品
      component: M_mycollect
    },
    {
      path: "/myfollow", //我的店铺关注
      component: M_myfollow
    },
    {
      path: "/myfollowupdate", //关注上新
      component: M_myfollowupdate
    },
    {
      path: "/mybrowse", //浏览记录
      component: M_mybrowse
    },
    {
      path: "/mysupply", //快速补货
      component: M_mysupply
    },
    {
      path: "/myoffshelf", //下架提醒
      component: M_myoffshelf
    },
    {
      path: "/myreceiver", //收货地址
      component: M_myreceiver
    },
    {
      path: "/myreceiveradd", //新增收货地址
      component: M_myreceiver_add
    },
    {
      path: "/myreceiveredit", //修改收货地址
      component: M_myreceiver_edit
    },
    {
      path: "/myarea", //修改地区
      component: M_myarea
    },
    {
      path: "/myhelp", //帮助中心
      component: M_myhelp
    },
    //
    {
      path: "/myorder", //订单
      component: M_myorder
    },
    //确认订单
    {path: "/pay", component: M_pay}, //收银台
    {path: "/orderconfirm", component: M_orderconfirm}, //确认订单
    {path: "/orderway", component: M_orderway}, //配送方式
    {path: "/ordershortage", component: M_ordershortage}, //缺货处理
    {path: "/orderdetail", component: M_orderdetail}, //订单详情
    {path: "/ordertracking", component: M_ordertracking}, //订单跟踪

  ]
});