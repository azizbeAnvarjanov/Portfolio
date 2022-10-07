import React, { useState } from 'react';
import './Skills.css';
import { BiCodeAlt } from 'react-icons/bi';
import { SiMicrosoft } from 'react-icons/si';

import html from '../../imgs/html.png'
import bootstrap from '../../imgs/bootstrap.png'
import css from '../../imgs/css.png'
import react from '../../imgs/React.png'
import tailwind from '../../imgs/tailwindcss.png'
import exel from '../../imgs/exel.png'
import power from '../../imgs/power.png'
import word from '../../imgs/word.png'
import js from '../../imgs/js.png'
import goggle from '../../imgs/google.png'


import { useTranslation } from "react-i18next";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Skills() {


      
  const { t } = useTranslation();

  const [tabs, setTabs] = useState(1);

  return (
    <>
      <div
        className="skills"
        id="skills"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <center>{t("skills")}</center>
        <div className="buttons">
          <button
            onClick={() => setTabs(1)}
            className={tabs === 1 ? "active" : ""}
          >
            {t("frontend")}
          </button>
          <button
            onClick={() => setTabs(2)}
            className={tabs === 2 ? "active" : ""}
          >
            {t("microsoft")}
          </button>
        </div>

        <div className="skills_box">
          <div className="skills_1">
            <p className={tabs === 1 ? "active" : ""}>
              {" "}
              <BiCodeAlt /> {t("frontend")}
            </p>
            <div className={tabs === 1 ? "front active" : "front"}>
              <div className="skill">
                <div className="logo_img">
                  <img className="html" src={html} alt="" />
                </div>
                <h3>HTML</h3>
                <p>{t("intermediate")}</p>
              </div>
              <div className="skill">
                <div className="logo_img">
                  <img className="css" src={css} alt="" />
                </div>
                <h3>Css</h3>
                <p>{t("advanced")}</p>
              </div>
              <div className="skill">
                <div className="logo_img">
                  <img className="js" src={js} alt="" />
                </div>
                <h3>JS</h3>
                <p>{t("advanced")}</p>
              </div>
              <div className="skill">
                <div className="logo_img">
                  <img className="bootstrap" src={bootstrap} alt="" />
                </div>
                <h3>Bootstrap</h3>
                <p>{t("intermediate")}</p>
              </div>
              <div className="skill">
                <div className="logo_img">
                  <img className="tailwind" src={tailwind} alt="" />
                </div>
                <h3>Tailwind Css</h3>
                <p>{t("intermediate")}</p>
              </div>
              <div className="skill">
                <div className="logo_img">
                  <img className="react" src={react} alt="" />
                </div>
                <h3>React JS</h3>
                <p>{t("intermediate")}</p>
              </div>
            </div>
          </div>

          <div className="skills_2">
            <p className={tabs === 2 ? "active" : ""}>
              {" "}
              <SiMicrosoft /> {t("microsoft")}
            </p>
            <div className={tabs === 2 ? "microsoft active" : "microsoft"}>
              <div className="skill">
                <div className="logo_img">
                  <img src={exel} alt="" />
                </div>
                <h3>Exel</h3>
                <p>{t("intermediate")}</p>
              </div>

              <div className="skill">
                <div className="logo_img">
                  <img src={word} alt="" />
                </div>
                <h3>Word</h3>
                <p>{t("advanced")}</p>
              </div>

              <div className="skill">
                <div className="logo_img">
                  <img src={power} alt="" />
                </div>
                <h3>PowerPoint</h3>
                <p>{t("advanced")}</p>
              </div>

              <div className="skill">
                <div className="logo_img">
                  <img src={goggle} alt="" />
                </div>
                <h3>Google</h3>
                <p>{t("advanced")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills