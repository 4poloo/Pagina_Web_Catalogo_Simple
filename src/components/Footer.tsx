import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Línea superior en color acento */}
      <div className="bg-accent h-1 w-full" />

      {/* Contenido del footer */}
      <div className="bg-[#1F1F1F] text-light px-6 py-10 grid md:grid-cols-3 gap-6 text-sm md:text-base">
        
        {/* Navegación */}
        <div className="flex flex-col space-y-2 opacity-75">
          <h4 className="font-semibold text-lg mb-2">Navegación</h4>
          <Link to="/" className="hover:text-warning transition">Inicio</Link>
          <Link to="/catalogo" className="hover:text-warning transition">Catálogo</Link>
          <a href="/contacto" className="hover:text-warning transition">Contacto</a>
        </div>

        {/* Info Empresa */}
        <div className="flex flex-col space-y-2 opacity-75">
          <h4 className="font-semibold text-lg mb-2">Bodegas del Sur</h4>
          <p>RUT: 76.123.456-7</p>
          <p>Av. Los Almacenes 1234</p>
          <p>Santiago, Chile</p>
          <p>contacto@bodegasdelsur.cl</p>
        </div>

        {/* Horarios + WhatsApp */}
        <div className="flex flex-col space-y-3 opacity-75">
          <h4 className="font-semibold text-lg mb-2">Horarios de Atención</h4>
          <p>Lunes a Viernes: 09:00 - 18:00</p>
          <p>Sábados: 10:00 - 14:00</p>

          <a
            href="https://wa.me/56912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 rounded"
          >
            <FaWhatsapp className="text-xl" />
            <span>Escríbenos por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Línea inferior de cierre (opcional) */}
      <div className="bg-[#111] text-center text-xs text-gray-400 py-3">
        © {new Date().getFullYear()} Bodegas del Sur. Todos los derechos reservados.
      </div>
    </footer>
  );
}
