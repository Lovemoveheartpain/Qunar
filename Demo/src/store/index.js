import Vue from 'vue'
import Vuex from 'vuex'
import city from './city';
import history from './history';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    init: [],
    a:{
      name:'李智杰',
      age:'18'
    }
  },
  mutations: {
    addInitList(state,data){
      state.init = data;
    }
  },
  actions: {
    initList({ commit }, data) {
      commit("addInitList", data)
    }
  },
  modules: {
    city,
    history
  }
})
