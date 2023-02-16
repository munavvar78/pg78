import React from "react";
import "./login.css";
import {
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  InputLabel,
  OutlinedInput,
  FormControl,
  Button,
} from "@material-ui/core";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
  crossorigin="anonymous"
/>;
const useStyle = makeStyles({
  login: {
    width: "400px",
    background: "#fff",
    border: "1px solid #dddfe2",
    boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
    borderRadius: "8px",
    margin: "auto",
    marginTop: "200px",
    padding: "1rem",
    alignItems: "center",
    textAlign: "center",
    "& .MuiFormControl-root": {
      width: "100%",
      margin: "8px",
    },
    // "& .MuiButton-label":{
    //   color:"black",
    //   fontWeight:510,
    //   fontSize:"15px"
    // },
    "& .MuiButton-containedPrimary": {
      width: "92%",
      marginTop: "5px",
    },
  },
});
const Login = ({ setLoginUser }) => {
  const classes = useStyle();
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: "true ",
  });
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const login = () => {
    const { email, password } = values;
    if (email && password) {
      axios.post("http://localhost:8000/login", values).then((res) => {
        console.log(res.data.user);
        alert(res.data.message);
        setLoginUser(res.data.user);
        history.push("/");
      });
    } else alert("invalid input");
  };
  return (
    <div className="loginform">
      <div className={classes.login}>
        {console.log("user", values)}
        <h1>Login</h1>
        <TextField
          name="email"
          value={values.email}
          variant="outlined"
          label="email"
          onChange={HandleChange}
        ></TextField>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name="password"
            value={values.password}
            type={values.showPassword ? "password" : "text"}
            onChange={HandleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained" color="primary" onClick={login}>
          Login
        </Button>
        <br />
        <div className="Or">or</div>
        <div className="loginnewuser">
       <p> New User ? </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link
          className="signUp"
          variant="contained"
          color="primary"
          onClick={() => history.push("/register")}
        >
          Register
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
