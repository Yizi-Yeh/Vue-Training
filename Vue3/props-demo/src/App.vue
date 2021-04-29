<template>
<PropsTest :msg="data"/>
</template>

<script>
import PropsTest from "@/components/PropsTest.vue"

export default {
components:{
  PropsTest
},
setup(){
  const data = ref("hello")
  return {
    data
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
