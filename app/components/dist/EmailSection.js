"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var image_1 = require("next/image");
var github_svg_1 = require("../../public/images/github.svg");
var linkedin_svg_1 = require("../../public/images/linkedin.svg");
var EmailSection = function () {
    var _a = react_1.useState(false), emailSubmitted = _a[0], setEmailSubmitted = _a[1];
    var _b = react_1.useState(false), emailError = _b[0], setEmailError = _b[1];
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var data, endpoint, options, response, resData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    data = {
                        email: e.target.email.value,
                        subject: e.target.subject.value,
                        message: e.target.message.value
                    };
                    endpoint = "/api/send";
                    options = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    };
                    return [4 /*yield*/, fetch(endpoint, options)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    resData = _a.sent();
                    if (response.status === 200) {
                        setEmailSubmitted(true);
                    }
                    else {
                        setEmailError(true);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("section", { className: "grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative", id: "contact" },
        react_1["default"].createElement("div", { className: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 -translate-x-1/2 -translate-1/2" }),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h5", { className: "text-xl font-bold text-white my-2" }, "Let's Connect"),
            react_1["default"].createElement("p", { className: "text-[#ADB7BE] mb-4 max-w-md" },
                " ",
                "I'm always excited to connect with fellow tech enthusiasts, potential collaborators, and anyone interested in web development, machine learning, and cyber security. Whether you have a question, a project idea, or just want to say hello, feel free to reach out! .Let's create something amazing together."),
            react_1["default"].createElement("div", { className: "socials flex flex-row gap-2" },
                react_1["default"].createElement(link_1["default"], { href: "https://github.com/AntarMukhopadhyaya/" },
                    react_1["default"].createElement(image_1["default"], { src: github_svg_1["default"], alt: "Github Icon" })),
                react_1["default"].createElement(link_1["default"], { href: "https://github.com/AntarMukhopadhyaya/" },
                    react_1["default"].createElement(image_1["default"], { src: linkedin_svg_1["default"], alt: "LinkedIn Icon" })))),
        react_1["default"].createElement("div", { className: "mt-2" },
            react_1["default"].createElement("form", { className: "flex flex-col", onSubmit: handleSubmit },
                react_1["default"].createElement("div", { className: "mb-6" },
                    react_1["default"].createElement("label", { htmlFor: "email", className: "text-white block mb-2  text-sm font-medium " },
                        " ",
                        "Your Email",
                        " "),
                    react_1["default"].createElement("input", { type: "email", id: "email", name: "email", required: true, placeholder: "test@gmail.com", className: "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 " })),
                react_1["default"].createElement("div", { className: "mb-6" },
                    react_1["default"].createElement("label", { htmlFor: "subject", className: "text-white block  mb-2 text-sm font-medium " },
                        " ",
                        "Subject",
                        " "),
                    react_1["default"].createElement("input", { type: "text", id: "subject", required: true, name: "subject", placeholder: "Hello! I want to connect with you", className: "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 " })),
                react_1["default"].createElement("div", { className: "mb-6" },
                    react_1["default"].createElement("label", { className: "text-white block text-sm mb-2 font-medium" }, "Message"),
                    react_1["default"].createElement("textarea", { name: "message", id: "message", className: "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5", placeholder: "Hi Antar, Let's talk about..." })),
                react_1["default"].createElement("button", { type: "submit", className: "bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full" }, "Send Message"),
                emailSubmitted && (react_1["default"].createElement("p", { className: "text-green-500 text-sm mt-2" }, "Email sent successfully!")),
                emailError && (react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-2" }, "Email could not be sent. Please try again."))))));
};
exports["default"] = EmailSection;
