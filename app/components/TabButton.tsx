import { act, FC } from "react";
import {motion} from "framer-motion";
const buttonVariants = {
  default: {width: 0},
  active: {width: "calc(100% - 0.75rem)"}
}
interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}


const TabButton: FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white"
    : "text-[#ADB7BE] ";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses} `}>
        {children}
      </p>
      <motion.div
      animate={active ? "active" : "default"}
      variants={buttonVariants}
      className="bg-primary-500 h-1 mt-2 mr-3"
      >

      </motion.div>
    </button>
  );
};
export default TabButton;