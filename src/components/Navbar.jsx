import { NavLink } from "react-router-dom";
import { useState } from "react";
import { navLinks } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `font-medium transition ${isActive ? "text-[#E7720E]" : "text-gray-800 hover:text-[#E7720E]"}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-6">
      <div className="max-w-7xl h-15 mx-auto bg-white backdrop-blur-md rounded-full flex items-center justify-between px-8 py-3 shadow-lg">
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="/assets/logo-CobGksDi.png"
            alt="Radhe Group Logo"
            className="h-20 w-auto object-contain"
          />
        </NavLink>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((item) => (
            <NavLink key={item.name} to={item.path} end={item.path === "/"} className={linkClass}>
              {item.name}
            </NavLink>
          ))}
        </div>

        <NavLink to="/contact" className="hidden md:block">
          <button className="bg-[#E7720E] hover:bg-[#e06600] text-white py-3 px-8 rounded-full uppercase text-sm tracking-wider transition duration-300 flex place-content-center cursor-pointer">
            Contact Us
          </button>
        </NavLink>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 bg-white rounded-2xl shadow-lg px-6 py-4 flex flex-col gap-4">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            <button className="w-full bg-[#E7720E] hover:bg-[#e06600] text-white py-3 px-8 rounded-full uppercase text-sm tracking-wider transition duration-300 cursor-pointer">
              Contact Us
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
}
