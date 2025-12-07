import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routes/Router.jsx";
import { RouterProvider } from "react-router-dom";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import CustomCursor from "./components/Cursor.jsx";
import GradualBlurMemo from "./components/Blur.jsx";
import Noise from "./components/Noise.jsx";

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 350); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomCursor />
    <div className="fixed top-0 left-0 w-full h-full z-3 pointer-events-none">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />

        <div className="fixed top-0 left-0 w-full h-full z-4 pointer-events-none">
          <GradualBlurMemo
            target="parent"
            position="bottom"
            height="6rem"
            strength={2}
            divCount={5}
            curve="bezier"
            exponential={true}
            opacity={1}
          />
        </div>
      </div>
    <RouterProvider router={Router} />
  </StrictMode>
);
