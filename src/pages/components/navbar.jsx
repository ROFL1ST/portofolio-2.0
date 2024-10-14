/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Hamburger from "hamburger-react";
import React from "react";
import CV from "../../assets/json/CV.json";
export default function Navbar({
  setCursorColor,
  textEnter,
  textLeave,
  socialEnter,
  sticky,
}) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const cvData = CV.map((i, key) => i.path);

  return (
    <>
      <nav className="flex  justify-between w-full py-8 lg:px-10 px-8 items-center text-black">
        <div className="flex items-center justify-between z-20 w-full">
          <h1 className="sm:text-5xl text-4xl text-black logo cursor-pointer">
            <span className="text-yellow-500">Danen</span>dra
          </h1>
          <ul className="lg:flex hidden gap-x-5 z-20 ">
            <li className=" hover:-translate-y-1 ease-in-out transition hover:scale-110">
              <a href="https://www.instagram.com/rofl1st">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  className="w-7 h-7 font-bold"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                  />
                </svg>
              </a>
            </li>
            <li className=" hover:-translate-y-1 ease-in-out transition hover:scale-110">
              <a href="https://www.linkedin.com/in/danendra-prawiraamijoyo/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // width="1em"
                  // height="1em"
                  className="w-7 h-7 font-bold"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill={"black"}
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                  />
                </svg>
              </a>
            </li>
            <li className=" hover:-translate-y-1 ease-in-out transition hover:scale-110">
              <a href="https://wa.me/+6285888768152">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  className="w-7 h-7 font-bold"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"
                  />
                </svg>
              </a>
            </li>
            <li className=" hover:-translate-y-1 ease-in-out transition hover:scale-110">
              <a href="mailto:danendrapr55@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  className="w-7 h-7 font-bold"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M19 22q-1.65 0-2.825-1.175Q15 19.65 15 18v-4.5q0-1.05.725-1.775Q16.45 11 17.5 11q1.05 0 1.775.725Q20 12.45 20 13.5V18h-2v-4.5q0-.2-.15-.35q-.15-.15-.35-.15q-.2 0-.35.15q-.15.15-.15.35V18q0 .825.587 1.413Q18.175 20 19 20q.825 0 1.413-.587Q21 18.825 21 18v-4h2v4q0 1.65-1.175 2.825Q20.65 22 19 22ZM3 18q-.825 0-1.412-.587Q1 16.825 1 16V4q0-.825.588-1.413Q2.175 2 3 2h16q.825 0 1.413.587Q21 3.175 21 4v6h-3.5q-1.45 0-2.475 1.025Q14 12.05 14 13.5V18Zm8-7l8-5V4l-8 5l-8-5v2Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href={cvData[0]} // Update this to the actual path of your CV
                download
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-yellow-400 hover:scale-105"
              >
                Download CV
              </a>
            </li>
          </ul>
          <div className="flex lg:hidden items-center justify-center  z-50">
            <Hamburger size={30} toggled={navbarOpen} toggle={setNavbarOpen} />
          </div>
        </div>
      </nav>
      {/* Full-screen overlay when the navbar is open */}
      {navbarOpen && (
        <div
          style={{
            background: "radial-gradient(circle at bottom, #001524, #000C19)",
          }}
          className={`fixed inset-0 z-30 bg-black bg-opacity-50 overflow-y-hidden transition-all duration-300  ${
            navbarOpen ? "opacity-100 " : "opacity-0 "
          } `}
        >
          <div className="absolute top-0 p-10 w-full right-0 left-0  flex justify-between lg:hidden items-center  z-50">
            <h1 className="sm:text-5xl text-4xl text-white logo cursor-pointer">
              <span className="text-yellow-500">Danen</span>dra
            </h1>
            <Hamburger
              color="white"
              size={30}
              toggled={navbarOpen}
              toggle={setNavbarOpen}
            />
          </div>
          <div className="flex flex-col items-center justify-center h-full text-white space-y-6">
            <ul className="text-2xl flex flex-col gap-y-5">
              <li className=" hover:-translate-y-1 ease-in-out transition hover:scale-110">
                <a
                  className="flex items-center gap-x-3 "
                  href="https://www.instagram.com/rofl1st"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    className="w-10 h-10 font-bold"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                    />
                  </svg>
                  <p>Instagram</p>
                </a>
              </li>
              <li className="flex gap-x-3 items-center hover:-translate-y-1 ease-in-out transition hover:scale-110">
                <a
                  href="https://www.linkedin.com/in/danendra-prawiraamijoyo/"
                  className="flex gap-x-3 items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // width="1em"
                    // height="1em"
                    className="w-10 h-10 font-bold"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill={"white"}
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                    />
                  </svg>
                  <p>Linkedin</p>
                </a>
              </li>
              <li className="flex items-center gap-x-3 hover:-translate-y-1 ease-in-out transition hover:scale-110">
                <a
                  href="https://wa.me/+6285888768152"
                  className="flex items-center gap-x-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    className="w-10 h-10 font-bold"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"
                    />
                  </svg>
                  <p>Whatsapp</p>
                </a>
              </li>
              <li className="flex items-center gap-x-3 hover:-translate-y-1 ease-in-out transition hover:scale-110">
                <a href="mailto:danendrapr55@gmail.com" className="flex items-center gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    className="w-10 h-10 font-bold"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M19 22q-1.65 0-2.825-1.175Q15 19.65 15 18v-4.5q0-1.05.725-1.775Q16.45 11 17.5 11q1.05 0 1.775.725Q20 12.45 20 13.5V18h-2v-4.5q0-.2-.15-.35q-.15-.15-.35-.15q-.2 0-.35.15q-.15.15-.15.35V18q0 .825.587 1.413Q18.175 20 19 20q.825 0 1.413-.587Q21 18.825 21 18v-4h2v4q0 1.65-1.175 2.825Q20.65 22 19 22ZM3 18q-.825 0-1.412-.587Q1 16.825 1 16V4q0-.825.588-1.413Q2.175 2 3 2h16q.825 0 1.413.587Q21 3.175 21 4v6h-3.5q-1.45 0-2.475 1.025Q14 12.05 14 13.5V18Zm8-7l8-5V4l-8 5l-8-5v2Z"
                    />
                  </svg>
                  <p>Email</p>
                </a>
              </li>
              <li>
                <a
                  href={cvData[0]} // Update this to the actual path of your CV
                  download
                  className="bg-yellow-500 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-yellow-400 hover:scale-105"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
