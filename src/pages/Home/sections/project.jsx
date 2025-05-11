import React from "react";
import { Parallax } from "react-parallax";
import Title from "../../../components/Title";
import data from "../../../assets/json/projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function Project() {
  const swiperRef = React.useRef();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [slidesPerView, setSlidesPerView] = React.useState(1);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1560) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateTotalGroups = (dataLength, slidesPerView) => {
    
    const totalGroups = Math.ceil(dataLength / slidesPerView);

    
    if (dataLength % slidesPerView !== 0) {
      if (slidesPerView != 4) {
        return totalGroups + 1;
      } else {
        return totalGroups;
      }
    }

    return totalGroups;
  };
  // Contoh:
  const totalGroups = calculateTotalGroups(data.length, slidesPerView);
  console.log("Total groups:", totalGroups);
  console.log("Slides per view:", slidesPerView);

  return (
    <Parallax strength={300}>
      <div className="absolute right-10 top-40 flex flex-col items-end">
        <Cloud />
      </div>
      <div
        id="projects"
        className="w-full h-full flex justify-center flex-col items-start py-32 pb-36 lg:px-20 px-10 gap-y-10 bg-gray-50"
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
          <p className="text-gray-700 font-semibold text-lg w-11/12">
            Here&apos;s my latest projects that I&apos;ve been working on.
            I&apos;m always looking for new projects to work on, so if you have
            a project in mind, feel free to reach out to me.
          </p>
        </div>

        <div className="w-full lg:inline hidden">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={slidesPerView}
            spaceBetween={30}
            className="mySwiper"
            pagination={{
              el: swiperRef.current,
              clickable: true,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1560: {
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
          <div className="flex justify-between w-full items-center 2xl:mt-10 mt-5">
            <div className="flex justify-center space-x-2 mt-5 lg:mt-0">
              {Array.from({ length: totalGroups }).map((_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    swiperRef.current.slideTo(index * slidesPerView)
                  }
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index
                      ? "bg-[#FFD700]"
                      : "bg-gray-300"
                  } transition-all duration-200`}
                ></button>
              ))}
            </div>
            <div className="lg:flex hidden justify-end space-x-3 items-center">
              <button onClick={() => swiperRef.current.slidePrev()}>
                <ArrowLeftCircleIcon
                  className="lg:h-9 lg:w-9 2xl:h-12 2xl:w-12 text-[#FFD700] transition-all duration-200 hover:scale-105"
                  strokeWidth={1}
                />
              </button>
              <button onClick={() => swiperRef.current.slideNext()}>
                <ArrowRightCircleIcon
                  className="lg:h-9 lg:w-9 2xl:h-12 2xl:w-12 text-[#FFD700] transition-all duration-200 hover:scale-105"
                  strokeWidth={1}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex flex-col gap-y-5 w-full">
          {data.map((project, key) => (
            <ProjectCard key={key} project={project} />
          ))}
        </div>
      </div>
    </Parallax>
  );
}

import PropTypes from "prop-types";
import Cloud from "../../../components/Cloud";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

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
    url: PropTypes.string.isRequired,
  }).isRequired,
};
