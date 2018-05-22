import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '../pages/index'
import detailPage from '../pages/detail'
import orderPage from '../pages/orderList'
import analysisPage from '../pages/detail/analysis'
import countPage from '../pages/detail/count'
import forecastPage from '../pages/detail/forecast'
import publishPage from '../pages/detail/publish'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: indexPage
    },
    {
      path: '/orderList',
      component: orderPage
    },
    {
      path: '/detail',
      component: detailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: analysisPage
        },
        {
          path: 'count',
          component: countPage
        },
        {
          path: 'forecast',
          component: forecastPage
        },
        {
          path: 'publish',
          component: publishPage
        }
      ]
    }
  ]
})
