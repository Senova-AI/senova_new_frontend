import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "../components/Scene";
import { useRef } from "react";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { Tilt } from "react-tilt";

const CameraController = () => {
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position (-1 to 1)
      mousePosition.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(({ camera }) => {
    // Camera position ko smoothly update karo
    const targetX = mousePosition.current.x * 0.2;
    const targetY = mousePosition.current.y * 0.2;

    camera.position.x += (targetX - camera.position.x) * 0.1;
    camera.position.y += (targetY - camera.position.y) * 0.1;

    // Camera ko center ki taraf point karo
    camera.lookAt(0, 0, 0);
  });

  return null;
};

gsap.registerPlugin(ScrollTrigger);

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 10, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
  speed: 200000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const faqData = [
  {
    question: "What is Senova AI?",
    answer:
      "Senova AI is a platform focused on bridging the gap between technology and people by developing innovative, impactful artificial intelligence solutions for everyday life and business.",
  },
  {
    question: "How is my data used and protected?",
    answer:
      "Your privacy is our top priority. All personal data is handled in compliance with best practices and security standards. We do not share your information with third parties without your explicit permission.",
  },
  {
    question: "What kind of products does Senova AI offer?",
    answer:
      "Senova AI builds advanced AI tools for businesses and individuals, including cognitive assistance, workflow automation, and AI healthcare solutions.",
  },
  {
    question: "How can I get in touch with the Senova AI team?",
    answer:
      "You can reach out to our team via the Contact page, where you'll find emails and social media links for each core team member.",
  },
  {
    question: "Can I contribute ideas or feedback?",
    answer:
      "Absolutely! We welcome feedback. Please use our Contact page or social channels to share your thoughts and suggestions.",
  },
];


const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useGSAP(() => {});

  return (
    <>
      <Loader />
      <Navbar />
      <div className="fixed top-0 left-0 w-full h-full z-1">
        <Canvas id="canvas">
          {/* <OrbitControls enableDamping={true} /> */}
          <CameraController />
          <Scene />
        </Canvas>
      </div>
      {/* <section className="papa-div w-full h-full absolute top-0 left-0 z-2"> */}
      <main className="w-full overflow-hidden relative font-[sf] z-2">
        <div className="w-full hero relative h-[75vh] pb-20 flex items-center justify-end text-[#1E1E1E] flex-col px-40">
          <h1 className="font-bold text-[7.5vw] max-[599px]:text-[15vw] leading-none uppercase pb-6">
            About Senova AI
          </h1>
          <p className="text-[1.5vw] text-center leading-tight">
            Senova AI is dedicated to building advanced artificial intelligence
            solutions that empower businesses and individuals. Our mission is to
            bridge the gap between technology and people through seamless,
            innovative, and impactful AI products.
          </p>
        </div>
        <div className="w-full h-screen mission flex items-start justify-end px-20 max-[599px]:px-4">
          <div className="w-[60%] h-full flex justify-center flex-col">
            <h1 className="font-bold text-[3.5vw] max-[599px]:text-[15vw] leading-none pb-6">
              Our mission is to build a freer and more prosperous everyday life
              alongside smart AI
            </h1>
            <p className="text-[1.5vw] leading-tight">
              By harnessing the power of AI, we breathe new life into outdated
              systems and transform social infrastructure into adaptable and
              efficient entities. Developing autonomous flexible AI enables us
              to enhance the systems used by corporations, municipalities and
              governments making people's lives smoother.
            </p>
          </div>
        </div>
        <div className="w-full h-[180vh] services flex items-center justify-center gap-6 px-20 pb-20 max-[599px]:px-4 flex-wrap">
          <div className="w-full text-center pb-10 text-[3.5vw] font-bold">
            <h1>Our Values</h1>
            <p></p>
          </div>
          <Tilt
            options={defaultOptions}
            style={{ height: "70vh", width: "30%" }}
          >
            <div className="card1 w-full h-full border backdrop-blur-sm rounded-2xl will-change-transform transition-all duration-300"></div>
          </Tilt>
          <Tilt
            options={defaultOptions}
            style={{ height: "70vh", width: "30%" }}
          >
            <div className="card1 w-full h-full border backdrop-blur-sm rounded-2xl will-change-transform transition-all duration-300"></div>
          </Tilt>
          <Tilt
            options={defaultOptions}
            style={{ height: "70vh", width: "30%" }}
          >
            <div className="card1 w-full h-full border backdrop-blur-sm rounded-2xl will-change-transform transition-all duration-300"></div>
          </Tilt>
          <div className="w-full text-center py-10 text-[3.5vw] font-bold">
            <h1>Our Offers</h1>
            <p></p>
          </div>
          <Tilt
            options={defaultOptions}
            style={{ height: "70vh", width: "30%" }}
          >
            <div className="card1 w-full h-full border backdrop-blur-sm rounded-2xl will-change-transform transition-all duration-300"></div>
          </Tilt>
          <Tilt
            options={defaultOptions}
            style={{ height: "70vh", width: "30%" }}
          >
            <div className="card1 w-full h-full border backdrop-blur-sm rounded-2xl will-change-transform transition-all duration-300"></div>
          </Tilt>
          <Tilt
            options={defaultOptions}
            style={{ height: "70vh", width: "30%" }}
          >
            <div className="card1 w-full h-full border backdrop-blur-sm rounded-2xl will-change-transform transition-all duration-300"></div>
          </Tilt>
        </div>
        <div className="w-full min-h-fit FAQ py-20">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-[3.5vw] max-[599px]:text-[9.5vw] font-semibold mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="w-full max-w-3xl space-y-4">
              {faqData.map((item, idx) => (
                <div
                  key={idx}
                  className={`faq-item backdrop-blur-sm border border-[#1e1e1e] rounded-lg cursor-pointer shadow-md transition-all duration-200`}
                >
                  <button
                    className="w-full flex justify-between items-center px-6 py-4 focus:outline-none font-medium text-left text-[#1e1e1e] text-[1.5vw] max-[599px]:text-[3.5vw]"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    type="button"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`transform transition-transform duration-300 will-change-[rotate] ${
                        openIndex === idx ? "rotate-180" : ""
                      }`}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <polyline
                          points="6 9 12 15 18 9"
                          fill="none"
                          stroke="#1E1E1E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden will-change-[height,padding] transition-all duration-300 px-6 ${
                      openIndex === idx ? "max-h-40 py-2" : "max-h-0 py-0"
                    } text-[#4a4a4a] text-[1.2vw] max-[599px]:text-[3.2vw]`}
                    style={{
                      maxHeight: openIndex === idx ? "160px" : "0",
                    }}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          );
        </div>
        <div className="w-full pb-20 flex items-center justify-center flex-col CTA">
          <h1 className="text-[3vw] font-bold leading-tight">
            Ready to enhance your AI interactions?
          </h1>
          <p className="text-[1.1vw] pb-6">
            Join thousands of users who are building stronger cognitive skills
            while using AI tools.
          </p>
          <p className="text-[#4a4a4a] text-[1.5vw] max-[599px]:text-[3.5vw] leading-[1.3] font-semibold">
            Download the extension below
          </p>
          <a href="./extension.zip" download="Senova-AI-Extension.zip">
            <button className="bg-[#1e1e1e] cursor-pointer text-[#dedede] text-[1vw] max-[599px]:text-[3vw] font-semibold px-6 py-2 rounded-full mt-4 flex items-center gap-2 hover:shadow-md transition-all duration-300">
              Download Extension
              <FaDownload />{" "}
            </button>
          </a>
          <div className="w-full flex items-center justify-center mt-2">
            <div className="flex gap-12 max-[599px]:gap-6 w-fit px-10 py-4 rounded-lg">
              <div className="flex items-center gap-2 text-[1.1vw] max-[599px]:text-[3vw] font-medium">
                ✓<span className="text-[#1e1e1e] ">Free to use</span>
              </div>
              <div className="flex items-center gap-2 text-[1.1vw] max-[599px]:text-[3vw] font-medium">
                ✓<span className="text-[#1e1e1e] ">Privacy-first</span>
              </div>
              <div className="flex items-center gap-2 text-[1.1vw] max-[599px]:text-[3vw] font-medium">
                ✓<span className="text-[#1e1e1e] ">No sign-up required</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* </section> */}
      <Footer />
    </>
  );
};

export default About;
