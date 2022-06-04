import React, { useEffect, useState } from "react";
import Header from "../components/header";
import WithMessage from '../hocs/withMessage'
import { getConfig, editConfig } from '../services/adminApiService'
import Spinner from '../components/spinner'

const AdminPage = ({ showMessage }) => {
    const [config, setConfig] = useState({})
    const [loadingConfig, setLoadingConfig] = useState(true)
    const [assigned, setAssigned] = useState(0)

    const loadConfig = () => {
        getConfig()
        .then(res => {
            setLoadingConfig(false)
            setConfig(res.data[0])
            setAssigned(res.data[0].default)
        })
        .catch((err) => showMessage(err.message, "error"))

    }

    const updateConfig = () => {
        editConfig(assigned, config._id)
        .then(() => showMessage("Udated!"))
        .catch(err => showMessage(err.message, "error"))
    }

    useEffect(() => {
        loadConfig()
    }, [])

  return (
    <>
      <Header noIsAdminSection= {false} />
      <div className="container">
        <h1 className="text-center text-muted mb-3 mt-5">
          <i className="fas fa-user-cog"></i> Settings
        </h1>
        {loadingConfig && 
        <div className="text-center my-5">
            <Spinner color="secondary"/>
        </div>}
        {!loadingConfig && 
            <div className="alert alert-primary" role="alert">
            Configure available storage for user use.
            <br/>
            Max value accept: {config.max} GB
            <br/>
            Min value accept: {config.min} GB
            <br/>
            Assigned: {config.default} GB
        </div>}
        <label className="mr-2">
          Storage value{" "}
        </label>
        <input
          className="form-control"
          min={loadingConfig ? 0 : config.min}
          type="number"
          max={loadingConfig ? 0 : config.max}
          value={assigned}
          onChange={(e) => setAssigned(parseInt(e.target.value))}
        />
        <button type="button" disabled={config.default === assigned} 
        className="btn btn-success btn-block my-3"
        onClick={updateConfig}>
            Save
        </button>
      </div>
    </>
  );
};

export default WithMessage(AdminPage);
