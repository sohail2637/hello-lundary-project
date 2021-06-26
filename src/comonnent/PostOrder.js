import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Typography,
  Button,
  Box,
  OutlinedInput,
  TextareaAutosize,
  Input,
} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";
import { orderdata } from "../redux/client-reducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
  navBarContainer: {
    width: "100%",

    backgroundSize: "cover",
    backgroundPosition: "center",
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(/assets/images/registerimg.png)",
  },
  formContainer: {
    marginTop: "4rem",
    marginBottom: "3rem",
    paddingLeft: "10rem",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0rem",
      paddingRight: "0rem",
    },

    paddingRight: "10rem",
  },
  inputLbel: {
    paddingLeft: "0.8rem",
    fontSize: "18px",
    color: "#243028",
  },

  seeBtn: {
    backgroundColor: "#92bd3e",
    width: "100%",
    textTransform: "capitalize",
    borderRadius: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 35,
    textAlign: "center",
    color: "#fff",
    // marginLeft: "0.5rem",
    "&:hover": {
      backgroundColor: "#094FA3",
    },
  },
  firstLine: {
    backgroundColor: "red",
    width: "117px",
    height: "0px",
    // marginTop: "3rem",
    border: "0.5px solid #555555",
  },

  RegisterContent: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 70,
    paddingBottom: 100,
  },

  security: {
    fontSize: "64px",
    fontFamily: "Spartan",
    color: "#232323",
    lineHeight: 1,
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
      fontWeight: "500",
    },
  },
  boxContainer: {
    width: "450px",
    height: "auto",
    border: "1px solid #f33f3f",
    textAlign: "left",
    marginTop: "1rem",
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
      padding: "0.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.4rem",
    },
  },
  uplodimg: {
    width: "350px",
    height: "350px",
  },
  orContainer: {
    color: theme.lightGray,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 7,
  },
}));

const PostOrder = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [data, setData] = useState({ order: [] });
  const history = useHistory();
  const [state, setState] = useState({
    fullname: "",
    email: "",
    address: "",
    deliveryContact: "",
    postalCode: "",
    descraption: "",
    quantitey: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    console.log({ [name]: event.target.value });
  };

  // useEffect(() => {
  //   setData([{ order: state },order]);
  // }, [state]);
  const submationform = (event) => {
    event.preventDefault();
    console.log(state);
    axios.post("/lundryorder", state).then((res) => {
      console.log(res);
      if (res.data.msg === "Order Saved") {
        alert("Order Serve");
        history.push("/");
      }
    }).catch(error => console.log(error));

    // dispatch(orderdata(state));

    // axios
    //   .post("/signup", data)
    //   .then((res) => console.log("api respons: ", res));
  };
  return (
    <div>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} lg={6} className={classes.formContainer}>
            <Container maxWidth="md">
              <form onSubmit={submationform}>
                <Typography style={{ marginTop: "1rem", textAlign: "left" }}>
                  <label for="fname" className={classes.inputLbel}>
                    Full Name
                  </label>
                </Typography>

                <TextField
                  fullWidth
                  required
                  onChange={handleChange}
                  name="fullname"
                  placeholder="Full Name"
                  id="outlined-helperText"
                  variant="outlined"
                />

                <Typography
                  variant="h6"
                  style={{ marginTop: "1rem", textAlign: "left" }}
                >
                  <label for="fname" className={classes.inputLbel}>
                    Mobile Number
                  </label>
                </Typography>
                <OutlinedInput
                  type="tel"
                  fullWidth
                  id="outlined-helperText"
                  onChange={handleChange}
                  required
                  name="deliveryContact"
                  placeholder="Mobile number"
                  pattern="[0-9]{3}-&nbsp;[0-9]{2}-[0-9]{3}"
                  variant="outlined"
                />
                <Typography style={{ marginTop: "1rem", textAlign: "left" }}>
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Email
                  </label>
                </Typography>

                <TextField
                  fullWidth
                  id="outlined-helperText"
                  required
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  variant="outlined"
                />
                <Typography style={{ marginTop: "1rem", textAlign: "left" }}>
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Address
                  </label>
                </Typography>
                <TextField
                  fullWidth
                  required
                  onChange={handleChange}
                  name="address"
                  placeholder="Address"
                  id="standard-multiline-static"
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <Typography style={{ marginTop: "1rem", textAlign: "left" }}>
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Quantitey of Product
                  </label>
                </Typography>

                <TextField
                  fullWidth
                  type="number"
                  id="outlined-helperText"
                  required
                  placeholder="quantitey"
                  onChange={handleChange}
                  name="quantitey"
                  variant="outlined"
                />

                <Typography style={{ marginTop: "1rem", textAlign: "left" }}>
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Description About work
                  </label>
                </Typography>
                <TextField
                  fullWidth
                  required
                  onChange={handleChange}
                  name="descraption"
                  placeholder="descraption"
                  id="standard-multiline-static"
                  multiline
                  rows={4}
                  variant="outlined"
                />

                <Typography style={{ marginTop: "1rem", textAlign: "left" }}>
                  <label for="fname" className={classes.inputLbel}>
                    Postal Code
                  </label>
                </Typography>

                <TextField
                  fullWidth
                  type="number"
                  onChange={handleChange}
                  name="postalCode"
                  placeholder="Postal Code"
                  required
                  id="outlined-helperText"
                  variant="outlined"
                />
                <Button
                  fullWidth={true}
                  type="submit"
                  className={classes.seeBtn}
                  fullWidth
                >
                  Continue Shipping
                </Button>
              </form>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              ></Box>
              {/* </div> */}
            </Container>
          </Grid>

          <Hidden xsDown>
            <Grid item xs={12} lg={6} className={classes.navBarContainer}>
              <div className={classes.RegisterContent}>
                <Box>
                  <img src="/aboutbg.jpg" className={classes.uplodimg} />
                </Box>
                <Box>
                  <Typography variant="h6">{state.fullName}</Typography>
                </Box>
                <Box className={classes.boxContainer}>
                  <Typography
                    variant="h5"
                    style={{
                      fontFamily: "Spartan",
                      color: "#232323",
                    }}
                  >
                    MobilNumber :&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ color: "#f33f3f" }}>
                      {state.deliveryContact}
                    </span>
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{
                      fontFamily: "Spartan",
                      color: "#232323",
                    }}
                  >
                    Postal code :&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ color: "#f33f3f" }}>{state.postalCode}</span>
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{
                      fontFamily: "Spartan",
                      color: "#232323",
                    }}
                  >
                    Quantitey of clouth :&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ color: "#f33f3f" }}>{state.quantitey}</span>
                  </Typography>

                  <Typography
                    variant="h5"
                    style={{
                      fontFamily: "Spartan",
                      color: "#232323",
                    }}
                  >
                    Email :&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ color: "#f33f3f" }}>{state.email}</span>
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{
                      fontFamily: "Spartan",
                      color: "#232323",
                    }}
                  >
                    Address :&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ color: "#f33f3f" }}>{state.address}</span>
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{
                      fontFamily: "Spartan",
                      color: "#232323",
                    }}
                  >
                    Descraption About Work :&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ color: "#f33f3f" }}>
                      {state.descraption}
                    </span>
                  </Typography>
                </Box>
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
};
export default PostOrder;
