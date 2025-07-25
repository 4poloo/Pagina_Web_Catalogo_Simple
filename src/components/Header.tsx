import { Link } from "react-router-dom";
import logo from "./images/logo.png";

export default function Header() {
  return (
    <header className="w-full">
      {/* Línea superior color terracota */}
      <div className="bg-accent h-2 w-full" />

      {/* Contenedor del header principal */}
      <div className="bg-[#1F1F1F] text-light flex flex-col items-center justify-center py-4 shadow-md">
        
        {/* Logo centrado */}
        <div className="mb-3">
          <Link to="/">
          <img src={logo} alt="Logo" className="h-24 w-auto" />
          </Link>
        </div>

        {/* Navegación centrada */}
        <nav className="flex space-x-8 text-sm md:text-base font-medium">
          <Link to="/" className="hover:text-warning transition">Inicio</Link>
          <Link to="/catalogo" className="hover:text-warning transition">Catálogo</Link>
          <a href="/contacto" className="hover:text-warning transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
