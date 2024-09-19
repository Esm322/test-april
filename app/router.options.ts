import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  routes: () => [
    {
      name: 'Main',
      path: '/',
      component: () => import('~/pages/MainPage.vue')
    },
    // {
    //   name: 'Post',
    //   path: '/post/:id',
    //   component: () => import('~/pages/PostPage.vue')
    // },
  ]
}
