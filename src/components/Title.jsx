import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Title({ textTop, textBottom, textColorTop = "text-white", textColorBottom = "text-white" }) {
  const titleRef = useRef(null);
  const dotRef = useRef(null);
  const lineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

 


    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); 
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div className="title-container" ref={titleRef}>
      <h1 className={`font-bold  text-5xl title-text ${isVisible ? "enter" : "exit"} ${textColorTop}`}>
        {textTop} <br /> <span className={`${textColorBottom}`}>{textBottom}</span>
      </h1>
      <div className="relative">
        <div
          ref={dotRef}
          className={`p-2 rounded-full animated-dot bg-[#FFD700] absolute ${isVisible ? "enter" : "exit"}`}
          style={{ left: `${titleRef.current ? titleRef.current.offsetWidth - 5 : 0}px` }} // Adjust based on your font size
        ></div>
        <div
          ref={lineRef}
          className={`pt-2 border-b-2 animated-line border-[#FFD700] ${isVisible ? "enter" : "exit"}`}
        ></div>
      </div>
    </div>
  );
}


Title.propTypes = {
  textTop: PropTypes.string.isRequired,
  textBottom: PropTypes.string.isRequired,
  textColorTop: PropTypes.string,
  textColorBottom: PropTypes.string,
};
