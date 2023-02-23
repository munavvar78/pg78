import React from 'react';
import Header from '../components/Header';
import AboutDetail from '../components/About/AboutDetail'
import Footer from '../components/Footer';



  const About = ({user}) => {
    
    return(
      <div className='about'>
        <Header user={user}/>
     <AboutDetail/>
     <Footer/>
        </div>
    );
  };
  export default About;