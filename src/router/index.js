import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => console.log(err))
}

const home = () => import('views/home/home')
const sort = () => import('views/sort/sort')
const cart = () => import('views/cart/cart')
const mine = () => import('views/mine/mine')

const routes = [{
    path : '',
    redirect : '/home'
},{
    name : 'home',
    component : home,
    path : '/home'
},{
    name : 'sort',
    component : sort,
    path : '/sort'
},{
    name : 'cart',
    component : cart,
    path : '/cart'
},{
    name : 'mine',
    component : mine,
    path : '/mine'
}]

const router = new VueRouter({
    routes,
    mode : 'history'
})

export default router