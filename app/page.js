"use client";

import Hero from "@/components/Hero";
import { getAPIData } from "./api_requests/request";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectModal from "@/components/ProjectModal";

import { motion } from "framer-motion";

const Home = async () => {
  const { user } = await getAPIData(); //get api data
  //console.log(user);

  //taking the skills only which are enabled
  const enabledSkill = user.skills.map((item) => {
    if (item.enabled == true) {
      return item;
    }
  });

  return (
    <>
      <div className=" p-2 sm:p-4 ">
        <Hero heroData={user.about} />
        <div
          id="about"
        >
          <About aboutData={user.about} />
        </div>
        <div
          id="services"
        >
          <Services servicesData={user.services} />
        </div>
        <div
          id="skills"
        >
          <Skills skillsData={enabledSkill} />
        </div>
        <div
          id="projects"
        >
          <Projects projectData={user.projects} />
        </div>
        <div
          id="timeline"
        >
          <Timeline timelineData={user.timeline} />
        </div>
        <div
          id="testimonials"
        >
          <Testimonials testimonialData={user.testimonials} />
        </div>
        <div
          id="contact"
        >
          <Contact contactData={user.about} />
        </div>
      </div>

      {/* <ProjectModal projectData={user.projects[0]} /> */}
      {/* <Projects projectData={user.projects} /> */}
    </>
  );
};

export default Home;
