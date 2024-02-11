import React from "react";

const Sidebar = () => {
  return (
    <div className=" fixed top-0 left-0 h-full w-60 flex flex-col  items-center bg-bl text-white pt-4 overflow-y-auto cursor-pointer opacity-50 z-10">
      {/* Logo */}
      <div
        className="mb-5 text-center  "
        
      >
       <div className="bg-lbl h-12 w-12 rounded-md flex justify-center items-center">
        <span className=" font-extrabold text-2xl text-white ">V</span>
        <span className=" font-extrabold text-2xl text-gr ">.</span>
       </div>
      </div>

      {/* About Section */}
      <div
        className="mb-4 h-24 flex justify-center items-center relative w-full group hover:bg-lbl"
        style={{ writingMode: "vertical-rl" }}
      >
        <h2 className="text-lg font-extralight mb-2">About</h2>
        <div className="absolute h-full w-1 bg-gr right-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Project Section */}
      <div
        className="mb-4 h-24 flex justify-center items-center relative w-full group hover:bg-lbl"
        style={{ writingMode: "vertical-rl" }}
      >
        <h2 className="text-lg font-extralight mb-2">Projects</h2>
        <div className="absolute h-full w-1 bg-gr right-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Exp. Section */}
      <div
        className="mb-4 h-24 flex justify-center items-center relative w-full group hover:bg-lbl"
        style={{ writingMode: "vertical-rl" }}
      >
        <h2 className="text-lg font-extralight mb-2">Exp.</h2>
        <div className="absolute h-full w-1 bg-gr right-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      {/* Contact Section */}
      <div
        className="mb-4 h-24 flex justify-center items-center relative w-full group hover:bg-lbl"
        style={{ writingMode: "vertical-rl" }}
      >
        <h2 className="text-lg font-extralight mb-2">Contact</h2>
        <div className="absolute h-full w-1 bg-gr right-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  );
};

export default Sidebar;
