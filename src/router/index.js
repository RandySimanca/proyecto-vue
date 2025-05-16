import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: HomeView,
    }, */
     {
     path: '/Contador',
     name: 'Contador',
     component: () => import('../components/Contador.vue'),
    },

    {
      path: '/ListadeTareas',
      name: 'ListadeTareas',
      component: () => import('../components/ListaDeTareas.vue'),
     },
  ],
})

export default router
