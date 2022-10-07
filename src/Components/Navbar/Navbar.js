import React, { useState, useEffect } from 'react'


import { useTranslation } from "react-i18next";

import './Navbar.css';
import { FaRegComment } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import { IoLanguage } from 'react-icons/io5';
import { HiHome } from 'react-icons/hi';
import { BiCollection, BiCategory } from 'react-icons/bi'
import { BsBook } from 'react-icons/bs';


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
    function show_lng() {
      
    }

    window.addEventListener('scroll', () => {
        scrollNavbar();
    });

  return (
    <>
      <nav className={navbarActive ? "navbar_active" : ""}>
        <h1 className="desktop_logo">
          <a href="#home">Azizbek</a>
        </h1>
        <ul
          className={navbar === "hide_navbar" ? "hide_navbar" : "show_navbar"}
        >
          <li>
            <a onClick={() => show_navbar()} href="#home">
              <HiHome className="link_icon" />
              {t("home_link")}
            </a>
          </li>
          <li>
            <a onClick={() => show_navbar()} href="#skills">
              <BiCollection className="link_icon" /> Skills
            </a>
          </li>
          <li>
            <a onClick={() => show_navbar()} href="#qualification">
              <BsBook className="link_icon" /> Qualification
            </a>
          </li>
          <li className="phone_logo">
            <a href="#home">
              <h1>Azizbek</h1>
            </a>
          </li>
          <li>
            <a onClick={() => show_navbar()} href="#projects">
              <BiCategory className="link_icon" /> Projects
            </a>
          </li>
          <li>
            <a onClick={() => show_navbar()} href="#contact">
              <FaRegComment className="link_icon" /> Contact
            </a>
          </li>
          <li>
            <a onClick={() => show_lng()} href="#contact">
              <IoLanguage className="link_icon" /> Le
            </a>
          </li>
          <div className="dark_mode">
            <FiMoon
              onClick={() => addClassDark()}
              className={mode === "dark" ? "active_mode" : ""}
            />
            <FiSun
              onClick={() => addClassLight()}
              className={mode === "light" ? "active_mode" : ""}
            />
          </div>
        </ul>
        <div className={navbar === "hide_navbar" ? "menu" : "menu active_menu"}
          onClick={() => show_navbar()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
      </nav>
    </>
  );
}

export default Navbar
    