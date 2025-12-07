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
import { SplitText } from "gsap/SplitText";
import TiltedCard from "../components/TiltedCard";

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
  useGSAP(() => {
    let head = SplitText.create(".aTitle", { type: "chars" });
    let subHead = SplitText.create(".aSubTitle", { type: "chars" });

    gsap.from(
      head.chars,
      {
        x: -50,
        opacity: 0,
        duration: 0.3,
        filter: "blur(5px)",
        stagger: 0.05,
      },
      ">=2"
    );
    gsap.from(
      subHead.chars,
      {
        x: -50,
        opacity: 0,
        duration: 0.3,
        filter: "blur(5px)",
        stagger: 0.01,
      },
      "-=1"
    );
  }, []);
  useGSAP(() => {
    let title1 = SplitText.create(".atitle1", { type: "chars" });
    let subTitle1 = SplitText.create(".asubTitle1", { type: "chars" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aSection-1",
        start: "top 70%",
        end: "top 40%",
        // markers: true,
        scrub: 0.3,
      },

      defaults: { ease: "none", willChange: "transform opacity filter" },
    });

    tl.fromTo(
      title1.chars,
      {
        x: -100,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.05,
      },
      "a"
    );
    tl.fromTo(
      subTitle1.chars,
      {
        x: -50,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.03,
      },
      "a"
    );
  });
  useGSAP(() => {
    let title2 = SplitText.create(".atitle2", { type: "chars" });
    let subTitle2 = SplitText.create(".asubTitle2", { type: "chars" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aSection-2",
        start: "top 70%",
        end: "top 40%",
        // markers: true,
        scrub: 0.3,
      },

      defaults: { ease: "none", willChange: "transform opacity filter" },
    });

    tl.fromTo(
      title2.chars,
      {
        x: -100,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.05,
      },
      "a"
    );
    tl.fromTo(
      subTitle2.chars,
      {
        x: -50,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.03,
      },
      "a"
    );
    tl.fromTo(
      ".cards1",
      {
        x: -100,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.5,
      },
      "-=1"
    );
  });
  useGSAP(() => {
    let title3 = SplitText.create(".atitle3", { type: "chars" });
    let subTitle3 = SplitText.create(".asubTitle3", { type: "chars" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aSection-3",
        start: "top 70%",
        end: "top 40%",
        // markers: true,
        scrub: 0.3,
      },

      defaults: { ease: "none", willChange: "transform opacity filter" },
    });

    tl.fromTo(
      title3.chars,
      {
        x: -100,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.05,
      },
      "a"
    );
    tl.fromTo(
      subTitle3.chars,
      {
        x: -50,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.03,
      },
      "a"
    );
    tl.fromTo(
      ".cards2",
      {
        x: -100,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.5,
      },
      "-=1"
    );
  });
  useGSAP(() => {
    let title4 = SplitText.create(".atitle4", { type: "chars" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aSection-4",
        start: "top 70%",
        end: "top 40%",
        // markers: true,
        scrub: 0.3,
      },

      defaults: { ease: "none", willChange: "transform opacity filter" },
    });

    tl.fromTo(
      title4.chars,
      {
        x: -100,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.05,
      },
      "a"
    );
    tl.fromTo(
      ".cards3",
      {
        x: -100,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.5,
      },
      "-=1"
    );
  });

  useGSAP(() => {
    let title5 = SplitText.create(".atitle5", { type: "chars" });
    let subTitle5 = SplitText.create(".asubTitle5", { type: "chars" });
    let subTitle6 = SplitText.create(".asubTitle6", { type: "chars" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aSection-5",
        start: "top 70%",
        end: "top 40%",
        // markers: true,
        scrub: 0.3,
      },

      defaults: { ease: "none", willChange: "transform opacity filter" },
    });

    tl.fromTo(
      title5.chars,
      {
        x: -100,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.05,
      },
      "a"
    );
    tl.fromTo(
      subTitle5.chars,
      {
        x: -50,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.03,
      },
      "a"
    );
    tl.fromTo(
      subTitle6.chars,
      {
        x: -50,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.03,
      },
      "b"
    );
    tl.fromTo(
      ".abtn",
      {
        x: -50,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.03,
      },
      "b"
    );
    tl.fromTo(
      ".atext1",
      {
        x: -50,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.03,
      },
      "b"
    );
  });

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
        <div className="w-full hero relative h-screen flex items-center justify-center pt-36  text-[#1E1E1E] flex-col px-40 max-[599px]:px-4">
          <h1 className="font-bold aTitle text-[7.5vw] max-[599px]:text-[10vw] text-center leading-none uppercase pb-6 max-[599px]:pb-2">
            About Senova AI
          </h1>
          <p className="text-[1.5vw] max-[599px]:text-[3.5vw] aSubTitle text-center leading-tight">
            Senova AI is dedicated to building advanced artificial intelligence
            solutions that empower businesses and individuals. Our mission is to
            bridge the gap between technology and people through seamless,
            innovative, and impactful AI products.
          </p>
        </div>
        <div className="w-full aSection-1 h-[50vh] pb-40 mission flex items-center justify-center px-20 max-[599px]:px-4">
          <div className="w-[90%] max-[599px]:w-full text-center h-full flex justify-center flex-col">
            <h1 className="font-bold atitle1 text-[3.5vw] max-[599px]:text-[9.5vw] leading-none pb-6">
              Our mission is to build a freer and more prosperous everyday life
              alongside smart AI
            </h1>
            <p className="text-[1.5vw] max-[599px]:text-[3.5vw] asubTitle1 leading-tight">
              By harnessing the power of AI, we breathe new life into outdated
              systems and transform social infrastructure into adaptable and
              efficient entities. Developing autonomous flexible AI enables us
              to enhance the systems used by corporations, municipalities and
              governments making people's lives smoother.
            </p>
          </div>
        </div>
        <div className="w-full aSection-2 services-1 text-center text-[3.5vw] max-[599px]:text-[9.5vw] font-bold max-[599px]:px-4">
          <div>
            <h1 className="atitle2">Our Values</h1>
            <p className="asubTitle2 w-1/2 max-[599px]:w-full mx-auto leading-tight text-[1.4vw] max-[599px]:text-[3.4vw] font-medium text-[#363636]">
              At Senova AI, our values drive everything we do. We believe in
              innovation, integrity, and impact. We are committed to creating AI
              solutions that are ethical, accessible.
            </p>
          </div>

          <div className="mt-10 flex items-center justify-center gap-20 max-[599px]:gap-10 px-20 pb-20 max-[599px]:pb-6 max-[599px]:px-4 flex-wrap cards1">
            <TiltedCard
              imageSrc={
                "https://images.unsplash.com/photo-1673255745677-e36f618550d1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              altText={"item.name + item.role"}
              captionText={"Dev"}
              containerHeight="450px"
              containerWidth="350px"
              imageHeight="450px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              linkedin={"item.linkedin"}
              twitter={"item.twitter"}
              mail={"item.mail"}
              overlayContent={
                <p className="tilted-card-demo-text mt-6 ml-6 bg-black/20 text-[#dedede] px-4 py-1 rounded-full">
                  {"Dev"}
                </p>
              }
            />
            <TiltedCard
              imageSrc={
                "https://images.unsplash.com/photo-1673255745677-e36f618550d1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              altText={"item.name + item.role"}
              captionText={"Dev"}
              containerHeight="450px"
              containerWidth="350px"
              imageHeight="450px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              linkedin={"item.linkedin"}
              twitter={"item.twitter"}
              mail={"item.mail"}
              overlayContent={
                <p className="tilted-card-demo-text mt-6 ml-6 bg-black/20 text-[#dedede] px-4 py-1 rounded-full">
                  {"Dev"}
                </p>
              }
            />
            <TiltedCard
              imageSrc={
                "https://images.unsplash.com/photo-1673255745677-e36f618550d1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              altText={"item.name + item.role"}
              captionText={"Dev"}
              containerHeight="450px"
              containerWidth="350px"
              imageHeight="450px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              linkedin={"item.linkedin"}
              twitter={"item.twitter"}
              mail={"item.mail"}
              overlayContent={
                <p className="tilted-card-demo-text mt-6 ml-6 bg-black/20 text-[#dedede] px-4 py-1 rounded-full">
                  {"Dev"}
                </p>
              }
            />
          </div>
        </div>
        <div className="w-full aSection-3 mt-10 max-[599px]:mt-4 services-2 text-center text-[3.5vw] max-[599px]:text-[9.5vw] max-[599px]:px-4 font-bold">
          <div>
            <h1 className="atitle3">Our offers</h1>
            <p className="asubTitle3 w-1/2 max-[599px]:w-full mx-auto leading-tight text-[1.4vw] font-medium text-[#363636] max-[599px]:text-[3.4vw]">
              Explore our suite of value-driven services designed to enhance
              your experience and support your learning journey with advanced
              AI-powered solutions.
            </p>
          </div>

          <div className="mt-10 flex items-center justify-center gap-20 max-[599px]:gap-10 px-20 pb-20 max-[599px]:pb-6 max-[599px]:px-4 flex-wrap cards2">
            <TiltedCard
              imageSrc={
                "https://images.unsplash.com/photo-1673255745677-e36f618550d1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              altText={"item.name + item.role"}
              captionText={"Dev"}
              containerHeight="450px"
              containerWidth="350px"
              imageHeight="450px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              linkedin={"item.linkedin"}
              twitter={"item.twitter"}
              mail={"item.mail"}
              overlayContent={
                <p className="tilted-card-demo-text mt-6 ml-6 bg-black/20 text-[#dedede] px-4 py-1 rounded-full">
                  {"Dev"}
                </p>
              }
            />
            <TiltedCard
              imageSrc={
                "https://images.unsplash.com/photo-1673255745677-e36f618550d1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              altText={"item.name + item.role"}
              captionText={"Dev"}
              containerHeight="450px"
              containerWidth="350px"
              imageHeight="450px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              linkedin={"item.linkedin"}
              twitter={"item.twitter"}
              mail={"item.mail"}
              overlayContent={
                <p className="tilted-card-demo-text mt-6 ml-6 bg-black/20 text-[#dedede] px-4 py-1 rounded-full">
                  {"Dev"}
                </p>
              }
            />
            <TiltedCard
              imageSrc={
                "https://images.unsplash.com/photo-1673255745677-e36f618550d1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              altText={"item.name + item.role"}
              captionText={"Dev"}
              containerHeight="450px"
              containerWidth="350px"
              imageHeight="450px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              linkedin={"item.linkedin"}
              twitter={"item.twitter"}
              mail={"item.mail"}
              overlayContent={
                <p className="tilted-card-demo-text mt-6 ml-6 bg-black/20 text-[#dedede] px-4 py-1 rounded-full">
                  {"Dev"}
                </p>
              }
            />
          </div>
        </div>
        <div className="w-full aSection-4 min-h-fit FAQ py-20 max-[599px]:py-10 max-[599px]:px-4">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-[3.5vw] atitle4 max-[599px]:text-[11vw] leading-tight font-semibold mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="w-full max-w-3xl space-y-4">
              {faqData.map((item, idx) => (
                <div
                  key={idx}
                  className={`faq-item cards3 backdrop-blur-sm border border-[#1e1e1e] rounded-lg shadow-md transition-all duration-200`}
                >
                  <button
                    className="w-full cursor-pointer flex justify-between items-center px-6 py-4 focus:outline-none font-medium text-left text-[#1e1e1e] text-[1.5vw] max-[599px]:text-[3.5vw]"
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
                    } text-[#4a4a4a] text-[1.2vw] max-[599px]:text-[3.2vw] max-[599px]:pt-0`}
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
        </div>
        <div className="w-full aSection-5 pb-20 max-[599px]:pb-10 max-[599px]:px-4 flex items-center justify-center text-center flex-col CTA">
          <h1 className="text-[3vw] max-[599px]:text-[9vw] atitle5 font-bold leading-tight">
            Ready to enhance your AI interactions?
          </h1>
          <p className="text-[1.1vw] max-[599px]:text-[3.5vw] asubTitle5 pb-6 max-[599px]:pb-4">
            Join thousands of users who are building stronger cognitive skills
            while using AI tools.
          </p>
          <p className="text-[#4a4a4a] asubTitle6 text-[1.5vw] max-[599px]:text-[5vw] leading-[1.3] font-semibold">
            Download the extension below
          </p>
          <a href="./extension.zip" download="Senova-AI-Extension.zip">
            <button className="bg-[#1e1e1e] abtn cursor-pointer text-[#dedede] text-[1vw] max-[599px]:text-[3vw] font-semibold px-6 py-2 rounded-full mt-4 flex items-center gap-2 hover:shadow-md transition-all duration-300">
              Download Extension
              <FaDownload />{" "}
            </button>
          </a>
          <div className="w-full flex items-center justify-center mt-2">
            <div className="flex atext1 gap-12 max-[599px]:gap-6 w-fit px-10 py-4 rounded-lg">
              <div className="flex items-center gap-2 text-[1.1vw] max-[599px]:text-[3.5vw] font-medium">
                ✓<span className="text-[#1e1e1e] ">Free to use</span>
              </div>
              <div className="flex items-center gap-2 text-[1.1vw] max-[599px]:text-[3.5vw] font-medium">
                ✓<span className="text-[#1e1e1e] ">Privacy-first</span>
              </div>
              <div className="flex items-center gap-2 text-[1.1vw] max-[599px]:text-[3.5vw] font-medium">
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
