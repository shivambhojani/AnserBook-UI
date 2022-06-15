import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./component/User";
import UserList from "./component/UserList";
import Form from "./Form";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Form />
        </Route>
        <Route exact path="/userlist">
          <UserList />
        </Route>

        <Route exact path="/user/:id">
          <User />
        </Route>
        {/* <Route exact path="/userlist/:id">         
            <User />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
