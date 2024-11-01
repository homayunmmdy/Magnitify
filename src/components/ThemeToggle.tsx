import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ThemeToggle = () => {
  return (
    <label className="swap swap-rotate">
      <input type="checkbox" className="theme-controller" value="dark" />
      <IoSunnyOutline className="swap-off h-10 w-10 fill-current"/>
      <IoMoonOutline className="swap-on h-10 w-10 fill-current" />
    </label>
  );
};

export default ThemeToggle;