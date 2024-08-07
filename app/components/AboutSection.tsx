"use client";
import TabButton from "./TabButton";
import Image from "next/image";
import { useState, useTransition } from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li className="my-1"><span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-primary text-white dark:bg-blue-100 dark:text-neutral-800">PHP</span></li>
        <li><span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-primary text-white dark:bg-blue-100 dark:text-neutral-800">PYTHON</span></li>
        <li className="my-1"><span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-primary text-white dark:bg-blue-100 dark:text-neutral-800">LARAVEL</span></li>
        <li className="my-1">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-primary text-white dark:bg-blue-100 dark:text-neutral-800">
          DJANGO
          </span>
          </li>
        <li>
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-primary text-white dark:bg-blue-100 dark:text-neutral-800">
            React JS
          </span>
        </li>
        <li className="my-1">
        <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-primary text-white dark:bg-blue-100 dark:text-neutral-800">TAILWIND CSS
        </span>
        </li>
        <li><span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-primary text-white dark:bg-blue-100 dark:text-neutral-800">POSTGRESQL</span></li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li className="list-disc pl-2">
          <small>
            BTECH in CSE(DATASCIENCE), FUTURE INSTITUTE OF ENGINEERING &
            MANAGEMENT SONARPUR <b>(ONGOING)</b>
          </small>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>React JS</li>
        <li>Python</li>
        <li>PHP</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section>
      <div className="text-white ">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image
            src="/images/about-image.jpg"
            alt="About Image"
            width={500}
            height={500}
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-md">
              I am Antar Mukhopadhyaya, currently pursuing a Bachelor of
              Technology in Computer Science and Engineering (Data Science) at
              the Future Institute of Engineering and Management in Sonarpur,
              Kolkata. I am in the 3rd year of my degree. I have a strong
              passion for cutting-edge technologies and have actively engaged in
              building projects across various domains such as web development,
              machine learning, and cybersecurity.
            </p>
            <div className="flex flex-row mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab == "skills"}
              >
                {" "}
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab == "education"}
              >
                {" "}
                Education
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id == tab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
