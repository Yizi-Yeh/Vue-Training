import {ref,onMounted,onUnmounted} from 'vue'

export function MousePosition(){

    // dom 元素渲染完成後監聽滑鼠事件
    // function 也可使用生命週期

    const x = ref(0)
    const y = ref(0)

    const posUpdate = (e)=>{
        x.value = e.pageX
        y.value = y.pageY
    }

    onMounted(()=>{
        
        window.addEventListener('mousemove',posUpdate)
    })

    onUnmounted(()=>{
        window.removeEventListener('mousemove',posUpdate)
    })

    return {
        x,y
    }
   
}