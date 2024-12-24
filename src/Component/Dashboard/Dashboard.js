import React from "react";
import { useAuth } from "../../AuthContext";
import "./Dashboard.css";

function Dashboard() {
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
      <div className="message">
        <div className="welcome-message">Welcome to Daily Panel</div>
        <div className="details-message">
          Keep in touch with weather, news, and more.
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
