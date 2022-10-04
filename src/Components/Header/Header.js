import React, { useState } from 'react';
import './Heade.css'
import Img from '../../imgs/Azizbek.jpg'
import { FaTelegram } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';


import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Header() {



  return (
    <>
      <div
        data-aos="fade-in"
        data-aos-duration="3000"
        className="name"
        id="home"
      >
        <h1>Hi, I'm Anvarjanov Azizbek</h1>
        <h1>Frontend Developer</h1>
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
              <h4 className="home_info_title">BIOGRAPHY</h4>
              <p className="home_info_description">
                Hi, I'm Anvarjanov Azizbek, Frontend Developer. Passionate about
                design beautiful web interfaces.
              </p>
            </div>
            <div>
              <h4 className="home_info_title">CONTACT</h4>
              <p className="home_info_description">
                Uzbekistan, Namangan <br />
                aanvarjanov52gmail.com <br />
                <a href="tel:+998882547775">+998 88 254 77 75</a>
              </p>
            </div>
            <div>
              <h4 className="home_info_title">LANGUAGES</h4>
              <p className="home_info_description">
                Uzbek - Advansed <br />
                Russian - Advansed <br />
                English - Beginner
              </p>
            </div>
          </div>
          <div className="home_info_2">
            <div>
              <h4 className="home_info_title">PROJECTS</h4>
              <h2 className="home_info_description">1</h2>
            </div>
            <div>
              <h4 className="home_info_title">COUNTRY</h4>
              <p className="home_info_description">Uzbekistan, Namangan</p>
            </div>
            <div>
              <h4 className="home_info_title">RESUME</h4>
              <a href="#" className="home_info_description">
                Download Rezume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

<div>
    <p className='info_p'>
        <span>BIOGRAPHY</span> <br /> <br />
        Hi, I'm Anvarjanov Azizbek, Frontend Developer. Passionate about design beautiful web interfaces.
    </p>
    <p>
        <span>CONTACT</span> <br /> <br />
        <p>Uzbekistan, Namangan</p>
        <p>aanvarjanov52gmail.com</p>
        <a href='tel:+998882547775'>+998 88 254 77 75</a>
    </p>
    <p>
        <span>LANGUAGES</span> <br /> <br />
        <p>Uzbek - Advansed</p>
        <p>Russian - Advansed</p>
        <p>English - Beginner</p>
    </p>
</div>

export default Header