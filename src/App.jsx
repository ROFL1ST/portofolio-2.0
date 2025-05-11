/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { motion, useScroll } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });
  const [variantCursor, setVariantCursor] = React.useState("default");
  const [cursorColor, setCursorColor] = React.useState("#FFD700");

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
    },
    social: {
      height: 70,
      width: 70,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
    },
  };

  const textEnter = () => setVariantCursor("text");
  const socialEnter = () => setVariantCursor("social");

  const textLeave = () => setVariantCursor("default");

  // load
  const [loading, setLoading] = React.useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              textEnter={textEnter}
              textLeave={textLeave}
              socialEnter={socialEnter}
              setCursorColor={setCursorColor}
            />
          }
        />
      </Routes>
      <Footer />
      <Analytics />
    </>
  );
}
