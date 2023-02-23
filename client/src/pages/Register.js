import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./register.css";
import axios from "axios";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  makeStyles,
  Button,
} from "@material-ui/core";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const useStyle=makeStyles({
  register:{
    width: "400px",
    height:"430px",
    background: "#fff",
    border:" 1px solid #dddfe2",
    boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
    borderRadius: "8px",
    margin: "auto",
    marginTop:"200px",
    padding: "1rem",
    textAlign: "center",
    '& .MuiFormControl-root':{
      margin:"6px",
      width:'92%'
    },
    '& .MuiButton-containedPrimary':{
      width:"86%",
      marginTop:"2px",
    }
  }


})
const Register = () => {
  const classes=useStyle()
  const history = useHistory();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    reEnterePassword: "",
    showPassword: "true",
  });
  const HandleChangeLogin = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    setValues({
      ...values,
      [name]: value,
    });
  };
  const register = (event) => {
    const { name, email, password, reEnterePassword } = values;
    if (
      name &&
      email &&
      password &&
      reEnterePassword &&
      password === reEnterePassword
    ) {
      axios.post("http://localhost:8000/register", values).then((res) => {
        alert(res.data.message);
        history.push("/login");
      });
    } else alert("inavalid input");
    event.preventDefault();
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

  return (
    <div className={classes.register}>
      {console.log("values", values)}
      <h1>Sign Up</h1>
      <TextField
        name="name"
        value={values.name}
        variant="outlined"
        label="name"
        onChange={HandleChangeLogin}
      ></TextField>
      
      <TextField
        name="email"
        value={values.email}
        variant="outlined"
        label="email"
        onChange={HandleChangeLogin}
      ></TextField>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          name="password"
          value={values.password}
          type={values.showPassword ? "password" : "text"}
          onChange={HandleChangeLogin}
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
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">reEnterePassword</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          name="reEnterePassword"
          value={values.reEnterePassword}
          type={values.showPassword ? "password" : "text"}
          onChange={HandleChangeLogin}
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
          label="reEnterePassword"
        />
      </FormControl>

      <Button variant="contained" color="primary" onClick={register}>Register</Button>
      <br />
        <div className="Or">or</div>
        <div className="loginnewuser">
       <p> Existing User ? </p>&nbsp;&nbsp;
        <Link
          className="signUp"
          variant="contained"
          color="primary"
          onClick={() => history.push("/login")}
        >
          Login
        </Link>
        </div>
    </div>
  );
};

export default Register;
