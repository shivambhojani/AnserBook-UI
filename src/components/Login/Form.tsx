import React, { useState } from "react";
import "./Form.css";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Box } from "@mui/material";
import logo from "../../assets/app-logo.png";
import Paper from "@mui/material/Paper";

const Form = (props: any): any => {
  const {
    values,
    errors: err,
    handleChange: manageChanges,
    handleSubmit: onsubmit,
  }: any = useForm(login, validate);
  const [_, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function login() {
    setLoggedIn(true);
    return navigate("/default");
  }
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (values.email === "admin@xyz.com") {
      navigate("/adminhome");
    } else {
      navigate("/feeds");
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={false} sm={5} md={6} className="imagecontainer">
        <Grid container direction="column" className="imagegrid">
          <Grid>
            <Box className="titlecontainer">
              <Typography component="h1" variant="h5" className="title">
                Answer Book
              </Typography>
            </Box>
          </Grid>
          <Grid>
            <section className="imagebox">
              <Box className="imageframe">
                <img src={logo} alt="Logo" className="image" />
              </Box>
            </section>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={7} md={6} component={Paper} elevation={6}>
        <div className="box">
          <form onSubmit={submitHandler} noValidate>
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
                {err.email && <p className="help is-danger">{err.email}</p>}
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
              {err.password && <p className="help is-danger">{err.password}</p>}
            </div>
            <button
              type="submit"
              className="button is-block is-info is-fullwidth"
              // onClick={submitHandler()}
            >
              Submit
            </button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Form;
