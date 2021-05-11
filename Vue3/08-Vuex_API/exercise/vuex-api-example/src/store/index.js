import { createStore } from "vuex";
import apiGetphotoRequest from '../api'
export default createStore({
  state: {
    photoArr: [],
    idx: 0,
    isLoad: false,
  },
  actions: {
    // action 後的資料 commit 到 mutation，先將他解構出來
  async handInit({commit})
    {
      try{
        // 等到抓回  apiGetphotoRequest 再
        const res = await apiGetphotoRequest()
        commit('init',res.data)
        return res.data
      } catch {
        console.error(error.response.data)
      }
    },
    // 解構 {commit}}
    handLoadState({commit},bool){
      commit('loadState',bool)
    },
    handAdd({commit}){
      commit('Add')
    },
    handRemove({commit}){
      commit('Remove')
    },

  },
  mutations: {
    init(state,payload){
      // 存圖片arr的地方
      state.photoArr = payload
    },
    loadState(state,bool){
    state.isLoad = bool
    },
    Add(state){
      state.
    }
  },
  getters: {
    isLoad(state) {
      return state.isLoad;
    },
    photoArr(state) {
      return state.photoArr;
    },
    idx(state) {
      return state.idx;
    },
  },
});
