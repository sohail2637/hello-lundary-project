import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Typography,
  Button,
  Box,
  OutlinedInput,
} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory } from "react-router-dom";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // height: "120vh",
  },
  container: {
    width: "40%",
    fontSize: "22px",
    color: "#fff",
    "@media only screen and (max-width: 600px)": {
      width: "100%",
    },
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
    backgroundColor: "#92bd3e",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0rem",
      paddingRight: "0rem",
    },

    paddingRight: "10rem",
  },
  inputLbel: {
    paddingLeft: "0.8rem",
    fontSize: "14px",
    color: "#243028",
  },
  datafield: {
    backgroundColor: "#92bd3e",
    fontSize: "18px",
    lineHeight: "20px",
    color: "#fff",
  },
  "#outlined-helperText": {
    color: "#fff",
  },
  seeBtn: {
    backgroundColor: "#92bd3e",
    width: "100%",
    textTransform: "capitalize",
    borderRadius: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 35,
    fontSize: "18px",
    color: "#fff",
    textAlign: "center",
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
    width: "auto",
    height: "auto",
    border: "1px solid #f33f3f",
    marginTop: "1rem",
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
      padding: "0.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.4rem",
    },
  },
  orContainer: {
    color: theme.lightGray,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 7,
  },
  formControl: {
    width: "100%",
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  uplodimg: {
    width: "350px",
    height: "350px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SignupPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    UserName: "",
    email: "",
    password: "",
    mobileNumber: null,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    console.log({ [name]: event.target.value });
  };
  const onImageChange = (event) => {
    event.preventDefault();
    console.log(event.target.files[0].name);
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setState({
        ...state,
        image: URL.createObjectURL(img),
      });
    }
  };
  const submationform = (event) => {
    event.preventDefault();
    console.log(state);
    // history.push("/login");
    // const formdata = new FormData();
    // formdata.append('data', state);
    axios
      .post("/signup", state)
      .then((res) => {
        if (res.data.msg === "Signed Up...!") {
          history.push("/login");
          console.log("api respons: ", res.data.msg);
        } else {
          alert(res.data.msg);
        }
        console.log({ res });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} lg={12} c lassName={classes.formContainer}>
            <Container className={classes.container}>
              {/* <div className={classes.Regform}> */}
              <form onSubmit={submationform}>
                <Typography
                  variant="h6"
                  style={{ textAlign: "left", marginTop: "1rem" }}
                >
                  <label for="fname" className={classes.inputLbel}>
                    User Name
                  </label>
                </Typography>

                <TextField
                  className={classes.datafield}
                  onChange={handleChange}
                  required
                  fullWidth
                  placeholder="First Name"
                  id="outlined-helperText"
                  variant="outlined"
                  name="UserName"
                />

                <Typography
                  variant="h6"
                  style={{ marginTop: "1rem", textAlign: "left" }}
                >
                  <label for="fname" className={classes.inputLbel}>
                    Mobile Number
                  </label>
                </Typography>
                {/* ...........input mobile number......... */}
                <OutlinedInput
                  className={classes.datafield}
                  type="tel"
                  fullWidth
                  required
                  id="outlined-helperText"
                  onChange={handleChange}
                  name="mobileNumber"
                  placeholder="Mobile number"
                  pattern="[0-9]{3}-&nbsp;[0-9]{2}-[0-9]{3}"
                  variant="outlined"
                />
                <Typography
                  variant="h6"
                  style={{
                    marginTop: "1rem",
                    textAlign: "left",
                    fontSize: "22px",
                  }}
                >
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Email
                  </label>
                </Typography>

                <TextField
                  className={classes.datafield}
                  onChange={handleChange}
                  fullWidth
                  required
                  placeholder="Email"
                  id="outlined-helperText"
                  variant="outlined"
                  name="email"
                  // InputProps={{
                  //   readOnly: true,
                  // }}
                />

                <Typography
                  variant="h6"
                  style={{ marginTop: "1rem", textAlign: "left" }}
                >
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Password
                  </label>
                </Typography>

                <TextField
                  className={classes.datafield}
                  onChange={handleChange}
                  fullWidth
                  required
                  name="password"
                  placeholder="password"
                  type="password"
                  id="outlined-helperText"
                  variant="outlined"
                />

                <Button
                  type="submit"
                  fullWidth={true}
                  className={classes.seeBtn}
                  fullWidth
                >
                  Submit
                </Button>
              </form>

              <Box className={classes.orContainer}>
                <div className={classes.firstLine} />
                <span
                  style={{ paddingRight: 20, paddingLeft: 20, color: "#000" }}
                >
                  OR
                </span>
                <div className={classes.firstLine} />
              </Box>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              >
                <Typography style={{ color: "#000" }}>
                  Already have account? <Link to="/login">Login</Link>
                </Typography>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default SignupPage;
