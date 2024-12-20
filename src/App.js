import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard"; 
import LogIn from "./Component/LogIn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
