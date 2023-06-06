import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateTask from "./CreateTask";

const TaskDashboard = ({ token }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/tasks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(response.data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    fetchTasks();
  }, [token]);

  return (
    <div>
      <h2>Task Dashboard</h2>
      <CreateTask token={token} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDashboard;
