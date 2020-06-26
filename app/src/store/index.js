import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rootPath: ''
  },
  mutations: {
    setRootPath(state, payload) {
      state.rootPath = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
