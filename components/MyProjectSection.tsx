"use client";

import React, { FC, useMemo, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Tree from "../public/sh.jpg";
import Reveal from "./Reveal";
import ProjectImage1 from "../public/project/Screenshot 2024-02-11 115008.jpg";
import ProjectImage2 from "../public/project/nextStore.png";
const MyProjectSection = () => {
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
        <div className="px-24 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 ">
          <div className="w-402">
            <div className="w-402 h-226 bg-ge rounded-xl flex justify-center items-center relative overflow-hidden">
              <Image
                className="h-217 w-341 bg-white absolute rounded-lg bottom-0 transform translate-y-10 hover:scale-105 hover:rotate-6 transition-transform duration-300 ease-in-out"
                src={ProjectImage1}
                alt="music"
              />
            </div>
            <div className="flex justify-between items-center ">
              <div className="my-3 text-2xl font-extrabold">
                Nextify Music Stream
              </div>
              <div className="flex">
                <a href="https://github.com/VaibhavYT/Nextify-Music-Stream">
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
            <div className="text-gr my-2 text-lg">
              Nextjs - Tailwind-Css - TypeScript - Supabase
            </div>
            <div className="text-md whitespace-pre-line break-words opacity-65">
              A Music app where you can play and upload songs without paying any
              money. just play and listen and enjoy.
              <span className="text-gr"> Learn more &gt;</span>
            </div>
          </div>
          <div className="w-402">
            <div className="w-402 h-226 bg-ge rounded-xl flex justify-center items-center relative overflow-hidden">
              <Image
                className="h-217 w-341 bg-white absolute rounded-lg bottom-0 transform translate-y-10 hover:scale-105 hover:rotate-6 transition-transform duration-300 ease-in-out "
                src={ProjectImage2}
                alt="hell"
              />
            </div>
            <div className="flex justify-between items-center ">
              <div className="my-3 text-2xl font-extrabold">Next Store</div>
              <div>
              <a href="https://github.com/VaibhavYT/Next-Store">
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
            <div className="text-gr my-2 text-lg">
              Nextjs - Tailwind Css - TypeScript - MySql - Shadcn/ui
            </div>
            <div className="text-md whitespace-pre-line break-words opacity-65">
              Developed a secured well-versed platform to buy and sell products
              online using App Router and app features of NextJS.
              <span className="text-gr">Learn more &gt;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjectSection;
