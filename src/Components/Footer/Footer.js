import React from 'react';
import './Footer.css';


// icons
import { FaTelegram } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';

function Footer() {
  return (
    <>
        <div className="footer">
            <div className="footer_box">
                <h2>Azizbek</h2>
                <p>Frontend Developer</p>
                <div className="pages">
                    <a href="#">Home</a>
                    <a href="#">Skills</a>
                    <a href="#">Qualification</a>
                    <a href="#">Project</a>
                    <a href="#">Contact</a>
                </div>
                <div className="social_network_footer">
                    <a href="#"><FaTelegram /></a>
                    <a href="#"><BsGithub /></a>
                    <a href="#"><GrInstagram /></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer