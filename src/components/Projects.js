import React from "react";
import "./Projects.css"; // Add a separate CSS file for the project-specific styles

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>University of Zimbabwe Blog Web App</h3>
          <p>
            The University of Zimbabwe Blog Web App was made to allow students
            to get access information about all that is happening in and around
            the campus of UZ. So all the student just has to visit the website
            and get all the information.
          </p>
          <br></br>
          <p>HTML, CSS, JavaScript, ReactJS, Django, MySQL.</p>
        </div>
        <div className="project">
          <h3>POS and Inventory Management System</h3>
          <p>
            The POS and Inventory Management System is specifically made to
            support Small to Medium Enterprises. It includes features such as
            managing products, suppliers, customers, sales, and inventory.
          </p>
          <br></br>
          <p>Java and MySQL.</p>
        </div>
        <div className="project">
          <h3>Tesla Clone</h3>
          <p>
            A typical Tesla clone homepage serves as a central hub for
            information about the brand and its products.
          </p>
          <br></br>
          <p>HTML, CSS, JavaScript, ReactJS</p>
        </div>
        {/* Add more projects here */}
      </div>
    </section>
  );
};

export default Projects;
