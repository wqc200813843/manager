import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/personManager'
    },
    {
      path: '/personManager',
      name: 'personManager',
      component: resolve => resolve(require('@/view/PersonManager/index'))
    },
    {
      path: '/taskManager',
      name: 'taskManager',
      component: resolve => resolve(require('@/view/TaskManager/index'))
    }
  ]
})
