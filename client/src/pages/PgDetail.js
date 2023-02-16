import { Box, Button, makeStyles } from "@material-ui/core";
import { Rating, Modal } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./pgdetail.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  alignItems: "center",
  justifyContent: "center",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const useStyle = makeStyles({
  root: {
    "& .MuiButtonBase-root": {
      // marginLeft: "180px",
      backgroundColor: "white",
      right: "0",
      marginRight: "100px",
      position: "absolute",
    },
    "& .MuiBox-root": {
      height: "100px",
    },
    "& .MuiSvgIcon-root": {
      color: "#117814",
    },
    // "& .MuiRating-root":{
    //   marginLeft:"20px"
    // }
  },
});
const PgDetail = ({ user }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState(4);
  let { id } = useParams();
  console.log(id);
  const [data, setData] = useState({});
  const HandleChangele = () => {};
  const fetchData = async () => {
    await axios
      .get(`http://localhost:8000/pg/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  //   api()
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className="pgdetail">
        <Header user={user} />
        <div className="pgdetailbox" key={data._id}>
          <div className="pgdetailname">
            <h1>{data.name}</h1>
            <Rating name="read-only" value={value} readOnly />
            <h4 className="cityname">{data.select}</h4>
            <h5 className="open24">open 24 Hrs</h5>
            <div>
              <Button onClick={handleOpen} className="contact">
                <PhoneIcon />
                Show Number
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <h1>{data.number}</h1>
                </Box>
              </Modal>
            </div>
          </div>
          <div className="servicepg">
            <div>
            <h1>Service</h1>
            <ul className="serviceul">
              <li className="service">
                {data.curfew && (
                  <>
                    <CheckCircleIcon /> <h3 className="checkIcon">Curfew</h3>
                  </>
                )}
              </li>
              <li className="service">
                {data.studyroom && (
                  <>
                    <CheckCircleIcon /> <h3 className="checkIcon">studyroom</h3>
                  </>
                )}
              </li>
              <li className="service">
                {data.deposite && (
                  <>
                    <CheckCircleIcon /> <h3 className="checkIcon">deposite</h3>
                  </>
                )}
              </li>
              <li className="service">
                {data.visitorallowed && (
                  <>
                    <CheckCircleIcon />{" "}
                    <h3 className="checkIcon">visitorallowed</h3>
                  </>
                )}
              </li>
              <li className="service">
                {data.meals && (
                  <>
                    <CheckCircleIcon /> <h3 className="checkIcon">meals</h3>
                  </>
                )}
              </li>
              <li className="service">
                {data.kitchen && (
                  <>
                  <CheckCircleIcon /> <h3 className="checkIcon">kitchen</h3>
                  </>
                )}
              </li>
              <li className="service">
                {data.freeparking && (
                  <>
                    <CheckCircleIcon />{" "}
                    <h3 className="checkIcon">freeparking</h3>
                  </>
                )}
              </li>
              <li className="service">
                {data.reception && (
                  <>
                    <CheckCircleIcon />{" "}
                    <h3 className="checkIcon">receptions</h3>
                  </>
                )}
              </li>
            </ul>
            </div>
            <div className="pgaddress"><h1>Address</h1><h4>{data.address}</h4></div>
          </div>
          <div className="aboutpg">
            <div className="desc">
              <h1>About Us</h1>
              <p className="dataabout">{data.aboutus}</p>
              <h1>Location and OverView:</h1>
              <p className="datalocation">{data.location}</p>
              <h1>product and Service offered:</h1>
              <p className="dataproduct">{data.product}</p>
            </div>
            <div className="imageabout">
              <img className="imagepg" src={data.file} alt="hii"></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PgDetail;
