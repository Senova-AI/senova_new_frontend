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
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    alt: "Emily Watson",
    text:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    title: "Operations Director at CloudScale",
  },
  {
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=150&h=150&fit=crop",
    alt: "David Lee",
    text:
      "Senova AI completely revolutionized our workflow and allowed us to focus on creative problem-solving.",
    name: "David Lee",
    title: "Lead Software Engineer at Innovent",
  },
  {
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop",
    alt: "Sophia Miller",
    text:
      "As a researcher, I value the clarity and depth this platform brings to cognitive exploration.",
    name: "Sophia Miller",
    title: "Cognitive Researcher at MindForge",
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop",
    alt: "Michael Chen",
    text:
      "The support team is top-notch and really took the time to understand our challenges. Highly recommended!",
    name: "Michael Chen",
    title: "Product Manager at SaaSvance",
  },
  {
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    alt: "Amelia Patel",
    text:
      "Robust, reliable, and beautifully designed — Senova AI sets a new standard for intelligent solutions.",
    name: "Amelia Patel",
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
