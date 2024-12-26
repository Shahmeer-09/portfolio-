import AboutComp from "@/components/AboutComp";
import { VelocityText } from "@/components/AnimatedText";
import { CoverCont } from "@/components/ContainerCover";
import FuzzyOverlayExample from "@/components/FuzzyOverlay";
import LandingSection from "@/components/LandingSection";
import ProjectCard from "@/components/ProjectCard";
import { Projectsdata } from "../utils/projectdata";
import { projectprop } from "@/components/ProjectCardComp";



export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));  
  return (
    <div
      id="main"
      data-scroll-container
      className="h-screen max-h-full mx-auto"
    >

          <LandingSection />
          <AboutComp />
          <VelocityText/>
          <ProjectCard projectsdata={Projectsdata as projectprop[]} />
          <CoverCont/>
          <FuzzyOverlayExample />
   
    </div>
  );
}
