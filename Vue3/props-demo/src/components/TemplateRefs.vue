<template>
  <input ref="textInput" type="text" id="textVar" placeholder="input text">
</template>

<script>
import {onMounted,ref} from 'vue'
export default {
setup(){

    // 宣告的變數需和 ref屬性名稱相同
    // 透過 ref方法 綁定在 DOM元素身上，透過此方式取得
    const textInput = ref(null)
    onMounted(()=>{
    // document.getElementById('textBar').focus();
    textInput.value.facus()
    })
    // 宣告後的變數 return
    return{textInput}
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