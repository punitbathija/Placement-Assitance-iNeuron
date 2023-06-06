import React, { useState } from "react";
import axios from "axios";

const CreateTask = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://reqres.in/api/tasks",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Optional: Refresh the task list after creating a new task
      // You can either make a new API request or update the task list state directly
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  return (
    <form onSubmit={handleCreateTask}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
