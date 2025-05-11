import React from "react";
import { Parallax } from "react-parallax";
import Title from "../../../components/Title";
import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from "@emailjs/browser";
import ilustrate from "../../../assets/json/contact-animation.json";
export default function Contact() {
  const [toSend, setToSend] = React.useState({
    sender_name: "",
    sender_email: "",
    message: "",
  });
  const form = React.useRef();
  const [load, setLoad] = React.useState(false);
  const onSubmit = (e) => {
    setLoad(true);
    // console.log(import.meta.env.VITE_SOME_KEY);

    e.preventDefault();
    if (
      toSend.sender_name == "" ||
      toSend.sender_email == "" ||
      toSend.message == ""
    ) {
      setLoad(false);
      return alert("Mohon masukkan form anda dengan benar");
    } else {
      emailjs
        .sendForm(
          `${import.meta.env.VITE_EMAIL_KEY}`,
          `${import.meta.env.VITE_TEMPLATE_KEY}`,
          form.current,
          `${import.meta.env.VITE_PUBLIC_KEY}`,
          `${import.meta.env.VITE_PRIVATE_KEY}`
        )
        .then((res) => {
          console.log("HAI");
          if (res.status === 200) {
            setLoad(false);
            alert("Pesan anda sudah terkirim");
          }
        });
      setLoad(false);

      e.target.reset();
      setToSend({ sender_name: "", sender_email: "", message: "" });
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <Parallax strength={300}>
      <div
        id="contact"
        className="w-full h-full flex justify-center flex-col items-start py-32 pb-36 lg:px-20 px-10 gap-y-10 bg-gray-50 dark:bg-night-sky"
      >
        {/* Title */}
        <Title
          textTop={"Get"}
          textBottom={"In Touch"}
          textColorTop="text-gray-800 dark:text-[#E5E5E5]"
          textColorBottom="text-[#FFD700]"
        />
        <div className="flex lg:flex-row flex-col justify-between w-full mt-5 items-center">
          <div className="left lg:w-1/4">
            <Player autoplay={true} loop={true} src={ilustrate}></Player>
          </div>
          <div className="right lg:w-1/3 relative">
            <div className="w-full bg-white dark:bg-night-sky  border border-gray-300 dark:border-gray-700 rounded-2xl flex flex-col p-5">
              {/* title */}
              <div className="flex flex-col gap-y-1 mb-5">
                <h2 className="font-bold text-2xl dark:text-[#E5E5E5]">
                  We&apos;d love to hear it from you
                </h2>
                <p className="dark:text-[#E5E5E5]">You Can Reach Us Anytime</p>
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
                    name="sender_name"
                    onChange={handleChange}
                    value={toSend.sender_name}
                    placeholder="Your Name"
                    className="w-full bg-white dark:bg-night-sky text-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400 text-base outline-none placeholder-gray-500 dark:text-gray-300 py-3 px-4 leading-8 transition duration-300 ease-in-out"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="sender_email"
                    onChange={handleChange}
                    value={toSend.sender_email}
                    placeholder="Your Email"
                    className="w-full bg-white dark:bg-night-sky text-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400 text-base outline-none placeholder-gray-500 dark:text-gray-300 py-3 px-4 leading-8 transition duration-300 ease-in-out"
                  />
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={toSend.message}
                    placeholder="Your Message"
                    className="w-full bg-white dark:bg-night-sky text-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400 h-36 text-base outline-none placeholder-gray-500 dark:text-gray-300 py-3 px-4 resize-none leading-8 transition duration-300 ease-in-out"
                  ></textarea>
                </div>
                <input type="hidden" name="user_name" value="Danendra" />
                <button
                  disabled={load ? true : false}
                  className={`text-white dark:text-[#001524] bg-yellow-500 dark:bg-yellow-600 transition duration-300 ease-in-out transform hover:bg-yellow-400 border-0 py-3 px-8 focus:outline-none rounded-lg text-lg shadow-md ${
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
