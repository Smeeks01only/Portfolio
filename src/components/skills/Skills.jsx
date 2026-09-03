import React from "react";

function Skills() {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3/SCSS",
        "Tailwind CSS",
        "Figma",
      ],
    },
    {
      category: "Backend & APIs",
      items: [
        "Python",
        "Django",
        "REST APIs",
        "Node.js",
        "PostgreSQL",
        "Firebase",
      ],
    },
    {
      category: "Tools & Workflow",
      items: [
        "Git & GitHub",
        "VS Code",
        "Vercel/Netlify",
        "Postman",
        "Responsive Design",
      ],
    },
  ];

  return (
    <section id="skills" className="py-[100px] bg-bg-dark font-sans">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <div className="flex items-center mb-10">
          <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-bold text-text-light flex items-center whitespace-nowrap">
            <span className="text-primary-color font-mono text-xl mr-2 font-normal">02.</span> Skills
          </h2>
          <div className="h-[1px] bg-gray-200 w-[300px] ml-5 block md:w-[200px] sm:w-[100px]"></div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mt-12">
          {skills.map((skillGroup, index) => (
            <div className="bg-bg-light p-8 rounded-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:-translate-y-1 hover:border-primary-color hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] group" key={index}>
              <div className="mb-6">
                <h3 className="text-text-light text-[1.3rem] flex items-center before:content-['▹'] before:text-primary-color before:mr-2 before:text-[1.2rem]">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span className="font-mono text-[0.9rem] text-text-dim bg-primary-color/5 px-4 py-2 rounded-full transition-all duration-200 group-hover:text-primary-color group-hover:bg-primary-color/10 border border-transparent group-hover:border-primary-color/20" key={i}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
