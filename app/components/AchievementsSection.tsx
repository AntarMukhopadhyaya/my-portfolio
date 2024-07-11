"use client";

import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementList = [
  { metrics: "Projects", value: 35, postfix: "+" },
  { metrics: "Years ", value: 2, postfix: "+" },
  { metrics: "Awards", value: 5, postfix: "+" },
];

const AchievementsSection = () => {
  const configsMemo = React.useCallback(
    (_: any, index: any) => ({
      mass: 1,
      friction: 100,
      tension: 140 * (index + 1),
    }),
    []
  );
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              <AnimatedNumbers
                includeComma
                animateToNumber={achievement.value}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={configsMemo}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metrics}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AchievementsSection;
