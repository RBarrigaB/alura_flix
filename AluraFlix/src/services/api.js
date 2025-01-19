import axios from "axios"

const videosApi = axios.create({
    baseURL: "http://localhost:3500"
})

export const findAll = async(endpoint) => {
    try {
        const resp = await videosApi.get(`/${endpoint}`)
        return resp.data
    } catch (e) {
        console.error("Error al obtener  "+endpoint,e)
        throw new Error("No se pudieron obtener "+endpoint)
    }
}

export const findById = async(endpoint, videoId) => {
    try {
        const resp = await videosApi.get(`/${endpoint}/${videoId}`)
        return resp.data
    } catch (e) {
        console.error("Error al obtener "+endpoint,e)
        throw new Error("No se pudieron obtener "+endpoint)
    }
}

export const create = async (endpoint,video) => {
    try {
      const resp = await videosApi.post(`/${endpoint}`, video);
      return resp.data;
    } catch (error) {
      console.error("Error al crear "+endpoint, error);
      throw new Error("Error al crear "+endpoint)
    }
  };

  export const update = async (endpoint,videoId, updatedVideo) => {
    try {
      const resp = await videosApi.put(`/${endpoint}/${videoId}`, updatedVideo);
      return resp.data;
    } catch (error) {
        console.error("Error al actualizar "+endpoint, error);
        throw new Error("Error al actualizar "+endpoint);
    }
  };
  
  export const eliminar = async (endpoint, videoId) => {
    try {
      const resp = await videosApi.delete(`/${endpoint}/${videoId}`);
      return resp.data;
    } catch (error) {
      console.error("Error al eliminar "+endpoint, error);
      throw new Error("Error al eliminar "+endpoint)
    }
  };
  
  export default videosApi;

