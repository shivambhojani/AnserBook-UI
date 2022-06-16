import { Stack, TextField } from "@mui/material";
import {
  Typography,
  makeStyles,
  Divider,
  styled,
  Grid,
  Button,
} from "@material-ui/core";
import "./ProfilePage.css";
import { Container } from "@mui/system";

import CountrySelect from "./CountrySelect";
import React from "react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const MyComponent = styled("div")({
  color: "white",
  backgroundColor: "#414379",
  padding: 10,
  borderRadius: 60,
  alignContent: "center",
});

const Input = styled("input")({
  display: "none",
});

const ProfilePage = () => {
  const [dob, setdob] = React.useState<Date | null>(null);

  const handleChange = (newValue: Date | null) => {
    setdob(newValue);
  };

  const [disable, setDisable] = React.useState(false);

  const [phone, setPhone] = React.useState<string>();
  const [errorsphone, setErrosphone] = React.useState<{ name: string }>();

  const [name, setName] = React.useState<string>();
  const [errorsName, setErrosName] = React.useState<{ name: string }>();

  //const [dob, setdob] = React.useState<Date | null>(null);
  const [errorsdob, setErrosdob] = React.useState<{ name: string }>();

  const [location, setlocation] = React.useState<string>();
  const [errorslocation, setErroslocation] = React.useState<{ name: string }>();

  const [organization, setorganization] = React.useState<string>();
  const [errorsorganization, setErrosorganization] = React.useState<{
    name: string;
  }>();

  const [pin, setpin] = React.useState<string>();
  const [errorspin, setErrospin] = React.useState<{ name: string }>();

  const [address, setAddress] = React.useState<string>();
  const [errorsaddress, setErrosaddress] = React.useState<{ name: string }>();

  const [city, setcity] = React.useState<string>();
  const [errorscity, setErroscity] = React.useState<{ name: string }>();

  const checkforEmptyValue = (
    phone: any,
    name: any,
    dob: any,
    location: any,
    orgnization: any,
    pin: any,
    address: any,
    city: any
  ) => {
    setErrosName({ name: "" });
    setErrosdob({ name: "" });
    setErrosorganization({ name: "" });
    setErroslocation({ name: "" });
    setErrosphone({ name: "" });

    let err: number = 0;

    let str = phone || "";
    let result1 = typeof str === "string" ? str.trim() : "";
    if (result1.length === 0) {
      setErrosphone({ name: "Mobile Number cannot be empty" });
      err = err + 1;
    }

    str = name || "";
    result1 = typeof str === "string" ? str.trim() : "";
    if (result1.length === 0) {
      setErrosName({ name: "Full Name cannot be empty" });
      err = err + 1;
    }

    // dob = dob?.toUTCString;
    // str = dob || '';
    // result1 = typeof str === 'string' ? str.trim() : '';
    // if (result1.length === 0) {

    //     setErrosdob({ name: 'DOB cannot be emtpy' })
    //     err = err + 1;
    // }

    const input1 = document.getElementById(
      "location"
    ) as HTMLInputElement | null;
    const value1 = input1?.value;
    str = value1 || "";
    result1 = typeof str === "string" ? str.trim() : "";

    if (result1.length === 0) {
      setErroslocation({ name: "Location cannot be emtpy" });
      err = err + 1;
    }

    const input = document.getElementById(
      "organization"
    ) as HTMLInputElement | null;
    const value = input?.value;
    str = value || "";
    result1 = typeof str === "string" ? str.trim() : "";

    if (result1.length === 0) {
      setErrosorganization({ name: "Organization Name cannot be emtpy" });
      err = err + 1;
    }

    if (err === 0) {
      alert("Information saved successfully");
    }
  };

  const [errors, setErrors] = React.useState<{ phone: string }>();

  const handleChangeInMobileNo = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDisable(false);
    const {
      target: { value },
    } = event;
    setErrors({ phone: "" });
    setPhone(value);
    let reg = new RegExp(/^\d*$/).test(value);
    if (!reg) {
      setDisable(true);
      setErrosphone({ name: "Only numbers are permitted" });
    }
  };

  const handleChangeInFullName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDisable(false);
    const {
      target: { value },
    } = event;
    setErrosName({ name: "" });
    setName(value);
    let reg = new RegExp(/^[a-zA-Z][a-zA-Z ]*$/).test(value);
    if (!reg) {
      setDisable(true);
      setErrosName({ name: "Only Alphabets are allowed with spaces" });
    }
  };

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Full Name"
                id="fullname"
                onChange={handleChangeInFullName}
                variant="outlined"
                required
                value={name}
                error={Boolean(errorsName?.name)}
                helperText={errorsName?.name}
                fullWidth
              ></TextField>
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Date of birth"
                  inputFormat="MM/dd/yyyy"
                  value={dob}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={Boolean(errorsdob?.name)}
                      helperText={errorsdob?.name}
                      fullWidth
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="organization"
                label="Organization Name"
                variant="outlined"
                value={organization}
                error={Boolean(errorsorganization?.name)}
                helperText={errorsorganization?.name}
                fullWidth
              ></TextField>{" "}
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="location"
                label="Location"
                variant="outlined"
                value={location}
                error={Boolean(errorslocation?.name)}
                helperText={errorslocation?.name}
                fullWidth
              ></TextField>{" "}
            </Grid>{" "}
            <Grid item xs={12} md={12}>
              <TextField
                label="Address"
                variant="outlined"
                value={address}
                fullWidth
              ></TextField>{" "}
            </Grid>{" "}
            <Grid item xs={12} md={4}>
              <TextField
                label="Pin"
                variant="outlined"
                value={pin}
                fullWidth
              ></TextField>{" "}
            </Grid>{" "}
            <Grid item xs={12} md={4}>
              <TextField
                label="City"
                variant="outlined"
                value={city}
                fullWidth
              ></TextField>{" "}
            </Grid>
            <Grid item xs={12} md={4}>
              <CountrySelect />{" "}
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                onChange={handleChangeInMobileNo}
                label="Mobile No"
                variant="outlined"
                required
                value={phone}
                error={Boolean(errors?.phone || errorsphone?.name)}
                helperText={errors?.phone || errorsphone?.name}
                fullWidth
              ></TextField>{" "}
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                label="Employee ID"
                value={"1234"}
                variant="outlined"
                helperText="Please enter full name"
                required
                aria-readonly
                fullWidth
              ></TextField>{" "}
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                disabled={disable}
                variant="contained"
                color="primary"
                onClick={() =>
                  checkforEmptyValue(
                    phone,
                    name,
                    dob,
                    location,
                    organization,
                    pin,
                    address,
                    city
                  )
                }
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0 p-3">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                <div className="cardBodyItems m-3">
                  <div>
                    <img
                      className="img-account-profile rounded-circle mb-2"
                      src="http://bootdey.com/img/Content/avatar/avatar7.png"
                      alt=""
                    ></img>
                  </div>
                  <div>
                    <div className="small font-italic text-muted mb-4">
                      JPG or PNG no larger than 5 MB
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contained-button-file">
                      <Input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                      />
                      <Button
                        variant="contained"
                        component="span"
                        color="primary"
                      >
                        Upload
                      </Button>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ProfilePage;
