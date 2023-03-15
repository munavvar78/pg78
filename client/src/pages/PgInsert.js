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
      marginBottom:"14px",
      marginLeft:"12px"
    },
    "& .MuiBox-root": {
      flexWrap:"wrap"
    },
    "& .MuiButtonBase-root":{
      marginBottom:"1px",
    },
    '& .MuiButton-label':{
      fontWeight:"bold",
    },
    '& .MuiButton-label:hover':{
      color:"black",
    },
    '& .MuiFormControlLabel-root':{
      marginLeft:'0px'
    }
  },
});
const PgInsert = ({user,setPgsOwner}) => {
  console.log(user.tokens[0].token);
  const [pgdetail,setPgdetail]=useState(false);
  const [values, setValues] = useState({
    name: "",
    select: "",
    gender:"",
    numberbed:"",
    file: "",
    nearcollege:"",
    price: "",
    address: "",
    deposite: "",
    number: "",
    token:user.tokens[0].token,
    wifi: false,
    powerbackup: false,
    roomcleaning: false,
    carparking: false,
    parking: false,
    reception: false,
    ac:false,
    meals: false,
    kitchen: false,
    lift: false,
    noticeperiod:false,
    foodcharges:false,
    getclosingtime:false,
    smoking:false,
    foodavailable:false,
    visitorentry:false,
    nonvegfood:false,
    oppositegender:false,
    loudmusic:false,
    drinking:false,
    party:false
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
        name="numberbed"
        type="number"
        variant="outlined"
        label="Total Number Of Bed"
        onChange={HandleChange}
      ></TextField>
       <FormControl>
        <InputLabel>Gender</InputLabel>
        <Select
          onChange={HandleChange}
          label="Months"
          name="gender"
          value={values.gender}
        >
          <MenuItem value="Boys">Boys</MenuItem>
          <MenuItem value="Girls">Girls</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>city</InputLabel>
        <Select
          onChange={HandleChange}
          label="Months"
          name="select"
          value={values.select}
        >
          <MenuItem value="Gandhinager">Gandhinage</MenuItem>
          <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
          <MenuItem value="Amreli">Amreli</MenuItem>
          <MenuItem value="Surat">Surat</MenuItem>
          <MenuItem value="Vadodra">Vadodra</MenuItem>
        </Select>
      </FormControl>
      <TextField
        name="nearcollege"
        type="text"
        multiline={true}
        variant="outlined"
        label="Near By College"
        onChange={HandleChange}
      ></TextField>
      <div className="pginsertfacility">
        <div>
          <h2>Comman Area And Amenities</h2>
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="wifi" />}
          label="Wifi"
          />
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="powerbackup" />}
          label="Power Backup"
          />
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="roomcleaning" />}
          label="Room Cleaning Service"
          />
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="parking" />}
          label="Parking"
          />
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="ac" />}
          label="Ac Room"
          />
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="lift" />}
          label="Lift"
          />
          </div>
          <div>
            <h2>Food And Kitchen</h2>
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="foodavailable" />}
          label="Food Available"
          />
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="meals" />}
          label="Meals Available"
          />
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="foodcharges" />}
          label="Food Charges"
        />
          </div>
          <div>
            <h2>Other Charges</h2>
        <h4>Deposite Amount:</h4>
        <TextField
        name="deposite"
        type="number"
        variant="outlined"
        label="Deposite Amount"
        onChange={HandleChange}
      ></TextField>
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="carparking" />}
          label="Car Parking"
        />
        </div>
        <div>
          <h2>House Rules</h2>
        <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="noticeperiod" />}
          label="Notice Period"
        />
         <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="getclosingtime" />}
          label="Gate Closing Time"
        />
         <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="visitorentry" />}
          label="Visitor Entery"
        />
         <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="nonvegfood" />}
          label="Non-Veg Food"
        />
         <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="oppositegender" />}
          label="Opposite Gender"
        />
         <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="loudmusic" />}
          label="Loud Music"
        />
         <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="smoking" />}
          label="Smoking"
        />
         <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="drinking" />}
          label="Drinking"
        />
         <FormControlLabel
          control={<Checkbox onChange={HandleChangeChecked} name="party" />}
          label="Party"
        />
        </div>

      <TextField
        name="file"
        type="text"
        label="Image Url"
        onChange={HandleChange}
        ></TextField>
        
      <Button variant="contained" style={{width:"35%"}} color="primary" onClick={SubmitHandler}>
        submit
      </Button>
        </div>
      </div>
      :""}
      <Footer/>
    </div>
  );
};

export default PgInsert;
