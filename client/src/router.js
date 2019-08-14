import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import content from './views/content.vue'
import sidebar from './views/sidebar.vue'
import browview from './views/browview.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/components',
      name: 'home',
      component: Home
    },
    {
      path: '/components',
      components:
      {default:content,sidebar:sidebar,browview:browview}
    },
    {
      path: '/browview',
      component:browview
    },
    {
      path: '/about',
      name: 'about',
      components:
      {default:About,sidebar:()=>import('./views/Home.vue')}
    }
  ]
})
