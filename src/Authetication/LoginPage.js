import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography, Button, Box } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // height: "120vh",
  },
  container: {
    width: "40%",
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
    // backgroundColor: "#92bd3e",
    paddingLeft: "10rem",
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
    border: "1px solid #094FA3",
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
}));

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    console.log({ [name]: event.target.value });
  };
  const submationform = (event) => {
    event.preventDefault();
    console.log(state);
    // history.push("/");
    axios
      .post("/login", state)
      .then((res) => {
        console.log("api respons: ", res);
        if (res.data.type == "admin") {
          history.push("/admin");
        } else if (res.data.msg === "User Found") {
          history.push("/");
        } else {
          alert(res.data.msg);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} lg={12} className={classes.formContainer}>
            <Container className={classes.container}>
              <form onSubmit={submationform}>
                <Typography
                  variant="h6"
                  style={{ marginTop: "1rem", textAlign: "left" }}
                >
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Email
                  </label>
                </Typography>

                <TextField
                  fullWidth
                  type="email"
                  placeholder="Email"
                  name="email"
                  style={{
                    backgroundColor: "#92bd3e",
                    fontSize: "18px",
                    color: "#fff",
                  }}
                  required
                  onChange={handleChange}
                  id="outlined-helperText"
                  variant="outlined"
                />
                <Typography
                  variant="h6"
                  style={{
                    marginTop: "1rem",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Password
                  </label>
                </Typography>

                <TextField
                  fullWidth
                  required
                  style={{
                    backgroundColor: "#92bd3e",
                    fontSize: "18px",
                    color: "#fff",
                  }}
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
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
                <span style={{ paddingRight: 20, paddingLeft: 20 }}>OR</span>
                <div className={classes.firstLine} />
              </Box>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              >
                <Typography>
                  Don't have account? <Link to="/signup">Register</Link>
                </Typography>
              </Box>
              {/* </div> */}
            </Container>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default LoginPage;
