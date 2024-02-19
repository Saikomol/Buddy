import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../API/Api";

const Login = ({ setToken }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const data = await login(username, password);
    console.log(data.token);
     if (data.token) {
    // localStorage.setItem('token', data.token);
      setToken(data.token); 
      navigate('/')
    }
    
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Email : </label>
        <input
          value={username}
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username@mail.com"
        />
        <label htmlFor="password"> Password :</label>
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
