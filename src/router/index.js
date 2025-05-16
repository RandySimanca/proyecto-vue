import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
     {
     path: '/Contador',
     name: 'Contador',
     component: () => import('../components/modules/contador/components/Contador.vue'),
    },

    {
      path: '/ListadeTareas',
      name: 'ListadeTareas',
      component: () => import('../components/modules/listaDetareas/listaDeTareas/ListaDeTareas.vue'),
     },
  ],
})

export default router
