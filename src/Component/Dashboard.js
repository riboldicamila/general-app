import React from "react";
import { useAuth } from "../AuthContext"; 

function Dashboard() {
  const { user } = useAuth(); 

  return (
    <div>
      <h1>Hello {user ? user.displayName || user.email : "Guest"}</h1>
    </div>
  );
}

export default Dashboard;
