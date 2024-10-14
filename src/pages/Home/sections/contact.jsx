import React from "react";
import { Parallax } from "react-parallax";
import Title from "../../components/Title";
import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from "@emailjs/browser";
import ilustrate from "../../../assets/json/contact-animation.json";
export default function Contact() {
  const [toSend, setToSend] = React.useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const form = React.useRef();
  const [load, setLoad] = React.useState(false);
  const onSubmit = (e) => {
    setLoad(true);
    e.preventDefault();
    if (
      toSend.user_name == "" ||
      toSend.user_email == "" ||
      toSend.message == ""
    ) {
      setLoad(false);
      return alert("Mohon masukkan form anda dengan benar");
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_KEY,
          process.env.REACT_APP_TEMPLATE_KEY,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          () => {
            console.log("HAI");
          },
          (error) => {
            console.log(error);
          }
        );
      setLoad(false);

      e.target.reset();
      setToSend({ user_email: "", user_name: "", message: "" });
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    console.log(toSend);
  };
  return (
    <Parallax strength={300}>
      <div
        id="contact"
        className="w-full h-full flex justify-center flex-col items-start py-32 pb-36 lg:px-20 px-10 gap-y-10 bg-gray-50"
      >
        {/* Title */}
        <Title
          textTop={"Get"}
          textBottom={"In Touch"}
          textColorTop="text-gray-800"
          textColorBottom="text-[#FFD700]"
        />
        <div className="flex lg:flex-row flex-col justify-between w-full mt-5 items-center">
          <div className="left lg:w-1/4">
            <Player autoplay={true} loop={true} src={ilustrate}></Player>
          </div>
          <div className="right lg:w-1/3 relative">
            <div className="w-full bg-white  border border-gray-300 rounded-2xl flex flex-col p-5">
              {/* title */}
              <div className="flex flex-col gap-y-1 mb-5">
                <h2 className="font-bold text-2xl">
                  We'd love to hear it from you
                </h2>
                <p>You Can Reach Us Anytime</p>
              </div>
              {/* title */}
              <form
                ref={form}
                onSubmit={onSubmit}
                className="flex flex-col md:ml-auto w-full space-y-6" // Add space between elements
              >
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    onChange={handleChange}
                    value={toSend.user_name}
                    placeholder="Your Name"
                    className="w-full bg-white text-gray-800 rounded-lg border border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none placeholder-gray-500 py-3 px-4 leading-8 transition duration-300 ease-in-out"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    onChange={handleChange}
                    value={toSend.user_email}
                    placeholder="Your Email"
                    className="w-full bg-white text-gray-800 rounded-lg border border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none placeholder-gray-500 py-3 px-4 leading-8 transition duration-300 ease-in-out"
                  />
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={toSend.message}
                    placeholder="Your Message"
                    className="w-full bg-white text-gray-800 rounded-lg border border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-36 text-base outline-none placeholder-gray-500 py-3 px-4 resize-none leading-8 transition duration-300 ease-in-out"
                  ></textarea>
                </div>

                <button
                  disabled={load ? true : false}
                  className={`text-white bg-yellow-500 transition duration-300 ease-in-out transform hover:bg-yellow-400 border-0 py-3 px-8 focus:outline-none rounded-lg text-lg shadow-md ${
                    load ? "cursor-not-allowed opacity-60" : ""
                  }`}
                >
                  {load ? "Loading..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
