<template>
<!-- function 也可透過屬性傳遞給子元件 -->
<PropsTest :str="str"
    :bool="bool"
    :num="num"
    :arr="arr"
    :obj="obj"
    :handClickFn="handClickFn"
    />
</template>

<script>
import PropsTest from "@/components/PropsTest.vue"
import { reactive, ref } from 'vue'

export default {
components:{
  PropsTest
},
setup(){
  const str = ref('its str')

  const bool = ref(true)

  const num = ref(0)

  const arr = reactive([])

  const obj = reactive({})

  const handClickFn = () =>{

  }

  return {
    str,
    bool,
    num,
    arr,
    obj,
    handClickFn
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
