import React from "react";
import Block1 from "../components/Block1";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import LifeAtPg from "../components/LifeAtPg";
import SlideShow from "../components/SlideShow";

const Home = ({user}) => {
  console.log(user)
  return (
    <div>
     <Header user={user}/>
    <HomeContent/>
    <Block1/>
    <LifeAtPg/>
    <SlideShow/>
    <Footer/>
      </div>
  );
};

export default Home;
