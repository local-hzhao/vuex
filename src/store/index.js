import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'zs',
    Number: 0,
    vuexx: 'ls',
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  mutations: {
    // 修改state中的数据
    addState (state) {
      state.name += 1
    },
    addMapState (state, topLoad) {
      state.Number += topLoad
    }
  },
  actions: {
    addAsync (context, params) {
      setTimeout(() => {
        context.commit('addMapState', params)
      }, 1000)
    }
  },
  getters: {
    filterList: state => state.list.filter(item => item > 5)
  },
  modules: {
    // filter: function (state) {
    //   return state.list.filter(item => item > 5)
    // }
    // filter: state => state.list.filter(item => item > 5)
  }
})
