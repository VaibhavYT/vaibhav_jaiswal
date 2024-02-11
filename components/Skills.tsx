"use client";
import React, { FC, useState } from "react";
import Tab from "./Tab";
import { BsCodeSlash } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { RiToolsFill } from "react-icons/ri"; // Example icon for "Other" stack
import TechStack from "./TechStack";
import Reveal from "./Reveal";
import IconImage from "../public/tree.png";
import FlutterImage from "../public/Flutter.png";
import ReactImage from "../public/react.png";
import ReduxImage from "../public/redux.png";
import AwsImage from "../public/aws.png";
import PythonImage from "../public/python.png";
import NextImage from "../public/nextjs.png";
import CssImage from "../public/css.png";
import JsImage from "../public/js.png";
import TypeScriptImage from "../public/typescript.png";
import MysqlImage from "../public/mysql.png";
import JiraImage from "../public/jira.png";
import CImage from "../public/c++.png";
import NodeImage from "../public/node-js.png";
import KotlinImage from "../public/Kotlin.png";
import JenkinsImage from "../public/jenkins.png";
import TailwindImage from "../public/Tailwind.png";
import HerokuImage from "../public/heroku.png";
import StripeImage from "../public/Stripe.svg";
import HtmlImage from "../public/html.png";
import SolanaImage from "../public/solana.png";
import FirebaseImage from "../public/firbase.png";
import GitImage from "../public/git.png";
import GithubImage from "../public/GitHub.png";
import DockerImage from "../public/Docker.png";
import KubaImage from "../public/Kubernetes.png";


export enum Stack {
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
  OTHER = "OTHER",
}

const staticTechSkills = [
  { name: "HTML", stack: Stack.FRONTEND, image: HtmlImage },
  { name: "CSS", stack: Stack.FRONTEND, image: CssImage },
  { name: "JavaScript", stack: Stack.FRONTEND, image: JsImage },
  { name: "TypeScript", stack: Stack.FRONTEND, image: TypeScriptImage },
  { name: "React", stack: Stack.FRONTEND, image: ReactImage },
  { name: "Nextjs", stack: Stack.FRONTEND, image: NextImage },
  { name: "Flutter", stack: Stack.FRONTEND, image: FlutterImage },
  { name: "Kotlin", stack: Stack.FRONTEND, image: KotlinImage },
  { name: "Redux", stack: Stack.FRONTEND, image: ReduxImage },
  { name: "Jetpack Compose", stack: Stack.FRONTEND, image: IconImage },
  { name: "Tailwind CSS", stack: Stack.FRONTEND, image: TailwindImage },
  { name: "Vite", stack: Stack.FRONTEND, image: IconImage },
  { name: "Dart", stack: Stack.FRONTEND, image: IconImage },
  { name: "Sass", stack: Stack.FRONTEND, image: IconImage },
  { name: "Solana", stack: Stack.FRONTEND, image: SolanaImage },

  { name: "Node.js", stack: Stack.BACKEND, image: NodeImage },
  { name: "Express.js", stack: Stack.BACKEND, image: IconImage },
  { name: "MongoDB", stack: Stack.BACKEND, image: IconImage },
  { name: "MySQL", stack: Stack.BACKEND, image: MysqlImage },
  { name: "Heroku", stack: Stack.BACKEND, image: HerokuImage },
  { name: "SocketIO", stack: Stack.BACKEND, image: IconImage },
  { name: "Firebase", stack: Stack.BACKEND, image: FirebaseImage },
  { name: "Redis", stack: Stack.BACKEND, image: IconImage },
  { name: "Postgres", stack: Stack.BACKEND, image: IconImage },
  { name: "Cloudinary", stack: Stack.BACKEND, image: IconImage },
  { name: "Stripe", stack: Stack.BACKEND, image: StripeImage },

  { name: "Git", stack: Stack.OTHER, image: GitImage },
  { name: "Github", stack: Stack.OTHER, image: GithubImage },
  { name: "C++", stack: Stack.OTHER, image: CImage },
  { name: "Python", stack: Stack.OTHER, image: PythonImage },
  { name: "AWS", stack: Stack.OTHER, image: AwsImage},
  { name: "Jira", stack: Stack.OTHER, image: JiraImage },
  { name: "Jenkins", stack: Stack.OTHER, image: JenkinsImage },
  { name: "Docker", stack: Stack.OTHER, image: DockerImage },
  { name: "Kubernetes", stack: Stack.OTHER, image: KubaImage },
];

const Skills: FC = (): JSX.Element => {
  const [current, setCurrent] = useState<Stack>(Stack.FRONTEND);

  return (
    <section id="skills" className="pt-28">
      <div className="flex items-center gap-4">
        <Reveal>
          <h1 className="text-4xl md:text-5xl  font-bold">
            Skills
            <span className="text-primary"> .</span>
          </h1>
        </Reveal>
        <div className="w-full flex-1 h-[0.2em] bg-gray-100 dark:bg-secondaryVarient"></div>
      </div>

      <div className="flex items-center mt-12 gap-4 justify-center md:justify-end">
        <Reveal>
          <Tab
            title="Frontend"
            icon={<BsCodeSlash className="text-3xl" />}
            setCurrent={setCurrent}
            type={Stack.FRONTEND}
            isActive={current === Stack.FRONTEND}
          />
        </Reveal>

        <Reveal>
          <Tab
            title="Backend"
            icon={<FaNodeJs className="text-3xl" />}
            setCurrent={setCurrent}
            type={Stack.BACKEND}
            isActive={current === Stack.BACKEND}
          />
        </Reveal>

        <Reveal>
          <Tab
            title="Other"
            icon={<RiToolsFill className="text-3xl" />}
            setCurrent={setCurrent}
            type={Stack.OTHER}
            isActive={current === Stack.OTHER}
          />
        </Reveal>
      </div>

      <div className="mt-12 w-full md:max-w-[550px] gap-12 mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5">
        {staticTechSkills
          .filter((skill) => skill.stack === current)
          .map((skill, index) => (
            <TechStack key={index} name={skill.name} image={skill.image} />
          ))}
      </div>
    </section>
  );
};

export default Skills;
