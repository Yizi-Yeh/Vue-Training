import axios from 'axios'

const photoRequest = axios.create({
    // axios.create 物件，會變成axios實體
    // return promise 物件
    baseURL:"https://vue-lessons-api.herokuapp.com/"
})

export const getPhotoRequest = () => {
    photoRequest.post("/photo/list",{data:''})
}

// axios 攔截器
photoRequest.interceptors.request.use(
        // 送資料前
        // 先做第一層檢查
    (config) => {
        if(config.data === "") throw {error:'資料不得為空'}
    return config;
  },(error) => {
    return Promise.reject(error);
  });


  photoRequest.interceptors.response.use(
    (response) => {
        // 拿資料前
        // 再做第二層檢查
    console.log(response)
    return response;
  },(error)  =>{
    return Promise.reject(error);
  });