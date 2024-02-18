import React from "react";
import ThreeCard from "./ThreeCard";
import Reveal from "./Reveal";
import ProjectImage1 from "../public/project/Screenshot 2024-02-11 115008.jpg";
import ProjectImage2 from "../public/project/nextStore.png";

const projects = [
  {
    headingText: "Nextify Music Stream",
    imageSrc: ProjectImage1.src,
    liveLink: "https://nextify-music-stream.vercel.app/",
    codeLink: "https://github.com/VaibhavYT/Nextify-Music-Stream"
  },
  {
    headingText: "Next Store",
    imageSrc: ProjectImage2.src,
    liveLink: "https://next-store-nine-rust.vercel.app/",
    codeLink: "https://github.com/VaibhavYT/Next-Store"
  },
  // Add more projects as needed
];

const NewProject = () => {
  return (
    <section id="projects">
      <div className="w-full" id="projects">
        <div className="flex flex-row-reverse items-center gap-4">
          <Reveal>
            <h1 className="text-4xl md:text-5xl  font-bold">
              Projects
              <span className="text-primary"> .</span>
            </h1>
          </Reveal>
          <div className="w-full flex-1 h-[0.2em] bg-gray-100 dark:bg-secondaryVarient"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center md:justify-start">
          {projects.map((project, index) => (
            <ThreeCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProject;
