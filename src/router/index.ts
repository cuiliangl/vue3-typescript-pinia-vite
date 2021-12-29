import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import Layout from '@/layout'

import NProgress from 'nprogress'

NProgress.configure({
  showSpinner: false
})

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    return {
      top: 0
    }
  }
})

let flag = false

router.beforeEach(async to => {
  NProgress.start()
  document.title = to.meta.title

  const path = '/test/child'

  if (to.fullPath === path && !flag) {
    const loadView = (path: string) => () => import(`../views${path}/index.vue`)

    router.addRoute({
      path: '/test',
      name: 'test',
      component: Layout,
      children: [
        {
          path: 'child',
          name: 'child',
          component: loadView(path),
          meta: {
            title: 'test-child'
          }
        }
      ]
    })

    flag = true

    return to.fullPath
  }

  return true
})

router.afterEach(() => {
  NProgress.done()
})

export default router
