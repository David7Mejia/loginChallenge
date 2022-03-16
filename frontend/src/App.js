import React, { useState } from "react";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={{ user, setUser }}>
          <Route exact path="/">
            {user ? <Redirect to="/homepage" /> : <Login />}
          </Route>
          <Route exact path="/homepage">
            {user ? <Homepage /> : <Redirect to="/" />}
          </Route>
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
