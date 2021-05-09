import { createStore } from "vuex";
import state  from './state.js'
import actions from './actions.js'
import mutations from './mutations'
import getters from './getters'

import Auth from './Auth/index'

export default createStore({
  // 透過解構方式放到createStore中
  state,
  actions,
  mutations,
  getters,
  modules:{
    Auth
  }
});
