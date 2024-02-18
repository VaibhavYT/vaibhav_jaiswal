import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectSection";
import MyProjectSection from "../components/MyProjectSection";
import Qualification from "../components/Qualification";
import Experience from "../components/Experience";
import Services from "../components/Services";
import ConnectSection from "../components/ConnectSection";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Skills from "../components/Skills";
import NewProject from "../components/NewProject";

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <NewProject/>
      {/* <MyProjectSection /> */}
      <Services />
      <Skills/>
      
      <Qualification />
      {/* <Experience /> */}
      <ConnectSection />
      <Footer />
    </>
  );
}
