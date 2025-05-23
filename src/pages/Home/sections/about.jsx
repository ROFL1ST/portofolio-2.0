/* eslint-disable react/prop-types */
import React from "react";
import { Parallax } from "react-parallax";

import data from "../../../assets/json/experience.json";
import Stars from "../../../components/Stars";
import Title from "../../../components/Title";

import SkillsData from "../../../assets/json/skills.json";
export default function About() {
  return (
    <>
      <Parallax strength={300}>
        <div
          id="about"
          className="w-full bg-night-sky dark:bg-[#070F2B] h-full flex justify-center flex-col items-start py-32 pb-36 lg:px-20 px-10 gap-y-10 rounded-b-3xl" // Add rounded bottom here
          style={{
            zIndex: 1,
            position: "relative",
            borderBottomLeftRadius: "2rem", // Add rounded corners for bottom left
            borderBottomRightRadius: "2rem", // Add rounded corners for bottom right
          }}
        >
          <Stars />

          {/* title */}
          <Title textTop={"Learn"} textBottom={"About Me"} />
          {/* title */}
          <div className=" flex flex-col  lg:w-4/5">
            <p className="text-white dark:text-[#E5E5E5] font-semibold text-lg pb-20 w-11/12">
              Hi, I’m Muhamad Danendra Prawiraamijoyo. I’m an IT Developer based
              on Jakarta. As a recent computer science graduate with 2 years of
              experience, I am excited to bring my coding skills and passion for
              problem-solving to a new team. I am looking for an opportunity to
              make a meaningful impact on the industry, and to continue learning
              and growing as a programmer.
            </p>
            <div className="lg:justify-between justify-center flex flex-col lg:flex-row w-full">
              <div className="lg:w-1/3 left">
                <h1 className="text-white dark:text-[#E5E5E5] font-semibold text-2xl">
                  Experiences
                </h1>
                <div className="grid grid-rows-2 w-full gap-x-32 items-center mt-10 lg:mb-0 mb-10">
                  {/* {data.map((i, key) => (
                    <Experiences key={key} data={i} />
                  ))} */}
                  {data.map((i, key) => (
                    <Experiences key={key} i={i} />
                  ))}
                </div>
              </div>
              <div className=" lg:w-1/3 w-full">
                <h1 className="text-white dark:text-[#E5E5E5] font-semibold text-2xl">
                  Skills
                </h1>
                <div className="grid lg:grid-cols-4 grid-cols-3 relative gap-5 mt-10 ">
                  {SkillsData.map((i, key) => (
                    <>
                      <div
                        key={key}
                        className="flex flex-col items-center justify-center"
                      >
                        <div className="kotak1 p-5 rounded-2xl bg-[#080E14]  flex justify-center items-center">
                          <img
                            className="max-w-[60px] min-w-[20px]"
                            src={i.image}
                            alt=""
                          />
                        </div>
                        <p className="text-white dark:text-[#E5E5E5] font-bold text-base mt-2">
                          {i.name}
                        </p>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
}

function Experiences({ i }) {
  const experienceRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <div ref={experienceRef} className="experiences flex gap-x-8 text-white">
      <div className="line">
        <div></div>
      </div>
      <div className="info">
        <p className="text-[#6B7280] lg:text-base text-lg">
          {new Date(i.dateFrom).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}{" "}
          -{" "}
          {i.dateUntil !== "Present"
            ? new Date(i.dateUntil).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })
            : i.dateUntil}
        </p>
        <h4 className="font-bold lg:text-xl text-2xl">{i.title}</h4>
        <p className="text-[#6B7280] lg:text-base text-lg">{i.company}</p>
        <p className="pt-3 pb-5 lg:text-base text-lg">{i.desc}</p>
      </div>
    </div>
  );
}
