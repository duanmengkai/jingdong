import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Car from './views/car.vue'
import User from './views/user.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    }
  ]
})
