import react, { useEffect, useState } from "react";
import AzureLoginButtom from "../components/azureLoginButtom";
import WithMessage from "../hocs/withMessage";
import ReCAPTCHA from "react-google-recaptcha";
import { getGoogleKeys } from '../services/vaultService'

// Login page
const Login = ({ showMessage }) => {
  const [isHuman, setIsHuman] = useState(false);
  const [captchatKey, setCaptchatKey] = useState('')

  const onChange = (value) => {
    if (value) setIsHuman(true);
  };

  const loadGoogleKeys = () =>  {
    getGoogleKeys()
    .then(({data:{data}} )=> {
      setCaptchatKey(data.captcha_key)
    })
    .catch(err => showMessage(err.message, "error"))
  }

  useEffect(() => {
    loadGoogleKeys()
  }, [captchatKey])

  return (
    <>
      <div className="my-5 d-flex flex-column align-items-center">
        <div className="border mx-5">
          <div className="d-flex flex-column align-items-center">
            <i
              className="fas fa-database mt-5"
              style={{ color: "#48dbfb", fontSize: 150 }}
            ></i>
            <h1>Streams For</h1>
            <h1>Lab</h1>
            <AzureLoginButtom disabled={isHuman ? false : true} />
          </div>
          
          <div className="d-flex flex-row justify-content-md-center my-3 mx-2">
            {
              captchatKey !== '' &&
              <ReCAPTCHA
              sitekey={captchatKey}
              onChange={onChange}
              onExpired={() => setIsHuman(false)}
            />
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default WithMessage(Login);
