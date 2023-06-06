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
      setToken(res.data);
    } catch (err) {
      setError("Invalid Credentails" + err);
    }
  };

  return <div>Login</div>;
};

export default Login;
