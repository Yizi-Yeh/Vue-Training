import {ref} from 'vue'

export function StateAdd(){
    const idx = ref(0)

    const addState = () =>{
        idx.value++
    }
    return { idx, addState }
}