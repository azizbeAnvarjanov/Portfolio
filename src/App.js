import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import Qualification from "./Components/Qualification/Qualification";
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
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
