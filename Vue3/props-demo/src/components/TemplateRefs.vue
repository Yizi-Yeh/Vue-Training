<template>
<!-- directive 定義後，回到 DOM 元素身上 v-*** -->
  <input  v-model="num" v-focus ref="textInput" type="text" id="textVar" placeholder="input text"/>
  <!-- v-price 語法，自動加上千分為符號 -->
  <h1 v-price="num"></h1>
</template>

<script>
import {onMounted,ref} from 'vue'
export default {
setup(){

    // 宣告的變數需和 ref屬性名稱相同
    // 透過 ref方法 綁定在 DOM元素身上，透過此方式取得
    // const textInput = ref(null)
    const num = ref(2321312)
    onMounted(()=>{
    // document.getElementById('textBar').focus();
    textInput.value.facus()
    })
    // 宣告後的變數 return
    return{num}
}
}
</script>

<style scoped>
input{
    display: block;
    width: 100%;
    height: 30px;
    background-color: beige;
    padding-left: 10px;
}
</style>