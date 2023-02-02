import React from "react";
import "./homecontent.css";
import MovingComponent from 'react-moving-text'
const HomeContent = () => {
  return (
    <div className="container">
    <MovingComponent
  type="unfold"
  duration="1700ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
  <h1>A Student Website,
    <br/>
    For the student
    <br></br>
    To Help Find PG
  </h1>
</MovingComponent>
    <img src="https://www.gopgo.in/assets/new_ui/img/homeHerobanner2-9cfde120a0850d3b0b4d366dc1381739cb1005642cd80566f7ccaf78e1b610e0.png" alt="img" 
    className="image"></img>
    </div>

  );
};

export default HomeContent;
