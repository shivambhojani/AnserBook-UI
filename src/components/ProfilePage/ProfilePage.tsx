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
import React, { useEffect } from "react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import httpClient from "../../thunk/interceptor";
import { SendToMobile } from "@mui/icons-material";

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

const loggedInUserEmailId = localStorage.getItem("userID");
console.log('email', loggedInUserEmailId)

const ProfilePage = () => {

  const [dob, setdob] = React.useState<Date | null>(null);

  const [disable, setDisable] = React.useState(false);

  const [phone, setPhone] = React.useState<string>();
  const [errorsphone, setErrosphone] = React.useState<{ name: string }>();

  const [firstname, setfirstname] = React.useState<string>();
  const [errorsfirstname, setErrosfirstname] = React.useState<{ name: string }>();


  const [lastname, setlastname] = React.useState<string>();
  const [errorslastname, setErroslastname] = React.useState<{ name: string }>();

  const [email, setemail] = React.useState<String>();
  const [errorsemail, setErrosemail] = React.useState<{ name: string }>();

  const [location, setlocation] = React.useState<string>();
  const [errorslocation, setErroslocation] = React.useState<{ name: string }>();

  const [id, setid] = React.useState<string>();
  const [errorsid, setErrorsid] = React.useState<{
    name: string;
  }>();

  const [pin, setpin] = React.useState<string>();
  const [errorspin, setErrospin] = React.useState<{ name: string }>();

  const [address, setAddress] = React.useState<string>();
  const [errorsaddress, setErrosaddress] = React.useState<{ name: string }>();

  const [city, setcity] = React.useState<string>();
  const [errorscity, setErroscity] = React.useState<{ name: string }>();



  useEffect(() => {

    httpClient.get("/userprofile/currentuser?email=" + loggedInUserEmailId).then((res) => {
      console.log(res.data);
      setfirstname(res.data.user.firstname);
      setlastname(res.data.user.lastname);
      setemail(res.data.user.email);
      setid(res.data.user._id);
      setAddress(res.data.user.addressline1);
      setcity(res.data.user.city);
      setPhone(res.data.user.mobile);
      setpin(res.data.user.pinCode)

    })
      .catch((err) => {
        console.log(err);
      });

  }, []);


  const checkforEmptyValue = (

    phone: any,
    firstname: any,
    lastname: any,
    pin: any,
    address: any,
    city: any
  ) => {
    console.log("CheckEmptyValue");
    setErrosfirstname({ name: "" });
    setErroslastname({ name: "" });
    setErrosemail({ name: "" });
    setErrorsid({ name: "" });
    setErroslocation({ name: "" });
    setErrosphone({ name: "" });

    let err: number = 0;

    let str = phone || "";
    let result1 = typeof str === "string" ? str.trim() : "";
    if (result1.length === 0) {
      setErrosphone({ name: "Mobile Number cannot be empty" });
      err = err + 1;
    }

    str = firstname || "";
    result1 = typeof str === "string" ? str.trim() : "";
    if (result1.length === 0) {
      setErrosfirstname({ name: "First Name cannot be empty" });
      err = err + 1;
    }

    str = lastname || "";
    result1 = typeof str === "string" ? str.trim() : "";
    if (result1.length === 0) {
      setErroslastname({ name: "Last Name cannot be empty" });
      err = err + 1;
    }

    if (err === 0) {
      console.log("No Errors")
      httpClient
        .put("/userprofile/currentuser?email=" + loggedInUserEmailId, {
          firstname: firstname,
          lastname: lastname,
          addressline1: address,
          city: city,
          mobile: phone,
          pincode: pin
        })
        .then((res) => {
          console.log(res.data);
          alert("Information Saved Successfully")
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });


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

  const handleChangeInFirstName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDisable(false);
    const {
      target: { value },
    } = event;
    setErrosfirstname({ name: "" });
    setfirstname(value);
    let reg = new RegExp(/^[a-zA-Z][a-zA-Z ]*$/).test(value);
    if (!reg) {
      setDisable(true);
      setErrosfirstname({ name: "Only Alphabets are allowed with spaces" });
    }
  };

  const handleChangeInAddress = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDisable(false);
    const {
      target: { value },
    } = event;
    setErrosaddress({ name: "" });
    setAddress(value);

  };

  const handleChangeInPin = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDisable(false);
    const {
      target: { value },
    } = event;
    setErrospin({ name: "" });
    setpin(value);

  };

  const handleChangeInCity = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDisable(false);
    const {
      target: { value },
    } = event;
    setErroscity({ name: "" });
    setcity(value);

  };

  const handleChangeInLastName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDisable(false);
    const {
      target: { value },
    } = event;
    setErroslastname({ name: "" });
    setlastname(value);
    let reg = new RegExp(/^[a-zA-Z][a-zA-Z ]*$/).test(value);
    if (!reg) {
      setDisable(true);
      setErroslastname({ name: "Only Alphabets are allowed with spaces" });
    }
  };

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                InputLabelProps={{ shrink: true }}
                label="First Name"
                id="fullname"
                onChange={handleChangeInFirstName}
                variant="outlined"
                required

                value={firstname}
                error={Boolean(errorsfirstname?.name)}
                helperText={errorsfirstname?.name}
                fullWidth
              ></TextField>
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                InputLabelProps={{ shrink: true }}
                label="Last Name"
                id="lastname"
                onChange={handleChangeInLastName}
                variant="outlined"
                required
                value={lastname}
                error={Boolean(errorslastname?.name)}
                helperText={errorslastname?.name}
                fullWidth
              ></TextField>
            </Grid>{" "}
            <Grid item xs={12} md={12}>
              <TextField
                InputLabelProps={{ shrink: true }}
                onChange={handleChangeInAddress}
                label="Address"
                variant="outlined"
                value={address}
                fullWidth
              ></TextField>{" "}
            </Grid>{" "}
            <Grid item xs={12} md={3}>
              <TextField
                InputLabelProps={{ shrink: true }}
                onChange={handleChangeInPin}
                label="Pin"
                variant="outlined"
                value={pin}
                fullWidth
              ></TextField>{" "}
            </Grid>{" "}
            <Grid item xs={12} md={3}>
              <TextField
                InputLabelProps={{ shrink: true }}
                onChange={handleChangeInCity}
                label="City"
                variant="outlined"
                value={city}
                fullWidth
              ></TextField>{" "}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                InputLabelProps={{ shrink: true }}
                label="Email ID"
                value={email}
                variant="outlined"
                required
                aria-readonly
                fullWidth
              ></TextField>{" "}
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              <TextField
                InputLabelProps={{ shrink: true }}
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
                InputLabelProps={{ shrink: true }}
                label="Employee ID"
                value={id}
                variant="outlined"
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
                    firstname,
                    lastname,
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
