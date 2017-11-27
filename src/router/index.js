import Vue from "vue";
import Router from "vue-router";
//首页
import M_index from "../components/index/index";
import M_index2 from "../components/index/index2";
//M_index_content
// （1）、每日新款
import M_daynews from "../components/m_page/m_daynews";
// （2）、优质商家
// ...
// （3）、TOP100
// ...
// （4）、6块6特批
// ...

//M_index_Product
// try a try
import M_productypes from "../components/m_page/m_productypes";
// （1）、girlProduct
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



import M_search from "../components/m_page/m_search";
import M_find from "../components/m_page/m_find";
import M_cart from "../components/m_page/m_cart";
import M_myhome from "../components/m_page/m_myhome";
//M_myhome_content
// （1）、 我的钱包
import M_mypurse from "../components/m_page/m_mypurse";
// （2）、 收藏商品
// ...
// （3）、 店铺关注
// ...
// （4）、 关注上新
// ...
// （5）、 我的足迹
// ...
// （6）、 快速补货
// ...
// （7）、 下架提醒
// ...

//M_myhome_order
// （1）、 待付款
// ...
// （2）、 待收货
// ...
// （3）、 已完成
// ...
// （4）、 已取消





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
    // 主页_产品分类列表
    {
      path: "/M_productypes", //产品分类
      component: M_productypes
    },
    //主页_每日新款列表
    {
      path: "/M_daynews", //每日新款
      component: M_daynews
    },
    {
      path: "/search", //搜索页面
      component: M_search
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
      path: "/myhome", //我的
      component: M_myhome
    },
    {
      path: "/mypurse", //我的钱包
      component: M_mypurse
    }
  ]
});
