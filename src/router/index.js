import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    

    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/',
      component: () => import('../components/LayoutPrivado.vue'),
      children: [
        {
          path: '/hojaDeVidaH1',
          name: 'hojaDeVidaH1',
          component: () => import('../components/modules/hojadevida/modules/hojaDeVidaH1.vue')
        },
        {
          path: '/hojaDeVidaH2',
          name: 'hojaDeVidaH2',
          component: () => import('../components/modules/hojadevida/modules/hojaDeVidaH2.vue')
        },
        {
          path: '/hojaDeVidaH3',
          name: 'hojaDeVidaH3',
          component: () => import('../components/modules/hojadevida/modules/hojaDeVidaH3.vue')
        },
        {
          path: '/ListadeTareas',
          name: 'ListadeTareas',
          component: () => import('../components/modules/listaDetareas/modules/ListaDeTareas.vue')
        }
      ]
    },
    // ✅ Ruta independiente sin layout
    {
      path: '/HojaDeVidaCompleta',
      name: 'HojaDeVidaCompleta',
      component: () => import('../views/HojaDeVidaCompleta.vue')
    }
  ]
})
export default router;

router.beforeEach((to, from, next) => {
  const autenticado = localStorage.getItem('auth') === 'true'
  const esPublica = to.path === '/login'

  if (!autenticado && !esPublica) {
    next('/login')
  } else {
    next()
  }
})
