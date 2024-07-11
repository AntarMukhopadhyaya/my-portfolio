"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var react_type_animation_1 = require("react-type-animation");
var react_use_downloader_1 = require("react-use-downloader");
var link_1 = require("next/link");
function HeroSection() {
    var _a = react_use_downloader_1["default"](), size = _a.size, elapsed = _a.elapsed, percentage = _a.percentage, download = _a.download, cancel = _a.cancel, error = _a.error, isInProgress = _a.isInProgress;
    var fileName = "Resume.pdf";
    var fileUrl = "/docs/Resume.pdf";
    return (react_1["default"].createElement("section", { className: "lg:py-16" },
        react_1["default"].createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12" },
            react_1["default"].createElement("div", { className: "col-span-8 place-self-center text-center sm:text-left justify-self-start" },
                react_1["default"].createElement("h1", { className: "text-white mb-4  text-4xl sm:text-5xl  lg:text-8xl lg:leading-normalfont-extrabold" },
                    react_1["default"].createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500" },
                        "Hello,I'm",
                        " "),
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement(react_type_animation_1.TypeAnimation, { sequence: [
                            "Antar",
                            1000,
                            "A Web Developer",
                            1000,
                            "A Data Science Enthusiast",
                            1000,
                        ], wrapper: "span", speed: 50, repeat: Infinity })),
                react_1["default"].createElement("p", { className: "text-[#ADB7BE]  text-base sm:text-lg lg:text-xl mb-6" }, "I am Antar Mukhopadhyaya, currently pursuing a BTech in Computer Science and Engineering. I have a strong passion for technology and have engaged in various projects in web development, machine learning, and cyber security. I have built dynamic and responsive websites, and I am actively looking for opportunities in web development to further hone my skills and contribute to innovative projects."),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(link_1["default"], { href: "https://www.upwork.com/freelancers/~017f4578939b548399", target: "_blank", className: "px-10 py-4 w-full sm:w-fit bg-gradient-to-br from-yellow-500 via-orange-500 to-green-500 rounded-full mr-4 bg-white hover:bg-slate-200 text-white  " }, "Hire Me"),
                    react_1["default"].createElement("button", { onClick: function () { return download(fileUrl, fileName); }, className: "px-6 w-full sm:w-fit py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3" }, "Download CV"))),
            react_1["default"].createElement("div", { className: "col-span-4 place-self-center mt-4 lg:mt-0" },
                react_1["default"].createElement("div", { className: "rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]" },
                    react_1["default"].createElement(image_1["default"], { src: "/images/antar-image.png", alt: "My Image", className: "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full", width: 300, height: 200 }))))));
}
exports["default"] = HeroSection;
