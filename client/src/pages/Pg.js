import React from "react";
import { Box, Button,   FormControl, FormControlLabel, FormLabel, InputLabel, makeStyles, MenuItem, Radio, RadioGroup, Select, TextField } from "@material-ui/core";
import axios from "axios";
// import Card from '../components/Card'
// import { btoa } from "buffer";
import { useState } from "react";
// import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Home from "./Home";
import './pg.css'
import CardPg from "../components/CardPg";

const useStyle=makeStyles({
  root:{
    margin:"10px",
    // position: "relative",
    '& .MuiFormControl-root':{
      width:"40%",
      display:"flex",
      // margin:"17px",
      marginBottom:"20px"
      // left:"30%"  
    },
    '& .MuiCardMedia-media':{
      width:"20%"
    },
    '& .MuiButtonBase-root':{
      // left:"20%",
      // marginTop:'15px'
      
    }

  },
  
})

const Pg = ({user}) => {
  const [displayPg,setDisplayPg]=useState(false)
  const [displayDetail,setDisplayDetail]=useState(true)
  const [values,setValues]=useState({
    name:"",
    select:"",
    
  })
  const HandleChangeLogin=(e)=>{
    const {name,value}=e.target;
    setValues({
      ...values,
      [name]:value
    })
  }
  console.log(values)
  const [data,setData]=useState([])
  const SubmitHandler=(e)=>{
    setDisplayDetail(false)
    setDisplayPg(true)
    console.log(displayPg);
    axios.post("http://localhost:8000/pg",values).then(res=>{
      // if(res.data.items.length===0){
      // alert(res.data.message)}
      console.log(res.data)
      setData(res.data.items)
    }).catch(err=>console.log(err))
    
  }
  const classes=useStyle()
  return (
    <div>
      <Header user={user}/>
      {displayDetail ?
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ margin: "auto" }}
          >
            PG Form
          </Typography>
        </Toolbar>
      </AppBar> */}
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
          label="Months" name="select" value={values.select} onChange={HandleChangeLogin}>
            <MenuItem value="gandhinager">gandhinager</MenuItem>
            <MenuItem value="Ahemdabad">Ahmedabad</MenuItem>
            <MenuItem value="amreli">amreli</MenuItem>
            <MenuItem value="surat">surat</MenuItem>
            <MenuItem value="vadodra">vadodra</MenuItem>

          </Select>
        </FormControl>
        <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup
      row
        defaultValue="male"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    <TextField
        name="collageName"
        variant="outlined"
        label="collage"
        // onChange={HandleChangeLogin}
        ></TextField>
         <Button variant="contained" color="primary" onClick={SubmitHandler}>
        submit
      </Button>
        </form>
        
        {/* {Array.from(data1).map(singleData=>{
          console.log(singleData)
          return(
            <div key={singleData._id}>
               <h1>{singleData.name}</h1>
            </div>
           
          )
        })} */}
    </Box>:''}
    <div className="pg">
    {Array.from(data).map(singleData=>{
         return(
          <div >
      <div className={classes.root}>
      {/* <h1>{singleData.name}</h1> */}
      {/* <h1>{singleData.select}</h1> */}
       {/* <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      component="img"
      width="140"
      height="140"
      image={singleData.file}
      alt="green iguana"
      />
     
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {singleData.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}
    {/* <Link to={{pathname:singleData.file}} target="_blank">
      </Link> */}
    <CardPg
    id={singleData._id}  
    title={singleData.name}
    imageUrl={singleData.file}
    body={singleData.price}
    />
       </div>
       </div>
         )
    
  }
    )} 
    </div>
    <Footer/>
    </div>

  );
};

export default Pg;
