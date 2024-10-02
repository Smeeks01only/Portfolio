import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
/*import Contact from "./components/Contact";*/
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      {/*<Contact />*/}
      <Footer />
    </div>
  );
}

export default App;
