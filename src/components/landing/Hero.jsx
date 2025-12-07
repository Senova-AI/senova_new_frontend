import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.in", willChange: "transform opacity" },
    });

    // the target can be selector text, an element, or an Array of elements
    let head1 = SplitText.create(".head1", { type: "chars" });
    let head2 = SplitText.create(".head2", { type: "chars" });
    let head3 = SplitText.create(".head3", { type: "chars" });

    tl.from(
      head1.chars,
      {
        x: -50,
        opacity: 0,
        duration: 0.3,
        filter: "blur(5px)",
        stagger: 0.05,
      },
      ">=1.7"
    );
    tl.from(
      head2.chars,
      {
        x: -50,
        opacity: 0,
        duration: 0.3,
        filter: "blur(5px)",
        stagger: 0.05,
      },
      "-=0.5"
    );
    tl.from(
      head3.chars,
      {
        x: -50,
        opacity: 0,
        duration: 0.3,
        filter: "blur(5px)",
        stagger: 0.05,
      },
      "-=0.6"
    );

    tl.from(
      ".box1",
      {
        y: 50,
        opacity: 0,
        duration: 0.5,
        filter: "blur(5px)",
      },
      "b"
    );
    tl.from(
      ".box2",
      {
        y: 50,
        opacity: 0,
        duration: 0.5,
        filter: "blur(5px)",
      },
      "-=0.1"
    );
    tl.from(
      ".box3",
      {
        y: 50,
        opacity: 0,
        duration: 0.5,
        filter: "blur(5px)",
      },
      "-=0.1"
    );
    tl.from(
      ".play-btn",
      {
        y: 50,
        opacity: 0,
        duration: 0.5,
        filter: "blur(5px)",
      },
      "-=1.8"
    );
  }, []);

  return (
    <section className="w-full h-screen p-12 max-[599px]:p-4 relative overflow-hidden z-0">
      {/* <Orb
        hoverIntensity={0.3}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      /> */}
      <div className="overlay absolute inset-0 pt-20 max-[599px]:pt-10 w-full h-screen pointer-events-none flex items-center justify-center flex-col gap-20 max-[599px]:gap-16 px-60 max-[599px]:px-4 text-[#1E1E1E] font-semibold text-[9vw] max-[599px]:text-[15vw] leading-none">
        <div className="title-one w-full relative">
          <h1 className="head1">Unplug</h1>
          <div className="box1 flex items-center gap-4 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-t-xl rounded-r-xl px-6 max-[599px]:px-4 py-3 max-[599px]:py-2 w-fit shadow-md absolute left-[37%] -top-9 max-[599px]:-top-24 text-[.9vw] leading-tight max-[599px]:text-[3vw] text-[#6F6F6F] font-normal">
            <span className="flex items-center justify-center rounded-full bg-[#4A4A4A] w-10 max-[599px]:w-8 h-10 max-[599px]:h-8">
              <svg width="26" height="26" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="4.5" r="1.5" fill="#fff" fillOpacity="0.8" />
                <circle
                  cx="4.5"
                  cy="13.5"
                  r="1.5"
                  fill="#fff"
                  fillOpacity="0.8"
                />
                <circle
                  cx="13.5"
                  cy="13.5"
                  r="1.5"
                  fill="#fff"
                  fillOpacity="0.8"
                />
                <circle cx="9" cy="9" r="1.5" fill="#fff" fillOpacity="0.8" />
              </svg>
            </span>
            <span>
              Trapped by worry, cognitive debt, <br /> and endless prompts? Stop
              feeling <br /> overwhelmed by the AI-driven world.
            </span>
          </div>
        </div>
        <div className="title-two w-full text-center relative">
          <h1 className="head2">Think</h1>
          <div className="box2 flex items-center gap-4 bg-gradient-to-br from-white/20 to-white/10 rounded-b-xl rounded-l-xl px-6 max-[599px]:px-4 py-3 max-[599px]:py-2 w-fit  backdrop-blur-sm shadow-md absolute left-1/6 max-[599px]:left-0 -bottom-24 max-[599px]:-bottom-16 text-[.9vw] le max-[599px]:text-[3vw] leading-tight text-left text-[#6f6f6f] font-normal">
            <span className="flex items-center justify-center rounded-full bg-[#4a4a4a] w-10 max-[599px]:w-8 h-10 max-[599px]:h-8">
              <svg width="26" height="26" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="4.5" r="1.5" fill="#fff" fillOpacity="0.8" />
                <circle
                  cx="4.5"
                  cy="13.5"
                  r="1.5"
                  fill="#fff"
                  fillOpacity="0.8"
                />
                <circle
                  cx="13.5"
                  cy="13.5"
                  r="1.5"
                  fill="#fff"
                  fillOpacity="0.8"
                />
                <circle cx="9" cy="9" r="1.5" fill="#fff" fillOpacity="0.8" />
              </svg>
            </span>
            <span>
              Our AI doesn't just answer it notices. <br /> Get empathetic
              support and instant <br /> access to mental health resources{" "}
              <br /> when you need a safe pivot.
            </span>
          </div>
        </div>
        <div className="title-three w-full text-right relative">
          <h1 className="head3">Thrive</h1>
          <div className="box3 flex items-center gap-4 bg-gradient-to-br from-white/20 to-white/10 rounded-b-xl rounded-l-xl px-6 max-[599px]:px-4 py-3 max-[599px]:py-2 w-fit max-[599px]:w-[67%] shadow-md backdrop-blur-sm absolute left-[55%] max-[599px]:left-[33%] -bottom-20 max-[599px]:-bottom-26 text-[.9vw] max-[599px]:text-[3vw] leading-tight text-[#6f6f6f] text-left font-normal">
            <span className="flex items-center justify-center rounded-full bg-[#4a4a4a] w-10 max-[599px]:w-8 h-10 max-[599px]:h-8">
              <svg width="26" height="26" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="4.5" r="1.5" fill="#fff" fillOpacity="0.8" />
                <circle
                  cx="4.5"
                  cy="13.5"
                  r="1.5"
                  fill="#fff"
                  fillOpacity="0.8"
                />
                <circle
                  cx="13.5"
                  cy="13.5"
                  r="1.5"
                  fill="#fff"
                  fillOpacity="0.8"
                />
                <circle cx="9" cy="9" r="1.5" fill="#fff" fillOpacity="0.8" />
              </svg>
            </span>
            <span>
              Reclaim your focus. Use our wellness games <br /> and tools to
              rebuild critical thought and master <br /> mental resilience.
              Think Deep. Live Well.
            </span>
          </div>
        </div>
      </div>
      {/* <div className="play-btn absolute bottom-20 left-1/2 -translate-x-1/2 bg-[#4a4a4a] text-[#dedede] rounded-full cursor-pointer px-6 py-4 flex items-center justify-center gap-2 leading-none">
        <FaPlay />
        <span className="text-[1.2vw] font-medium">Get Started</span>
      </div> */}
    </section>
  );
};

export default Hero;
