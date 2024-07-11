"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { init } from "next/dist/compiled/webpack/webpack";

const PROJECT_DATA = [
  {
    id: 1,
    title: "Django Forum Website",
    description: "A forum website made using Django,HTML,CSS and Bootstrap",
    image: "images/django-forum.png",
    gitUrl: "https://github.com/AntarMukhopadhyaya/djangoForum",
    liveUrl: "",
    tags: ["ALL", "DJANGO", "HTML", "BOOTSTRAP"],
  },
  {
    id: 2,
    title: "Laravel Project Management System",
    description:
      "Project management system made using Laravel, React JS, Tailwind CSS and PostgreSQL",
    image: "images/laravel-pms.png",
    gitUrl: "https://github.com/AntarMukhopadhyaya/laravel-project-management",
    liveUrl: "",
    tags: ["ALL", "LARAVEL", "REACT JS", "POSTGRESQL"],
  },
  {
    id: 3,
    title: "PhisCatcher",
    description:
      "A phishing detection tool made using Python, Django and Machine Learning",
    image: "images/phishcatcher.png",
    gitUrl: "https://github.com/AntarMukhopadhyaya/PhisCatcher",
    tags: ["ALL", "PYTHON", "DJANGO", "MACHINE LEARNING"],
  },
  {
    id: 4,
    title: "Hackspire Website",
    description:
      "A website made using NextJs, Tailwind CSS and TypeScript for our upcoming hackathon event",
    image: "images/hackspire.png",
    gitUrl: "https://github.com/AntarMukhopadhyaya/acm-hackathon-next",
    liveUrl: "https://www.fiem-hackspire.com/",
    tags: ["ALL", "NEXT JS", "REACT JS", "TYPESCRIPT"],
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("ALL");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (tag: string) => {
    setTag(tag);
  };
  const filteredProjects = PROJECT_DATA.filter((project) =>
    project.tags.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="ALL"
          isSelected={tag === "ALL"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="LARAVEL"
          isSelected={tag === "LARAVEL"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DJANGO"
          isSelected={tag === "DJANGO"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12" ref={ref}>
        {filteredProjects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            key={index}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              liveUrl={project.liveUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
