import React, { useState, useEffect } from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid, Button } from "@material-ui/core";
// import SimpleModal from "./detailModel";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Typography } from "@material-ui/core";
import axios from "axios";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "90%",
    margin: "4% auto",
  },
  paper: {
    padding: theme.spacing(2),
    height: "150px",
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#EEEEEE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    color: "#3F51B5",
    textTransform: "uppercase",
  },
  roottable: {
    maxWidth: "100%",
    margin: " 3% auto 6% auto",
    fontFamily: "sans-serif",
    color: "#fff",
  },

  papersearch: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#fff",
  },
  titlesearch: {
    color: "#007bff",
    textTransform: "uppercase",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "700",
  },
  recovered: {
    // backgroundColor: "#BCE5BA",
    borderLeft: "2px solid #fff",
  },
  deaths: {
    // backgroundColor: "#F5B3B1",
    borderLeft: "2px solid #fff",
  },
  cases: {
    // backgroundColor: "#ABE9ED",
    borderLeft: "2px solid #fff",
  },
  active: {
    // backgroundColor: "#B3DDEF",
    borderLeft: "2px solid #fff",
  },
  critical: {
    // backgroundColor: "#FBF2E9",
    borderLeft: "2px solid #fff",
  },
  employtitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchfield: {
    maxWidth: "30%",
    margin: "15px 0px",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#EEEEEE",
    "&:hover": {
      backgroundColor: "#a7acb8",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // cursor:"pointer",
  },
  tablebody: {
    minHeight: "400px",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    maxWidth: "85%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#243028",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const AdminPanal = () => {
  const classes = useStyles();
  const [employ, setEmploy] = useState("seller");
  const [totalorder, setTotal] = useState();
  const selecterdata = useSelector((state) => {
    console.log("sellector data", state.client.orderList);
    return state.client.orderList;
  });

  const setlength = (value) => {
    setTotal(value);
  };
  const viewInfo = (employ) => {
    setEmploy(employ);
    console.log(employ);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={6}>
          <Paper elevation={3} className={classes.paper}>
            <h3 className={classes.title}>ALTERATION SERVICE</h3>
            <h3>
              {" "}
              Not necessarily every clothing that we purchase would fit us, yes
              indeed we often check the size of clothes{" "}
            </h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper
            elevation={3}
            className={classes.paper}
            onClick={() => viewInfo("client")}
          >
            <h3 className={classes.title}> WASH & IRON SERVICE</h3>
            <h3>
              {" "}
              Hello Laundry, is a professional laundry, dry cleaning and ironing
              service company in Essex & London.
            </h3>
          </Paper>
        </Grid>
      </Grid>

      <div className={classes.roottable}>
        <Admindata status={employ} />
      </div>
    </div>
  );
};

export default AdminPanal;

const Admindata = ({ status }) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [deliver, setDeliver] = useState(0);

  const selecterdata = useSelector((state) => {
    console.log("sellector data", state.client.orderList);
    return state.client.orderList;
  });
  console.log("list for admin data", selecterdata);

  useEffect(() => {
    axios
      .post("/showorder")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deliveroreder = (userId) => {
    // console.log(JSON.parse({userid}));
    // const userId = JSON.parse({ userid });
    axios
      .delete("/deleteorder", userId)
      .then((res) => {
        console.log("uaer id for delete", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#92bd3e",
      color: theme.palette.common.white,
      fontSize: "18px",
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Fullname</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Contact No</StyledTableCell>
            <StyledTableCell align="center">PostalCode</StyledTableCell>
            <StyledTableCell align="center">Descraption</StyledTableCell>
            <StyledTableCell align="center">Quantitey</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tablebody}>
          {data.map((item, index) => {
            return (
              <StyledTableRow key={index}>
                <StyledTableCell
                  align="center"
                  component="th"
                  scope="row"
                  className={classes.titlesearch}
                >
                  {item.fullname}
                </StyledTableCell>
                <StyledTableCell align="center" className={classes.recovered}>
                  {item.email}
                </StyledTableCell>
                <StyledTableCell align="center" className={classes.recovered}>
                  {item.address}
                </StyledTableCell>
                <StyledTableCell align="left" className={classes.deaths}>
                  {item.deliveryContact}
                </StyledTableCell>
                <StyledTableCell align="center" className={classes.deaths}>
                  {item.postalCode}
                </StyledTableCell>
                <StyledTableCell align="center" className={classes.cases}>
                  {item.descraption}
                </StyledTableCell>
                <StyledTableCell align="center" className={classes.cases}>
                  {item.quantitey}
                </StyledTableCell>
                <StyledTableCell align="center" className={classes.cases}>
                  <Button
                    onClick={() => deliveroreder(item._id)}
                    style={{
                      borderRadius: "10px",
                      fontSize: "8px",
                      color: "#fff",
                      backgroundColor: "#cf574e",
                    }}
                  >
                    Deliverd
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
