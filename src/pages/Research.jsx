import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  PresentationControls,
  Gltf,
  Environment,
} from "@react-three/drei";
import React, { useEffect, useRef, Suspense } from "react";
import Scene from "../components/Scene";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Model = ({path,scale=1}) => {
  const { scene } = useGLTF(path);
  const modelRef = useRef();

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={scale} />;
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

const ResearchBox = ({ title, text, children, right }) => {

  return (
    <>
      <section
        className={`w-full section1-2 flex items-center justify-center flex-col my-20 px-40 max-[599px]:px-4 `}
      >
        <div className="w-[70%]  bg-[#0F0F0F]/40 border border-[#4a4a4a]/30 shadow-2xl hover:shadow-xl transition-shadow duration-300 p-6 backdrop-blur-sm rounded-xl flex items-center justify-center flex-col">
          <div className="w-full max-[599px]:w-full bg-[#0F0F0F]/50 border border-[#4a4a4a]/30 shadow-2xl hover:shadow-xl transition-shadow duration-300 p-6 backdrop-blur-sm rounded-xl flex flex-col md:flex-row gap-10 dets1">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 45 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Environment preset="sunset" />
                <PresentationControls
                  speed={1.5}
                  global
                  zoom={0.6}
                  polar={[-0.1, Math.PI / 4]}
                >
                  <Stage
                    environment="city"
                    intensity={0.65}
                    contactShadow={false}
                  >
                    {children}
                  </Stage>
                </PresentationControls>
              </Suspense>
            </Canvas>
          </div>
          <h2 className="text-white text-[2.2vw] max-[599px]:text-[6vw] font-bold mb-4 mt-6 leading-tight fTitle1">
            {title}
          </h2>
          <p className="text-white/60 w-[90%] text-center text-[1.2vw] max-[599px]:text-[3.2vw] leading-[1.4] font-medium fSubtitle1">
            {text}
          </p>
        </div>
      </section>
    </>
  );
};

const Research = () => {
  // const { scene } = useGLTF("/brain.glb");
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

      <main className="relative z-10 flex flex-col items-center pt-10 pb-20">
        <div className="w-full hero relative h-screen flex items-center justify-center max-[599px]:pt-36  text-[#1E1E1E] flex-col px-40 max-[599px]:px-4">
          <h1 className="text-[3vw] max-[599px]:text-[9vw] aSubTitle text-center leading-tight uppercase">
            Research
          </h1>
          <h2 className="font-bold aTitle text-[13vw] max-[599px]:text-[16vw] text-center leading-none uppercase pb-6 max-[599px]:pb-2">
            Senova AI
          </h2>
          <p className="text-[1.5vw] max-[599px]:text-[3.5vw] aSubTitle text-center leading-tight">
            Senova AI is committed to pioneering research in cognitive science,
            neuroscience, and machine learning. Our goal is to advance the
            understanding of how intelligent systems can augment human
            potential, while focusing on neural health, active retrieval, and
            secure, responsible AI deployment.
          </p>
        </div>

        <div className="w-full flex items-center justify-center flex-col mb-10">
          <h1 className="text-[3vw] max-[599px]:text-[9vw] aSubTitle font-bold text-center leading-tight uppercase">
            Afected Areas
          </h1>
          <p className="text-[1.5vw] w-[60%] max-[599px]:text-[3.5vw] aSubTitle text-center leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            dolores perferendis quos ipsam distinctio est veritatis eum, nobis
            totam velit sit ipsa unde exercitationem magni!
          </p>
        </div>

        <ResearchBox
          right
          title="Neural Mapping"
          text="This section showcases the /brain.glb model as the core of our sister 14 research. The left viewport allows for a controlled interaction with the neural structure while maintaining the ambient background theme."
        >
          <Model path={"/brain.glb"}/>
        </ResearchBox>

        <ResearchBox
          title="The Rhinocampus region"
          text="By analyzing the localized model on the left, we can observe real-time data flow simulations. This separate instance allows for high-detail inspection without affecting the performance of the main site background."
        >
          <Model path={"/brain.glb"}/>
        </ResearchBox>

        <ResearchBox
          right
          title="Spatial Intelligence"
          text="Finalizing our research findings, this model represents the culmination of spatial data gathered during the sister 14 phase, presented here in an interactive, glassmorphic environment."
        ></ResearchBox>
      </main>

      <Footer />
    </div>
  );
};

export default Research;
useGLTF.preload("/brain.glb")
