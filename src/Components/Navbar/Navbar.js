import React, { useState, useEffect } from 'react'


import { useTranslation } from "react-i18next";

import './Navbar.css';
import { FaRegComment } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import { IoLanguage } from 'react-icons/io5';
import { HiHome } from 'react-icons/hi';
import { BiCollection, BiCategory } from 'react-icons/bi'
import { BsBook } from 'react-icons/bs';


// imgs
import UZB from '../../imgs/uzb.jpg'
import RUS from '../../imgs/rus.jpg'
import USA from '../../imgs/usa.png'

import i18next from 'i18next';

const languages = [
    {
        language: 'uz',
        country_code: 'uz'
    },
    {
        language: 'ru',
        country_code: 'ru'
    },
    {
        language: 'en',
        country_code: 'en'
    },
]




function Navbar() {

    const { t } = useTranslation();

    const [mode, setMode] = useState('dark');
    const [lng, setLng] = useState(false);
    const [navbar, setNavbar] = useState('hide_navbar');
    const [navbarActive, setNavbarActive] = useState(false);
    
    function scrollNavbar() {
      window.scrollY > 100 ? setNavbarActive(true) : setNavbarActive(false);
    }


    function addClassLight() {
        setMode('dark');
        document.querySelector('body').classList.remove('active_body');
    }
    function addClassDark() {
        setMode('light');
        document.querySelector('body').classList.add('active_body');
    }

    function show_navbar() {
        navbar === "hide_navbar" ? setNavbar('show_navabr') : setNavbar('hide_navbar');
    }
  

    function change_lng(e) {
      i18next.changeLanguage(e.target.id);
      document.querySelectorAll(".lng")
      .forEach((el) => el.classList.remove('active_lng'));
      e.target.classList.add('active_lng');
    }

    window.addEventListener('scroll', () => {
        scrollNavbar();
    });

  return (
    <>
      <nav className={navbarActive ? "navbar_active" : ""}>
        <h1 className="desktop_logo">
          <a href="#home">{t("azizbek")}</a>
        </h1>
        <ul
          className={navbar === "hide_navbar" ? "hide_navbar" : "show_navbar"}
        >
          <li>
            <a className="nav_link" onClick={() => show_navbar()} href="#home">
              <HiHome className="link_icon" />
              {t("home")}
            </a>
          </li>
          <li>
            <a
              className="nav_link"
              onClick={() => show_navbar()}
              href="#skills"
            >
              <BiCollection className="link_icon" /> {t("skills")}
            </a>
          </li>
          <li>
            <a
              className="nav_link"
              onClick={() => show_navbar()}
              href="#qualification"
            >
              <BsBook className="link_icon" /> {t("qualification")}
            </a>
          </li>
          <li className="phone_logo">
            <a href="#home">
              <h1>{t("azizbek")}</h1>
            </a>
          </li>
          <li>
            <a
              className="nav_link"
              onClick={() => show_navbar()}
              href="#projects"
            >
              <BiCategory className="link_icon" /> {t("projects")}
            </a>
          </li>
          <li>
            <a
              className="nav_link"
              onClick={() => show_navbar()}
              href="#contact"
            >
              <FaRegComment className="link_icon" /> {t("contact")}
            </a>
          </li>
          <li>
            <a
              onClick={() => (lng === false ? setLng(true) : setLng(false))}
              href="#"
            >
              <IoLanguage className="link_icon_lng" />
              <div
                className={lng === true ? "lng_box active_lng_box" : "lng_box"}
              >
                <a
                  className="lng active_lng"
                  onClick={(e) => change_lng(e)}
                  key="uz"
                  id="uz"
                  href="#"
                >
                  Uz
                  <img src={UZB} alt="" />
                </a>
                <a
                  className="lng"
                  onClick={(e) => change_lng(e)}
                  key="ru"
                  id="ru"
                  href="#"
                >
                  Ru
                  <img src={RUS} alt="" />
                </a>
                <a
                  className="lng"
                  onClick={(e) => change_lng(e)}
                  key="en"
                  id="en"
                  href="#"
                >
                  En
                  <img src={USA} alt="" />
                </a>
              </div>
            </a>
          </li>
          <li className="dark_mode">
            <FiMoon
              onClick={() => addClassDark()}
              className={mode === "dark" ? "active_mode" : ""}
            />
            <FiSun
              onClick={() => addClassLight()}
              className={mode === "light" ? "active_mode" : ""}
            />
          </li>
        </ul>
        <div
          className={navbar === "hide_navbar" ? "menu" : "menu active_menu"}
          onClick={() => show_navbar()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
}

export default Navbar


    