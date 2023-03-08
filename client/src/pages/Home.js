import React from "react";
import Block1 from "../components/Block1";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import LifeAtPg from "../components/LifeAtPg";
import SlideShow from "../components/SlideShow";

const Home = ({user,PgsOwner}) => {
  console.log(user)
  console.log(PgsOwner)
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
