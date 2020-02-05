import Vue from 'vue'

import * as TYPES from './types'

const namespaced = true

const state = () => ({
  auth: false
})

const actions = {
  signIn ({ commit }, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Vue.$cookies.set('email', data.email)
        commit('SET_AUTH', true)
        commit('user/SET_PROFILE', data, { root: true })

        const response = { success: true }
        return resolve(response)
      }, 1000)
    })
  }
}

const mutations = {
  [TYPES.SET_AUTH](state, payload) {
    state.auth = payload
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
