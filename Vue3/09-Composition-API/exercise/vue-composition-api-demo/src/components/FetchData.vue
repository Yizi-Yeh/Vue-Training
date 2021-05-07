<script>
import { useFetch } from '../composition-api'
export default {
  setup() {
    // "https://vue-lessons-api.herokuapp.com/photo/list"
    const {isLoad,FetchData,errMsg} = useFetch("https://vue-lessons-api.herokuapp.com/photo/list/")

    return {isLoad,FetchData,errMsg};
  },
};
</script>

<template>
  <div>
    
    <img v-if="!isLoad" class="loading" src="../assets/load.gif" alt="" />
    <h1 v-if="errMsg">ERROR:{{errMsg}}</h1>
    <div v-if="isLoad" class="imgBlock">
      <img v-for="item in FetchData.data" :key="item.url" :src="item.url" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: block;
  width: 50px;
  margin: 0 auto;
}
</style>
