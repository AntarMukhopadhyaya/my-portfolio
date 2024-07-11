"use strict";
exports.__esModule = true;
var react_1 = require("react");
var achievementList = [
    {
        metrics: "Projects",
        value: "35+"
    },
    {
        metrics: "Years ",
        value: "2+"
    },
    {
        metrics: "Awards",
        value: "5+"
    },
];
var AchievementsSection = function () {
    return (react_1["default"].createElement("div", { className: "py-8 px-4 xl:gap-16 sm:py-16 xl:px-16" },
        react_1["default"].createElement("div", { className: "sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between" }, achievementList.map(function (achievement, index) {
            return (react_1["default"].createElement("div", { key: index, className: "flex flex-col items-center justify-center mx-4" },
                react_1["default"].createElement("h2", { className: "text-white text-4xl font-bold" }, achievement.value),
                react_1["default"].createElement("p", { className: "text-[#ADB7BE] text-base" }, achievement.metrics)));
        }))));
};
exports["default"] = AchievementsSection;
