import Vue from 'vue'
import Router from 'vue-router'

import Cnav from './views/Cnav.vue'
import Browview from './views/Browview.vue'
import Ccontent from './views/Ccontent.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/components',
    },
    {
      path: '/components',
      components:
      {default:Cnav,Ccontent:Ccontent}
    },
    {
      path: '/browview',
      component:Browview
    }
  ]
})
