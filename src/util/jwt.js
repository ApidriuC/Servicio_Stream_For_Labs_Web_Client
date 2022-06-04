import jwt from 'jsonwebtoken'
import { queryVault } from '../services/vaultService'

export const verifyAdminToken = async (token) => {
    const { data: {data}} =  await queryVault("/v1/kv/rsa")
    return jwt.verify(token,  data.public)
}
