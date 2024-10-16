import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import Portfolio from "./components/portfolio/Portfolio";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (event) => event.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable specific keyboard shortcuts
    const handleKeydown = (event) => {
      // CTRL + U
      if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
        event.preventDefault();
      }
      // CTRL + SHIFT + I
      if (event.ctrlKey && event.shiftKey && event.key === "I") {
        event.preventDefault();
      }
      // F12
      if (event.keyCode === 123) {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeydown);

    // Disable console logging
    console.log = function () {};

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Qualification />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Scrollup />
      <Footer />
    </>
  );
}

export default App;
