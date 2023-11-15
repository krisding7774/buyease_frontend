import { createRouter, createWebHistory } from 'vue-router'
import NavBarLayout from '@/views/NavBarLayout.vue'

const routes = [
  {
    path: '/',
    name: 'NavBar',
    component: () => import("../views/NavBarLayout.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
