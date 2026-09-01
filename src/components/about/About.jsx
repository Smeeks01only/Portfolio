import React from "react";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

function About() {
  const highlights = [
    { icon: <SmartToyOutlinedIcon />, label: "AI & ML", desc: "Intelligent systems" },
    { icon: <CodeOutlinedIcon />, label: "Software Engineering", desc: "Scalable architecture" },
    { icon: <ExtensionOutlinedIcon />, label: "Problem Solver", desc: "Logic & Creativity" },
    { icon: <PublicOutlinedIcon />, label: "Remote Ready", desc: "Timezone Flexible" },
  ];

  return (
    <section id="about" className="py-[100px] px-6 bg-bg-light text-text-light overflow-hidden font-sans">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex items-center mb-10">
          <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-bold text-text-light flex items-center whitespace-nowrap">
            <span className="text-primary-color font-mono text-xl mr-2 font-normal">01.</span> About Me
          </h2>
          <div className="h-[1px] bg-gray-200 w-[300px] ml-5 block md:w-[200px] sm:w-[100px]"></div>
        </div>
        {/* 1. Single Column Layout */}
        <div className="flex flex-col gap-8 items-start">
          {/*Text Side*/}
          <div className="text-[1.1rem] leading-[1.7] text-text-dim mb-5 w-full">
            <p className="mb-5">
              Hello! My name is Tinashe, a software engineer, AI enthusiast and
              web developer. My journey started back at highschool, with a curious mind
              that gravitated towards building systems that solve real-world problems and systems that brought enjoyment to people
              through code.
            </p>

            <p className="mb-5">
              I work at the intersection of
              <span className="text-primary-color font-medium"> artificial intelligence </span>
              and
              <span className="text-primary-color font-medium"> software engineering</span>,
              building everything from machine learning models and intelligent
              chatbots to full-stack web applications with clean, scalable
              architecture.
            </p>

            <p className="mb-5">
              When I'm not training models or shipping features, I'm likely
              journaling, watching Formula 1, playing football, playing video game or taking nature walks to
              recharge.
            </p>

            {/* 2. The "Soft Skills" Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 max-[900px]:grid-cols-1">
              {highlights.map((item, i) => (
                <div className="bg-white p-4 rounded-lg flex items-center gap-4 transition-all duration-300 border border-gray-100 hover:-translate-y-1 hover:border-primary-color hover:shadow-[0_4px_20px_rgba(37,99,235,0.08)]" key={i}>
                  <span className="text-primary-color text-[1.5rem] flex items-center">{item.icon}</span>
                  <div className="flex flex-col">
                    <span className="font-semibold text-text-light text-[0.9rem]">{item.label}</span>
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
