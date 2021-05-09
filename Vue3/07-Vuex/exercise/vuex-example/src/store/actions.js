export default {
    actions: {
        handMenuOpen(context){
          const bool = !context.state.isOpen
          // context中的commit方法
          // bool作為第二個參數丟入
          context.commit('handOpenState',bool)
        }
      },
}