import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "./Login.css";
import Cookies from "js-cookie";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [res, setRes] =useState(null)

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "XSRF-Token": Cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response;
    setRes(data)
    return data;
  }

  useEffect(() => {
    if (res) {
    if (res.status >= 400) {
      setError("Invalid username or password");
      setUser(null);
      console.log('BAD LOGIN',user)
    } else {

      setUser(username);
      console.log('GOOD LOGIN',user)
    }
  }

}, [setUser, username, res, user])
  return (
    <div className="form-container">
      <div className="form-holder">
        <form className="login-form">
          <p className="title">
            Welcome Back!
            <br />
            Let's Get Cookin'
          </p>

          <label className="username-holder">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="username"
              type="text"
              placeholder="Username"
              required
            />
          </label>
          <label className="password-holder">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password"
              type="password"
              placeholder="Password"
              required
            ></input>
          </label>
          <div className="login-error">
            {error && <p className="error">{error}</p>}
          </div>
          <button
            className="login-button"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Log In
          </button>

        </form>
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default Login;
