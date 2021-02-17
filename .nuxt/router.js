import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9b5d4a7e = () => interopDefault(import('../pages/industrial.vue' /* webpackChunkName: "pages/industrial" */))
const _3c752493 = () => interopDefault(import('../pages/informatica.vue' /* webpackChunkName: "pages/informatica" */))
const _7b97f997 = () => interopDefault(import('../pages/mecanica.vue' /* webpackChunkName: "pages/mecanica" */))
const _1b2f1e27 = () => interopDefault(import('../pages/quimica.vue' /* webpackChunkName: "pages/quimica" */))
const _4153eb8c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/industrial",
    component: _9b5d4a7e,
    name: "industrial"
  }, {
    path: "/informatica",
    component: _3c752493,
    name: "informatica"
  }, {
    path: "/mecanica",
    component: _7b97f997,
    name: "mecanica"
  }, {
    path: "/quimica",
    component: _1b2f1e27,
    name: "quimica"
  }, {
    path: "/",
    component: _4153eb8c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
