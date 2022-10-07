import React from 'react';
import './Qualification.css';
import { RiPencilRuler2Line, RiBuilding2Line } from 'react-icons/ri';
import { useTranslation } from "react-i18next";
import js from '../../imgs/js.png'
import react from '../../imgs/React.png'


import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();



function Qualification() {

  const { t } = useTranslation();


  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="qualification"
        id="qualification"
      >
        <h1>{t("qualification")}</h1>
        <h5>{t("qualification_h5")}</h5>

        <div className="qualification_box">
          <div className="education">
            <p>
              {" "}
              <RiPencilRuler2Line /> {t("education")}
            </p>
            <div className="inlab">
              <h2>{t("inlab")}</h2>
              <p className="inlab_js">
                {t("javascript")} <img src={js} alt="" />
              </p>
              <p>{t("countries_1")}</p>
              <p>2021 - 2022</p>
              <p>7 - {t("month")}</p>
            </div>
            <div className="algoritm">
              <h2>{t("algoritm")}</h2>
              <p className="algoritm_react">
                {t("react")} <img src={react} alt="" />
              </p>
              <p>{t("countries_1")}</p>
              <p>2021 - 2022</p>
              <p>2 - {t("month")}</p>
            </div>
          </div>
          <div className="work">
            <p>
              {" "}
              <RiBuilding2Line /> {t("work")}
            </p>
            <div>
              <h5 className="work_title">{t("work_descr")}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Qualification