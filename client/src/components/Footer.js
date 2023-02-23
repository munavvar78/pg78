import React, { useContext, useState, useRef, useEffect } from "react";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
// import axios from 'axios';
import emailjs from "@emailjs/browser";
import isEmail from "validator/lib/isEmail";
import { makeStyles } from "@material-ui/core/styles";
import "aos/dist/aos.css";

import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  // FaCodepen,
  FaInstagram,
  // FaGitlab,
  // FaMediumM,
} from "react-icons/fa";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { ThemeContext } from "../contexts/ThemeContext";
import { socialsData } from "../data/socialsData";
import { contactsData } from "../data/contactsData";

import "./footer.css";
import { purple } from "@material-ui/core/colors";
import Aos from "aos";

function Contacts() {
  useEffect(() => {
    Aos.init();
  }, []);
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const { theme } = useContext(ThemeContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const useStyles = makeStyles({
    input: {
      border: "4px solid green",
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid purple`,
      },
    },
    message: {
      border: "4px solid green",
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: "bolder",
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid purple`,
      },
    },
    label: {
      backgroundColor: "black",
      color: "white",
      fontFamily: "var(--primaryFont)",
      fontWeight: 600,
      fontSize: "0.9rem",
      padding: "0 5px",
      transform: "translate(25px,50%)",
      display: "inline-flex",
    },
    socialIcon: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "21px",
      backgroundColor: "green",
      color: theme.secondary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
    detailsIcon: {
      backgroundColor: "green",
      color: theme.secondary,
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "23px",
      transition: "250ms ease-in-out",
      flexShrink: 0,
      "&:hover": {
        transform: "scale(1.1)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
    submitBtn: {
      backgroundColor: "green",
      color: theme.secondary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.08)",
        color: theme.secondary,
        backgroundColor: "gray",
      },
    },
  });

  const classes = useStyles();

  const form = useRef();
  const handleContactForm = (e) => {
    e.preventDefault();
    var flag = 0;
    if (name && email && message) {
      if (isEmail(email)) {
        const responseData = {
          name: name,
          email: email,
          message: message,
        };
        console.log(responseData);
      } else {
        setErrMsg("Invalid email");
        flag = 1;
        setOpen(true);
      }
    } else {
      setErrMsg("Enter all the fields");
      flag = 1;
      setOpen(true);
    }
    if (flag === 0) {
      emailjs
        .sendForm(
          "service_047jw0h",
          "template_xe6fjfi",
          form.current,
          "lLinIzOV5_yBRSHez"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true);
            setErrMsg("");

            setName("");
            setEmail("");
            setMessage("");
            setOpen(false);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div
      className="contacts"
      id="contacts"
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
      // style={{ backgroundColor:"gray" }}
    >
      <div className="contacts--container">
        <h1 style={{ color: purple }}>Contacts</h1>
        <div className="contacts-body">
          <div className="contacts-form">
            <form ref={form} onSubmit={handleContactForm}>
              <div className="input-container">
                <label htmlFor="Name" className={classes.label}>
                  Name
                </label>
                <input
                  placeholder="Munavvar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="Name"
                  className={`form-input ${classes.input}`}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Email" className={classes.label}>
                  Email
                </label>
                <input
                  placeholder="munavvarpopatiya777@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="Email"
                  className={`form-input ${classes.input}`}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Message" className={classes.label}>
                  Message
                </label>
                <textarea
                  placeholder="Type your message...."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  name="Message"
                  className={`form-message ${classes.message}`}
                />
              </div>

              <div className="submit-btn">
                <button type="submit" className={classes.submitBtn}>
                  <p>{!success ? "Send" : "Sent"}</p>
                  <div className="submit-icon">
                    <AiOutlineSend
                      className="send-icon"
                      style={{
                        animation: !success
                          ? "initial"
                          : "fly 0.8s linear both",
                        position: success ? "absolute" : "initial",
                      }}
                    />
                    <AiOutlineCheckCircle
                      className="success-icon"
                      style={{
                        display: !success ? "none" : "inline-flex",
                        opacity: !success ? "0" : "1",
                      }}
                    />
                  </div>
                </button>
              </div>
            </form>
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
            >
              <SnackbarContent
                action={
                  <React.Fragment>
                    <IconButton
                      size="small"
                      aria-label="close"
                      color="inherit"
                      onClick={handleClose}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
                style={{
                  backgroundColor: theme.primary,
                  color: theme.secondary,
                  fontFamily: "var(--primaryFont)",
                }}
                message={errMsg}
              />
            </Snackbar>
          </div>

          <div className="contacts-details">
            <a
              href={`mailto:${contactsData.email}`}
              className="personal-details"
            >
              <div className={classes.detailsIcon}>
                <FiAtSign />
              </div>
              <p style={{ color: "white" }}>{contactsData.email}</p>
            </a>
            <a href={`tel:${contactsData.phone}`} className="personal-details">
              <div className={classes.detailsIcon}>
                <FiPhone />
              </div>
              <p style={{ color: "white" }}>{contactsData.phone}</p>
            </a>
            <div className="personal-details">
              <div className={classes.detailsIcon}>
                <HiOutlineLocationMarker />
              </div>
              <p style={{ color: "white" }}>{contactsData.address}</p>
            </div>

            <div className="socialmedia-icons">
              {socialsData.twitter && (
                <a
                  href={socialsData.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaTwitter aria-label="Twitter" />
                </a>
              )}
              {socialsData.github && (
                <a
                  href={socialsData.github}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaGithub aria-label="GitHub" />
                </a>
              )}
              {socialsData.linkedIn && (
                <a
                  href={socialsData.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaLinkedinIn aria-label="LinkedIn" />
                </a>
              )}
              {socialsData.instagram && (
                <a
                  href={socialsData.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaInstagram aria-label="Instagram" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <img src={theme.contactsimg} alt="contacts" className="contacts--img" />
    </div>
  );
}

export default Contacts;
