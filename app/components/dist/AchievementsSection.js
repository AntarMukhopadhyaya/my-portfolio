"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var dynamic_1 = require("next/dynamic");
var AnimatedNumbers = dynamic_1["default"](function () {
    return Promise.resolve().then(function () { return require("react-animated-numbers"); });
}, { ssr: false });
var achievementList = [
    {
        metrics: "Projects",
        value: "35",
        postfix: "+"
    },
    {
        metrics: "Years ",
        value: "2",
        postfix: "+"
    },
    {
        metrics: "Awards",
        value: "5",
        postfix: "+"
    },
];
var AchievementsSection = function () {
    return (react_1["default"].createElement("div", { className: "py-8 px-4 xl:gap-16 sm:py-16 xl:px-16" },
        react_1["default"].createElement("div", { className: "sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between" }, achievementList.map(function (achievement, index) {
            return (react_1["default"].createElement("div", { key: index, className: "flex flex-col items-center justify-center mx-4" },
                react_1["default"].createElement("h2", { className: "text-white text-4xl font-bold flex flex-row" },
                    react_1["default"].createElement(AnimatedNumbers, { includeComma: true, animateToNumber: parseInt(achievement.value), locale: "en-US", className: "text-white text-4xl font-bold", configs: function (_, index) {
                            return {
                                mass: 1,
                                friction: 100,
                                tensions: 140 * (index + 1)
                            };
                        } }),
                    achievement.postfix),
                react_1["default"].createElement("p", { className: "text-[#ADB7BE] text-base" }, achievement.metrics)));
        }))));
};
exports["default"] = AchievementsSection;
