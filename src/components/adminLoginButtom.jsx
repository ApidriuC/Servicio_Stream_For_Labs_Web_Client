import react, { useState } from "react";
import WithMessage from "../hocs/withMessage";
import * as AdminApiService from "../services/adminApiService";
import { setAdminSesion } from "../util/auth";

const AdminLoginButtom = ({ disabled, showMessage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    AdminApiService.login(username, password)
      .then((user) => {
        setAdminSesion(user.data);
        window.location.replace("/admin");
      })
      .catch(() => showMessage("Error al iniciar sesión", "error"));
  };

  return (
    <>
      <button
      className="btn btn-primary"
        disabled={disabled}
        type="button"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Login
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Admin section
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control my-2"
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                disabled={username === "" || password === "" || disabled}
                type="button"
                className="btn btn-primary"
                onClick={login}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithMessage(AdminLoginButtom);
