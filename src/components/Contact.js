import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Email: youremail@example.com</p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/yourprofile
        </a>
      </p>
    </section>
  );
};

export default Contact;
