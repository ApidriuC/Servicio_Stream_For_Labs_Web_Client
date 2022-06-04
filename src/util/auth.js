import * as msal from "@azure/msal-browser";
import { verifyAdminToken } from './jwt'
import { queryVault } from '../services/vaultService'


const ADMIN_SESION_KEY = "admin_sesion"

export const scopes = ["user.read"];

// MSA instance for managament sesion with azure
export const msalInstance = async() => {

  const{ data: {data} }= await queryVault(process.env.REACT_APP_VAULT_SECRET_AZURE_URI)
  // Oauth cofig
  const msalConfig = {
    auth: {
      clientId: data.client_id,
      authority:data.authority,
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: false,
    },
  };
  return new msal.PublicClientApplication(msalConfig)
};

/*If homeAccountId is null not exist a sesión of azure
  if not exist a sesion in local storage for admin, not exist admin sesion
  if not there are any sesion, not there is a user authenticated
  Return the role (user or admin) with the token (for will use in Athorization header) of user authenticated
*/
export const getLocalSesion =  async () => {
 return new Promise(async (resolve, reject) => {
   // managem role
   let sesion = {
    role:"USER",
    token:""
  }

  // get sesion for azure
  const instance = await msalInstance()
  const accounts = instance.getAllAccounts()
  if(accounts.length > 0) {
    const { idToken } = await checkAzureToken()
    sesion.token = idToken
    return resolve(sesion)
  }

  // get local sesion for admin
  const adminSesion = await getAdminSesion();
  if(!adminSesion) return resolve(null)

  //then verify admin sesion
  const admin_token = adminSesion["acces_token"]

  verifyAdminToken(admin_token)
  .then(() => {
    sesion.token = admin_token
    sesion.role ="ADMIN"
    return resolve(sesion) 
  })
  .catch(err => {
    console.error(err.message)
    return reject(null)
  })
 })
};

// Get current object account with azure
export const getAccountByHomeAccountId = async () => {
  const instance = await msalInstance()
  const accounts = instance.getAllAccounts()
  const homeIde = accounts[0].homeAccountId;
  return instance.getAccountByHomeId(homeIde);
};

 // Logout
 export const logout = async () => {
  const isAdminSesion = await localStorage.getItem(ADMIN_SESION_KEY)
  
  if(isAdminSesion){
    await removeAdminSesion()
    window.location.replace("/login");
    return
  }

  const currentAccount = await getAccountByHomeAccountId();
  const instance = await msalInstance()
  instance.logout({ account: currentAccount })
};

  // Verify and refresh acces token when expired
export const checkAzureToken = async () => {
    const currentAccount = getAccountByHomeAccountId();
    const silentRequest = {
      scopes,
      account: currentAccount,
      forceRefresh: false,
    };

    const request = {
      scopes,
      loginHint: currentAccount.username, // For v1 endpoints, use upn from idToken claims
    };

    const instance = await msalInstance()
    return  instance
      .acquireTokenSilent(silentRequest)
      .catch(async (error) => {
        if (error instanceof instance.InteractionRequiredAuthError) {
          // fallback to interaction when silent call fails
          return await instance
            .acquireTokenPopup(request)
            .catch((error) => {
              console.log(error);
            });
        }
      });
  };
  
  export const setAdminSesion = (token) => {
    return localStorage.setItem(ADMIN_SESION_KEY, JSON.stringify(token))
  }

  const  getAdminSesion = async  () => {
    const sesion = await localStorage.getItem(ADMIN_SESION_KEY)
    if(!sesion) return null
    return JSON.parse(sesion)
  }

  const removeAdminSesion = () => {
    return localStorage.removeItem(ADMIN_SESION_KEY)
  }



