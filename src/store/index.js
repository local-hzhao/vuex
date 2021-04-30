import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'zs'
  },
  mutations: {
    // 修改state中的数据
    addState (state) {
      state.name += 1
    }
  },
  actions: {
  },
  modules: {
  }
})
