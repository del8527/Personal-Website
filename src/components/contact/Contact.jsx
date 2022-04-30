import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Instagram from "../../img/instagram.png";
import LinkedIn from "../../img/linkedin.png";
import Github from "../../img/github.png";

import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";



const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fyzc9st",
        "template_9g4pyw7",
        formRef.current,
        "lRZW-RH0fX-EpHc8B"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();

  };



  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              306-216-8456
            </div>
            <div className="c-info-item" onclick="location.href='">
              <img className="c-icon" src={Email} alt="delbert3luo@gmail.com" />
              <a href ="mailto: delbert3luo@gmail.com">delbert3luo@gmail.com</a>
            </div>
            <div className="c-info-item" onclick="alert('You clicked me !')">
              <img className="c-icon" src={Instagram} alt="https://www.instagram.com/delberter/" />
              <a href ="https://www.instagram.com/delberter/">delberter</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={LinkedIn} alt="www.linkedin.com/in/DelbertLuo" />
              <a href ="https://www.linkedin.com/in/DelbertLuo">Delbert Luo</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Github} alt="https://github.com/del8527" />
              <a href ="https://github.com/del8527">del8527</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Send It!</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
