import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue'
import Home from '@/pages/Home.vue'
import { tools } from '@/core/registry'

const toolRoutes = tools.map(t => ({
  path: t.route,
  component: t.view,
  meta: {
    title: t.name
  }
}))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        ...toolRoutes
      ]
    }
  ]
})

export default router

