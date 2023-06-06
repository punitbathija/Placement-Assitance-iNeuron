import React, { useState } from "react";
import Login from "./Login";
import TaskDashboard from "./TaskDashboard";

const App = () => {
  const [token, setToken] = useState("");

  return (
    <div>
      {token ? <TaskDashboard token={token} /> : <Login setToken={setToken} />}
    </div>
  );
};

export default App;
