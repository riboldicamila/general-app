import React from "react";
import BreadCrumbs from "../GeneralUtilities/BreadCrumbs";

import "./Tasks.css";
import Dashboard from "../Dashboard/Dashboard";

const Task = () => {
  return (
    <div className="task-container">
      <BreadCrumbs pageTitle="Tasks" />
      <Dashboard textMessage="This page is under maintenance."/>
    </div>
  );
};


export default Task;
