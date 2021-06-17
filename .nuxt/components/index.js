import { wrapFunctional } from './utils'

export { default as About } from '../..\\components\\About.vue'
export { default as Barbers } from '../..\\components\\Barbers.vue'
export { default as Contact } from '../..\\components\\Contact.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Gallery } from '../..\\components\\Gallery.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Services } from '../..\\components\\Services.vue'
export { default as Video } from '../..\\components\\Video.vue'

export const LazyAbout = import('../..\\components\\About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const LazyBarbers = import('../..\\components\\Barbers.vue' /* webpackChunkName: "components/barbers" */).then(c => wrapFunctional(c.default || c))
export const LazyContact = import('../..\\components\\Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyGallery = import('../..\\components\\Gallery.vue' /* webpackChunkName: "components/gallery" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyServices = import('../..\\components\\Services.vue' /* webpackChunkName: "components/services" */).then(c => wrapFunctional(c.default || c))
export const LazyVideo = import('../..\\components\\Video.vue' /* webpackChunkName: "components/video" */).then(c => wrapFunctional(c.default || c))
