import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import movieDetailView from '../views/MovieDetailsView.vue'
import InfoMovie from '../components/movieDetail/InfoMovie.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
