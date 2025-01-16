import axios from "axios"

export const videosApi = axios.create({
    baseURL: "http://localhost:3500"
})

export const buscar = async(url,setVideos) => {
const resp = await videosApi.get(url)
setVideos(resp.videos)
}