import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: () => import('@/views/Home.vue'),
  },
  {
    path: "/favorite",
    name: "FavoriteList",
    component: () => import('@/views/FavoriteList.vue'),
  },
  {
    path: "/list",
    name: "list",
    component: () => import('@/views/PokemonList.vue'),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import('@/views/NotFound.vue'),
  },
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
