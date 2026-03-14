import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "../pages/Sidebar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className="w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 text-white px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between fixed top-0 z-50"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 text-lg sm:text-xl font-bold">
          <span className="text-green-400">&lt;/&gt;</span>
          <span className="tracking-wide">Aprendendo a Programar</span>
        </div>

        {/* Botão de menu mobile */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Sidebar desktop */}
        <div className="hidden lg:block">
          <Sidebar closeOnClick={false} />
        </div>
      </header>

      {/* Sidebar mobile */}
      {isOpen && (
        <Sidebar closeOnClick={true} onClose={() => setIsOpen(false)} mobile={true} />
      )}
    </>
  );
}

export default Header;