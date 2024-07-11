"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var script_1 = require("next/script");
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "Antar's Portfolio",
    description: "Explore Antar Mukhopadhyaya's portfolio, showcasing projects in web development, machine learning, and cyber security. Currently pursuing a BTech in Computer Science and Engineering (Data Science) at Future Institute of Engineering and Management, Sonarpur, Kolkata, Antar is a 3rd-year student passionate about technology and innovation."
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.className }, children),
        React.createElement(script_1["default"], { src: "https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" })));
}
exports["default"] = RootLayout;
