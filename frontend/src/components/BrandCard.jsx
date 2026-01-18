
import React, { useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { projectData, techIconMap } from "../assets/data.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ item }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);
  
  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="
        project-card group/card relative w-80 max-sm:w-full
        rounded-xl p-1 overflow-hidden
        bg-gradient-to-br from-gray-900 to-green-950
        shadow-lg cursor-pointer
      "
    >
      {/* Glow Effect */}
      <div
        className={`
          pointer-events-none absolute z-0 size-60 rounded-full blur-3xl
          bg-gradient-to-r from-[#B6F500] via-green-500 to-purple-400
          transition-opacity duration-500
          ${visible ? "opacity-100" : "opacity-0"}
        `}
        style={{
          top: position.y - 120,
          left: position.x - 120,
        }}
      />

      {/* Live Link (Always visible) */}
      <a href={item.liveUrl} target="_blank" rel="noreferrer">
        <div
          className="
            absolute z-20 bottom-4 right-4
            p-2 rounded-full
            border border-gray-500 text-gray-400
            bg-black/30 backdrop-blur-md
            hover:border-[#B6F500] hover:text-[#B6F500]
            hover:scale-110
            transition-all
          "
        >
          <MdArrowOutward size={18} />
        </div>
      </a>

      {/* GitHub Link (CARD HOVER ONLY) */}
      <a
        href={item.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="
          absolute bottom-4 left-4 z-20
          p-2 rounded-full
          bg-black/30 backdrop-blur-md
          border border-gray-500 text-gray-400

          opacity-0 translate-y-2
          group-hover/card:opacity-100
          group-hover/card:translate-y-0

          hover:border-white hover:text-white
          hover:scale-110
          transition-all duration-300
        "
      >
        <FaGithub size={18} />
      </a>

      {/* Card Content */}
      <div className="relative z-10 bg-gray-900/80 backdrop-blur-md rounded-[10px] p-4">

        {/* IMAGE GROUP (TECH STACK ONLY HERE) */}
        <div className="relative group/image w-full rounded-md my-4 overflow-hidden">

          {/* Image */}
          <img
            src={item.image}
            alt={item.name}
            className="
              w-full rounded-md
              transition-all duration-500
              group-hover/image:scale-[1.02]
              group-hover/image:blur-sm
            "
          />

          {/* Dark Overlay */}
          <div
            className="
              absolute inset-0
              bg-black/50
              opacity-0
              group-hover/image:opacity-100
              transition-opacity duration-300
            "
          />

          {/* Tech Stack (IMAGE HOVER ONLY) */}
          <div
            className="
              absolute inset-0 z-10
              flex flex-wrap items-center justify-center
              gap-6 px-6
              opacity-0 scale-95
              group-hover/image:opacity-100
              group-hover/image:scale-100
              transition-all duration-300
            "
          >
            {item.techStack?.map((tech, index) => {
              const Icon = techIconMap[tech];

              return (
                <div
                  key={index}
                  className="w-20 flex flex-col items-center gap-2 text-white"
                >
                  <div
                    className="
                      w-12 h-12 rounded-xl
                      bg-white/10 backdrop-blur-md
                      border border-white/20
                      flex items-center justify-center
                      shadow-lg text-[#B6F500]
                    "
                  >
                    {Icon && <Icon size={26} />}
                  </div>
                  <span className="text-xs sm:text-sm text-center">
                    {tech}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Text */}
        <h2 className="text-xl text-center font-semibold text-white mt-4">
          {item.name}
        </h2>

        <p className="text-sm text-center text-slate-400 mt-1">
          {item.description}
        </p>
      </div>
    </div>
  );
};

// const BrandingCard = () => {
//   const containerRef = useRef();
//   const [showAll, setShowAll] = useState(false);

//   const visibleProjects = showAll
//     ? projectData
//     : projectData.slice(0, 5);
//   useGSAP(() => {
//     // Select only children inside this container
//     const cards = gsap.utils.toArray(".project-card");

//     gsap.from(cards, {
//       x: 100,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.3,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top 80%",
//         toggleActions: "play none none reverse",
//       },
//     });
//   }, { scope: containerRef }); // Ensure DOM is ready and scoped

//   return (
//     <div
//       ref={containerRef}
//       id="projects"
//       className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center gap-14"
//     >
//       {projectData.map((item, index) => (
//         <ProjectCard key={index} item={item} />
//       ))}
//     </div>
//   );
// };
const BrandingCard = () => {
  const containerRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.innerWidth >= 1024 // lg breakpoint
  );

  // Detect screen resize
  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Decide visible projects
  const visibleProjects = isLargeScreen
    ? projectData
    : showAll
    ? projectData
    : projectData.slice(0, 5);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".project-card");

      gsap.from(cards, {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { dependencies: [showAll, isLargeScreen], scope: containerRef }
  );

  return (
    <section id="projects" className="w-full flex flex-col items-center">

      {/* PROJECT GRID */}
      <div
        ref={containerRef}
        className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-14"
      >
        {visibleProjects.map((item, index) => (
          <ProjectCard key={item.id || index} item={item} />
        ))}
      </div>

      {/* SHOW MORE BUTTON — ONLY SMALL SCREENS */}
      {!isLargeScreen && projectData.length > 5 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="
            mt-12 px-8 py-3
            rounded-full
            border border-[#B6F500]
            text-[#B6F500]
            hover:bg-[#B6F500]
            hover:text-black
            transition-all duration-300
          "
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
};



export default BrandingCard