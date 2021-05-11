import { createStore } from "vuex";
import apiGetphotoRequest from '../api'
import axios from 'axios'
export default createStore({
  state: {
    photoArr: [],
    idx: 0,
    isLoad: false,
  },
  actions: {
    // action 後的資料 commit 到 mutation，先將他解構出來
    handInit({commit})
    {
      // res => return promise 物件
      const res = apiGetphotoRequest()
      res.then(response=>{
        commit('init',response.data)
        return response.data
      })
    
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
