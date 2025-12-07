import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { GoHomeFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Navbar = () => {
  const [ismenuopen, setismenuopen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.in", willChange: "transform opacity" },
    });

    tl.from(
      ".left",
      {
        y: -50,
        opacity: 0,
        duration: 0.3,
        filter: "blur(5px)",
      },
      ">+2.2"
    );
    tl.from(
      ".middle",
      {
        y: -50,
        opacity: 0,
        duration: 0.3,
        filter: "blur(5px)",
      },
      "-=0.3"
    );
    tl.from(
      ".right",
      {
        y: -50,
        opacity: 0,
        duration: 0.3,
        filter: "blur(5px)",
      },
      "-=0.3"
    );
  }, []);

  let links = SplitText.create(".links a", { type: "chars" });
  let imgTxt = SplitText.create(".img-txt", { type: "chars" });

  if (ismenuopen) {
    // Animate overlay
    gsap.to(".overlay-nav", {
      right: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    // Animate links with stagger
    gsap.from(links.chars, {
      x: -50,
      opacity: 0,
      filter: "blur(5px)",
      stagger: 0.03,
    });
    gsap.fromTo(
      ".img",
      {
        x: -100,
        filter: "blur(5px)",
        opacity: 0,
      },
      {
        x: 0,
        filter: "blur(0px)",
        opacity: 1,
      }
    );
    gsap.fromTo(
      imgTxt.chars,
      {
        x: -50,
        filter: "blur(5px)",
        opacity: 0,
      },
      {
        x: 0,
        filter: "blur(0px)",
        opacity: 1,
        stagger: 0.03,
      }
    );
  } else {
    // Animate overlay out
    gsap.to(".overlay-nav", {
      right: "100%",
      duration: 0.5,
      ease: "power2.out",
      delay: 0.3,
    });

    // Animate links out first
    gsap.from(links.chars, {
      // x : 50,
      filter: "blur(5px)",
      opacity: 0,
      stagger: -0.03,
    });

    gsap.fromTo(
      ".img",
      {
        x: 0,
        filter: "blur(0px)",
        opacity: 1,
      },
      {
        x: -100,
        filter: "blur(5px)",
        opacity: 0,
      }
    );
    gsap.fromTo(
      imgTxt.chars,
      {
        x: 0,
        filter: "blur(0px)",
        opacity: 1,
      },
      {
        x: -50,
        filter: "blur(5px)",
        opacity: 0,
        stagger: 0.03,
        onComplete: () => {
          gsap.set(imgTxt.chars, { x: 0, filter: "blur(0px)", opacity: 1 });
        },
      }
    );
  }

  const linksRef = useRef([]);

  useEffect(() => {
    // initialize opacity
    gsap.set(linksRef.current, { opacity: 1 });
  }, []);

  const handleMouseEnter = (index) => {
    linksRef.current.forEach((el, i) => {
      if (i !== index) {
        gsap.to(el, { opacity: 0.3, duration: 0.3, ease: "none" });
      } else {
        gsap.to(el, { opacity: 1, duration: 0.3, ease: "none" });
      }
    });
  };

  const handleMouseLeave = () => {
    gsap.to(linksRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "none",
    });
  };

  // homeicon 30
  // closeicon 32

  return (
    <>
      <header className="w-full px-12 max-[599px]:px-4 py-6 max-[599px]:py-4 fixed top-0 z-50 overflow-hidden">
        <nav className="w-full flex items-center justify-between">
          <Link to="/">
            <div className="left p-6 max-[599px]:p-3 text-[#dedede] bg-[#4a4a4a] rounded-full flex items-center justify-center cursor-pointer">
              <GoHomeFill size={window.innerWidth <= 599 ? 26 : 30} />
            </div>
          </Link>
          <div className="middle px-20 max-[599px]:px-10 py-4 max-[599px]:py-3 bg-[#6f6f6f] text-white rounded-full flex items-center justify-center gap-4 cursor-pointer">
            <div className="img-container w-10 max-[599px]:w-7">
              <img
                className="w-full h-full object-cover filter brightness-0 invert"
                src="https://www.senova.in/assets/logo.png"
                alt=""
              />
            </div>
            {/* <h1 className='font-medium'>Senova Ai</h1> */}
          </div>
          <div className="right p-6 max-[599px]:p-3 rounded-full bg-[#4a4a4a] flex items-center justify-center cursor-pointer">
            {!ismenuopen && (
              <div
                className="menu w-8 max-[599px]:w-6 h-fit flex flex-wrap"
                onClick={() => setismenuopen(true)}
              >
                <div className="1 size-4 max-[599px]:size-3 rounded-full border-3 border-[#dedede]"></div>
                <div className="2 size-4 max-[599px]:size-3 rounded-full border-3 border-[#dedede]"></div>
                <div className="3 size-4 max-[599px]:size-3 rounded-full border-3 border-[#dedede]"></div>
                <div className="4 size-4 max-[599px]:size-3 rounded-full border-3 border-[#dedede]"></div>
              </div>
            )}
            {ismenuopen && (
              <div
                className="close text-[#dedede] flex flex-wrap"
                onClick={() => setismenuopen(false)}
              >
                <IoCloseSharp size={window.innerWidth <= 599 ? 25 : 32} />
              </div>
            )}
          </div>
        </nav>
      </header>
      <div className="overlay-nav fixed right-[100%] z-40 top-0 w-full h-screen flex items-center justify-center  text-[#dedede] bg-[#1e1e1e]">
        <nav className="overlay-nav-content w-full h-full flex items-center justify-center max-[599px]:flex-col">
          <div className="left w-1/2 max-[599px]:w-full h-full flex items-center justify-center bg-[#dedede]">
            <div className="logo will-change-auto flex items-center gap-4 max-[599px]:gap-2">
              <div className="img-container w-32 max-[599px]:w-26">
                <img
                  className="w-full img h-full object-cover"
                  src="/logo.png"
                  alt=""
                />
              </div>
              <h1 className="text-[5vw] max-[599px]:text-[12vw] img-txt font-semibold text-[#1e1e1e]">
                Senova AI
              </h1>
            </div>
          </div>
          <div className="right w-1/2 max-[599px]:w-full h-full flex items-center justify-center bg-[#1e1e1e]">
            <div className="links flex items-center justify-center flex-col font-semibold uppercase text-[4vw] max-[599px]:text-[8vw]">
              {["Home", "Analysis", "Research", "About Us", "Contacts"].map(
                (text, index) => (
                  <Link
                    key={text}
                    className="links will-change-auto"
                    to={`/${
                      text === "Home" ? "" : text.toLowerCase().replace(" ", "")
                    }`}
                    ref={(el) => (linksRef.current[index] = el)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {text}
                  </Link>
                )
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
