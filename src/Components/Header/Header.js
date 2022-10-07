import React, { useState } from 'react';
import './Heade.css'
import Img from '../../imgs/Azizbek.jpg'
import { FaTelegram } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';

import { useTranslation } from "react-i18next";


import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Header() {

  
  const { t } = useTranslation();

  return (
    <>
      <div
        data-aos="fade-in"
        data-aos-duration="3000"
        className="name"
        id="home"
      >
        <h1>{t("name_h1_1")}</h1>
        <h1>{t("name_h1_2")}</h1>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000" className="header">
        <div className="home_blog">
          <div className="img_box">
            <div className="img">
              <img src={Img} alt="" />
            </div>
            <div className="social_network">
              <a href="#">
                <FaTelegram />
              </a>
              <a href="#">
                <BsGithub />
              </a>
              <a href="#">
                <GrInstagram />
              </a>
            </div>
          </div>
          <div className="home_info_1">
            <div>
              <h4 className="home_info_title">{t("biography")}</h4>
              <p className="home_info_description">
                {t("home_info_description")}
              </p>
            </div>
            <div>
              <h4 className="home_info_title">{t("contact_upper")}</h4>
              <p className="home_info_description">
                {t("countries_1")}
                <br />
                {t("countries_2")} <br />
                <a href="tel:+998882547775">{t("phone_number")}</a>
              </p>
            </div>
            <div>
              <h4 className="home_info_title">{t("languages")}</h4>
              <p className="home_info_description">
                {t("lng_p_1")} <br />
                {t("lng_p_2")} <br />
                {t("lng_p_3")}
              </p>
            </div>
          </div>
          <div className="home_info_2">
            <div>
              <h4 className="home_info_title">{t("projects_upper")}</h4>
              <h2 className="home_info_description">{t("projects_descr")}</h2>
            </div>
            <div>
              <h4 className="home_info_title">{t("country")}</h4>
              <p className="home_info_description">{t("country_p")}</p>
            </div>
            <div>
              <h4 className="home_info_title">{t("resume")}</h4>
              <a href="#" className="home_info_description">
                {t("resume_p")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



export default Header