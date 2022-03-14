import React from "react";
import { useState } from "react";
import "./Login.css";
import { csrfFetch } from "../../csrf.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    csrfFetch("/", {
      method: "POST",
      body: JSON.stringify({username, password}),
    })
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      Welcome Back!
      <label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="username"
          type="text"
          placeholder="Username"
          required
        />
      </label>
      <label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password"
          type="password"
          placeholder="Password"
          required
        />
      </label>
      <button className="login-button" type="submit">
        Log In
      </button>
    </form>
  );
};

export default Login;
