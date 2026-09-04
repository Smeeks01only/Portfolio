import React from "react";
import Hero_Image from "../../assets/images/Hello World!.svg";

function Hero() {
  return (
    <section id="home" className="min-h-screen bg-bg-dark py-[100px] flex items-center overflow-hidden font-sans">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        {/* Added hero-grid to match about-grid structure */}
        <div className="flex items-center justify-between gap-8 w-full max-[900px]:flex-col max-[900px]:text-center max-[900px]:pt-0">
          <div className="flex-1 max-w-[600px] opacity-0 translate-y-[30px] animate-fadeIn max-[900px]:flex max-[900px]:flex-col max-[900px]:items-center">
            <div className="inline-flex items-center gap-2 bg-primary-color/10 text-primary-color px-3 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary-color/20 [animation-delay:0.1s] max-[900px]:hidden">
              <span className="w-2 h-2 bg-primary-color rounded-full shadow-[0_0_10px_theme('colors.primary-color')] animate-pulse"></span>
              Available for Work
            </div>

            <h1 className="text-[3.5rem] font-extrabold text-text-light mb-2 leading-[1.1] max-[900px]:text-[2.5rem]">
              Hi, I'm Tinashe Basil Dzikiti
            </h1>

            <h2 className="text-[2rem] font-semibold text-text-dim mb-6 [animation-delay:0.2s] opacity-0 translate-y-[30px] animate-fadeIn">
              <span className="text-primary-color">Software Engineer</span>, AI Engineer & Web Developer
            </h2>

            <p className="text-[1.1rem] text-text-dim mb-10 leading-relaxed max-w-[480px] [animation-delay:0.3s] opacity-0 translate-y-[30px] animate-fadeIn">
              I build intelligent, scalable software from AI-powered systems, pixel-perfect web applications to enterprise applications. 
              Based in Harare, shipping code worldwide.
            </p>

            <div className="flex gap-4 [animation-delay:0.4s] opacity-0 translate-y-[30px] animate-fadeIn">
              <a href="#projects" className="px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 bg-primary-color text-bg-dark hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg no-underline">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 text-text-dim border border-gray-200 dark:border-gray-700 hover:border-primary-color hover:text-primary-color no-underline">
                Contact Me
              </a>
            </div>

            <div className="mt-12 border-t border-gray-100 dark:border-gray-800 pt-6 flex items-center gap-2 text-text-dim text-sm max-[900px]:flex-col max-[900px]:gap-2 [animation-delay:0.5s] opacity-0 translate-y-[30px] animate-fadeIn">
              <p className="mb-0 mt-0">Tech Stack:</p>
              <div className="flex items-center gap-2.5 flex-wrap max-[900px]:justify-center">
                <span className="font-mono text-text-light">Python</span>
                <span className="text-gray-300">•</span>
                <span className="font-mono text-text-light">React</span>
                <span className="text-gray-300">•</span>
                <span className="font-mono text-text-light">TensorFlow</span>
                <span className="text-gray-300">•</span>
                <span className="font-mono text-text-light">Java</span>
                <span className="text-gray-300">•</span>
                <span className="font-mono text-text-light">Django</span>
                <span className="text-gray-300">•</span>
                <span className="font-mono text-text-light">JavaScript</span>
                <span className="text-gray-300">•</span>
                <span className="font-mono text-text-light">SQL</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center w-full max-w-[450px] max-[900px]:max-w-[350px] max-[900px]:mb-8 opacity-0 translate-y-[30px] animate-fadeIn [animation-delay:0.4s]">
            <div className="absolute w-full h-full bg-primary-color blur-[120px] opacity-[0.08] z-0 rounded-full top-[10%]"></div>
            <img
              src={Hero_Image}
              alt="Tinashe Dzikiti - Software Engineer"
              className="w-full relative z-10 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
