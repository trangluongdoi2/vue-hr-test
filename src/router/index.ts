import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Count from '../views/Count.vue' 
import Home from '../views/Home.vue' 

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/count',
    name: 'count',
    component: Count
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
