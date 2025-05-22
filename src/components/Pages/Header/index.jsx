
"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Icon } from '@/components';

const NavLink = ({ text = "", href = "", ...props }) => {
  return (
    <Link href={"#" + href} className="block px-4 py-2 hover:-translate-y-1 hover:text-primary hover:bg-dark-1/10 dark:hover:bg-light-1/10 rounded-md transition-all duration-200" {...props}>
      {text}
    </Link>
  )
}

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="relative md:ml-4 p-4.5 hover:-translate-y-1 text-2xl text-dark-0 dark:text-light-0 cursor-pointer border-4 border-transparent hover:border-light-1 dark:hover:border-dark-1 focus:outline-none transition-all duration-200"
      title="Toggle theme"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Icon name="sun" className={(theme == "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100") + " absolute top-1.5 left-1.5 transition-all duration-200"} />
      <Icon name="moon" className={(theme == "dark" ? "opacity-100 scale-120" : "opacity-0 scale-0") + " absolute top-1.5 left-1.5 transition-all duration-200"} />
    </button>
  );
}

const Header = () => {
  const menuList = [
    "Home",
    "About",
    "Projects",
    "Contact",
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={(menuOpen ? "" : "shadow-sm shadow-dark-0/10") + " fixed w-full top-0 z-50 font-serif transition-shadow duration-200"}>
      <div className="w-full z-50 bg-light-0/40 dark:bg-dark-0/40 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-2 max-w-7xl mx-auto">
          <a href="" className="flex items-center space-x-3">
            <img
              alt="Logo"
              className="w-11 h-11 rounded-full"
              src="violet_evergarden.png"
              width={40}
              height={40}
            />
            <span className="hover:-translate-y-1 text-md text-dark-0 dark:text-light-0 hover:text-primary font-semibold transition-transform duration-300">
              Farell Reyhan Pradana
            </span>
          </a>
          <div className="flex justify-center items-center">
            {/* Desktop Menu */}
            <nav className="hidden sm:flex space-x-4 font-semibold text-dark-0 dark:text-light-0 uppercase text-sm">
              {menuList.map((menu) => (
                <NavLink key={menu} text={menu} href={menu.toLowerCase()} />
              ))}
            </nav>
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              aria-label="Menu"
              onClick={toggleMenu}
              className="relative sm:hidden p-4.5 hover:-translate-y-1 text-4xl text-dark-0 dark:text-light-0 cursor-pointer border-4 border-transparent hover:border-light-1 dark:hover:border-dark-1 focus:outline-none transition-all duration-200">
              <Icon name="list" className={(menuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100") + " absolute top-0 left-0 transition-all duration-200"} />
              <Icon name="x" className={(menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0") + " absolute top-0 left-0 transition-all duration-200"} />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="relative -z-50">
        <nav className={(menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-200") + " w-full absolute sm:hidden top-0 bg-light-0/40 dark:bg-dark-0/40 border-t border-light-1/40 backdrop-blur-sm shadow-sm shadow-dark-0/10 transition-all duration-200"}>
          <ul className="px-6 py-4 space-y-3 flex flex-col text-base text-dark-0 dark:text-light-0 font-semibold uppercase">
            <li>
              {menuList.map((menu) => (
                <NavLink key={menu} text={menu} href={menu.toLowerCase()} onClick={() => setMenuOpen(false)} />
              ))}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
