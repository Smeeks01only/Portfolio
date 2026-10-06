"use client";

import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

function Contact() {
  return (
    <section id="contact" className="py-[100px] bg-bg-dark font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-primary-color blur-[150px] opacity-[0.03] z-0 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="w-full max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="flex items-center mb-10">
          <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-bold text-text-light flex items-center whitespace-nowrap">
            <span className="text-primary-color font-mono text-xl mr-2 font-normal">04.</span> Contact
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto text-center mt-12 mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-color/5 text-primary-color px-4 py-2 rounded-full text-sm font-mono mb-8 border border-primary-color/10">
            <span className="w-2 h-2 bg-primary-color rounded-full shadow-[0_0_10px_theme('colors.primary-color')] animate-pulse"></span>
            What's Next?
          </div>

          <h3 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold text-text-light mb-6 tracking-tight">
            Let's Build Something <span className="text-primary-color italic font-serif opacity-90">Together</span>
          </h3>
          
          <p className="text-text-dim text-[1.1rem] leading-[1.8] max-w-[550px] mx-auto mb-10">
            I'm currently open to new opportunities and collaborations. Whether you have a project in mind, 
            a question about my work, or just want to connect, my inbox is always open. 
            I'll try my best to get back to you!
          </p>

          <a
            href="mailto:sirbasil.1000@gmail.com"
            className="inline-flex items-center justify-center gap-3 bg-primary-color text-bg-dark px-10 py-5 rounded-full font-semibold text-[1.1rem] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)] no-underline group"
          >
            <EmailOutlinedIcon className="transition-transform duration-300 group-hover:-rotate-12" />
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
