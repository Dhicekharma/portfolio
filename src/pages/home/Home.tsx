
// import Card from "../../components/Card";
import ServicesSection from "../../components/ServicesSection";
import SkillsAndAbout from "../../components/SkillsAndAbout";
import WorkSample from "../../components/WorkSample";
import Testimonial from "../../components/Testimonial";
import BlogsSection from "../../components/BlogsSection";
import IntroSection from "../../components/IntroSection";
function Home() {
 

  
  return (
    <div className=" bg-gray-100">
      {/* header */}
     <IntroSection/>

      {/* About and Skill / Expertise */}
       <SkillsAndAbout/>

      {/*Our Service  */}
      <ServicesSection/>

      {/* sample works */}
      <WorkSample/>

      {/* Testimonials */}
     <Testimonial/>

      {/* blogs */}
      <BlogsSection />
    </div>
  );
}

export default Home;
