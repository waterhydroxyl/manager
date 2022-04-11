import Vuex from 'vuex';
import Vue from 'vue';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

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

  plugins: [vuexLocal.plugin],
});

export default store;
