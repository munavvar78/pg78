import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./cardpg.css";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DeleteForever from "@mui/icons-material/DeleteForever";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import Typography from "@mui/joy/Typography";
import axios from "axios";

const CardPg = (props) => {
  console.log(props);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const HandleClick = (e) => {
    setOpen(true);
    console.log(props.id);
  };
  const HandleClickLogin = () => {
    const id = props.id;

    console.log(id);
    axios
      .delete("http://localhost:8000/pgdelet", { headers: { id: id } })
      .then((res) => {
        console.log(res.data);
        setOpen(false);
        history.push("/");
      });
  };
  useEffect(() => {}, [window.location.reload]);
  let { id } = useParams();
  console.log(props);
  return (
    <>
      <div className="pglist">
        <div className="pglist-img">
          <img src={props.imageUrl} className='pglist-img-style'></img>
        </div>
        <div className="pglist-detail">
          <div className="pglist-detail-price">
            <span>₹{props.price}</span><span className="pglist-detail-price-span">Onwards</span>
            <span className="pglist-detail-price-food">Food Include</span>
          </div>
          <div className="pglist-detail-name">
            <h4>{props.name} PG/Paying Guest, {props.city}</h4>
          </div>
          <div className="pglist-detail-college">
            <span>Near By: {props.college}</span>
          </div>
          <div className="pglist-detail-address">
            <p>{props.address}</p>
          </div>
          <div className="pglist-detail-expolre">
            <div>
            <Button color="primary" onClick={()=>history.push(`${props.setPath}/${props.id}`)}>Expolre</Button>
            </div>
            <div>
            <Button
        variant="outlined"
        color="danger"
        endDecorator={<DeleteForever />}
        onClick={() => setOpen(true)}
      >
        Discard
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          variant="outlined"
          role="alertdialog"
          aria-labelledby="alert-dialog-modal-title"
          aria-describedby="alert-dialog-modal-description"
        >
          <Typography
            id="alert-dialog-modal-title"
            component="h2"
            startDecorator={<WarningRoundedIcon />}
          >
            Confirmation
          </Typography>
          <Divider />
          <Typography id="alert-dialog-modal-description" textColor="text.tertiary">
            Are you sure you want to discard all of your notes?
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', pt: 2 }}>
            <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="solid" color="danger" onClick={HandleClickLogin}>
              Discard notes
            </Button>
          </Box>
        </ModalDialog>
      </Modal>            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPg;
