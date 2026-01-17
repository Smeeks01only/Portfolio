import React from "react";
import My_Picture from "../../assets/images/My_Picture.png";

function About() {
  const highlights = [
    { icon: "🚀", label: "Fast Learner", desc: "Adapting to new tech" },
    { icon: "✍️", label: "Tech Writer", desc: "Documentation & Poetry" },
    { icon: "🧩", label: "Problem Solver", desc: "Logic & Creativity" },
    { icon: "🌍", label: "Remote Ready", desc: "Timezone Flexible" },
  ];

  return (
    <section id="about" className="py-[100px] px-6 bg-bg-dark text-text-light overflow-hidden font-sans">
      <div className="w-full max-w-[1000px] mx-auto">
        <div className="flex items-center mb-10">
          <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-bold text-text-light flex items-center">
            <span className="text-primary-color font-mono text-xl mr-2 font-normal">01.</span> About Me
          </h2>
          <div className="h-[1px] bg-[#233554] w-[300px] ml-5 block md:w-[200px] sm:w-[100px]"></div>
        </div>
        {/* 1. Split Layout: Text Left, Image Right (Standard Desktop Pattern) */}
        <div className="grid grid-cols-[3fr_7fr] gap-12 items-start max-[900px]:grid-cols-1">
          {/*Image Side*/}
          <div className="relative max-w-[300px] mx-0 max-[900px]:mx-auto max-[900px]:mb-12 max-[900px]:w-[70%]">
            <div className="relative z-10 block w-full group transition-transform duration-300 hover:-translate-y-1">
              <img
                src={My_Picture}
                alt="Tinashe Dzikiti"
                className="w-full h-auto rounded block grayscale contrast-[1.1] transition-all duration-300 group-hover:grayscale-0 group-hover:filter-none relative z-20"
              />
              {/* The Teal Border Effect */}
              <div className="w-full h-full border-2 border-primary-color rounded absolute z-0 top-5 left-5 transition-all duration-300 group-hover:top-3 group-hover:left-3"></div>
            </div>
          </div>

          {/*Text Side*/}
          <div className="text-[1.1rem] leading-[1.7] text-text-dim mb-5">
            {/* <div className="section-header">
              <h2 className="section-title">
                <span className="number">01.</span> About Me
              </h2>
              <div className="line"></div>
            </div> */}

            <p className="mb-5">
              Hello! My name is Tinashe and I enjoy creating things that live on
              the internet. My interest in software engineering started at the
              <span className="text-primary-color font-medium"> University of Zimbabwe</span>, where
              I discovered that coding is the perfect mix of logic and creative
              expression.
            </p>

            <p className="mb-5">
              I enjoy turning ideas into real products—whether that’s developing
              <span className="text-primary-color font-medium"> AI-powered solutions </span>
              or crafting smooth, responsive interfaces in React. My work
              focuses on clean architecture, efficiency, and user-centered
              design.
            </p>

            <p className="mb-5">
              When I'm not at my terminal, I'm likely writing poetry, watching
              Formula 1, or taking nature walks to reset my mind for the next
              debugging session.
            </p>

            {/* 2. The "Soft Skills" Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 max-[900px]:grid-cols-1">
              {highlights.map((item, i) => (
                <div className="bg-bg-light p-4 rounded-lg flex items-center gap-4 transition-transform duration-300 border border-transparent hover:-translate-y-1 hover:border-primary-color" key={i}>
                  <span className="text-[1.5rem]">{item.icon}</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-text-light text-[0.9rem]">{item.label}</span>
                    <span className="text-[0.8rem] text-text-dim">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
