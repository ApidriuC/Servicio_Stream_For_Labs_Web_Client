import React, { useContext, useEffect, useState } from "react";
import "../styles/fileComponent.css";
import moment from "moment";
import Spinner from "./spinner";
import { download } from "../services/fileApiService";
import WithMessage from "../hocs/withMessage";
import { AppContext } from "../context/AppProvider";

const File = ({
  loading = true,
  files = [],
  isSharedSection = false,
  onSelectedFile,
  showMessage,
  onSort
}) => {

  const context = useContext(AppContext);
  const selectingFilesToRemove = context[4];
  const setSelectingFilesToRemove = context[5];
  const filesToRemove = context[6];
  const SetFilesToRemove = context[7];

 
  useEffect(() => {
    // Remove files from lis to remove
    if (!selectingFilesToRemove) {
      SetFilesToRemove({ areVideos: false, data: [] });
      const checkboxes = document.getElementsByClassName("form-check-input");
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
      }
    }
  }, [selectingFilesToRemove, files]);

  const onShared = (file) => {

  }

  const calSize = (bytes) => {
    const GB = 1000000000; //numero de bytes que tiene 1GB
    const MG = 1048576; //numero de bytes que tiene 1MG

    // Megabytes
    if (bytes <= GB) {
      return `${(bytes / MG).toFixed(2)} MB`;
    } else {
      // Gigabytes
      return `${(bytes / GB).toFixed(2)} GB`;
    }
  };

  const formatDate = (date) => {
    const format = "lll";
    const upload_at = moment(date).format(format);
    return moment(upload_at, format).fromNow();
  };

  const onDownload = (file) => {
    download(file._id)
      .then((res) => {
        const blob = res.data;
        console.log(blob);
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", file.name);
        link.click();
        showMessage("File downloaded!");
      })
      .catch((err) => showMessage(err.message, "error"));
  };

  const handleCheckFile = (e, file) => {
    const checked = e.target.checked;
    const currentFilesToremove = filesToRemove.data;

    // Ad file to remove list
    if (checked) {
      currentFilesToremove.push(file._id);
      SetFilesToRemove({
        areVideos: file.path.includes("videos"),
        data: currentFilesToremove,
      });
      setSelectingFilesToRemove(true);
    } else {
      // Remove file from remove list
      currentFilesToremove.splice(currentFilesToremove.indexOf(file), 1);
      SetFilesToRemove({
        areVideos: file.path.includes("videos"),
        data: currentFilesToremove,
      });
    }

    // if check is 0 cancel remove action
    if (filesToRemove.data.length === 0) setSelectingFilesToRemove(false);
  };


  return (
    <div className="container-fluid">
      <div className="row border py-2 mx-3">
        <div className={`col-${isSharedSection ? "3" : "5"}`}>
          <span onClick={() => onSort("name")} className="sort">
            Name <i className="fas fa-caret-down"></i>
          </span>
        </div>
        <div className="sort" className="col-2">
          <span onClick={() => onSort("date")} className="sort">
            Date <i className="fas fa-caret-down"></i>
          </span>
        </div>
        <div className="col-2">
          Size <i className="fas fa-caret-down"></i>
        </div>
        {isSharedSection && (
          <div className="col-3">
            Shared from <i className="fas fa-caret-down"></i>
          </div>
        )}
      </div>
      {!loading &&
        files.map((file, key) => (
          <div key={key} className="row mx-3 file container">
            <div
            onClick={() => onSelectedFile ? onSelectedFile(file):'' }
              className={`my-2 col-${isSharedSection ? "3" : "5"} form-check`}
            >
              {!isSharedSection && (
                <input
                  onChange={(e) => handleCheckFile(e, file)}
                  className="form-check-input"
                  type="checkbox"
                />
              )}
              <label className="form-check-label">
                <i className="far fa-folder mx-2"></i>
                {file.name.length > 25
                  ? file.name.substring(0, 25) + "..."
                  : file.name}
              </label>
            </div>
            <div onClick={() => onSelectedFile ? onSelectedFile(file):'' } className="col-2 my-2">
              {formatDate(file.upload_at)}
            </div>
            <div onClick={() => onSelectedFile ? onSelectedFile(file):'' } className="col-2 my-2">
              {calSize(file.weight)}
            </div>
            {isSharedSection && (
              <div onClick={() => onSelectedFile ? onSelectedFile(file):'' } className="col-3 my-2">
                {file.author.length > 25
                  ? file.author.substring(0, 25) + "..."
                  : file.author}
              </div>
            )}
            <div className={`col-${isSharedSection ? "2" : "3"}`}>
              <div className="d-flex flex-row-reverse ">
                <div className="btn-group dropleft">
                  <button
                    type="button"
                    className="btn btn-default dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i
                      style={{ fontSize: 20 }}
                      className="fas fa-chevron-circle-down dropdown show ml-auto"
                    ></i>
                  </button>
                  <div className="dropdown-menu">
                    <button
                      onClick={() => onDownload(file)}
                      className="dropdown-item  btn btn-link"
                    >
                      <i className="fas fa-cloud-download-alt"></i> Download
                    </button>
                    {!isSharedSection && (
                      <button
                        className="dropdown-item btn btn-link"
                        onClick={() => onShared(file)}
                      >
                        <i className="fas fa-share-alt"></i> Share
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      {loading && (
        <div className="d-flex flex-row justify-content-center mt-5">
          <Spinner />
        </div>
      )}
      {!loading && files.length === 0 && (
        <p className="text-center text-muted my-5">Start to share files!</p>
      )}
    </div>
  );
};

export default WithMessage(File);
