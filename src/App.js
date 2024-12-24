import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DashboardLayout from "./Component/DashboardLayout";
import Weather from "./Component/Weather/Weather";
import News from "./Component/News/News";
import Task from "./Component/Tasks/Task";
import LogIn from "./Component/UserSignIn/LogIn";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";
import Dashboard from "./Component/Dashboard/Dashboard";

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
    },
  });

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard message={true} />} />
              <Route path="weather" element={<Weather />} />
              <Route path="news" element={<News />} />
              <Route path="task" element={<Task />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
