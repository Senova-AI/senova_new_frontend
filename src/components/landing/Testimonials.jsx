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
        // spaceBetween={50}
        slidesPerView={1}
        loop={true}
        grabCursor
        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
        // navigation
        // pagination={{ clickable: true , enabled : false}}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        className="w-full h-[50vh] max-[599px]:h-[30vh] max-[599px]:my-6 relative px-40"
      >
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center text-8xl max-[599px]:px-4 ">
            <div className="max-w-4xl w-full rounded-3xl backdrop-blur-sm border border-[] p-12 max-[599px]:p-6">
              <div className="flex gap-8 items-start">
                {/* <!-- Profile Image --> */}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  alt="Emily Watson"
                  className="w-24 max-[599px]:h-20 h-24 max-[599px]:w-20 rounded-full object-cover shrink-0"
                />

                {/* <!-- Content --> */}
                <div className="flex-1 text-[#1e1e1e]">
                  {/* <!-- Testimonial Text --> */}
                  <p className="text-2xl max-[599px]:text-[3.2vw] leading-relaxed mb-8 max-[599px]:mb-4">
                    "This solution has significantly improved our team's
                    productivity. The intuitive interface makes complex tasks
                    simple."
                  </p>

                  {/* <!-- Author Info --> */}
                  <div>
                    <p className=" font-semibold text-lg max-[599px]:text-[3.5vw] mb-1">
                      Emily Watson
                    </p>
                    <p className="text-base max-[599px]:text-[3vw]">
                      Operations Director at CloudScale
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center text-8xl max-[599px]:px-4">
            <div className="max-w-4xl w-full rounded-3xl backdrop-blur-sm border border-[] p-12 max-[599px]:p-6">
              <div className="flex gap-8 items-start">
                {/* <!-- Profile Image --> */}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  alt="Emily Watson"
                  className="w-24 max-[599px]:h-20 h-24 max-[599px]:w-20 rounded-full object-cover shrink-0"
                />

                {/* <!-- Content --> */}
                <div className="flex-1 text-[#1e1e1e]">
                  {/* <!-- Testimonial Text --> */}
                  <p className="text-2xl max-[599px]:text-[3.2vw] leading-relaxed mb-8 max-[599px]:mb-4">
                    "This solution has significantly improved our team's
                    productivity. The intuitive interface makes complex tasks
                    simple."
                  </p>

                  {/* <!-- Author Info --> */}
                  <div>
                    <p className=" font-semibold text-lg max-[599px]:text-[3.5vw] mb-1">
                      Emily Watson
                    </p>
                    <p className="text-base max-[599px]:text-[3vw]">
                      Operations Director at CloudScale
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center text-8xl max-[599px]:px-4">
            <div className="max-w-4xl w-full rounded-3xl backdrop-blur-sm border border-[] p-12 max-[599px]:p-6">
              <div className="flex gap-8 items-start">
                {/* <!-- Profile Image --> */}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  alt="Emily Watson"
                  className="w-24 max-[599px]:h-20 h-24 max-[599px]:w-20 rounded-full object-cover shrink-0"
                />

                {/* <!-- Content --> */}
                <div className="flex-1 text-[#1e1e1e]">
                  {/* <!-- Testimonial Text --> */}
                  <p className="text-2xl max-[599px]:text-[3.2vw] leading-relaxed mb-8 max-[599px]:mb-4">
                    "This solution has significantly improved our team's
                    productivity. The intuitive interface makes complex tasks
                    simple."
                  </p>

                  {/* <!-- Author Info --> */}
                  <div>
                    <p className=" font-semibold text-lg max-[599px]:text-[3.5vw] mb-1">
                      Emily Watson
                    </p>
                    <p className="text-base max-[599px]:text-[3vw]">
                      Operations Director at CloudScale
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center text-8xl max-[599px]:px-4">
            <div className="max-w-4xl w-full rounded-3xl backdrop-blur-sm border border-[] p-12 max-[599px]:p-6">
              <div className="flex gap-8 items-start">
                {/* <!-- Profile Image --> */}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  alt="Emily Watson"
                  className="w-24 max-[599px]:h-20 h-24 max-[599px]:w-20 rounded-full object-cover shrink-0"
                />

                {/* <!-- Content --> */}
                <div className="flex-1 text-[#1e1e1e]">
                  {/* <!-- Testimonial Text --> */}
                  <p className="text-2xl max-[599px]:text-[3.2vw] leading-relaxed mb-8 max-[599px]:mb-4">
                    "This solution has significantly improved our team's
                    productivity. The intuitive interface makes complex tasks
                    simple."
                  </p>

                  {/* <!-- Author Info --> */}
                  <div>
                    <p className=" font-semibold text-lg max-[599px]:text-[3.5vw] mb-1">
                      Emily Watson
                    </p>
                    <p className="text-base max-[599px]:text-[3vw]">
                      Operations Director at CloudScale
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center text-8xl max-[599px]:px-4">
            <div className="max-w-4xl w-full rounded-3xl backdrop-blur-sm border border-[] p-12 max-[599px]:p-6">
              <div className="flex gap-8 items-start">
                {/* <!-- Profile Image --> */}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  alt="Emily Watson"
                  className="w-24 max-[599px]:h-20 h-24 max-[599px]:w-20 rounded-full object-cover shrink-0"
                />

                {/* <!-- Content --> */}
                <div className="flex-1 text-[#1e1e1e]">
                  {/* <!-- Testimonial Text --> */}
                  <p className="text-2xl max-[599px]:text-[3.2vw] leading-relaxed mb-8 max-[599px]:mb-4">
                    "This solution has significantly improved our team's
                    productivity. The intuitive interface makes complex tasks
                    simple."
                  </p>

                  {/* <!-- Author Info --> */}
                  <div>
                    <p className=" font-semibold text-lg max-[599px]:text-[3.5vw] mb-1">
                      Emily Watson
                    </p>
                    <p className="text-base max-[599px]:text-[3vw]">
                      Operations Director at CloudScale
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonials;
