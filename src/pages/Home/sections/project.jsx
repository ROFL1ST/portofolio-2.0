import React from "react";
import { Parallax } from "react-parallax";
import Title from "../../components/Title";
import data from "../../../assets/json/projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

export default function Project() {
  return (
    <Parallax strength={300}>
      <div className="absolute right-10 top-40 flex flex-col items-end">
        <Cloud />
      </div>
      <div
        id="projects"
        className="w-full h-full flex justify-center flex-col items-start py-32 pb-36 lg:px-20 px-10 gap-y-10 bg-gray-50" // Light background
      >
        {/* Title */}
        <Title
          textTop={"My"}
          textBottom={"Projects"}
          textColorTop="text-gray-800"
          textColorBottom="text-[#FFD700]"
        />

        {/* Content */}
        <div className="flex flex-col gap-y-5 w-4/5">
          <p className="text-gray-700 font-semibold text-lg  w-11/12">
            Here&apos;s my latest projects that I&apos;ve been working on.
            I&apos;m always looking for new projects to work on, so if you have
            a project in mind, feel free to reach out to me.
          </p>
        </div>

        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {data.map((project, key) => (
              <SwiperSlide key={key}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Parallax>
  );
}

import PropTypes from "prop-types";
import Cloud from "../../components/Cloud";

const ProjectCard = ({ project }) => {
  return (
    <div
      onClick={() => {
        window.open(project.url, "_blank");
      }}
      className="h-96 rounded-2xl w-full p-5 text-white border border-gray-300 shadow-lg transition-transform duration-300 hover:shadow-xl cursor-pointer"
    >
      <div
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "1rem",
          // filter: "brightness(0.85)", // Slightly brighter image
        }}
        className="w-full h-full flex rounded-xl flex-col justify-center items-center transition-all duration-200 hover:scale-105 hover:text-[#FFD700]"
      >
        <div className="w-full h-full flex justify-start items-end p-5 rounded-xl bg-gradient-to-b from-transparent to-black/30 transition-all duration-300 ">
          <div className="flex flex-col transition-opacity duration-300 hover:opacity-100">
            <h3 className="font-bold text-xl ">{project.name}</h3>
            <p className="text-sm">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
