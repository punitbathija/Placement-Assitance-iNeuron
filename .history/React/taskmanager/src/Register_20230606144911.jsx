import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://reqres.in/api/register", {
        username,
        password,
      });
      setToken(res.data);
      alert("Successfully Registered");
    } catch (err) {
      console.log(err);
      setError("Invalid Credentails" + err);
    }
  };

  return (
    <div>
      Register
      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
