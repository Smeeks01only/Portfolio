import React from "react";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <section id="contact" className="py-[150px] bg-bg-dark text-center font-sans max-[768px]:py-[100px] max-[768px]:px-5">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="text-center">
          <p className="text-primary-color font-mono text-base mb-5 block">04. What's Next?</p>
          <h2 className="text-[3.5rem] text-text-light font-extrabold mb-6 max-[768px]:text-[2.5rem]">Get In Touch</h2>

          <p className="text-text-dim text-[1.2rem] leading-[1.6] max-w-[600px] mx-auto mb-12">
            I am currently looking for remote opportunities in software
            engineering. Whether you have a question about my projects or just
            want to say hi, my inbox is always open!
          </p>

          <a
            href="mailto:sirbasil.1000@gmail.com"
            className="px-10 py-5 text-[1.1rem] inline-flex items-center gap-2.5 mb-10 border border-primary-color text-primary-color rounded hover:bg-primary-color/10 hover:-translate-y-1 transition-all duration-300 no-underline font-mono"
          >
            <EmailIcon className="text-[1.2rem]" />
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-2.5 text-text-dim text-[0.9rem] mt-5">
            <span className="w-2.5 h-2.5 bg-primary-color rounded-full shadow-[0_0_10px_theme('colors.primary-color')]"></span>
            <span>Available for freelance & full-time roles</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
