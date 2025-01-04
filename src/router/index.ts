import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Count from '../views/Count.vue' 
import App from '../App.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: App
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
