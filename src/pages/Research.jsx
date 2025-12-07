import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Scene from "../components/Scene";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

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

const Research = () => {
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
      <main className="relative z-2 w-full h-screen flex items-center justify-center text-[3.5vw] font-bold max-[599px]:text-[9.5vw]">
        <h1>Coming Soon</h1>
      </main>
      <Footer />
    </>
  );
};

export default Research;
