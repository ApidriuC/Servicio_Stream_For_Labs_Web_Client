import axios from 'axios'
import { getLocalSesion } from '../util/auth'

const getAxiosInstance =  () => {
    return axios.create({
        baseURL: `${process.env.REACT_APP_GATEWAY_SERVICE_BASE_URL}/api`
    });   
}

export const listPhotos = async ()=> {
    const { token } = await  getLocalSesion();
    const axiosInstance = await getAxiosInstance()
    return axiosInstance.get(`/photo`,
    { headers: {'Authorization': `Bearer ${token}`, 'Content-Type' : 'application/json' }})}

export const download = async (photoId) => {
    const { token } = await  getLocalSesion();
    const axiosInstance = await getAxiosInstance()
    return axiosInstance.get(`/photo/download/${photoId}`, 
        { headers: {'Authorization': `Bearer ${token}` },
        responseType: 'blob'
    })
}

export const removePhotos = async (photo, isVideo=false) => {
    const { token } = await  getLocalSesion();
    const axiosInstance = await getAxiosInstance()
    return axiosInstance.delete(`${isVideo ? '/video': '/photo'}`,
    { data: {files: photo},
      headers: {'Authorization': `Bearer ${token}`, 'Content-Type' : 'application/json' }
    })
}