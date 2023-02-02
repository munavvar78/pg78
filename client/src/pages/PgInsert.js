import { Button, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const useStyle=makeStyles({
    root:{
      margin:"10px",
      '& .MuiFormControl-root':{
        width:"30%",
        display:"flex",
        margin:"7px"
  
      }
    }
  })
const PgInsert = () => {
    const history=useHistory()
    
    // const [image,setImage]=useState({data:""})
    const [values,setValues]=useState({
        name:'',
        select:"",
        file:"",
        price:"",
        description:"",
        address:""
    })
    const classes=useStyle()
    const HandleChange=(e)=>{
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        }); 
      }
      // const FileHandleChange=(e)=>{
      //     const img = {
      //       data: e.target.files[0],
      //     }
      //     setImage(img)
          
      // }
      const SubmitHandler=(event)=>{
        const formData = new FormData()
        formData.append('file', values.file)
        formData.append('name',values.name)
        formData.append('select',values.select)
        formData.append('price',values.price)
        formData.append('description',values.description)
        formData.append('address',values.address)
        console.log(formData)  
        // console.log(data)
        const {name,select}=  values;
        if(name && select ){
          axios.post("http://localhost:8000/pginsert",formData).then((res)=>{
            event.preventDefault()
            alert(res.data.message)
            // history.push('/pg')
          })
        }
        else{
          alert("invalid input")
          event.preventDefault()
        }  
      }
      return (
    <div className={classes.root}>
      <TextField
        name="name"
        label='name'
        value={values.name}
        variant="outlined"
        onChange={HandleChange}
      ></TextField>
       <TextField
        name="price"
        type="number"
        variant="outlined"
        label="price"
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
        name="description"
        type="text"
        multiline={true}
        variant="outlined"
        label="description"
        onChange={HandleChange}
      ></TextField>
      <FormControl>
          <InputLabel>city</InputLabel>
          <Select 
          onChange={HandleChange}
          label="Months" name="select" value={values.select}>
            <MenuItem value="gandhinager">gandhinage</MenuItem>
            <MenuItem value="ahmedabad">Ahmedabad</MenuItem>
            <MenuItem value="amreli">amreli</MenuItem>
            <MenuItem value="surat">surat</MenuItem>
            <MenuItem value="vadodra">vadodra</MenuItem>

          </Select>
        </FormControl>
       
       
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
