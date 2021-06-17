import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  About: () => import('../..\\components\\About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c)),
  Barbers: () => import('../..\\components\\Barbers.vue' /* webpackChunkName: "components/barbers" */).then(c => wrapFunctional(c.default || c)),
  Contact: () => import('../..\\components\\Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Gallery: () => import('../..\\components\\Gallery.vue' /* webpackChunkName: "components/gallery" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Services: () => import('../..\\components\\Services.vue' /* webpackChunkName: "components/services" */).then(c => wrapFunctional(c.default || c)),
  Video: () => import('../..\\components\\Video.vue' /* webpackChunkName: "components/video" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
