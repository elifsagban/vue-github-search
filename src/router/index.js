import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MerhabaDunya from '@/components/MerhabaDunya'
import GitHub from '@/components/GitHub'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GitHub',
      component: GitHub
    },
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/tr',
      name: 'Merhaba',
      component: MerhabaDunya
    },

  ]
})
