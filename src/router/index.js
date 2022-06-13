import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import movieDetailView from '../views/MovieDetailsView.vue'
import InfoMovie from '../components/movieDetail/InfoMovie.vue'
import ProductView from '../views/ProductView.vue'
import CartView from '../views/CartView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movieDetail',
    name: 'movieDetail',
    component: movieDetailView,
    children: [
      {
        path: '/movieDetail/info',
        name: 'movie.info',
        component: InfoMovie
      }
    ]
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
