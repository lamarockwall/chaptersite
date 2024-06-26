"use client"
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { commonConfig } from "../config/commonConfig";
import PreLoader from "./components/Preloader";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Founders from "./components/Founders";
import Swr from "./components/Swr";
import ClassicHeader from "./components/ClassicHeader";


export default function Home2() {


  const classicHeader = commonConfig.classicHeader;
  const darkTheme = commonConfig.darkTheme;

  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setisLoading(false);
    }, 1000);

    // Cleanup function for the setTimeout
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  useEffect(() => {
    const checkScrollTop = () => {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    // Cleanup function for the event listener
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  return (
    <>
     

        <div id="main-wrapper">
          {classicHeader ? (
            <ClassicHeader handleNavClick={handleNavClick}></ClassicHeader>
          ) : (
            <Header handleNavClick={handleNavClick}></Header>
          )}

          <div id="content" role="main">
            <Home
              classicHeader={classicHeader}
              darkTheme={darkTheme}
              handleNavClick={handleNavClick}
            ></Home>
            <AboutUs
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></AboutUs>
            <Services
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></Services>
            <Resume
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></Resume>
            <Founders
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></Founders>
            <Portfolio
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></Portfolio>
            <Testimonials
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></Testimonials>
            <Contact
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></Contact>
            <Swr
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></Swr>
          </div>
          <Footer
            classicHeader={classicHeader}
            darkTheme={darkTheme}
            handleNavClick={handleNavClick}
          ></Footer>
        </div>
        {/* back to top */}
       
      
    </>
  );
}