import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index'
import Index2 from '../components/index/index2'
import Search from '../components/m_page/m_search'
import M_daynews from "../components/m_page/m_daynews"
import M_find from "../components/m_page/m_find"
import M_cart from "../components/m_page/m_cart"
import M_myhome from "../components/m_page/m_myhome"

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
      component: Search
    },
    {
      path: "/M_daynews", //每日新款
      component: M_daynews
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
