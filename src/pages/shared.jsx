import React, { useState } from "react";
import "../styles/shared.css";
import { onSort } from '../util/sort'
import WithMessage from "../hocs/withMessage";
import WithAppLayout from "../layouts/appLayout";
import FileComponent from "../components/file";

const Shared = () => {
  const  [sharedFiles, setSharedFiles ]= useState([{_id: "60371bda41ae1b7e6526d746",
  author: "Pepito Pérez",
  name: "login.png",
  path: "public/photos/login.png-1614224346932-login.png",
  shared_users:[],
  upload_at: "2021-02-25T03:39:06.955Z",
  weight: 23094
  }, {
    _id: "60371d7e41ae1b7e6526d747",
    author: "Pepito Pérez",
    name: "login.png",
    path: "public/photos/login.png-1614224766287-login.png",
    shared_users:[],
    upload_at: "2021-02-25T03:39:06.955Z",
    weight: 23094
  }])
  
  
    const handleSort = async  (typeSort) => {
      const sortFiles = await onSort(typeSort, [...sharedFiles])
      setSharedFiles(sortFiles)
    }
  
  
  return (
    <>
      <FileComponent 
      loading={false}
      files={sharedFiles}
      onSort={handleSort}/>
    </>
  );
};

export default WithMessage(WithAppLayout(Shared));
