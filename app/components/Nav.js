"use client"
import { useState } from "react";
import Link from "next/link";
import { CiDark, CiLight } from "react-icons/ci";
const Nav = () => {
  const [theme, setTheme] = useState(false);
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
  const changeTheme = () => {
    setTheme(!theme)
  }
  return (
    <header className=" bg-darkGreen text-white">
      <nav className="  flex items-center justify-between gap-5 max-w-screen-lg mx-auto py-3 ">
        <h1 className="text-2xl font-bold mr-auto">ARQ</h1>
        {
          links.map((link, index) => {
            return (<Link href={link.href}>{link.label}</Link>)
          }
          )
        }
        <button>Resume</button>
        <button onClick={changeTheme}>{theme ? <CiLight className="text-3xl" /> : <CiDark className="text-3xl" />}</button>
      </nav>
    </header>
  );
};

export default Nav;
