"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var NavLink_1 = require("./NavLink");
var react_1 = require("react");
var solid_1 = require("@heroicons/react/24/solid");
var MenuOverlay_1 = require("./MenuOverlay");
var navLinks = [
    {
        title: "About",
        href: "#about"
    },
    {
        title: "Projects",
        href: "#projects"
    },
    {
        title: "Contact",
        href: "#contact"
    }
];
var Navbar = function () {
    var _a = react_1.useState(false), navbarOpen = _a[0], setNavbarOpen = _a[1];
    return (React.createElement("nav", { className: "fixed mx-auto border  border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90" },
        React.createElement("div", { className: "flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4" },
            React.createElement(link_1["default"], { href: "/", className: "text-2xl md:text-5xl text-white font-semibold " }, "Antar's Portfolio"),
            React.createElement("div", { className: "mobile-menu block md:hidden" }, !navbarOpen ? (React.createElement("button", { onClick: function () { return setNavbarOpen(true); }, className: "flex items-center px-2 py-2 border rounded border-slate-200 mt-2" },
                React.createElement(solid_1.Bars3Icon, { className: "h-5 w-5" }))) : (React.createElement("button", { onClick: function () { return setNavbarOpen(false); }, className: "flex items-center px-2 py-2 border rounded border-slate-200 mt-2" },
                React.createElement(solid_1.XMarkIcon, { className: "h-5 w-5" })))),
            React.createElement("div", { className: "menu hidden md:block md:w-auto", id: "navbar" },
                React.createElement("ul", { className: "flex  p-4 md:p-0 md:flex-row  md:space-x-8 mt-0" }, navLinks.map(function (link, index) { return (React.createElement("li", { key: index },
                    React.createElement(NavLink_1["default"], { href: link.href, title: link.title }))); })))),
        navbarOpen ? React.createElement(MenuOverlay_1["default"], { links: navLinks }) : null));
};
exports["default"] = Navbar;
