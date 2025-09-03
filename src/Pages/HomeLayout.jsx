import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import { CodeXml, Search, Instagram, Twitter, Github } from "lucide-react";

const HomeLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 border-b border-gray-700 py-7">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="text-green-300"><CodeXml size={40} /></span>
            <span className="text-white text-3xl font-md">SinanTokmak</span>
          </NavLink>

          {/* Hamburger (mobile) */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-gray-300 hover:text-green-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Menu */}
          <div className={`${isOpen ? "block" : "hidden"} w-full md:w-auto md:flex items-center justify-center`}>
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 text-lg font-medium mt-4 md:mt-0">
              <li>
                <NavLink to="/" className={({ isActive }) =>
                  `block py-2 px-3 ${isActive ? "text-green-300" : "text-white hover:text-green-300"}`
                }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className={({ isActive }) =>
                  `block py-2 px-3 ${isActive ? "text-green-300" : "text-white hover:text-green-300"}`
                }>
                  Blogs
                </NavLink>
              </li>
              <li className="flex items-center py-2 px-3">
                <div className="relative">
                  <input
                    type="text"
                    className="pr-10 py-1 pl-2 text-sm rounded-3xl border border-gray-700 focus:outline-none focus:border-green-300 w-40 md:w-48"
                    placeholder="Search..."
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black">
                    <Search size={18} />
                  </span>
                </div>
              </li>
              <li className="flex items-center space-x-4 py-2 px-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex gap-1 text-sm text-gray-300 hover:text-green-300">
                  <Instagram size={18} /> <span>Instagram</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex gap-1 text-sm text-gray-300 hover:text-green-300">
                  <Twitter size={18} /> <span>Twitter</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex gap-1 text-sm text-gray-300 hover:text-green-300">
                  <Github size={18} /> <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content area with padding so it doesn’t hide under navbar */}
      <main className="pt-24 ">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
