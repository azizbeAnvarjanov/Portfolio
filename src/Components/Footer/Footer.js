import React from 'react';
import './Footer.css';


// icons
import { FaTelegram } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';


import { useTranslation } from "react-i18next";


function Footer() {

  const { t } = useTranslation();


  return (
    <>
      <div className="footer">
        <div className="footer_box">
          <h2>{t("azizbek")}</h2>
          <p>{t("name_h1_2")}</p>
          <div className="pages">
            <a href="#home">{t("home")}</a>
            <a href="#skills">{t("skills")}</a>
            <a href="#projects">{t("projects")}</a>
          </div>
          <div className="social_network_footer">
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
      </div>
    </>
  );
}

export default Footer