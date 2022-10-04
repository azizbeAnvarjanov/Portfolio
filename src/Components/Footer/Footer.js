import React from 'react';
import './Footer.css';


// icons
import { FaTelegram } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();



function Footer() {
  return (
    <>
      <div className="footer" data-aos="fade-up" data-aos-duration="3000">
        <div className="footer_box">
          <h2>Azizbek</h2>
          <p>Frontend Developer</p>
          <div className="pages">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
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