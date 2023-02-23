import React, { useEffect } from "react";
import "./homecontent.css";
import MovingComponent from "react-moving-text";
import Aos from "aos";
import 'aos/dist/aos.css';

const HomeContent = () => {
  useEffect (() => {
    Aos.init();
  }, [])
  return (
    <div className="container" data-aos="fade-left">
      <MovingComponent
        className="studenth1"
        type="shadow"
        duration="1000ms"
        delay="1s"
        direction="normal"
        timing="ease-in"
        iteration="2"
        fillMode="none"
      >
        <h1 className="studenth1">
          A Student Website, For The Student To Help Find PG
        </h1>
        <p className="para1">Find your family away from home</p>
        <p className="para">
          HOSTEL LIFE IS FULL OF CRAZY MEMORIES, WITH LITTLE BIT OF GLORY
          COMPARISON TO MANY MORE FAKE THEORIES.
        </p>
      </MovingComponent>
      <img
        src="https://www.gopgo.in/assets/new_ui/img/homeHerobanner2-9cfde120a0850d3b0b4d366dc1381739cb1005642cd80566f7ccaf78e1b610e0.png"
        alt="img"
        className="image"
      ></img>
    </div>
  );
};

export default HomeContent;
