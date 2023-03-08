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
import Header from "../components/Header";
import Footer from '../components/Footer';
import emoji from '../components/img/emoji.jpg'
import './PgInsert.css'
const useStyle = makeStyles({
  root: {
    "& .MuiFormControl-root": {
      width: "30%",
      display: "flex",
      marginBottom:"14px",
      marginLeft:"12px"
    },
    "& .MuiBox-root": {
      display: "flex",
      flexDirection: "row",
      flexWrap:"wrap"
    },
    "& .MuiButtonBase-root":{
      marginBottom:"12px",
    },
    '& .MuiButton-label':{
      fontWeight:"bold",
    },
    '& .MuiButton-label:hover':{
      color:"black",
    }
  },
});
const PgInsert = ({user,setPgsOwner}) => {
  console.log(user.tokens[0].token);
  const [pgdetail,setPgdetail]=useState(false);
  const [values, setValues] = useState({
    name: "",
    select: "",
    file: "",
    price: "",
    description: "",
    address: "",
    number: "",
    token:user.tokens[0].token,
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
  const classes = useStyle();
  const HandleClick=(e)=>{
    setPgdetail(!pgdetail);
  }
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const HandleChangeChecked=(e)=>{
    const {name}=e.target
    setValues({
      ...values,
      [name]: e.target.checked,
    });
    
  }
  console.log(values);
  const SubmitHandler = (event) => {
    const { name, select } = values;
    if (name && select) {
      axios.post("http://localhost:8000/pginsert", values).then((res) => {
        event.preventDefault();
        alert(res.data.message);
        setPgsOwner(res.data.newPg)
        console.log(res.data);
      });
    } else {
      alert("invalid input");
      event.preventDefault();
    }
  };
  return (
    <div className={classes.root}>
      <Header user={user}/>
      <div className="pginsert">

      <div className="pginsertheader"> 
      <h1>
        Hyy Pg Owner Welcome to the PgFinder,Plese Fill Your Pg Detail And Collabarte With Us
      </h1>
      <p>Here You Can Fill All Your PG Detail And Grow Your Pg To Mass Population
     Through This Site We Can Help To Many Small Pg Owner To Chance Thier Pg To Grow</p>
     <Button variant="contained" color="primary"   onClick={HandleClick}>Click Here For To Insert Pg Detail</Button>
      </div>
      <div className="pginsertimage">
        <img src={emoji} alt="hii" height="150px" className="pginsertemoji"></img>
      </div>
         </div>
         {
          pgdetail ?
          <div className="pginsertdetail">  
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
          control={<Checkbox onChange={HandleChangeChecked} name="curfew" />}
          label="No Curfew"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="studyroom" />}
          label="Study Room"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="deposite" />}
          label="Security Deposite"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="visitorallowed" />}
          label="Visiter Allowed"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="meals" />}
          label="Meals Available"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="kitchen" />}
          label="Kitchen"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="freeparking" />}
          label="Free Parking"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="reception" />}
          label="24 Hourse Reception"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="elveter" />}
          label="Elveter"
        />
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="carparking" />}
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
      :""}
      <Footer/>
    </div>
  );
};

export default PgInsert;
