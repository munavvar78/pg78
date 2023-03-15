import { makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./pgdetail.css";
import PgDetailHeader from "../components/pgdetail/PgDetailHeader";
import PgDetailDesc from "../components/pgdetail/PgDetailDesc";
import PgDetailServ from "../components/pgdetail/PgDetailServ";
const useStyle = makeStyles({
  root: {
    backgroundColor: "#f1f1f1",
    "& .MuiButton-root": {
      right: "0",
      marginRight: "100px",
      position: "absolute",
    },
    "& .MuiBox-root": {
      height: "100px",
    },
    "& .MuiSvgIcon-root": {
      color: "black",
      paddingTop: "5px",
    },
  },
});
const PgDetail = ({ user }) => {
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
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Header user={user} />
      <div className="pgdetail">
        <PgDetailHeader data={data}/>
        <PgDetailDesc data={data}/>
        <PgDetailServ data={data}/>
      </div>
      <Footer />
    </div>
  );
};

export default PgDetail;
