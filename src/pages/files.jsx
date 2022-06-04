import React, { useContext, useEffect, useState } from 'react';
import '../styles/files.css'
import WithMessage from '../hocs/withMessage';
import WithAppLayout from '../layouts/appLayout'
import FileComponent from "../components/file";
import { getFiles } from '../services/fileApiService'
import { AppContext } from '../context/AppProvider';
import { onSort } from '../util/sort'


const Files = ({ showMessage }) => {

    const [files, setFiles] = useState([])
    const [loadingFiles, setLoadingFiles] = useState(true)
    const context = useContext(AppContext)
    const reloadFiles = context[8]
    const setReloadFiles = context[9]

    const handleSort = async  (typeSort) => {
      const sortFiles = await onSort(typeSort, [...files])
      setFiles(sortFiles)
    }

    const listFiles = () => {
      getFiles()
      .then((res) => {
        setLoadingFiles(false);
        setFiles(res.data)
        setReloadFiles(false)
      })
      .catch((err) => {
        console.log(err);
        setLoadingFiles(false);
        showMessage(err.message, "error");
        setReloadFiles(false)
      });
    }

    useEffect(()=> {
      listFiles()
    }, [reloadFiles])
    
    return (
      <>
        <FileComponent  
        loading = {loadingFiles}
        files={files} 
        onSort={handleSort}/>
      </>
    );

}

export default WithMessage(WithAppLayout(Files))