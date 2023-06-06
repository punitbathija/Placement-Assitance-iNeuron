import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://reqres.in/api/login", {
        username,
        password,
      });
      console.log(res);
      setToken(res.data);
      alert("Login Successfull");
    } catch (err) {
      console.log(err);
      setError("Invalid Credentails" + err);
    }
  };

  return (
    <div>
      Login
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
