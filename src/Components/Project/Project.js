import React from 'react'
import './Project.css'

// imgs
import Js from '../../imgs/css 2.png'
import Css from '../../imgs/js.png'
import Html from '../../imgs/html.png'
import Google from '../../imgs/google pr.png'
import DondonZiki from '../../imgs/dondonziki.png'
import Todo from '../../imgs/todo ap.png'
import Music from '../../imgs/music player.png'
import Countries from '../../imgs/get country.png'
import Github from '../../imgs/gihub .png'


// icons
import { FiLink2 } from 'react-icons/fi'
import { ImGithub } from 'react-icons/im'

import { useTranslation } from "react-i18next";



import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Project() {


  const { t } = useTranslation();


  return (
    <>
      <div
        className="projects"
        data-aos="fade-up"
        data-aos-duration="3000"
        id="projects"
      >
        <h1>{t("my_projects")}</h1>
        <h4>{t("my_projects_descr")}</h4>

        <div className="project_box project_1">
          <div className="project-img">
            <img src={Google} alt="" />
          </div>
          <div className="project-info">
            <h2>{t("google_clone")}</h2>
            <p className="project_description">{t("google_clone_descr")}</p>
            <p>{t("programming_lng")}</p>
            <div className="programming_lng">
              <span>
                <img src={Html} alt="" />
              </span>
              <span>
                <img src={Js} alt="" />
              </span>
              <span>
                <img src={Css} alt="" />
              </span>
            </div>
            <div className="demo_sourse_btns">
              <a
                target="_blank"
                href="https://azizbeanvarjanov.github.io/google/"
                className="demo_btn"
              >
                <FiLink2 /> {t("demo")}
              </a>
              <a
                target="_blank"
                href="https://github.com/azizbeAnvarjanov/google"
                className="demo_btn"
              >
                <ImGithub /> {t("sourse")}
              </a>
            </div>
          </div>
        </div>

        <div className="project_box project_2">
          <div className="project-img">
            <img src={Github} alt="" />
          </div>
          <div className="project-info">
            <h2>{t("github_profil")}</h2>
            <p className="project_description">{t("github_profil_descr")}</p>
            <p>{t("programming_lng")}</p>
            <div className="programming_lng">
              <span>
                <img src={Html} alt="" />
              </span>
              <span>
                <img src={Js} alt="" />
              </span>
              <span>
                <img src={Css} alt="" />
              </span>
            </div>
            <div className="demo_sourse_btns">
              <a
                target="_blank"
                href="https://azizbeanvarjanov.github.io/github-api/"
                className="demo_btn"
              >
                {" "}
                <FiLink2 /> {t("demo")}
              </a>
              <a
                target="_blank"
                href="https://github.com/azizbeAnvarjanov/github-api"
                className="demo_btn"
              >
                {" "}
                <ImGithub /> {t("sourse")}
              </a>
            </div>
          </div>
        </div>

        <div className="project_box project_3">
          <div className="project-img">
            <img src={DondonZiki} alt="" />
          </div>
          <div className="project-info">
            <h2>{t("rock_paper_scissors")}</h2>
            <p className="project_description">
              {t("rock_paper_scissors_descr")}
            </p>
            <p>{t("programming_lng")}</p>
            <div className="programming_lng">
              <span>
                <img src={Html} alt="" />
              </span>
              <span>
                <img src={Js} alt="" />
              </span>
              <span>
                <img src={Css} alt="" />
              </span>
            </div>
            <div className="demo_sourse_btns">
              <a
                target="_blank"
                href="https://azizbeanvarjanov.github.io/Rock-Paper-Scissors/"
                className="demo_btn"
              >
                {" "}
                <FiLink2 /> {t("demo")}
              </a>
              <a
                target="_blank"
                href="https://github.com/azizbeAnvarjanov/Rock-Paper-Scissors"
                className="demo_btn"
              >
                {" "}
                <ImGithub /> {t("sourse")}
              </a>
            </div>
          </div>
        </div>

        <div className="project_box project_4">
          <div className="project-img">
            <img src={Todo} alt="" />
          </div>
          <div className="project-info">
            <h2>{t("todo_app")}</h2>
            <p className="project_description">
              {t("todo_app_descr")}
            </p>
            <p>{t("programming_lng")}</p>
            <div className="programming_lng">
              <span>
                <img src={Html} alt="" />
              </span>
              <span>
                <img src={Js} alt="" />
              </span>
              <span>
                <img src={Css} alt="" />
              </span>
            </div>
            <div className="demo_sourse_btns">
              <a
                target="_blank"
                href="https://azizbeanvarjanov.github.io/sticky-note/"
                className="demo_btn"
              >
                {" "}
                <FiLink2 /> {t("demo")}
              </a>
              <a
                target="_blank"
                href="https://github.com/azizbeAnvarjanov/sticky-note"
                className="demo_btn"
              >
                {" "}
                <ImGithub /> {t("sourse")}
              </a>
            </div>
          </div>
        </div>

        <div className="project_box project_5">
          <div className="project-img">
            <img src={Countries} alt="" />
          </div>
          <div className="project-info">
            <h2>{t("search_countries")}</h2>
            <p className="project_description">
             {t("search_countries_descr")}
            </p>
            <p>{t("programming_lng")}</p>
            <div className="programming_lng">
              <span>
                <img src={Html} alt="" />
              </span>
              <span>
                <img src={Js} alt="" />
              </span>
              <span>
                <img src={Css} alt="" />
              </span>
            </div>
            <div className="demo_sourse_btns">
              <a
                target="_blank"
                href="https://azizbeanvarjanov.github.io/API-countries/"
                className="demo_btn"
              >
                {" "}
                <FiLink2 /> {t("demo")}
              </a>
              <a
                target="_blank"
                href="https://github.com/azizbeAnvarjanov/API-countries"
                className="demo_btn"
              >
                {" "}
                <ImGithub /> {t("sourse")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project