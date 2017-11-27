import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index'
import Index2 from '../components/index/index2'
import search from '../components/m_page/m_search'  //搜索
import searchpage from '../components/m_page/m_searchpage'  //搜索（尾部）
import M_daynews from "../components/m_page/m_daynews"  //每日新款
import M_seller from "../components/m_page/m_seller"  //优质商家
import M_top100 from "../components/m_page/m_top100"  //TOP100
import M_find from "../components/m_page/m_find"
import M_cart from "../components/m_page/m_cart"
import M_myhome from "../components/m_page/m_myhome"  //我的首页

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',  //首页
      component: Index
    },
    {
      path: '/index', //首页2
      component: Index2
    },
    {
      path: '/search', //搜索页面
      component: search
    },
    {
      path: '/searchpage', //搜索页面（尾部）
      component: searchpage
    },
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
    {
      path: "/find", //发现
      component: M_find
    },
    {
      path: "/cart", //进货车
      component: M_cart
    },
    {
      path: "/myhome",  //我的
      component: M_myhome
    }
  ]
})
