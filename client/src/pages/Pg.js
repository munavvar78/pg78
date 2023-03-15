import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./pg.css";
import CardPg from "../components/CardPg";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
  root: {
    margin: "10px",
    "& .MuiFormControl-root": {
      width: "40%",
      display: "flex",
      marginBottom: "20px",
    },
    "& .MuiCardMedia-media": {
      width: "20%",
    },
    "& .MuiButtonBase-root": {},
  },
});

const Pg = ({ user, setPath }) => {
  const history = useHistory();
  console.log(history);
  setPath(history.location.pathname);
  const [displayPg, setDisplayPg] = useState(false);
  const [displayDetail, setDisplayDetail] = useState(true);
  const [values, setValues] = useState({
    name: "",
    select: "",
  });
  const HandleChangeLogin = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  console.log(values);
  const [data, setData] = useState([]);
  const SubmitHandler = (e) => {
    setDisplayDetail(false);
    setDisplayPg(true);
    console.log(displayPg);
    axios
      .post("http://localhost:8000/pg", values)
      .then((res) => {
        console.log(res.data);
        setData(res.data.items);
      })
      .catch((err) => console.log(err));
  };
  const classes = useStyle();
  return (
    <div>
      <Header user={user} />
      {displayDetail ? (
        <Box sx={{ flexGrow: 1 }}>
          <h1>Hyy,{user.name} Find Your Pg on This Site</h1>
          <form className={classes.root}>
            <TextField
              name="name"
              value={values.name}
              variant="outlined"
              label="name"
              onChange={HandleChangeLogin}
            ></TextField>
            <FormControl>
              <InputLabel>city</InputLabel>
              <Select
                label="Months"
                name="select"
                value={values.select}
                onChange={HandleChangeLogin}
              >
                <MenuItem value="Gandhinager">Gandhinager</MenuItem>
                <MenuItem value="Ahemdabad">Ahmedabad</MenuItem>
                <MenuItem value="Amreli">Amreli</MenuItem>
                <MenuItem value="Surat">Surat</MenuItem>
                <MenuItem value="Vadodra">Vadodra</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup row defaultValue="male" name="radio-buttons-group">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              name="collageName"
              variant="outlined"
              label="collage"
            ></TextField>
            <Button variant="contained" color="primary" onClick={SubmitHandler}>
              submit
            </Button>
          </form>
        </Box>
      ) : (
        ""
      )}
      <div className="pg">
        {Array.from(data).map((singleData) => {
          return (
            <div>
              <div className={classes.root}>
                <CardPg
                  id={singleData._id}
                  name={singleData.name}
                  imageUrl={singleData.file}
                  setPath="/pg"
                  price={singleData.price}
                  address={singleData.address}
                  city={singleData.select}
                  college={singleData.nearcollege}
                />
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Pg;
