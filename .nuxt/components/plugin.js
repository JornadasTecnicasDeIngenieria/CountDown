import Vue from 'vue'

const components = {
  Content: () => import('../../components/Content.vue' /* webpackChunkName: "components/content" */).then(c => c.default || c),
  Content: () => import('../../components/Content.vue' /* webpackChunkName: "components/content" */).then(c => c.default || c),
  CountDown: () => import('../../components/CountDown.vue' /* webpackChunkName: "components/count-down" */).then(c => c.default || c),
  CountDown: () => import('../../components/CountDown.vue' /* webpackChunkName: "components/count-down" */).then(c => c.default || c),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
