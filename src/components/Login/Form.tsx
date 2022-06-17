import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Form = (props:any):any => {
  const { values, errors: err, handleChange: manageChanges, handleSubmit: onsubmit } :any = useForm(
    login,
    validate
  );
  const [_,setLoggedIn] = useState(false);
 const navigate =  useNavigate()

  function login() {
    setLoggedIn(true);
    return navigate("/")
  }


  return (
    <div className="section hightlight">
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <h1>Login</h1>
            <form onSubmit={onsubmit} noValidate>
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

               <Link to='/forgot-password'>
                <p className="my-3" style={{textAlign:"center"}}>Forgot Password?</p>
              </Link>


              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
                // onClick={submitHandler()}
              >
                Login
              </button>
              <Link to='/register'>
                <p className="mt-5" style={{textAlign:"center"}}>Create New Account ?</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
