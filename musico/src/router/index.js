import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Events from '../views/Events'
import Artists from '../views/Artists'
import AllArtists from '../views/AllArtists'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/artists',
    name: 'Artists',
    component: Artists
  },
  {
    path: '/allartists',
    name: 'AllArtists',
    component: AllArtists
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router