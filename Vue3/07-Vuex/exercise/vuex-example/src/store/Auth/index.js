export default {
// 透過 namespaced:true 可在各 module 間做區分
namespaced:true,
  state:{
      token:''
  },
  actions:{
      handSetToken(context,token){
          context.commit('SetToken',token)
      }
  },
  mutations:{
    SetToken(state,token){
        state.token = token
    }
  },
  getters:{
      getToken(state){
          return  state.token
      }
  }
}