import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/HomePage.vue'
import Cart from './views/ShoppingCart.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
  ],
})
