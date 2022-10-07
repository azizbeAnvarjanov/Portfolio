import React, { useRef }from 'react';
import './Contact.css';


import emailjs from "@emailjs/browser";


// icons 
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import { AiOutlineFileDone } from 'react-icons/ai';

import { useTranslation } from "react-i18next";


import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Contact() {


  
  const { t } = useTranslation();

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
          () => {
            document.querySelector('.popup').classList.add('active');
            document.querySelector("#name").value = "";
            document.querySelector("#email").value = "";
            document.querySelector(".textarea").value = "";
          },
          (error) => {
            console.log(error.text);
          }
        );
    };


    function showPopup() {
      document.querySelector('.popup').classList.remove('active');
    }


  return (
    <>
      <div
        className="contact"
        id="contact"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="popup">
          <div className="popup_message">
            <div className="icon_popup">
              <AiOutlineFileDone />
            </div>
            <h4 className="message_popup">{t("message_popup")}</h4>
            <button onClick={showPopup}>Ok</button>
          </div>
        </div>

        <h1>{t("contact_me")}</h1>
        <h4>{t("get_in_touch")}</h4>
        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <div className="contact_form_1">
            <h3>
              <FaRegComment /> {t("talk_to_me")}
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
              <p>{t("phone_number_text")}</p>
              <p className="addres">
                <a target="_blank" href="tel:+998882547775">
                  +998 254 77 75
                </a>
              </p>
            </div>
          </div>

          <div className="contact_form_2">
            <h3>
              <RiSendPlaneLine /> {t("write_msg")}
            </h3>

            <div className="input">
              <p className="legend">{t("name")}</p>
              <input
                id="name"
                name="name"
                required
                type="text"
                placeholder={t("pleaseholder_name")}
              />
            </div>
            <div className="input">
              <p className="legend">Email</p>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder={t("pleaseholder_email")}
              />
            </div>
            <div className="textarea_box">
              <p className="legend">{t("message")}</p>
              <textarea
                name="message"
                required
                className="textarea"
                placeholder={t("pleaseholder_message")}
              ></textarea>
            </div>
            <button type="submit" className="send_btn">
              {t("send_btn")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact