import { createRouter, createWebHistory } from 'vue-router'
import EmptyLayout from '@layouts/EmptyLayout.vue'
import MainLayout from '@layouts/MainLayout.vue'

const routes = [
  { 
    path: '/', 
    name: 'home', 
    component: () => import('../views/HomeView.vue') 
  },
  {
    path: '/dashboard',
    component: MainLayout, 
    children: [
      { 
        path: '',
        name: 'dashboard', 
        component: () => import('../views/DashboardView.vue') 
      },
    ]
  },
  { 
    path: '/:pathMatch(.*)*', 
    component: EmptyLayout,
     children: [
      { 
        path: '', 
        name: 'not-found', 
        component: () => import('../views/NotFoundView.vue') 
      },
  ] }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
