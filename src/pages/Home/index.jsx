/* eslint-disable react/prop-types */
import React from "react";
import { Parallax } from "react-parallax";
import About from "./sections/about";
import Project from "./sections/project";
import Cloud from "../../components/Cloud";
import Services from "./sections/services";
import Contact from "./sections/contact";
export default function Home({
  textEnter,
  textLeave,
  setCursorColor,
  socialEnter,
}) {
  const getRandomPosition = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const leftCloudPositions = Array.from({ length: 3 }, () =>
    getRandomPosition(10, 70)
  );

  const rightCloudPositions = Array.from({ length: 3 }, () =>
    getRandomPosition(10, 70)
  );

  return (
    <>
      <section className="z-0">
        <Parallax strength={300} bgClassName="background-cover">
          <div className="w-full h-screen flex justify-center flex-col items-center py-20 px-10 gap-y-48 relative">
            <div className="flex flex-col text-black justify-center items-center text-center font-bold">
              <h1 className="lg:text-6xl text-4xl z-20 transition-transform duration-500 hover:scale-105">
                Make Your{" "}
                <span className="text-[#FFD700] font-bold">Website</span>
              </h1>
              <h1 className="lg:text-6xl text-4xl mb-10 z-20 transition-transform duration-500 hover:scale-105">
                Or <span className="text-[#FFD700] font-bold">App</span> With Us
              </h1>
              <p className="lg:w-3/4 lg:text-base text-base z-20 text-gray-800">
                Design Your Imaginary Website or Application and Build It With
                Me
              </p>
            </div>
            <div className="z-0 lg:p-40 p-44 rounded-full absolute lg:top-52 top-32 bg-gradient-to-t from-[#FFD700] opacity-50 animate-pulse"></div>

            {/* Left Cloud Animation */}
            <div className="absolute left-10 top-0 flex flex-col items-start">
              {leftCloudPositions.map(
                (position, index) => (
                  console.log(position),
                  (
                    <Cloud
                      key={index}
                      style={{
                        position: "absolute",
                        top: `${position}%`, // Use random top position
                        animationDelay: `${index * 0.5}s`,
                        transform: "translateY(-20px)", // Slight upward adjustment for a floating effect
                      }}
                    />
                  )
                )
              )}
            </div>

            {/* Right Cloud Animation */}
            <div className="absolute right-10 top-50 flex flex-col items-end">
              {rightCloudPositions.map((position, index) => (
                <Cloud
                  key={index}
                  style={{
                    position: "absolute",
                    bottom: `${position}%`, // Use random bottom position
                    animationDelay: `${index * 0.5}s`,
                    transform: "translateY(20px)", // Slight upward adjustment for a floating effect
                  }}
                />
              ))}
            </div>

            <div className="p-2 text-white rounded-full z-20 bg-[#FFD700] hover:text-[#181920] hover:translate-y-1 ease-in-out transition hover:scale-110">
              <a href="#about">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </Parallax>
      </section>
      {/* About */}
      <section className="z-0">
        <About
          textEnter={textEnter}
          textLeave={textLeave}
          setCursorColor={setCursorColor}
          logoEnter={socialEnter}
        />
        {/* Services */}
        <Services />
        {/* Services */}
      </section>
      {/* About */}
      {/* Projects */}
      <div className="z-0">
        <Project />
      </div>
      {/* Projects */}
      {/* Contact */}
      <Contact />
      {/* Contact */}
    </>
  );
}
