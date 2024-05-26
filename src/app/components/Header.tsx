import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-primary text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <span className="text-secondary">Richard</span> Reis
      </div>
      <div className="md:hidden">
        {isMenuOpen ? (
          <MdOutlineClose
            onClick={toggleMenu}
            className="text-3xl cursor-pointer"
          />
        ) : (
          <MdMenu onClick={toggleMenu} className="text-3xl cursor-pointer" />
        )}
      </div>
      <nav
        className={`${
          isMenuOpen
            ? "absolute bg-primary shadow-2xl top-0 left-0 h-screen p-10 md:hidden"
            : "hidden"
        } md:flex md:items-center md:space-x-6`}
      >
        <ul className="max-md:space-y-3 flex flex-col md:flex-row md:space-x-6 font-bold">
          <li>
            <Link href="#home">Início</Link>
          </li>
          <li>
            <Link href="#about">Sobre</Link>
          </li>
          <li>
            <Link href="#skills">Habilidades</Link>
          </li>
          <li>
            <Link href="#projects">Projetos</Link>
          </li>
          <li>
            <Link href="#contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
