"use client"
import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
const navLinks = [
    {
        title: "About",
        href: "#about"
    },
  
    {
        title: "Projects",
        href: "#projects"
    },
    {
        title: "Contact",
        href: "#contact"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (  
        <nav className="fixed mx-auto border  border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4">
                <Link href="/" className="text-2xl md:text-5xl text-white font-semibold ">Antar's Portfolio</Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-2 py-2 border rounded border-slate-200 mt-2"><Bars3Icon className="h-5 w-5" /></button>
                       ): (
                        <button onClick={() => setNavbarOpen(false)}className="flex items-center px-2 py-2 border rounded border-slate-200 mt-2">
                        <XMarkIcon className="h-5 w-5" />
                        </button>
                       )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex  p-4 md:p-0 md:flex-row  md:space-x-8 mt-0">
                    {
                        navLinks.map((link,index) => (
                            <li key={index}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        ))
                    }
                </ul>
                </div>
            </div>
            { navbarOpen ? <MenuOverlay  links={navLinks}/> : null}
        </nav>
    );
}
 
export default Navbar;