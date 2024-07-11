import React, { FC, useMemo } from "react";

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: FC<ProjectTagProps> = React.memo(({ name, onClick, isSelected }) => {
  const buttonStyles = useMemo(() => isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white", [isSelected]);

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
});
export default ProjectTag;
