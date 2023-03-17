import { createRouter, createWebHistory } from 'vue-router'

import LoginWiew from "@/views/LoginWiew.vue";

const routes = [
  {
    path: '/login',
    component: LoginWiew
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
