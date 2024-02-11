"use client"
import React, { useState } from "react";
import { PiGraduationCapLight, PiBriefcaseLight } from "react-icons/pi";
import Tab from "./Tab";
import Card from "./Card";
import Reveal from "./Reveal";
import { IQualification } from "../interfaces/IQualification";

export enum QualificationType {
  EDUCATION,
  EXPERIENCE,
}

interface IProps {
  qualification?: IQualification[];
}

const staticQualifications: IQualification[] = [
  {
    _id: "1",
    title: "Bachelor of Technology (B.Tech)",
    description: [
      { children: [{ text: "Technical Courses: Data Structures and Algorithms, C programming language, Computer Graphics,Object Oriented Programming." }] },
    ],
    date: "2020 - 2024",
    isEducation: true,
  },
  {
    _id: "2",
    title: "High School Study",
    description: [
      { children: [{ text: "St. Joseph Sr. Secondary School" }] },
      { children: [{ text: "During my classes I learn about HTML & CSS and JavaScript" }] },
    ],
    date: "2016 - 2017",
    isEducation: true,
  },
  {
    _id: "3",
    title: "Software Developer Intern - Tractrix",
    description: [
      { children: [{ text: "During my impactful stint as a Software Developer Intern at Tractrix, I led the development of a dynamic web application using cutting-edge technologies like Python, React, and Next.js." }] },
      { children: [{ text: "In the startup hustle at Tractrix, I single-handedly developed the entire web app, covering frontend, backend, and robust APIs. The result? A seamlessly integrated, fully functional showcase of my adaptability and proficiency in development." }] },
    ],
    date: "Nov 2023 ",
    isEducation: false,
  },
  {
    _id: "4",
    title: "Mobile Developer Intern - GGU",
    description: [
      { children: [{ text: "Acquire I took the lead in crafting a top-notch cross-platform app, using Flutter and Firebase to ensure flawless role-based login. The architecture was robust, and the UI design was sleek and modern. I also led the charge in developing exciting features, such as in-app buying/selling and dynamic carpooling." }] },
    ],
    date: "Nov 2023 ",
    isEducation: false,
  },
];

export default function Qualification({ qualification }: IProps) {
  const [current, setCurrent] = useState<QualificationType>(
    QualificationType.EXPERIENCE
  );

  return (
    <section
      id="qualification"
      className="text-secondary dark:text-white full__screen__height relative pt-28"
    >
      <div className="flex items-center gap-4">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-bold">
            Qualification
            <span className="text-primary"> .</span>
          </h1>
        </Reveal>
        <div className="w-full flex-1 h-[0.2em] bg-gray-100 dark:bg-secondaryVarient"></div>
      </div>

      <div className="flex justify-center md:justify-end items-center mt-12 gap-4">
        <Reveal>
          <Tab
            title="Experience"
            icon={<PiBriefcaseLight className="text-3xl" />}
            setCurrent={setCurrent}
            isActive={current === QualificationType.EXPERIENCE}
            type={QualificationType.EXPERIENCE}
          />
        </Reveal>

        <Reveal>
          <Tab
            title="Education"
            icon={<PiGraduationCapLight className="text-3xl" />}
            setCurrent={setCurrent}
            type={QualificationType.EDUCATION}
            isActive={current === QualificationType.EDUCATION}
          />
        </Reveal>
      </div>

      <div className="mt-8 relative">
        <div className="absolute w-[2px] h-full bg-gray-100 dark:bg-secondaryVarient z-0 md:mx-auto md:left-0 md:right-0"></div>

        <div className="flex flex-col gap-6">
          {current === QualificationType.EDUCATION ? (
            staticQualifications
              .filter((data) => data.isEducation)
              .map(({ _id, title, description, date }) => (
                <Card
                  key={_id}
                  title={title}
                  description={description}
                  date={date}
                />
              ))
          ) : (
            staticQualifications
              .filter((data) => !data.isEducation)
              .map(({ _id, title, description, date }) => (
                <Card
                  key={_id}
                  title={title}
                  description={description}
                  date={date}
                />
              ))
          )}
        </div>
      </div>
    </section>
  );
}
