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
      <div className="p-2 sm:p-4 bg-[#faf5e1]">
        <Navbar />
        <Hero heroData={user.about} />
        <About aboutData={user.about} />
        <Services servicesData={user.services} />
        <Skills skillsData={enabledSkill} />
        <Projects projectData={user.projects} />
        <Timeline timelineData={user.timeline} />
        <Testimonials testimonialData={user.testimonials} />
        <Contact contactData={user.about} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
