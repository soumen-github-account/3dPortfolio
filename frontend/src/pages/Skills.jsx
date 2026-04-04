
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BsStars } from "react-icons/bs";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "1. HTML & CSS Basics",
    desc: "Start with the fundamentals of webpage structure and styling using HTML5 and modern CSS (Flexbox, Grid).",
  },
  {
    title: "2. JavaScript Fundamentals",
    desc: "Learn core JavaScript concepts like variables, functions, loops, DOM manipulation, and ES6+ features.",
  },
  {
    title: "3. Version Control (Git & GitHub)",
    desc: "Understand Git basics, commits, branches, and how to push code to GitHub repositories.",
  },
  {
    title: "4. Responsive Design",
    desc: "Make your website mobile-friendly using media queries and responsive units.",
  },
  {
    title: "5. JavaScript Framework (React)",
    desc: "Learn React.js, components, hooks, props/state, routing, and reusable UI architecture.",
  },
  {
    title: "6. Package Managers & Tooling",
    desc: "Understand NPM/Yarn, Vite/Webpack, and how to structure projects with tooling support.",
  },
  {
    title: "7. Backend with Node.js & Express",
    desc: "Build RESTful APIs using Express.js, handle routes, middleware, and server logic.",
  },
  {
    title: "8. Database (MongoDB or SQL)",
    desc: "Learn how to store and retrieve data using MongoDB (NoSQL) or PostgreSQL/MySQL (SQL).",
  },
  {
    title: "9. Authentication & Authorization",
    desc: "Implement login, registration, protected routes using JWT, OAuth or Passport.js.",
  },
  {
    title: "10. Fullstack Integration (MERN)",
    desc: "Connect your frontend (React) with backend (Node/Express) and database (MongoDB).",
  },
  {
    title: "11. Deployment & Hosting",
    desc: "Deploy fullstack apps using platforms like Vercel, Netlify, Render, or Railway.",
  },
  {
    title: "12. CI/CD & Production Tools",
    desc: "Add build pipelines, error monitoring (Sentry), and environment variables handling.",
  },
  {
    title: "13. Advanced Topics",
    desc: "Explore GraphQL, TypeScript, WebSockets, testing, performance optimizations, etc.",
  },
  {
    title: "14. Build Projects & Portfolio",
    desc: "Apply your knowledge by building real-world projects and showcase them on a portfolio site.",
  },
];


export default function Roadmap() {
  const scrollContainerRef = useRef(null);
  const starRef = useRef(null);
  const progressRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const container = scrollContainerRef.current;

    gsap.to(starRef.current, {
      scrollTrigger: {
        trigger: container,
        start: "10%",
        end: "bottom bottom",
        scrub: 10,
        scroller: container, 
      },
      top: "100%",
      ease: "none",
    });

    gsap.to(progressRef.current, {
      delay:10,
      scrollTrigger: {
        trigger: container,
        start: "10%",
        end: "bottom bottom",
        scrub: 10, 
        scroller: container, 
      },
      height: "100%",
      ease: "none",
    });

    stepRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, x: 50 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            scroller: container, 
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-10">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400 mb-10">
        Roadmap Progress
      </h1>

      <div
        ref={scrollContainerRef}
        className="relative flex gap-10 overflow-y-scroll scroll-hide h-[80vh] w-full px-4 scroll-smooth"
      >
        <div className="relative w-[5px] h-[1200px] bg-gray-800 rounded-full">
          <div
            ref={progressRef}
            className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-orange-400 via-blue-400 to-black rounded-full"
          />
          <BsStars
            ref={starRef}
            className="absolute left-1/2 w-6 h-6 text-yellow-300 drop-shadow-[0_0_10px_rgba(255,200,0,0.9)]"
            style={{ transform: "translate(-50%, -50%)" }}
          />
        </div>

        <div className="flex flex-col gap-10 py-4">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (stepRefs.current[i] = el)}
              className="opacity-0"
            >
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}