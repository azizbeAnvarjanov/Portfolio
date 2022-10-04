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



import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Project() {
  return (
    <>
      <div
        className="projects"
        data-aos="fade-up"
        data-aos-duration="3000"
        id="projects"
      >
        <h1>My Projects</h1>
        <h4>These projects are written in pure Javascript.</h4>

        <div className="project_box project_1">
          <div className="project-img">
            <img src={Google} alt="" />
          </div>
          <div className="project-info">
            <h2>Google clone</h2>
            <p className="project_description">
              This project is a clone of Google's home page. This clone has the
              ability to change the background and change the color of the texts
              and other functions.
            </p>
            <p>This project is written in these programming languages</p>
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
                {" "}
                <FiLink2 /> Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/azizbeAnvarjanov/google"
                className="demo_btn"
              >
                {" "}
                <ImGithub /> Sourse
              </a>
            </div>
          </div>
        </div>

        <div className="project_box project_2">
          <div className="project-img">
            <img src={Github} alt="" />
          </div>
          <div className="project-info">
            <h2>Find Github Profil</h2>
            <p className="project_description">
              In this project, you can find yourself looking for your Github
              account or a friend's account.
            </p>
            <p>This project is written in these programming languages</p>
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
                <FiLink2 /> Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/azizbeAnvarjanov/github-api"
                className="demo_btn"
              >
                {" "}
                <ImGithub /> Sourse
              </a>
            </div>
          </div>
        </div>

        <div className="project_box project_3">
          <div className="project-img">
            <img src={DondonZiki} alt="" />
          </div>
          <div className="project-info">
            <h2>Rock Paper Scissors</h2>
            <p className="project_description">
              This project is known as a game called Rock, Scissors, Paper, this
              project is not very functional but it is playable.
            </p>
            <p>This project is written in these programming languages</p>
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
                <FiLink2 /> Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/azizbeAnvarjanov/Rock-Paper-Scissors"
                className="demo_btn"
              >
                {" "}
                <ImGithub /> Sourse
              </a>
            </div>
          </div>
        </div>

        <div className="project_box project_4">
          <div className="project-img">
            <img src={Todo} alt="" />
          </div>
          <div className="project-info">
            <h2>Todo App</h2>
            <p className="project_description">
              This project is slightly modified from the Todo app, and tried to
              make it as functional as possible.
            </p>
            <p>This project is written in these programming languages</p>
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
                <FiLink2 /> Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/azizbeAnvarjanov/sticky-note"
                className="demo_btn"
              >
                {" "}
                <ImGithub /> Sourse
              </a>
            </div>
          </div>
        </div>

        <div className="project_box project_5">
          <div className="project-img">
            <img src={Countries} alt="" />
          </div>
          <div className="project-info">
            <h2>Search Countries</h2>
            <p className="project_description">
              This is a project where you can get information about yourself or
              other countries, for example population, currency and country.
            </p>
            <p>This project is written in these programming languages</p>
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
                <FiLink2 /> Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/azizbeAnvarjanov/API-countries"
                className="demo_btn"
              >
                {" "}
                <ImGithub /> Sourse
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project