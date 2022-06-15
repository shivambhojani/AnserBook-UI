import React, { useState } from "react";
import useForm from "./useForm.jsx";
import validate from "./LoginFormValidationRules";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";

const Form = props => {
  const { values, errors: err, handleChange: manageChanges, handleSubmit: onsubmit } = useForm(
    login,
    validate
  );
  const [setLoggedIn] = useState(false);
 const history =  useHistory()

  function login() {
    setLoggedIn(true);
    return <Redirect to="/default" />;
  }
const submitHandler = (e)=>{
  e.preventDefault();
  axios.post("https://tutorial4-api.herokuapp.com/api/users/login", {email: values.email, password:values.password})
  .then((response) => {
    history.push("/userlist")
  }).catch((error) => {
    console.log(error);
  })
 
}

  return (
    <div className="section hightlight">
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <h1>Login</h1>
            <form onSubmit={(e)=>{
              submitHandler(e);
            }} noValidate>
              <div className="attributes">
                <label className="label">Email Address</label>
                <div className="data-block">
                  <input
                    autoComplete="off"
                    className={`input ${err.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={manageChanges}
                    value={values.email || ""}
                    required
                  />
                  {err.email && (
                    <p className="help is-danger">{err.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className={`input ${err.password && "is-danger"}`}
                    type="password"
                    name="password"
                    onChange={manageChanges}
                    value={values.password || ""}
                    required
                  />
                </div>
                {err.password && (
                  <p className="help is-danger">{err.password}</p>
                )}
              </div>
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
                // onClick={submitHandler()}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
