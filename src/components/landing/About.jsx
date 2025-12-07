import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React from "react";

gsap.registerPlugin(SplitText);

const About = () => {
  useGSAP(() => {
    let title = SplitText.create(".title1", { type: "chars" });
    let subTitle = SplitText.create(".subTitle1", { type: "chars" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section1-1",
        start: "top 70%",
        end: "top 40%",
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

  useGSAP(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section1-2",
        start: "top 60%",
        end: "top 30%",
        // markers: true,
        scrub: 0.3,
      },

      defaults: { ease: "none", willChange: "transform opacity filter" },
    });

    tl2.fromTo(
      ".dets1",
      {
        x: 200,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
      }
    );
  });
  useGSAP(() => {
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section1-3",
        start: "top 60%",
        end: "top 30%",
        // markers: true,
        scrub: 0.3,
      },

      defaults: { ease: "none", willChange: "transform opacity filter" },
    });

    tl3.fromTo(
      ".dets2",
      {
        x: -200,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
      }
    );
  });
  useGSAP(() => {
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section1-4",
        start: "top 60%",
        end: "top 30%",
        // markers: true,
        scrub: 0.3,
      },

      defaults: { ease: "none", willChange: "transform opacity filter" },
    });

    tl4.fromTo(
      ".dets3",
      {
        x: 200,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
      }
    );
  });
  useGSAP(() => {
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section1-5",
        start: "top 60%",
        end: "top 30%",
        // markers: true,
        scrub: 0.3,
      },

      defaults: { ease: "none", willChange: "transform opacity filter" },
    });

    tl5.fromTo(
      ".dets4",
      {
        x: -200,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
      }
    );
  });
  useGSAP(() => {
    const tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section1-6",
        start: "top 60%",
        end: "top 30%",
        // markers: true,
        scrub: 0.3,
      },

      defaults: { ease: "none", willChange: "transform opacity filter" },
    });

    tl6.fromTo(
      ".dets5",
      {
        x: 200,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
      }
    );
  });

  return (
    <div className="w-full section1-1 h-fit max-[599px]:px-4">
      <section className="w-full pt-40 max-[599px]:pt-10 flex items-center justify-center flex-col">
        <h1 className="title1 text-[4vw] max-[599px]:text-[12vw] text-[#1e1e1e] font-semibold">
          Features
        </h1>
        <p className="subTitle1 w-[60%] max-[599px]:w-full text-[#4a4a4a] text-[1.2vw] max-[599px]:text-[3.2vw] leading-[1.2] font-medium text-center">
          Senova uses Affective Computing and risk stratification to detect
          severe psychological distress. Upon identification, it immediately
          executes a crisis intervention protocol, delivering validated
          resources and links to mental health professionals, ensuring ethical
          and timely support.
        </p>
      </section>
      <section className="w-full section1-2 h-screen flex items-center justify-end px-40 max-[599px]:px-4">
        <div className="w-[60%] max-[599px]:w-full dets1 border border-[#4a4a4a]/30 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 backdrop-blur-sm rounded-xl flex flex-col">
          <h1 className="text-[#1e1e1e] fTitle1 text-[3vw] max-[599px]:text-[9vw] leading-none font-bold mb-4">
            The Cognitive Cost
          </h1>
          <p className="text-[#4a4a4a] fSubtitle1 text-[1.2vw] max-[599px]:text-[3.2vw] leading-[1.3] font-medium">
            <strong>AI's Impact on the Brain Feature Focus:</strong> Neural
            Atrophy from Cognitive Offloading AI over-reliance triggers
            cognitive offloading, damaging the mental effort needed for
            learning. This causes atrophy in key brain regions like the PFC and
            hippocampus.
          </p>
          <ol className="text-left list1 relative mt-4 list-disc pl-6 flex flex-col gap-y-3 text-[#4a4a4a] text-[1.2vw] max-[599px]:text-[3.2vw] leading-[1.3] font-medium">
            <li className="mb-2 list-none -ml-6 ">
              <strong>Key Neural Deterioration Points</strong>
            </li>
            <li>
              <strong>PFC Hypoactivity:</strong> The prefrontal cortex shows
              reduced activity, weakening critical analysis.
            </li>

            <li>
              <strong>Hippocampal Starvation:</strong> Lack of active retrieval
              impairs the hippocampus, blocking long-term memory.
            </li>

            <li>
              <strong> Neural Under-Engagement:</strong> Decreased alpha and
              beta connectivity indicates low cognitive effort.
            </li>

            <li>
              <strong> Loss of Ownership:</strong> Users lose psychological
              ownership and motivation over their work.
            </li>

            <li>
              <strong>Accelerated Debt:</strong> Rapidly decreases the capacity
              for independent thought.
            </li>
          </ol>
        </div>
      </section>
      <section className="w-full section1-3 h-screen flex items-center justify-start px-40 max-[599px]:px-4">
        <div className="w-[60%] dets2 max-[599px]:w-full  border border-[#4a4a4a]/30 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 backdrop-blur-sm rounded-xl flex flex-col">
          <h1 className="fTitle2 text-[#1e1e1e] text-[3vw] max-[599px]:text-[9vw] leading-none font-bold mb-4">
            The Cognitive Treatment
          </h1>
          <p className="fSubtitle2 text-[#4a4a4a] text-[1.2vw] max-[599px]:text-[3.2vw] leading-[1.3] font-medium">
            <strong>Rebuilding the Mind Feature Focus:</strong> Active Retrieval
            and Neuro-Rehabilitation The cure for cognitive debt requires
            replacing passive AI use with effortful, active reconstruction,
            mirroring treatments for memory deficits.
            <ol className="text-left mt-4 list-disc pl-6 flex flex-col gap-y-3">
              <li className="mb-2 list-none -translate-x-6 ">
                <strong>Psychological Principles in Practice</strong>
              </li>
              <li>
                <strong>Active Retrieval Mandate:</strong> Forces the brain
                (hippocampus) to actively recall information, strengthening
                memory traces.
              </li>

              <li>
                <strong>Targeted Neuroplasticity:</strong> Structured exercises
                to rebuild specific domains like attention and executive
                function.
              </li>

              <li>
                <strong> Contextual Re-Encoding:</strong> Re-establishes links
                between information and the learning context for robust memory.
              </li>

              <li>
                <strong> Metacognitive Scaffolding:</strong> Trains users in
                "thinking about thinking" to foster independent learning and
                self-correction.
              </li>
            </ol>
          </p>
        </div>
      </section>
      <section className="w-full section1-4 h-screen flex items-center justify-end px-40 max-[599px]:px-4">
        <div className="w-[60%] max-[599px]:w-full dets3 border border-[#4a4a4a]/30 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 backdrop-blur-sm rounded-xl flex flex-col">
          <h1 className="text-[#1e1e1e] fTitle3 text-[3vw] max-[599px]:text-[9vw] leading-none font-bold mb-4">
            AI-Enforced Cognitive Reflection
          </h1>
          <p className="text-[#4a4a4a] fSubtitle3 text-[1.2vw] max-[599px]:text-[3.2vw] leading-[1.3] font-medium">
            <strong>Feature Focus:</strong> Bridging Psychology and Technology
            Senova uses specialized AI as a cognitive enforcer, compelling the
            user into active retrieval and effortful cognition to stop passive
            consumption.
            <ol className="text-left list3 mt-4 list-disc pl-6 flex flex-col gap-y-3">
              <li className="mb-2 list-none -translate-x-6 ">
                <strong>AI Mechanisms for Cognitive Rebuildings</strong>
              </li>
              <li>
                <strong>Cognitive Reflection AI:</strong> Generates interactive
                quizzes from conversations to test true understanding and
                prevent mere copying.
              </li>

              <li>
                <strong>Explain-Before-Reveal:</strong> Implements cognitive
                friction by forcing explanation before the final answer is
                provided.
              </li>

              <li>
                <strong>Metacognitive Scaffolding:</strong> Guides the user
                through steps like "Formulate the Hypothesis," training them in
                expert-level thinking.
              </li>

              <li>
                <strong> Proactive Engagement:</strong> Monitors for passive
                queries and immediately pivots the interaction to a demanding,
                retrieval-based style.
              </li>

              <li>
                <strong>Accelerated Debt:</strong> Rapidly decreases the
                capacity for independent thought.
              </li>
            </ol>
          </p>
        </div>
      </section>
      <section className="w-full section1-5 h-screen flex items-center justify-start px-40 max-[599px]:px-4">
        <div className="w-[60%] max-[599px]:w-full dets4 border border-[#4a4a4a]/30 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 backdrop-blur-sm rounded-xl flex flex-col">
          <h1 className="text-[#1e1e1e] text-[3vw] max-[599px]:text-[9vw] leading-none font-bold mb-4">
            Interactive Wellness and Cognitive Games
          </h1>
          <p className="text-[#4a4a4a] text-[1.2vw] max-[599px]:text-[3.2vw] leading-[1.3] font-medium">
            <strong> Feature Focus:</strong> Gamified Neuro-Rehabilitation
            Translates abstract cognitive principles into engaging activities
            for Active Retrieval and Emotional Regulation.
            <ol className="text-left mt-4 list-disc pl-6 flex flex-col gap-y-3">
              <li className="mb-2 list-none -translate-x-6 ">
                <strong>Key Wellness Game Tools</strong>
              </li>
              <li>
                <strong>Breathing Maze:</strong> Engages the parasympathetic
                system for deep emotional regulation and stress reduction.
              </li>

              <li>
                <strong>Memory Grid:</strong> Enforces high-effort working
                memory and active retrieval to strengthen neural pathways.
              </li>

              <li>
                <strong> Whack-a-Thought:</strong> CBT-inspired tool promoting
                cognitive restructuring against negative self-talk.
              </li>

              <li>
                <strong>AI Quiz Generator:</strong> Enforces the testing effect
                by making users recall and apply knowledge, not just consume it.
              </li>

              <li>
                <strong>Shape Flow & Color Maze:</strong> Targeted visual games
                to rebuild sustained attention and focus.
              </li>
            </ol>
          </p>
        </div>
      </section>
      <section className="w-full section1-6 h-screen flex items-center justify-end px-40 max-[599px]:px-4">
        <div className="w-[60%] max-[599px]:w-full dets5 border border-[#4a4a4a]/30 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 backdrop-blur-sm rounded-xl flex flex-col">
          <h1 className="text-[#1e1e1e] text-[3vw] max-[599px]:text-[9vw] leading-none font-bold mb-4">
            Technical Architecture and Security
          </h1>
          <p className="text-[#4a4a4a] text-[1.2vw] max-[599px]:text-[3.2vw] leading-[1.3] font-medium">
            <strong>Feature Focus:</strong> Privacy, Data Integrity, and
            Performance
            <ol className="text-left mt-4 list-disc pl-6 flex flex-col gap-y-3">
              <li className="">
                <strong> Privacy Guardian:</strong> Enforces a privacy-first
                approach with optional PII detection and text sanitization.
              </li>
              <li>
                <strong>Privacy Guardian:</strong> Enforces a privacy-first
                approach with optional PII detection and text sanitization.
              </li>

              <li>
                <strong>High-Performance Backend:</strong> Built on the
                asynchronous FastAPI framework and Python for scalable,
                high-speed API communication.
              </li>

              <li>
                <strong>Decoupled Architecture: </strong>Separates the LangChain
                Agent from Game Services for flexibility and fault tolerance.
              </li>

              <li>
                <strong> Google Gemini API:</strong> Utilizes powerful Gemini
                models for emotional intelligence and conversation generation.
              </li>

              <li>
                <strong>Robust Security:</strong> Implements JWT (JSON Web
                Token) support for secure, token-based authentication.
              </li>
            </ol>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
