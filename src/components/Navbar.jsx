import { NavLink } from "react-router-dom";
import { useState } from "react";
import { navLinks } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `whitespace-nowrap text-sm font-medium transition lg:text-base ${isActive ? "text-[#E7720E]" : "text-gray-800 hover:text-[#E7720E]"}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-3 py-3 sm:px-4 md:py-4 lg:py-6">
      <div className="max-w-7xl mx-auto bg-white backdrop-blur-md rounded-full flex items-center justify-between gap-2 px-3 py-1.5 sm:px-4 md:gap-3 md:px-5 md:py-1.5 lg:px-8 lg:py-2.5 shadow-lg">
        <NavLink to="/" className="flex shrink-0 items-center">
          <img
            src="/assets/logo-CobGksDi.png"
            alt="Radhe Group"
            className="h-11 w-auto object-contain md:h-12 lg:h-16 xl:h-20"
          />
        </NavLink>

        <div className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-10">
          {navLinks.map((item) => (
            <NavLink key={item.name} to={item.path} end={item.path === "/"} className={linkClass}>
              {item.name}
            </NavLink>
          ))}
        </div>

        <NavLink to="/contact" className="hidden md:block shrink-0">
          <button className="whitespace-nowrap bg-[#E7720E] hover:bg-[#e06600] text-white py-2 px-4 rounded-full uppercase text-xs tracking-wide transition duration-300 cursor-pointer lg:py-3 lg:px-8 lg:text-sm lg:tracking-wider">
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
