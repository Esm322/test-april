import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  routes: () => [
    {
      name: 'Main',
      path: '/',
      component: () => import('~/pages/MainPage.vue')
    },
    {
      name: 'Item',
      path: '/item/:id',
      component: () => import('~/pages/ItemPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('~/pages/NotFoundPage.vue'),
    },
  ]
}
