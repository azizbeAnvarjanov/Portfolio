import React, { useRef }from 'react';
import './Contact.css';


import emailjs from "@emailjs/browser";


// icons 
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import { AiOutlineFileDone } from 'react-icons/ai';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_03v3lyh",
          "template_x8tufzo",
          form.current,
          "Q5RBmXAwHj7bNCA38"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };


  return (
    <>
      <div className="contact" id="contact">
            
        <div className="popup">
            <div className="popup_message">
                <div className="icon_popup">
                    <AiOutlineFileDone />
                </div>
                <h4 className="message_popup">Sizning habaringiz jonatildi habaringiz uchun raxmat.</h4>
                <button>Ok</button>
            </div>
        </div>

        <h1>Contact Me</h1>
        <h4>Get in touch</h4>
        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <div className="contact_form_1">
            <h3>
              {" "}
              <FaRegComment /> Talk to me
            </h3>
            <div>
              <p>Email</p>
              <p className="addres">azizbeanvarjanov@gmail.com</p>
            </div>
            <div>
              <p>Telegram</p>
              <p className="addres">
                <a href="https://t.me/azizbek_7775">@azizbek_7775</a>
              </p>
            </div>
            <div>
              <p>Phone number</p>
              <p className="addres">
                <a target="_blank" href="tel:+998882547775">
                  +998 254 77 75
                </a>
              </p>
            </div>
          </div>

          <div className="contact_form_2">
            <h3>
              {" "}
              <RiSendPlaneLine /> Write your me message
            </h3>

            <div className="input">
              <p className="legend">Name</p>
              <input
                name="name"
                required
                type="text"
                placeholder="Write your name"
              />
            </div>
            <div className="input">
              <p className="legend">Email</p>
              <input
                name="email"
                required
                type="email"
                placeholder="Write your email"
              />
            </div>
            <div className="textarea_box">
              <p className="legend">Message</p>
              <textarea
                name='message'
                required
                className="textarea"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button type="submit" className="send_btn">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact