import React from "react";
import Hero_Image from "../../assets/images/programmer_office.png";

function Hero() {
  return (
    <section id="home" className="min-h-screen bg-bg-dark py-[100px] flex items-center overflow-hidden font-sans">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Added hero-grid to match about-grid structure */}
        <div className="flex items-center justify-between gap-8 w-full max-[900px]:flex-col-reverse max-[900px]:text-center max-[900px]:pt-20">
          <div className="flex-1 max-w-[600px] opacity-0 translate-y-[30px] animate-fadeIn max-[900px]:flex max-[900px]:flex-col max-[900px]:items-center">
            <div className="inline-flex items-center gap-2 bg-primary-color/10 text-primary-color px-3 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary-color/20 [animation-delay:0.1s]">
              <span className="w-2 h-2 bg-primary-color rounded-full shadow-[0_0_10px_theme('colors.primary-color')] animate-pulse"></span>
              Available for Work
            </div>

            <h1 className="text-[3.5rem] font-extrabold text-[#e6f1ff] mb-2 leading-[1.1] max-[900px]:text-[2.5rem]">
              Hi, I'm Tinashe Basil Dzikiti
            </h1>

            <h2 className="text-[2rem] font-semibold text-text-dim mb-6 [animation-delay:0.2s] opacity-0 translate-y-[30px] animate-fadeIn">
              <span className="text-primary-color">Full-Stack Developer</span> (React &
              Python)
            </h2>

            <p className="text-[1.1rem] text-text-dim mb-10 leading-relaxed max-w-[480px] [animation-delay:0.3s] opacity-0 translate-y-[30px] animate-fadeIn">
              I build accessible, pixel-perfect web applications for global
              clients. Based in Harare, shipping code worldwide.
            </p>

            <div className="flex gap-6 [animation-delay:0.4s] opacity-0 translate-y-[30px] animate-fadeIn">
              <a href="#projects" className="px-8 py-4 rounded font-semibold text-base transition-all duration-300 bg-transparent border border-primary-color text-primary-color hover:bg-primary-color/10 hover:-translate-y-0.5 no-underline">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-4 rounded font-semibold text-base transition-all duration-300 text-text-light hover:text-primary-color hover:underline hover:underline-offset-[5px] no-underline">
                Contact Me
              </a>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6 flex items-center gap-2 text-text-dim text-sm max-[900px]:flex-col max-[900px]:gap-2 [animation-delay:0.5s] opacity-0 translate-y-[30px] animate-fadeIn">
              <p className="mb-0 mt-0">Tech Stack:</p>
              <div className="flex items-center gap-2.5 flex-wrap max-[900px]:justify-center">
                <span className="font-mono text-text-light">React</span>
                <span className="font-mono text-text-light">•</span>
                <span className="font-mono text-text-light">Python</span>
                <span className="font-mono text-text-light">•</span>
                <span className="font-mono text-text-light">SQL</span>
                <span className="font-mono text-text-light">•</span>
                <span className="font-mono text-text-light">JavaScript</span>
                <span className="font-mono text-text-light">•</span>
                <span className="font-mono text-text-light">Java</span>
                <span className="font-mono text-text-light">•</span>
                <span className="font-mono text-text-light">Django</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center w-full max-w-[450px] max-[900px]:max-w-[350px] max-[900px]:mb-8 opacity-0 translate-y-[30px] animate-fadeIn [animation-delay:0.4s]">
            <div className="absolute w-full h-full bg-primary-color blur-[100px] opacity-15 z-0 rounded-full top-[10%]"></div>
            <img
              src={Hero_Image}
              alt="Tinashe Dzikiti - Software Engineer"
              className="w-full rounded-[20px] relative z-10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
