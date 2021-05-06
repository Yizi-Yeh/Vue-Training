import {ref, reactive,toRefs,onMounted,onUnmounted} from 'vue'

export function MousePosition(){

    // dom 元素渲染完成後監聽滑鼠事件
    // function 也可使用生命週期

    // const x = ref(0)
    // const y = ref(0)

    const pos = reactive({x:0,y:0})

    const name = ref("yizi")

    const posUpdate = (e)=>{
        pos.x = e.pageX
        pos.y = e.pageY
    }

    onMounted(()=>{
        window.addEventListener('mousemove',posUpdate)
    })

    onUnmounted(()=>{
        window.removeEventListener('mousemove',posUpdate)
    })

    // 使用展開運算子
    return {
        ...toRefs(pos),
        name
    }
   
}