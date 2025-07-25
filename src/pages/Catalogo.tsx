import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import b1a from "../components/images/b1a.jpg";
import b1b from "../components/images/b1b.jpg";
import b2a from "../components/images/b2a.jpg";
import b2b from "../components/images/b2b.jpg";
import b3a from "../components/images/b3a.jpg";
import b3b from "../components/images/b3b.png";
import b4a from "../components/images/b4a.jpg";
import b5a from "../components/images/b5a.jpg";
import b5b from "../components/images/b5b.jpg";
import b6a from "../components/images/b6a.jpg";
import b6b from "../components/images/b6b.jpg";

interface Bodega {
  id: number;
  descripcion: string;
  medidas: string;
  ubicacion: string;
  imagenes: string[];
}

const bodegas: Bodega[] = [
  {
    id: 1,
    descripcion: "Bodega industrial con acceso para camiones y oficina interior.",
    medidas: "500 m²",
    ubicacion: "Quilicura, Santiago",
    imagenes: [b1a, b1b],
  },
  {
    id: 2,
    descripcion: "Bodega techada con patio trasero y vigilancia 24/7.",
    medidas: "320 m²",
    ubicacion: "Lampa, Santiago",
    imagenes: [b2a, b2b],
  },
  {
    id: 3,
    descripcion: "Espacio flexible para almacenamiento o logística.",
    medidas: "800 m²",
    ubicacion: "Renca, Santiago",
    imagenes: [b3a, b3b],
  },
  {
    id: 4,
    descripcion: "Bodega nueva con sistema contra incendios y buena iluminación.",
    medidas: "450 m²",
    ubicacion: "Maipú, Santiago",
    imagenes: [b4a],
  },
  {
    id: 5,
    descripcion: "Ideal para ecommerce, acceso a ruta 68 y seguridad permanente.",
    medidas: "220 m²",
    ubicacion: "Pudahuel, Santiago",
    imagenes: [b5a, b5b],
  },
  {
    id: 6,
    descripcion: "Gran bodega con mezzanine y portón automático.",
    medidas: "700 m²",
    ubicacion: "San Bernardo, Santiago",
    imagenes: [b6a, b6b],
  },
];

export default function Catalogo(): JSX.Element {
  return (
    <main className="bg-light text-dark min-h-screen px-6 py-12 font-sans">
      <h2 className="text-3xl font-bold text-center mb-10">Catálogo de Bodegas</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bodegas.map((bodega) => {
          const carouselRef = useRef<HTMLDivElement>(null);
          const [width, setWidth] = useState(0);

          useEffect(() => {
            if (carouselRef.current) {
              const scrollWidth = carouselRef.current.scrollWidth;
              const offsetWidth = carouselRef.current.offsetWidth;
              const maxDrag = scrollWidth - offsetWidth;
              setWidth(maxDrag > 0 ? maxDrag : 0);
            }
          }, []);

          return (
            <div
              key={bodega.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/40"
            >
              {/* Galería drag horizontal con límite */}
              <motion.div
                ref={carouselRef}
                drag="x"
                dragConstraints={{ left: -width, right: 0 }}
                className="flex space-x-2 p-2 cursor-grab active:cursor-grabbing"
              >
                {bodega.imagenes.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`bodega-${bodega.id}-${idx}`}
                    className="h-40 w-auto rounded object-cover pointer-events-none select-none"
                  />
                ))}
              </motion.div>

              <div className="p-4">
                <div>
                  <p className="text-md mb-2 h-14">{bodega.descripcion}</p>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  📐 <strong>Medidas:</strong> {bodega.medidas}
                </p>
                <p className="text-sm text-gray-600">
                  📍 <strong>Ubicación:</strong> {bodega.ubicacion}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
