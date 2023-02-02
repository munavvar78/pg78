import { Button, makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import "./pgdetail.css";

const useStyle = makeStyles({
  root: {
    "& .MuiButtonBase-root": {
      marginLeft: "180px",
      backgroundColor: "white",
    },
  },
});
const PgDetail = ({user}) => {
  let { id } = useParams();
  console.log(id)
  const [data, setData] = useState({});
  const HandleChangele=()=>{

  }
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
        <Header user={user}/>
        <div className="pgdetailbox" key={data._id}>
          <h2>{data.name}</h2>
          <img src={data.file}></img>
          <pre>{data.description}</pre>
          <Link variant="contained" to={`/pg/${id}/book`}>
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PgDetail;
