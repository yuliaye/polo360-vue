import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '',
      redirect: '/home'
    }
  ]
})

export default router
