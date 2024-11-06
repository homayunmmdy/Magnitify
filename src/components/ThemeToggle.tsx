import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ThemeToggle = () => {
  return (
    <label className="swap swap-rotate">
      <input type="checkbox" className="theme-controller" value="dark" />
      <IoSunnyOutline aria-label="themeToggle icon" className="swap-off h-10 w-10 fill-current"/>
      <IoMoonOutline aria-label="themeToggle icon" className="swap-on h-10 w-10 fill-current" />
    </label>
  );
};

export default ThemeToggle;