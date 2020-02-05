import Vue from 'vue'
import * as TYPES from './types'

const namespaced = true

const state = () => ({
  films: []
})

const actions = {
  async getFilms ({ commit }, data) {
    try {
      const response = await Vue.axios.get('/posts')
      if (response.status === 200) {
        commit('SET_FILMS', response.data)
      }

      return response.data
    } catch (e) {
      return e
    }
  }
}

const mutations = {
  [TYPES.SET_FILMS](state, payload) {
    state.films = payload
  }
}

const getters = {
}

export default {
  namespaced,
  state,
  actions,
  mutations,
  getters
}
