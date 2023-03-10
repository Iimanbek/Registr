import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const user = localStorage.getItem('user') || null 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/registration',
      name: 'registration',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Registration.vue')
    },
    {
      path: '/login',
      name: 'login',

      component: () => import('../views/LogInView.vue')
    },
    {
      path: '/example',
      name:'example',
      component: () => import('../views/Example.vue')
    },
    {
      path: '/private',
      name: 'Private',
      component: () => import('../views/Private.vue'),
      redirect: user ? '' : '/login'
    },
    {
      path: '/comapnies',
      name: 'Companies',
      component: () => import('../components/variants/Company.vue'),
      redirect: user ? '' : '/login'
    },
    {
      path: '/deals',
      name: 'Deals',
      component: () => import('../components/variants/Deals.vue'),
      redirect: user ? '' : '/login'
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import('../components/variants/Contacts.vue'),
      redirect: user ? '' : '/login'
    }
  ]
})

export default router
