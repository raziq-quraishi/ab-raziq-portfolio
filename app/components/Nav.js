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
    <header className="bg-thirdGreen  flex items-center gap-5 px-10">
      <Link href="#"><h1 className="text-white hover:text-textColor text-2xl font-bold mr-auto text-uppercase uppercase">Quraishi</h1></Link>
      <nav className="flex items-center justify-between gap-5 max-w-screen-lg mx-auto py-3">
        {
          links.map((link, index) => {
            return (<Link className="text-white hover:text-textColor font-semibold " key={index} href={link.href}>{link.label}</Link>)
          }
          )
        }
      </nav>
      <button className="text-white hover:text-textColor">Resume</button>
      <button onClick={changeTheme} className="text-white hover:text-textColor">{theme ? <CiLight className="text-3xl" /> : <CiDark className="text-3xl" />}</button>
    </header>
  );
};

export default Nav;
