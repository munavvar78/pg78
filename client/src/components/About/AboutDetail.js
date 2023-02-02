import React from "react";
import Card from "../Card";
import "./aboutdetail.css";
const AboutDetail = () => {
  return (
    <div>
      <div className="aboutdetailfirst">
        <div className="aboutbox">
          <img
            className="abu"
            src="https://i.ibb.co/p0PKvJw/aboutus-Banner-Image-68c0ef5a313c91b9d77801a21534d67a20f7e8c54bb9d073fa8bb0d85d01a7b6.png"
            alt="abu"
          ></img>
        </div>
        {/* <img
          className="firstimg"
          src="https://www.gopgo.in/assets/new_ui/img/aboutusBannerbg-3832eb8c59b5d74b9e3bf359db4fd58057d7c1daddf8e8fe9315cb2fbb8d73d3.png"
          alt="img"
        ></img> */}
        <div className="aboutwriting">
          <h2>The daunting process of</h2>
          <h1>
            finding a new home
            <br />
            made easy
          </h1>
            
          <p>
            <span>BookMyPG was started by Thinkwide Hospitality</span> as a
            solution to the <br />
            intimidating and tiresome process of looking for a new home in a new
            <br />
            city.
          </p>
          <p>
            The speed with which young adults move from one city to another to
            <br />
            pursue their dreams is marvelous, and we are here to support their
            <br />
            dream by providing them with more than just a house.
          </p>
          <p>
            PGO is the first of its kind technology startup that connects
            <br />
            accommodation seekers and providers on a single platform, cutting
            out
            <br />
            the middle-man. We aim to provide a transparent platform where users
            <br />
            can see an aggregated list of verified PGs and Hostels to choose
            from.
            <br />
            Users can see the reviews, tariffs, availability and other details
            all
            <br />
            in one place. Our users are young adults who are passionate,
            <br />
            determined and are aspiring to live their best lives.
          </p>
        </div>
      </div>
      <div className="aboutdetailsecond">
        <div className="aboutcommunity">
          <div className="aboutcommunitywrite">
            <h1>
              We create
              <br />
              <span>communities</span>
            </h1>
            <p>
              All our properties represent a sense of belongingness that makes
              <br />
              it a home and not just a place where you stay. We know that our
              <br />
              customers work long hours and travel on roads full of jams, and
              <br />
              that’s why we make our properties homely. So, you feel relaxed
              <br />
              when you come back.
            </p>
            <br />
            <br />
            <p>
              Our residents, or as we call them, PGO Amigos are a bunch of
              <br />
              warm-hearted and welcoming people. We hold regular events like
              <br />
              meet-ups, parties, bonfires, networking, movie nights and every
              <br />
              other form of entertainment to give people a chance to know each
              <br />
              other.
            </p>
          </div>
          <img
            className="aboutcommunityphoto"
            src="https://www.gopgo.in/assets/new_ui/img/aboutusWhowearecharacterimage-36a314c7907b979c992718b182b3a81bd614e4cfbad23860d444c4ea58046831.png"
            alt="img"
          ></img>
        </div>
      </div>
      <div className="aboutwhat">
        <div className="aboutwhatbox">
          <div className="aboutwhatboximg">
            <img
              src="https://www.gopgo.in/assets/new_ui/img/aboutusWhatwedoimg-43b5f834b15238c16c52d8bbc4baa96786f0dcfefb34b04b8d3769018ef7d7b9.png"
              alt="hii"
            ></img>
          </div>
          <div className="aboutwhatboxwrite">
            <h1>
              What we do &<br />
              <span>Why we do</span>
            </h1>
            <p>
              BookMyPG was started with a simple mission in mind to forge a home away<br/>
              from home for the youth of India.
            </p>
          </div>
        </div>
      </div>
      <div className="aboutteam">
        <h1>Our Team</h1>
        <div className="aboutcard">
        <Card
        title="Yash"
        imageUrl="https://i.ibb.co/bmT5GfV/Whats-App-Image-2022-10-29-at-10-03-59-PM.jpg"
        body="BackEnd Developer"></Card>
        <Card
          title="munavvar"
          imageUrl="https://i.ibb.co/0JG7h5k/munavvar.jpg"
          body='FrontEnd Developer & BackEnd Developer'>
        </Card>
        <Card
          title="Jayesh"
          imageUrl="https://i.ibb.co/CBd5Rtw/301452970-791252631998529-7447136362649912009-n.jpg"
          body='FrontEnd Developer'></Card>
          </div>
      </div>
    </div>
  );
};

export default AboutDetail;
