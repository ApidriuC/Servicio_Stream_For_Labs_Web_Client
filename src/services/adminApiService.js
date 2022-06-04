import axios from 'axios'
import { getLocalSesion } from '../util/auth'

const headers = {
    'Content-Type' : 'application/json'
}

const getAxiosInstance =  () => {
    return axios.create({
        baseURL: `${process.env.REACT_APP_GATEWAY_SERVICE_BASE_URL}/api`
    });   
}


export const login = async (username, password) => {
    const axiosInstance = await getAxiosInstance()
    return axiosInstance.post('/admin/login', { username, password }, { headers })
}

export const getConfig = async () => {
    const { token } = await  getLocalSesion();
    const axiosInstance = await getAxiosInstance()
    return axiosInstance.get('/admin', { headers: { 'Authorization': `Bearer ${token}` }})
}

export const editConfig = async (value, configId) => {
    const { token } = await  getLocalSesion();
    const axiosInstance = await getAxiosInstance()
    return axiosInstance.put(`/admin/${configId}`, { default:value }, { headers: { 'Authorization': `Bearer ${token}` }})
}