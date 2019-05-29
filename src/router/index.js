import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '@/views/login/login.vue'

import children from './childrenRouter.js'
import index from '@/views/index/index.vue'


Vue.use(VueRouter)
const routes = [{

    name: 'login',
    path: '*',
    component: login,
  },
  {
    name: 'index',
    path: '/index',
    component:index,
    children,
  },
]


const router = new VueRouter({
  mode: 'history',
  routes,
})
export default router
