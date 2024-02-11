import React from "react";

const MyConnection = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className=" text-8xl font-extrabold">
        Contact<span className="text-gr text-9xl font-extrabold">.</span>
      </div>
      <div className="my-6 text-lg px-32 break-words whitespace-pre-line opacity-65 font-light">
        Shoot me an email if you want to connect! You can also find me on
        Linkedin or Twitter if that&apos;s more your speed.
      </div>
      <div className="px-16 text-lg hover:text-gr">
        Vaibhav.Jaiswal.vj91@gmail.com
      </div>
    </div>
  );
};

export default MyConnection;
