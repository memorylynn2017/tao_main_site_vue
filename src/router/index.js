import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index'
import M_daynews from "../components/m_page/m_daynews"
import M_myhome from "../components/m_page/m_myhome"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: "/M_daynews", //每日新款
      component: M_daynews
    },
    {
      path: "/myhome",  //我的
      component: M_myhome
    }
  ]
})
