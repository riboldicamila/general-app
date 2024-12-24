import React from "react";
import { useAuth } from "../../AuthContext";
import "./Dashboard.css";

function Dashboard({ message }) {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="overlay">
        <p>
          <strong>Hello</strong> <br />
          <span className="email-box">
            {user ? user.displayName || user.email : "Guest"}
          </span>
        </p>
      </div>
      {message ? (
        <div className="message">
          <div className="welcome-message">Welcome to Daily Panel</div>
          <div className="details-message">
            Keep in touch with weather, news, and more.
          </div>
        </div>
      ) : (
        <div className="maintenance"> This page is under maintenance. </div>
      )}
    </div>
  );
}

export default Dashboard;
