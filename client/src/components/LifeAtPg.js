import React, { useState } from "react";
import './lifeatpg.css'
import { Link } from "react-router-dom";

const LifeAtPg=()=> {
    const[community,setCommunity]=useState(true)
    const[comfert,setComfert]=useState(false)
    const[event,setEvent]=useState(false)
    const HandleChangeCommunity=()=>{
        setCommunity(true)
        setComfert(false)
        setEvent(false)
    }
    const HandleChangeComfert=()=>{
      setComfert(true)   
     setCommunity(false)
     setEvent(false)
    }  
    const HandleChangeEvent=()=>{
      setEvent(true)
      setComfert(false)
      setCommunity(false)
    }
    return (
    <div className="lifeatpg">
      <div className="lifeatpglogo">
        <h2>Life at PG</h2>
      </div>
      <div className="lifeatpglink">
        <ul>
            <li>
                <Link to='#' onClick={HandleChangeCommunity}>Community</Link>
            </li>
            <li>
                <Link to='#' onClick={HandleChangeComfert}>Comfortable Living</Link>
            </li>
            <li>
                <Link to='#'onClick={HandleChangeEvent}>Events</Link>
            </li>
        </ul>
      </div>
      <div>
        <div id="#">
           {community? 
           <div className="community">
            <div className="community-box">
            <div className="communityimg">
                <img src="https://www.gopgo.in/assets/new_ui/webp_images/homeLifepgoCommunity-824ff56e481c77930a03ba5a06c8365d9502276fe8f35371f7d3e01538b763b9.webp" alt="hii"></img>
            </div>
            <div className="communitydetail">
                <img src="https://www.gopgo.in/assets/new_look/homeLifeatpgoCommunity-0b97bec3d94d557fdeeca2f20c77580cc76ef3324d482da8ad63c3b3840dd8c4.png" alt="rhr"></img>
                <h3>Commnity</h3>
                <p>Moving to a new city can be daunting.<br/>At PGO we make sure<br/> that you always feel like you belong.</p>
            </div>
            </div>
           </div>
           :''}
            
        </div>
        <div>
        {comfert?<div className="community">
            <div className="community-box">
            <div className="communityimg">
                <img src="https://www.gopgo.in/assets/new_ui/webp_images/homeLifepgoComfortable-b23c965a69af753bc1fcb36ae7644d621c1ae536289ace871f09bce3b1e77c73.webp" alt="hii"></img>
            </div>
            <div className="communitydetail">
                <img src="https://www.gopgo.in/assets/new_look/homeLifepgoComfortableicon-2624ee9214b16c13f21a2a2ea41abe4bac6c6ae3273e3eb2972b47636b841e6f.png" alt="rhr"></img>
                <h3>Comfert Living</h3>
                <p>From comfy beds to plush bean bags, PGO properties<br/> are made for you to unwind after a long day.</p>
            </div>
            </div>
           </div>:''}
        </div>
        <div>
           {event? 
           <div className="community">
            <div className="community-box">
            <div className="communityimg">
                <img src="https://www.gopgo.in/assets/new_ui/webp_images/homeLifepgoEvents-c387abc1e018134c09db687f0b863bfd71086398aa0955b101d991f086a9e83f.webp" alt="hii"></img>
            </div>
            <div className="communitydetail">
                <img src="https://www.gopgo.in/assets/new_look/homeLifepgoEventsicon-2d26681c2f7c1b3758c710a8391ef7c7c97072628043c3b705d6146606215e25.png" alt="rhr"></img>
                <h3>Events</h3>
                <p>We celebrate birthdays, festivals and weekends. Regular<br/>parties and get togethers to make sure we don’t miss out the<br/>fun</p>
            </div>
            </div>
           </div>
           :''}
            
        </div>
      </div>
    </div>

  );
}

export default LifeAtPg;
