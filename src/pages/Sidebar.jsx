import { useState, useEffect } from "react";

const sections = [
  { id: "introducao", label: "Introdução" },
  { id: "variaveis", label: "Variáveis" },
  { id: "operadores", label: "Operadores" },
  { id: "condicoes", label: "Condições" },
  { id: "io", label: "Entrada e Saída" },
  { id: "loops", label: "Loops" },
];

function Sidebar({ closeOnClick = false, onClose = () => {}, mobile = false }) {
  const [activeId, setActiveId] = useState(sections[0].id);

  // Detecta a seção visível na tela
  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id;
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= window.innerHeight / 3) current = id;
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 72; 
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (closeOnClick) onClose();
    }
  };

  return (
    <aside
      className={`
        ${mobile
          ? "fixed top-0 left-0 h-full w-64 bg-gray-900/95 backdrop-blur-md p-6 z-50 flex flex-col gap-4"
          : "hidden lg:flex fixed left-6 top-24 flex-col gap-3 z-50"
        }
      `}
    >
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => handleClick(id)}
          className={`
            text-left px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300
            ${activeId === id
              ? "bg-green-500 text-white shadow-lg scale-105"
              : "bg-gray-800 text-white hover:scale-105 hover:bg-gray-700"
            }
          `}
        >
          {label}
        </button>
      ))}
    </aside>
  );
}

export default Sidebar;