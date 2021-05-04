import Vue from 'vue'
import App from './App.vue'
// 解構 numPrice function
import {numPrice} from "@/lib/tools.js"

Vue.config.productionTip = false

const app = create(App)
//封裝 focus 方法
//透過 directive 方法，自定義模板語法
// directive("模板語法名稱",{掛在的生命週期})
app.directive("focus",{
  // 掛載的生命週期
  // 回傳掛載的dom
  mounted(el){
    // focus 方法
    el.focus()
    console.log(el)
  }
})

app.dircetive("price",{
  // mounted -> render 後會執行
  // 第一個參數為回傳的el 
  // 第二個為傳回來的值(回傳一個 object value:123123)
  mounted(el,binding){
    const p = numPrice(binding.value)
    el.innerHTML = p
    console.log(binding.value)
  },
  // 當傳入值被改變時，會被觸發
  updated(el,binding){
  // 每次資料改變時需要同步他，故使用 updated 生命週期
    const p = numPrice(binding.value)
    el.innerHTML = p
  }
})
app.mount("#app")