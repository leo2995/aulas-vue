import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import( '../views/About.vue')
    }
  },
  {
    path: '/maisinformacoes',
    name: 'Informacoes',
    component: function () {
      return import( '../views/MaisInformacoes.vue')
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history' //remover # da raiz do router do projeto
})

export default router
