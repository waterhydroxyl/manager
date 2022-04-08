import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      loginUser: {},
    };
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.loginUser = userInfo;
    },
  },
  actions: {},
  modules: {},
});

export default store;
