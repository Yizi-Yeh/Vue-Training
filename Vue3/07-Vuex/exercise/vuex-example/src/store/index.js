import { createStore } from "vuex";
import state  from './state.js'
import actions from './actions.js'
import mutations from './mutations'
import getters from './getters'

export default createStore({
  // 透過解構方式放到createStore中
  state,
  actions,
  mutations,
  getters
  // 透過getters 取得 state
  // 先在getters處理資料
});
