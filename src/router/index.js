import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index'
import M_daynews from "../components/m_page/m_daynews"

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
      path: "/M_daynews",
      component: M_daynews
    }
  ]
})
