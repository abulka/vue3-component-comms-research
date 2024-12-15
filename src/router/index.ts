import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExampleOne from '@/views/ExampleOne.vue'
import ExampleTwo from '@/views/ExampleTwo.vue'
import PrismDemoAlpha from '@/views/PrismDemoAlpha.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/example1',
      name: 'example1',
      component: ExampleOne,
    },
    {
      path: '/example2',
      name: 'example2',
      component: ExampleTwo,
    },
    {
      path: '/prism-demo',
      name: 'prism-demo',
      component: PrismDemoAlpha,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
