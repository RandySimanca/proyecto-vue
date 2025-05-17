import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
     {
     path: '/hojaDeVidaH1',
     name: 'hojadeVidaH1',
     component: () => import('../components/modules/hojadevida/modules/hojaDeVidaH1.vue'),
    },

    {
      path: '/hojaDeVidaH2',
      name: 'hojaDeVidaH2',
      component: () => import('../components/modules/hojadevida/modules/hojaDeVidaH2.vue'),
     },

     {
      path: '/hojaDeVidaH3',
      name: 'hojaDeVidaH3',
      component: () => import('../components/modules/hojadevida/modules/hojaDeVidaH3.vue'),
     },

    {
      path: '/ListadeTareas',
      name: 'ListadeTareas',
      component: () => import('../components/modules/listaDetareas/modules/ListaDeTareas.vue'),
     },
  ],
})

export default router;