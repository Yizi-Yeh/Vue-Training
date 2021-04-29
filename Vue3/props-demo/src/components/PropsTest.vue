<template>
<!-- props是個物件，物件中的msg -->
  <h1>{{props.msg}}</h1>
</template>

<script>
export default {
    props:['msg'],
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