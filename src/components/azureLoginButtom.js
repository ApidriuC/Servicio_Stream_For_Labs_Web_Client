import react from "react";
import WithMessage from "../hocs/withMessage";
import {msalInstance, scopes} from '../util/auth'


// Buttom for login with office
const LoginButtom = ({showMessage, disabled}) => {

  // Login user with UPB credentials
  const login = async () => {
    try {
      const instance = await msalInstance();
      const acces_token = await instance.loginPopup({scopes})
      console.log(acces_token)
      window.location.replace("/");
    } catch (err) {
      console.log(err)
      showMessage("Error al iniciar sesión", "error")
    }
  };

  return (
    <>
      <button className="btn btn-default" 
      disabled={disabled} 
      onClick={login}
      style={{backgroundColor:"#eb2f06"}}>
        <img src="/office365.png" width="32" height="33" 
        alt="Office 365 logo"
          className="mx-2"
        />
        <span className="text-white">Login with office</span>
      </button>
    </>
  );
};

export default WithMessage(LoginButtom);
