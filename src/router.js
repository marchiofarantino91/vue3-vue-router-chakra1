import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import Home from './views/Home.vue'

export default () =>
  createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('./views/About.vue'),
      },
    ],
  })
