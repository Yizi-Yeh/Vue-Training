<template>
<!-- props是個物件，物件中的msg -->
  <h1>{{props.msg}}</h1>
</template>

<script>
export default {
    // 傳入 props 時，不建議以 array 方式傳入（未能明確告知型別）
    props:{
        msg:String,
    },
    // props必須透過 setup 函式回傳
    setup(props){
        console.log(props)
        return{
            props
        }
    }
}
</script>

<style>
h1{
    color:bisque
}
</style>