import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Concerts from '../views/Concerts'
import Artists from '../views/Artists'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/concerts',
    name: 'Concerts',
    component: Concerts
  },
  {
    path: '/artists',
    name: 'Artists',
    component: Artists
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router