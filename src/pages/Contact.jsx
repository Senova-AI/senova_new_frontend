import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import TiltedCard from "../components/TiltedCard";
import { useEffect } from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const Contactdata = [
  {
    name: "Aakash Jaiswal",
    role: "Team Leader",
    imageSrc: "/aakash2.svg",
    linkedin: "https://www.linkedin.com/in/aakash-jaiswal-773bb9244",
    twitter: "https://x.com/Aakash_jais03",
    mail: "jaiswalraj03014@gmail.com",
  },
  {
    name: "Gauranga Kumar",
    role: "Researcher",
    imageSrc: "/gauranga.svg",
    linkedin: "https://www.linkedin.com/in/gauranga-kumar-baishya-4a12731ba/",
    twitter: "https://twitter.com/gauranga_research",
    mail: "gaurangabaishya15@gmail.com",
  },
  {
    name: "Sameer Khan",
    role: "Frontend Developer",
    imageSrc: "https://avatars.githubusercontent.com/u/131584949?v=4",
    linkedin: "https://www.linkedin.com/in/dev-sameer-khan/",
    twitter: "https://x.com/Sameer_8teen",
    mail: "khansameer84233@gmail.com",
  },
  {
    name: "Isha Surana",
    role: "Clinical Psycologist & Researcher",
    imageSrc: "/isha.svg",
    linkedin: "https://www.linkedin.com/in/tester-sicologist/",
    twitter: "https://twitter.com/tester_sicologist",
    mail: "tester.sicologist@example.com",
  },
];

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

gsap.registerPlugin(SplitText);

const Contact = () => {
  useGSAP(() => {
    let head = SplitText.create(".cTitle", { type: "chars" });
    let subHead = SplitText.create(".cSubTitle", { type: "chars" });

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
    gsap.from(
      ".cards",
      {
        x: -100,
        opacity: 0,
        duration: 0.3,
        filter: "blur(5px)",
        stagger: "1",
      },
      "-=1"
    );
  }, []);

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
      <main className="w-full min-h-screen relative z-2 flex items-center justify-center flex-col gap-20 max-[599px]:gap-10 max-[599px]:py-20 max-[599px]:px-4">
        <div className="w-full flex items-center justify-center flex-col">
          <h1 className="text-[3vw] max-[599px]:text-[9vw] cTitle text-[#1e1e1e] font-semibold">
            Meet Our Team
          </h1>
          <p className="w-[50%] text-center max-[599px]:w-full cSubTitle text-[#4a4a4a] text-[1.2vw] max-[599px]:text-[3.2vw] leading-[1.2] font-medium">
            The brilliant minds behind Senova AI, revolutionizing human-AI
            interaction through advanced healthcare technology.
          </p>
        </div>
        <div className="w-full flex items-center justify-center gap-10 max-[599px]:flex-wrap max-[599px]:gap-6 cards">
          {Contactdata.map((item, index) => (
            <TiltedCard
              key={index}
              imageSrc={item.imageSrc}
              altText={item.name + item.role}
              captionText={item.role}
              containerHeight="450px"
              containerWidth="350px"
              imageHeight="450px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              linkedin={item.linkedin}
              twitter={item.twitter}
              mail={item.mail}
              overlayContent={
                <p className="tilted-card-demo-text mt-6 ml-6 bg-black/20 text-[#dedede] px-4 py-1 rounded-full">
                  {item.name}
                </p>
              }
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
