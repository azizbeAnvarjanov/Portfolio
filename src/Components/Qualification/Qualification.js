import React from 'react';
import './Qualification.css';
import { RiPencilRuler2Line, RiBuilding2Line } from 'react-icons/ri';
import js from '../../imgs/js.png'
import react from '../../imgs/React.png'


import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();


function Qualification() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="qualification"
        id="qualification"
      >
        <h1>Qualification</h1>
        <h5>Experience & education</h5>

        <div className="qualification_box">
          <div className="education">
            <p>
              {" "}
              <RiPencilRuler2Line /> Education
            </p>
            <div className="inlab">
              <h2>Inlab</h2>
              <p className="inlab_js">
                Javascript <img src={js} alt="" />
              </p>
              <p>Uzbekistan, Namangan</p>
              <p>2021 - 2022</p>
              <p>7 - month</p>
            </div>
            <div className="algoritm">
              <h2>Algoritm</h2>
              <p className="algoritm_react">
                Javascript <img src={react} alt="" />
              </p>
              <p>Uzbekistan, Namangan</p>
              <p>2021 - 2022</p>
              <p>2 - month</p>
            </div>
          </div>
          <div className="work">
            <p>
              {" "}
              <RiBuilding2Line /> Work
            </p>
            <div>
              <h5 className="work_title">
                So far, I have not worked in any IT company, but in the future,
                the names of the most famous companies will be written in the
                buyer.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Qualification