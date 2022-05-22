import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Promise from 'core-js/features/promise'

const mainurl = 'https://www.fakerestapi.com'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieDetail: [],
  },
  getters: {
  },
  mutations: {
    SAVE_MOVIEDETAIL(state, movieDetail){
      state.movieDetail = movieDetail
    }
  },
  actions: {
    loadMovieDetail({commit}){
      return new Promise((resolve) => {
        axios({ url: `${mainurl}/datasets/api/v1/movie-details-dataset.json`, method: 'GET' })
          .then((resp) => {
            commit("SAVE_MOVIEDETAIL", resp)
            resolve(resp)
          })
      })
    }
  },
  modules: {
  }
})
