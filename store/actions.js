import setCookie from 'set-cookie-parser'

export default {
  async nuxtServerInit ({ commit, dispatch }, { req }) {
    const cookies = setCookie.parse(setCookie.splitCookiesString(req.headers.cookie))[0]
    const email = cookies.email

    if (email && email !== undefined) {
      commit('auth/SET_AUTH', { auth: true }, { root: true })
      commit('user/SET_PROFILE', { email: email.replace('%40', '@') }, { root: true })
    }
  }
}
