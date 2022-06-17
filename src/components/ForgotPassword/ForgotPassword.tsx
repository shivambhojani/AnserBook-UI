import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Form = (props:any) => {
  const {
    values,
    errors: err,
    handleChange: manageChanges,
    handleSubmit: onsubmit,
  }:any = useForm(login, validate);
  const [setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function login() {
    navigate("/login");
  }

  return (
    <div className="section hightlight">
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <h1 className="is-size-3">Forgot Password</h1>

            <form onSubmit={onsubmit} noValidate>
              <div className="attributes mt-5">
                <label className="label">Email Address</label>
                <div className="data-block">
                  <input
                    placeholder="Enter email to reset the password"
                    autoComplete="off"
                    className={`input ${err.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={manageChanges}
                    value={values.email || ""}
                    required
                  />
                  {err.email && <p className="help is-danger">{err.email}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="button is-block is-info is-fullwidth my-3"
              >
                Reset Password
              </button>
             <Link to='/login'>
              <p className="mt-5">Go Back</p>
             </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
