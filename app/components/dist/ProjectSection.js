"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ProjectCard_1 = require("./ProjectCard");
var ProjectTag_1 = require("./ProjectTag");
var react_2 = require("react");
var framer_motion_1 = require("framer-motion");
var PROJECT_DATA = [
    {
        id: 1,
        title: "Django Forum Website",
        description: "A forum website made using Django,HTML,CSS and Bootstrap",
        image: "images/django-forum.png",
        gitUrl: "https://github.com/AntarMukhopadhyaya/djangoForum",
        liveUrl: "",
        tags: ["ALL", "DJANGO", "HTML", "BOOTSTRAP"]
    },
    {
        id: 2,
        title: "Laravel Project Management System",
        description: "Project management system made using Laravel, React JS, Tailwind CSS and PostgreSQL",
        image: "images/laravel-pms.png",
        gitUrl: "https://github.com/AntarMukhopadhyaya/laravel-project-management",
        liveUrl: "",
        tags: ["ALL", "LARAVEL", "REACT JS", "POSTGRESQL"]
    },
    {
        id: 3,
        title: "PhisCatcher",
        description: "A phishing detection tool made using Python, Django and Machine Learning",
        image: "images/phishcatcher.png",
        gitUrl: "https://github.com/AntarMukhopadhyaya/PhisCatcher",
        tags: ["ALL", "PYTHON", "DJANGO", "MACHINE LEARNING"]
    },
    {
        id: 4,
        title: "Hackspire Website",
        description: "A website made using NextJs, Tailwind CSS and TypeScript for our upcoming hackathon event",
        image: "images/hackspire.png",
        gitUrl: "https://github.com/AntarMukhopadhyaya/acm-hackathon-next",
        liveUrl: "https://www.fiem-hackspire.com/",
        tags: ["ALL", "NEXT JS", "REACT JS", "TYPESCRIPT"]
    },
];
var ProjectSection = function () {
    var _a = react_2.useState("ALL"), tag = _a[0], setTag = _a[1];
    var ref = react_1.useRef(null);
    var isInView = framer_motion_1.useInView(ref, { once: true });
    var handleTagChange = function (tag) {
        setTag(tag);
    };
    var filteredProjects = PROJECT_DATA.filter(function (project) {
        return project.tags.includes(tag);
    });
    var cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    };
    return (react_1["default"].createElement("section", { id: "projects", ref: ref },
        react_1["default"].createElement("h2", { className: "text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12" }, "My Projects"),
        react_1["default"].createElement("div", { className: "text-white flex flex-row justify-center items-center gap-2 py-6" },
            react_1["default"].createElement(ProjectTag_1["default"], { onClick: handleTagChange, name: "ALL", isSelected: tag === "ALL" }),
            react_1["default"].createElement(ProjectTag_1["default"], { onClick: handleTagChange, name: "LARAVEL", isSelected: tag === "LARAVEL" }),
            react_1["default"].createElement(ProjectTag_1["default"], { onClick: handleTagChange, name: "DJANGO", isSelected: tag === "DJANGO" })),
        react_1["default"].createElement("ul", { className: "grid md:grid-cols-3 gap-8 md:gap-12" }, filteredProjects.map(function (project) { return (react_1["default"].createElement(framer_motion_1.motion.li, { variants: cardVariants, initial: "initial", animate: isInView ? "animate" : "initial" },
            react_1["default"].createElement(ProjectCard_1["default"], { key: project.id, title: project.title, description: project.description, imgUrl: project.image, gitUrl: project.gitUrl, liveUrl: project.liveUrl }))); }))));
};
exports["default"] = ProjectSection;
