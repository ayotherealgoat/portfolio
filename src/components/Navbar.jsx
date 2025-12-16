import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm fixed w-full z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#hero" className="text-lg font-semibold">David Oyelola</a>

        <ul className="hidden md:flex gap-6 text-sm items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-sky-600 transition-colors">{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Open menu" className="p-2 rounded-md hover:bg-gray-100">☰</button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="block text-slate-700 hover:text-sky-600" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
