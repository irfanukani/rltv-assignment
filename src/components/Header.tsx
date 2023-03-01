import type { FC } from "react";

interface HeaderProps {
  icon: string;
  title: string;
}

const Header: FC<HeaderProps> = ({ title, icon }) => {
  return (
    <div className="flex gap-2 items-center pt-40">
      <img src={icon} alt="icon for Header component" />
      <span className="capitalize font-bold text-sm">{title}</span>
    </div>
  );
};
export default Header;
