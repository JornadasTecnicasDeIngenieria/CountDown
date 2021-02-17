export { default as Content } from '../../components/Content.vue'
export { default as CountDown } from '../../components/CountDown.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyContent = import('../../components/Content.vue' /* webpackChunkName: "components/content" */).then(c => c.default || c)
export const LazyCountDown = import('../../components/CountDown.vue' /* webpackChunkName: "components/count-down" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
