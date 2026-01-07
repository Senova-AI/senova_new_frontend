import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import React, { useEffect, useRef, Suspense } from "react";
import Scene from "../components/Scene";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const BrainModel = () => {
  const { scene } = useGLTF("/brain.glb");
  const modelRef = useRef();

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1.5} />;
};

const CameraController = () => {
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(({ camera }) => {
    const targetX = mousePosition.current.x * 0.2;
    const targetY = mousePosition.current.y * 0.2;
    camera.position.x += (targetX - camera.position.x) * 0.1;
    camera.position.y += (targetY - camera.position.y) * 0.1;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const ResearchBox = ({ title, text }) => (
  <section className="w-[90%] md:w-[80%] min-h-[450px] mb-32 backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl flex flex-col md:flex-row items-center p-6 md:p-12 gap-10 shadow-2xl">
    
    <div className="w-full md:w-1/2 h-[350px] bg-black/95 rounded-2xl overflow-hidden border border-white/10 shadow-inner">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          
          <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
          /* add a view compnent for this stages  */
            <Stage environment="city" intensity={0.6} contactShadow={false}>
              <BrainModel />
            </Stage>
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>

    <div className="w-full md:w-1/2 text-white">
      <h2 className="text-3xl font-bold mb-4 tracking-wide">{title}</h2>
      <p className="text-lg opacity-85 leading-relaxed">
        {text}
      </p>
    </div>
  </section>
);

const Research = () => {
  return (
    <div className="min-h-screen">
      <Loader />
      <Navbar />

      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Canvas id="canvas">
          <CameraController />
          <Scene />
        </Canvas>
      </div>

      <main className="relative z-10 flex flex-col items-center pt-32 pb-20">
        <div className="w-[85%] mb-20">
          <h1 className="text-white text-[6vw] font-black uppercase tracking-tighter">
            Research
          </h1>
        </div>

        <ResearchBox 
          title="Neural Mapping" 
          text="This section showcases the /brain.glb model as the core of our sister 14 research. The left viewport allows for a controlled interaction with the neural structure while maintaining the ambient background theme."
        />

        <ResearchBox 
          title="The Rhinocampus region" 
          text="By analyzing the localized model on the left, we can observe real-time data flow simulations. This separate instance allows for high-detail inspection without affecting the performance of the main site background."
        />

        <ResearchBox 
          title="Spatial Intelligence" 
          text="Finalizing our research findings, this model represents the culmination of spatial data gathered during the sister 14 phase, presented here in an interactive, glassmorphic environment."
        />
      </main>

      <Footer />
    </div>
  );
};

export default Research;