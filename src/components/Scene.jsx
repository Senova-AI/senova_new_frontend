import React from "react";
import { Model } from "./Model";
import { Environment, Text } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Suspense } from "react";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
  const mobile = window.innerWidth < 900;

  return (
    <>
      <Environment preset="studio" />
      <Suspense>
        <Model scale={5} position-y={-6} position-x={mobile ? 0 : 5} rotation-y={mobile ? 0 : -1.5} />
      </Suspense>
    </>
  );
};

export default Scene;
