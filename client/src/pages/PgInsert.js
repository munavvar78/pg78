import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
const useStyle = makeStyles({
  root: {
    margin: "10px",
    "& .MuiFormControl-root": {
      width: "30%",
      display: "flex",
      margin: "7px",
    },
    "& .MuiBox-root": {
      display: "flex",
      flexDirection: "column",
    },
  },
});
const PgInsert = () => {
  const [state, setState] = useState({
    curfew: false,
    studyroom: false,
    deposite: false,
    visitorallowed: false,
    meals: false,
    kitchen: false,
    freeparking: false,
    reception: false,
    elveter: false,
    carparking: false,
  });
  const [values, setValues] = useState({
    name: "",
    select: "",
    file: "",
    price: "",
    description: "",
    address: "",
    number: "",
  });
  const classes = useStyle();
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setState({
      ...state,
      [name]: e.target.checked,
    });
  };
  const SubmitHandler = (event) => {
    const formData = new FormData();
    formData.append("file", values.file);
    formData.append("name", values.name);
    formData.append("select", values.select);
    formData.append("price", values.price);
    formData.append("number", values.number);
    formData.append("aboutus", values.aboutus);
    formData.append("location", values.location);
    formData.append("product", values.product);
    formData.append("address", values.address);
    formData.append("curfew", state.curfew);
    formData.append("studyroom", state.studyroom);
    formData.append("deposite", state.deposite);
    formData.append("visitorallowed", state.visitorallowed);
    formData.append("meals", state.meals);
    formData.append("kitchen", state.kitchen);
    formData.append("freeparking", state.freeparking);
    formData.append("reception", state.reception);
    formData.append("elveter", state.elveter);
    formData.append("carparking", state.carparking);
    console.log(formData);
    const { name, select } = values;
    if (name && select) {
      axios.post("http://localhost:8000/pginsert", formData).then((res) => {
        event.preventDefault();
        alert(res.data.message);
      });
    } else {
      alert("invalid input");
      event.preventDefault();
    }
  };
  return (
    <div className={classes.root}>
      <TextField
        name="name"
        label="name"
        value={values.name}
        variant="outlined"
        onChange={HandleChange}
      ></TextField>
      <TextField
        name="price"
        type="number"
        value={values.price}
        variant="outlined"
        label="price"
        onChange={HandleChange}
      ></TextField>
      <TextField
        name="number"
        type="text"
        variant="outlined"
        value={values.number}
        label="Contact"
        onChange={HandleChange}
      ></TextField>
      <TextField
        name="address"
        type="text"
        variant="outlined"
        label="address"
        onChange={HandleChange}
      ></TextField>
      <TextField
        name="aboutus"
        type="text"
        multiline={true}
        variant="outlined"
        label="About Us"
        onChange={HandleChange}
      ></TextField>
      <TextField
        name="location"
        type="text"
        multiline={true}
        variant="outlined"
        label="Location and OverView"
        onChange={HandleChange}
      ></TextField>
      <TextField
        name="product"
        type="text"
        multiline={true}
        variant="outlined"
        label="product and service"
        onChange={HandleChange}
      ></TextField>
      <FormControl>
        <InputLabel>city</InputLabel>
        <Select
          onChange={HandleChange}
          label="Months"
          name="select"
          value={values.select}
        >
          <MenuItem value="gandhinager">gandhinage</MenuItem>
          <MenuItem value="ahmedabad">Ahmedabad</MenuItem>
          <MenuItem value="amreli">amreli</MenuItem>
          <MenuItem value="surat">surat</MenuItem>
          <MenuItem value="vadodra">vadodra</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ display: "flex" }}>
        <FormControlLabel
          control={<Checkbox onChange={HandleChange} name="curfew" />}
          label="No Curfew"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChange} name="studyroom" />}
          label="Study Room"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChange} name="deposite" />}
          label="Security Deposite"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChange} name="visitorallowed" />}
          label="Visiter Allowed"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChange} name="meals" />}
          label="Meals Available"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChange} name="kitchen" />}
          label="Kitchen"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChange} name="freeparking" />}
          label="Free Parking"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChange} name="reception" />}
          label="24 Hourse Reception"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChange} name="elveter" />}
          label="Elveter"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChange} name="carparking" />}
          label="Car Parking"
        />
      </Box>

      <TextField
        name="file"
        type="text"
        label="url"
        onChange={HandleChange}
      ></TextField>
      <Button variant="contained" color="primary" onClick={SubmitHandler}>
        submit
      </Button>
    </div>
  );
};

export default PgInsert;
