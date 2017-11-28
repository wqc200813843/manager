import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/personManager',
      name: 'personManager',
      component: resolve => resolve(require('@/view/PersonManager/index'))
    }
  ]
})
