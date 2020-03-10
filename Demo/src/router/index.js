import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../view/Home.vue'),
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('../view/City.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../view/Search.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('../view/Details.vue')
    },
    {
      path: '/getSightImgs/:site',
      name: 'getSightImgs',
      component: () => import('../view/SightImgs.vue')
    },
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
