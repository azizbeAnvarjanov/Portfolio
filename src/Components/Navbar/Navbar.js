import React, { useState, useEffect } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi';
import './Navbar.css';
import { FaRegComment } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { BiCollection, BiCategory } from 'react-icons/bi'
import { BsBook } from 'react-icons/bs'

function Navbar() {

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

    window.addEventListener('scroll', () => {
        scrollNavbar();
    });

  return (
    <>
        <nav className={navbarActive ? 'navbar_active' : ''}>
            <h1 className='desktop_logo'>Azizbek</h1>
            <ul className={navbar === 'hide_navbar' ? 'hide_navbar' : 'show_navbar'}>
                <li>
                    <a onClick={() => show_navbar()} href="#home"><HiHome className='link_icon' />  Home</a>
                </li>
                <li>
                      <a onClick={() => show_navbar()} href="#skills"><BiCollection className='link_icon' />  Skills</a>
                </li>
                <li>
                    <a onClick={() => show_navbar()} href="#qualification"><BsBook className='link_icon' />  Qualification</a>
                </li>
                <li className='phone_logo'><a href="#home"><h1>Azizbek</h1></a></li>
                <li>
                      <a onClick={() => show_navbar()} href="#projects"><BiCategory className='link_icon' />  Projects</a>
                </li>
                <li>
                    <a onClick={() => show_navbar()} href="#contact"><FaRegComment className='link_icon' />  Contact</a>
                </li>
                <div className="dark_mode">
                    <FiMoon onClick={() => addClassDark()} className={mode === 'dark' ? 'active_mode' : ''}/>
                    <FiSun onClick={() => addClassLight()} className={mode === 'light' ? 'active_mode' : '' }/>
                </div>
            </ul>
              <div className={navbar === 'hide_navbar' ? 'menu' : 'menu active_menu'} onClick={() => show_navbar()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </>
  )
}

export default Navbar