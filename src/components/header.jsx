/* eslint-disable jsx-a11y/anchor-is-valid */
import react, { useContext, useState } from "react";
import { logout } from "../util/auth";
import "../styles/header.css";
import { upload } from "../services/fileApiService";
import withMessage from "../hocs/withMessage";
import { getMaxStorageAvailable } from "../services/fileApiService";
import { removeFiles } from '../services/fileApiService'
import { getStorageUsed } from "../services/fileApiService";
import { AppContext } from '../context/AppProvider'
const GB = 1000000000; //numero de bytes que tiene 1GB


const Header = ({ noIsAdminSection = true, showMessage }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState("0%");
  const context = useContext(AppContext)
  const selectingFilesToRemove = context[4]
  const setSelectingFilesToRemove = context[5]
  const filesToRemove = context[6]
  const setReloadFiles = context[9]

  
  const onUploadProgress = (progressEvent) => {
    const percentCompleted = Math.round(
      (progressEvent.loaded * 100) / progressEvent.total
    );
    setProgress(`${percentCompleted}%`);
  };

  const onRemove = () => {
    console.log("Borrar->", filesToRemove);
    removeFiles(filesToRemove.data, filesToRemove.areVideos)
    .then(() => {
      showMessage("Files removed!")
      setSelectingFilesToRemove(false)
      setReloadFiles(true)
    })
    .catch(err => showMessage(err.message, "error"))
  }

  const getMaxStorage = () => {
    return new Promise((resolve, reject) => {
      getMaxStorageAvailable()
        // Get max user storage (GB)
        .then((res) => {
          const maxStorage = res.data.maxStoraged
          console.log("Max: ", maxStorage);
          resolve(maxStorage)
        })
        .catch(err => reject(err));
      resolve(5);
    });
  };

  const getUserStorageUsed = () => {
    return new Promise((resolve, reject) => {
      getStorageUsed()
        // Obtiene el espacio de alamacenamiento ocupado por el usuario
        .then((res) => {
          console.log("storageUsed: ", res.data.storageUsed);
            resolve(res.data.storageUsed / GB);
        })
        .catch((err) => reject(err));
    });
  };

  const verifyStorage = (fileSize) => {
    return new Promise((resolve, reject) => {
      Promise.all([getMaxStorage(), getUserStorageUsed()])
        .then((results) => {
          const maxSize = results[0];
          const userStorageUsed = results[1];
          const newSizeToStorage = fileSize / GB;
          if (userStorageUsed + newSizeToStorage > maxSize) {
            showMessage(`Storage exceeded, you have available: ${maxSize - userStorageUsed }GB`,"error");
            resolve(false);
            setUploading(false);
          } else {
            resolve(true);
          }
        })
        .catch((err) => reject(err));
    }).catch((err) => showMessage(err.message, "error"));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProgress("0%");
      setUploading(true);

      // if have storage upload the file
      verifyStorage(file.size)
        .then((haveStorage) => {
          if (haveStorage) {
            const formData = new FormData();
            formData.append("file", file);
            console.log(formData);
            upload(formData, onUploadProgress)
              .then((res) => {
                console.log(res);
                setUploading(false);
                showMessage("File uploaded!");
                setReloadFiles(true)
              })
              .catch((err) => {
                console.log(err);
                setUploading(false);
                showMessage(err.message, "error");
              });
          }
        })
        .catch((err) => {
          console.log(err);
          setUploading(false);
          showMessage(err.message, "error");
        });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container-fluid d-flex flex-row-reverse">
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {selectingFilesToRemove &&
              <>
                <li className="nav-item mr-2">
                  <button className="btn btn-outline-danger btn-sm mt-1" onClick={onRemove}>
                  <i className="far fa-trash-alt"></i> Remove
                  </button>
                </li>
                <li className="nav-item mr-2">
                  <button className="btn btn-outline-secondary btn-sm mt-1" onClick={() =>setSelectingFilesToRemove(false)}>
                   Cancel
                  </button>
              </li>
              </>
            }
            {noIsAdminSection && (
              <li className="nav-item mr-2">
                <form>
                  <input
                    disabled={uploading}
                    onChange={handleFile}
                    name="file"
                    type="file"
                    id="file"
                    className="inputfile"
                  />
                  {uploading ? (
                    <p className="mt-2 mr-2">{progress}</p>
                  ) : (
                    <>
                      { !selectingFilesToRemove && 
                        <label for="file">
                          <i className="fas fa-file-upload"></i> Upload
                        </label>
                      }
                    </>
                  )}
                </form>
              </li>
            )}
            <li className="nav-item">
              <button className="btn btn-outline-secondary" onClick={logout}>
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            </li>
          </ul>
        </div>
        <div>
          <div className="d-flex flex-row">
            <a className="navbar-brand" href="/">
              <i
                className="fas fa-database"
                style={{ color: "#48dbfb", fontSize: 30 }}
              ></i>
            </a>
            <span>
              <h5 className="pt-2">Streams for lab</h5>
            </span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default withMessage(Header);
