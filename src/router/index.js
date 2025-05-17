import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
     {
     path: '/hojaDevidaH1',
     name: 'hojadevidaH1',
     component: () => import('../components/modules/hojadevida/components/hojaDeVidaH1.vue'),
    },

    {
      path: '/hojaDeVidaH2',
      name: 'hojaDeVidaH2',
      component: () => import('../components/modules/hojadevida/components/hojaDeVidaH2.vue'),
     },

     {
      path: '/hojaDeVidaH3',
      name: 'hojaDeVidaH3',
      component: () => import('../components/modules/hojadevida/components/hojaDeVidaH3.vue'),
     },

    {
      path: '/ListadeTareas',
      name: 'ListadeTareas',
      component: () => import('../components/modules/listaDetareas/modules/ListaDeTareas.vue'),
     },
  ],
})

export default router;