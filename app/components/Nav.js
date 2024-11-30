"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { CiDark, CiLight } from "react-icons/ci";
import { BsMoonStars } from "react-icons/bs";
import { IoMenu, IoClose } from "react-icons/io5";
const links = [
  {
    label: "Home",
    href: "/"

  },
  {
    label: "About Me",
    href: "#about"
  },
  {
    label: "Projects",
    href: "#projects"
  },
  {
    label: "Contact Me",
    href: "#contact"
  }
]
const Nav = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add("dark");
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false)
    }
  }, [])

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.theme = isDark ? "dark" : "light";
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (


    <nav className=" bg-thirdGreen  dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <h1 className="text-white hover:text-textColor text-2xl font-bold mr-auto text-uppercase uppercase">Quraishi</h1>
        </Link>
        {/* Dark Mode Button When Screen is small */}
        <button onClick={toggleDarkMode} className="block md:hidden text-white hover:text-textColor">{darkMode ? <CiLight className="text-xl" /> : <BsMoonStars className="text-xl" />}</button>

        <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden  focus:outline-none  dark:text-gray-50  " aria-controls="navbar-default" aria-expanded="false">

          {isOpen ? <IoClose className="text-2xl" /> : <IoMenu className="text-2xl" />}
        </button>
        <div className={` w-full  ${isOpen ? 'block' : 'hidden'} md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  ">
            {links.map((link, index) => <li key={index}>
              <Link href={link.href} className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white " aria-current="page">{link.label}</Link>
            </li>)}
            <button className="block md:hidden text-white hover:text-textColor">Resume</button>
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <button className="text-white hover:text-textColor">Resume</button>
          <button onClick={toggleDarkMode} className="text-white hover:text-textColor">{darkMode ? <CiLight className="text-xl" /> : <BsMoonStars className="text-xl" />}</button>

        </div>
      </div>
    </nav>

  );
};

export default Nav;
