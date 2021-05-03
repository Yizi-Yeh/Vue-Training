import { createStore } from "vuex";
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
      axios.get('https://vue-lessons-api.heroku.app.com/photo/list').then(res=>{
        commit('init',res.data)
      })

    }
  },
  mutations: {
    init(state,payload){
      state.photoArr = payload
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
