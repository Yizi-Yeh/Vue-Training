import { createStore } from "vuex";

export default createStore({
  state: {
    isOpen:false
  },
  actions: {
    handMenuOpen(context){
      // context中的commit方法
      context.commit('handOpenState')
    }
  },
  mutations: {
    handOpenState(state){
      state.isOpen = true
    }
  },
  // 透過getters 取得 state
  // 先在getters處理資料
  getters: {
    isOpen(state){
      return state.isOpen
    }
  },
});
