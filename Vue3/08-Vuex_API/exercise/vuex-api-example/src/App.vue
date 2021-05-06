<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import ImageBox from "./components/ImageBox/index.vue";
import LoadingBar from "./components/LoadingBar.vue";
export default {
  components: {
    LoadingBar,
    ImageBox,
  },
  setup() {
    const store = useStore();

       const hangImgLoad = (ImageArr) => {
              let i = 0;
              ImageArr.forEach((image) => {
                // 建構一個 Image 實體
                // 相當於 document.createElement('img')。
                const newImg = new Image();
                newImg.src = image.url;
                // 當newImg載入完成後，i++
                newImg.onload = () => {
                  i++;
                  // 若 i++ 等於 API的Array長度，即圖片載入完成
                  if (ImageArr.length === i) {
                    console.log("finish");
                    // reactive物件 ->imgArr.arr會等於載入後的ImageArr
                    imgArr.arr = ImageArr;
                    // 更正load狀態
                    store.dispatch('handLoadState', i ===ImageArr.length)
                  }
                };
              });
            }

    const init = () => {
      // 回傳一個 promise 給 dispatch (若為 promise 則 return)
      // res => res.data
      store.dispatch().then((res)=>{
      handImgLoad(res)
      })

    };

    // 在Mounted的階段抓取api
    onMounted(() => {
      init();
    });

    return {};
  },
};
</script>

<template>
  <div id="app">
    <LoadingBar />
    <ImageBox />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: slategray;
}
</style>
