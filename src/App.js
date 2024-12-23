import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DashboardLayout from "./Component/DashboardLayout";
import Weather from "./Component/Weather";
import News from "./Component/News";
import Task from "./Component/Task";
import LogIn from "./Component/UserSignIn/LogIn";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: '"Urbanist", sans-serif',
      h1: {
        fontWeight: 700,
      },
      body1: {
        fontWeight: 400,
      },
      // Add more variants if needed
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
};

export default App;
