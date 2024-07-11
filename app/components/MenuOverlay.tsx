import { FC } from "react";
import NavLink from "./NavLink";
interface MenuOverlayProps {
  links: {
    title: string;
    href: string;
  }[];
}
const MenuOverlay: FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
