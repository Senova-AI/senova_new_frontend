import React from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

const slideData = [
  {
    img: "https://images.unsplash.com/photo-1706433456693-5eaf15903735?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pawan Kumar",
    text:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Pawan Kumar",
    title: "Operations Director at CloudScale",
  },
  {
    img: "https://images.unsplash.com/photo-1645799218342-b1c835bed7bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mahek Tripathi",
    text:
      "Senova AI completely revolutionized our workflow and allowed us to focus on creative problem-solving.",
    name: "Mahek Tripathi",
    title: "Lead Software Engineer at Innovent",
  },
  {
    img: "https://images.unsplash.com/photo-1607457796060-a4249c341026?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Abuzar",
    text:
      "As a researcher, I value the clarity and depth this platform brings to cognitive exploration.",
    name: "Abuzar",
    title: "Cognitive Researcher at MindForge",
  },
  {
    img: "https://images.unsplash.com/photo-1710655182570-a5069e1f4c23?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Divya Singh",
    text:
      "The support team is top-notch and really took the time to understand our challenges. Highly recommended!",
    name: "Divya Singh",
    title: "Product Manager at SaaSvance",
  },
  {
    img: "https://images.unsplash.com/photo-1644488314605-1dd8d9c1b39c?q=80&w=746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sky Gupta",
    text:
      "Robust, reliable, and beautifully designed — Senova AI sets a new standard for intelligent solutions.",
    name: "Sky Gupta",
    title: "CTO at NovaTech",
  },
];

const Testimonials = () => {
  useGSAP(() => {
    let title = SplitText.create(".title3", { type: "chars" });
    let subTitle = SplitText.create(".subTitle3", { type: "chars" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-3",
        start: "top 80%",
        end: "top 50%",
        // markers: true,
        scrub: 0.3,
      },

      defaults: { ease: "none", willChange: "transform opacity filter" },
    });

    tl.fromTo(
      title.chars,
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
      subTitle.chars,
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

  return (
    <>
      <div className="text-center section-3 flex items-center flex-col max-[599px]:px-4 pt-10 max-[599px]:pt-0">
        <h1 className="text-[3vw] max-[599px]:text-[9vw] title3 text-[#1e1e1e] font-semibold">
          What Users Say
        </h1>
        <p className="w-[50%] max-[599px]:w-full subTitle3 text-[#4a4a4a] text-[1.2vw] max-[599px]:text-[3.2vw] leading-[1.2] font-medium">
          Discover how Senova AI transforms cognitive experiences
        </p>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        loop={true}
        grabCursor
        className="w-full h-[50vh] max-[599px]:h-[30vh] max-[599px]:my-6 relative px-40"
      >
        {slideData.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full flex items-center justify-center text-8xl max-[599px]:px-4 ">
              <div className="max-w-4xl w-full rounded-3xl backdrop-blur-sm border border-[] p-12 max-[599px]:p-6">
                <div className="flex gap-8 items-start">
                  {/* <!-- Profile Image --> */}
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="w-24 max-[599px]:h-20 h-24 max-[599px]:w-20 rounded-full object-cover shrink-0"
                  />

                  {/* <!-- Content --> */}
                  <div className="flex-1 text-[#1e1e1e]">
                    {/* <!-- Testimonial Text --> */}
                    <p className="text-2xl max-[599px]:text-[3.2vw] leading-relaxed mb-8 max-[599px]:mb-4">
                      "{slide.text}"
                    </p>

                    {/* <!-- Author Info --> */}
                    <div>
                      <p className=" font-semibold text-lg max-[599px]:text-[3.5vw] mb-1">
                        {slide.name}
                      </p>
                      <p className="text-base max-[599px]:text-[3vw]">
                        {slide.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
