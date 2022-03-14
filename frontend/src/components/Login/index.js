import React from "react";
import { useState } from "react";
import "./Login.css";
import { csrfFetch } from "../../csrf.js";
// const fetch = require("node-fetch");

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // async function data = await (csrfFetch("/", {
    //   method: "POST",
    //   Headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({username, password}),
    // }))

    (async function () {

        const response = await csrfFetch("/", {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
        const data = await response.json();
      console.log('this is the data response', data)
        console.log(data.errors)
        return data;



        // console.log('error on login',error)
        // setError([error]);
        // return error;

      })
      ()
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      Welcome Back!
      {error && <p className="error">
        {error.forEach(er => {
          <p>{er}</p>
        })}
      </p>}
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
