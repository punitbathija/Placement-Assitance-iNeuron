import React, { useState } from "react";
import Login from "./Login";
import TaskDashboard from "./TaskDashboard";
import Register from "./Register";

const App = () => {
  const [token, setToken] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center",
    flexDirection: "column"
     gap: "20px" }}>
      <Register />
      {token ? <TaskDashboard token={token} /> : <Login setToken={setToken} />}
    </div>
  );
};

export default App;
