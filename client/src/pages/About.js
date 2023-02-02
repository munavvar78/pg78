import React from 'react';
import Header from '../components/Header';
import AboutDetail from '../components/About/AboutDetail'
// import Footer from '../components/Footer'
import './about.css'
import Footer from '../components/Footer';
// import Card from '../components/Card';
// import LifeAtPg from '../components/LifeAtPg';


  const About = ({user}) => {
    
    // const history=useHistory()
    return(
      <div className='about'>
        <Header user={user}/>
     <AboutDetail/>
     {/* <Card
     title="munavvar"
     imageUrl="https://i.ibb.co/0JG7h5k/munavvar.jpg"
     body='hi i am munavvar jarjisbhai popatiya'>
     </Card> */}
     <Footer/>
        </div>
    );
  };
  export default About;