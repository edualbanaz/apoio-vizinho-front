import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Login,
    },
    // {
    //   path: '/about',
    //   component: () => import('../components/HelloWorld.vue'),
    // },
    // {
    //   path: '/contact',
    //   component: () => import('../components/HelloWorld.vue'),
    // },
  ],
})
