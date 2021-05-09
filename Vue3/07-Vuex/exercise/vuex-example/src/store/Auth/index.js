export default {
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