import axios from 'axios'
import { getLocalSesion } from '../util/auth'


const multipartHeader = {
    'Content-Type' : 'multipart/form-data'
}

const getAxiosInstance =  () => {
    return axios.create({
        baseURL: `${process.env.REACT_APP_GATEWAY_SERVICE_BASE_URL}/api`
    });   
}


export const upload = async (formData, onUploadProgress) => {
    const { token } = await  getLocalSesion();
    console.log(token);
    const axiosInstance = await getAxiosInstance()
    return axiosInstance.post('/file', formData, 
    { headers: {...multipartHeader, 'Authorization': `Bearer ${token}` },
    onUploadProgress})
}

export const download = async (fileId) => {
    const { token } = await  getLocalSesion();
    const axiosInstance = await getAxiosInstance()
    return axiosInstance.get(`/file/${fileId}`, 
        { headers: {'Authorization': `Bearer ${token}` },
        responseType: 'blob'
    })
}

export const getFiles = async () => {
    const { token } = await  getLocalSesion();
    const axiosInstance = await getAxiosInstance()
    return axiosInstance.get('/file', 
    { headers: {'Authorization': `Bearer ${token}`, 'Content-Type' : 'application/json' }})
}

export const getStorageUsed = async () => {
    const { token } = await  getLocalSesion();
    const axiosInstance = await getAxiosInstance()
    return axiosInstance.get('/file/storage', 
    { headers: {'Authorization': `Bearer ${token}`, 'Content-Type' : 'application/json' }})
}

export const getMaxStorageAvailable = async () => {
    const { token } = await  getLocalSesion();
    const axiosInstance = await getAxiosInstance()
    return axiosInstance.get('/file/max-storage', 
    { headers: {'Authorization': `Bearer ${token}`, 'Content-Type' : 'application/json' }})
}

export const removeFiles = async (files, isVideo=false) => {
    const { token } = await  getLocalSesion();
    const axiosInstance = await getAxiosInstance()
    return axiosInstance.delete(`${isVideo ? '/video': '/file'}`,
    { data: {files},
      headers: {'Authorization': `Bearer ${token}`, 'Content-Type' : 'application/json' }
    })
}