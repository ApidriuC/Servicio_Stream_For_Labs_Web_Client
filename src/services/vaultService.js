import axios from 'axios'

export const queryVault = (uri) => {
  const TOKEN = process.env.REACT_APP_VAULT_TOKEN
  const HOST = process.env.REACT_APP_VAULT_HOST

  return  axios.get(`${HOST}${uri}`, { headers: {
    'Authorization': `Bearer ${TOKEN}`,
  }})
}

export const getGoogleKeys = () => {
  return queryVault(process.env.REACT_APP_VAULT_SECRET_GOOGLE_URI)
}