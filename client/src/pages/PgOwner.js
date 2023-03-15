import { Button } from '@mui/material';
import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import './pgowner.css'
import CardPg from '../components/CardPg';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
const useStyle=makeStyles({
    root:{
        backgroundColor:"#f1f1f1",
        '&  .MuiButtonBase-root':{
            marginBottom:"35px"
        }
    }
});
const PgOwner = ({user,setPath}) => {
    const history = useHistory();  
    setPath(history.location.pathname) 
    const [state,setState]=useState({
        token:user.tokens[0].token,
    });
    const[display,setDisplay]=useState(false);
    const[data,setData]=useState(false);
    console.log(state);
    const HandleClick=(e)=>{
        setDisplay(!display);
        axios.post("http://localhost:8000/pgowner",state).then((res)=>{
            setData(res.data.items)
            console.log(res.data);
        })
    }
    const classes=useStyle()

  return (
    <div className={classes.root}>
        <Header user={user}/>
        {/* <h1>Hyy,{user.name}</h1>                 */}
        <Button variant="contained" color="primary" onClick={HandleClick}>Click Heare to Check Your Pg</Button>
        { display &&
        <div  className='pgowner'>
        {Array.from(data).map(singleData=>{
            return(
             <div>
       <CardPg
       id={singleData._id}  
       name={singleData.name}
       imageUrl={singleData.file}
       setPath="/pglist"
       price={singleData.price}
       address={singleData.address}
       city={singleData.select}
       college={singleData.nearcollege} 
       />
          </div>
            )
       
     }
       )}
       </div>
        }
        <Footer/>
    </div>
  )
}

export default PgOwner;