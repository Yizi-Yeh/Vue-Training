<template>
<!-- props是個物件，物件中的msg -->
  <h1>{{props.str}}</h1>
</template>

<script>
export default {
    // 傳入 props 時，不建議以 array 方式傳入（未能明確告知型別）
    props:{
        str:{
            type:String,
            default:"its String"
        },
        bool:{
            type:Boolean,
            default:ture
        },
        num:{
            type:Number,
            default:1
        },
        arr:{
            // Array & Obj 在預設型別時，需要透過 return 回傳
            type:Array,
            // 利用函式返回
            default:()=>[]
        },
        obj:{
            // Array & Obj 在預設型別時，需要透過 return 回傳
            type:Object,
            default:()=>({})
        },
        handClickFn:{
            type:Function,
            default:()=>{}
        }
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