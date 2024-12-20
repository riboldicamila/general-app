import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./Component/DashboardLayout";
import Weather from "./Component/Weather";
import News from "./Component/News";
import Task from "./Component/Task";
import LogIn from "./Component/LogIn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="weather" element={<Weather />} />
          <Route path="news" element={<News />} />
          <Route path="task" element={<Task />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
