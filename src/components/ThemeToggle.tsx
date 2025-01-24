import React from 'react'
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ThemeToggle: React.FC = () => {
  return (
    <label className="swap swap-rotate">
      <input type="checkbox" className="theme-controller" value="dark" />
      <IoSunnyOutline
        aria-label="light Mode themeToggle icon"
        title="light Mode"
        data-testid='light'
        className="swap-off h-10 w-10 fill-current"
      />
      <IoMoonOutline
        aria-label="dark Mode themeToggle"
        title="dark Mode"
        data-testid='dark'
        className="swap-on h-10 w-10 fill-current"
      />
    </label>
  );
};

export default ThemeToggle;
