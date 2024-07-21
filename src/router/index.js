import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: () => import('../views/Timeline.vue')
    }
    ,
    {
      path: '/overview',
      name: 'overview',
      component: () => import('../views/Overview.vue')
    }
    ,
    {
      path: '/FAQs',
      name: 'FAQs',
      component: () => import('../views/FAQs.vue')
    }
    ,
    {
      path: '/Contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    }
    ,
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    }
  ]
})

export default router
