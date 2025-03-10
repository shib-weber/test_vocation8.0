import Hero from "./Hero";
import Navbar from "./Navbar";
import GalleryTW from "./GalleryTW";
import Member from "./Member";
import Footer from "./Footer";
import Event from "./Event";
import UpEvent from "./Up_event";
import Download from "./Download";
import React, { useRef } from "react";
const Home = ({ sectionRefs, scrollToSection }) => {
  return (
    <>
      <div ref={sectionRefs.section1} className="inline-flex flex-col">
        <div>
          <Hero scroll={scrollToSection} />
        </div>
        <div className=" bg-black ">
          <Download />
        </div>
        <div
          ref={sectionRefs.section3}
          className="p-4 -mt-4 bg-black h-full w-4/4 shadow-2xl items-center justify-center "
        >
          <Event />
        </div>
        <div ref={sectionRefs.section2}>
          <GalleryTW />
        </div>

        <div className="p-4 bg-black h-5/5 w-4/4 shadow-2xl items-center justify-center ">
          <UpEvent />
        </div>
        <div
          ref={sectionRefs.section5}
          className="p-4 bg-black h-fit w-full shadow-2xl items-center justify-center "
        >
          <Member />
        </div>
        <div ref={sectionRefs.section4}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
