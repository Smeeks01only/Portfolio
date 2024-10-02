import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [text, setText] = useState("");
  const fullText =
    "Python, Java, JavaScript, React.js, and SQL. I specialize in crafting clean, scalable, and efficient software solutions that not only solve real-world problems but also enhance user experiences. Whether it's developing dynamic web applications or optimizing back-end systems, I enjoy diving into code and turning ideas into reality. When I'm not coding, I'm constantly exploring new technologies and techniques to stay ahead of the curve, always eager to learn and grow in this ever-evolving industry.Let’s build something splendid together!";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 55); // Typing speed (50ms per character)

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []);

  return (
    <section id="home" className="home">
      <h2>Hello, I'm Tinashe</h2>
      <p className="description">
        I'm a passionate Software Engineer with a strong foundation in {text}
      </p>
    </section>
  );
};

export default Home;
