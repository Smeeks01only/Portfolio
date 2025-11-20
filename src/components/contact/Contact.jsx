import React from "react";
import "./Contact.css";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content text-center">
          <p className="section-subtitle">04. What's Next?</p>
          <h2 className="section-title">Get In Touch</h2>

          <p className="contact-text">
            I am currently looking for remote opportunities in software
            engineering. Whether you have a question about my projects or just
            want to say hi, my inbox is always open!
          </p>

          <a
            href="mailto:sirbasil.1000@gmail.com"
            className="btn primary big-btn"
          >
            <EmailIcon className="btn-icon" />
            Say Hello
          </a>

          <div className="availability-note">
            <span className="status-dot"></span>
            <span>Available for freelance & full-time roles</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
