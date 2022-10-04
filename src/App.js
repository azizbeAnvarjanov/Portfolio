import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import Qualification from "./Components/Qualification/Qualification";
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Footer from "./Components/Footer/Footer";

// icons
import { BsArrowUpSquare } from 'react-icons/bs';

// css
import './App.css';

// up_btn function
function up_btn() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      document.querySelector('.up_btn').classList.add('active');
    }else{
      document.querySelector('.up_btn').classList.remove('active');
    }
});


function App() {
  return (
    <>
      <BsArrowUpSquare className="up_btn" onClick={up_btn} />
      <Navbar />
      <Header />
      <Skills />
      <Qualification />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
