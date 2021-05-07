// 包裝非同步資料和方法
import axios from 'axios'
import { ref,reactive } from 'vue'

export function Fetchs(API_URL="") {

    const isLoad = ref(false)
    const FetchData = reactive({data:[]})
    const errMsg = ref("")

    axios.get(API_URL)
    .then(res=>{
    //取回 API 後將 Load 狀態改為 true
    isLoad.value = true
    //取回 API 後將資料塞入data
    FetchData.data = res.data
    })
    .catch(error=>{
        // 
        console.dir(error)
        errMsg.value = error.request.statusText
    })

    return {
        isLoad,
        FetchData,
        errMsg
    }
}