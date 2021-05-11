import axios from 'axios'

// axios.create
const photoRequest = axios.create({
    //create 物件，會變成axios實體
    baseURL:"https://vue-lessons-api.herokuapp.com/"
})

export const getPhotoRequest = () => {

    photoRequest.get("/photo/list")
}