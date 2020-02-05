import * as TYPES from './types'

const namespaced = true

const state = () => ({
  profile: null
})

const actions = {
}

const mutations = {
  [TYPES.SET_PROFILE](state, payload) {
    state.profile = payload
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
