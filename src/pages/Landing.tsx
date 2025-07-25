import { motion } from "framer-motion"
import F1 from "../components/images/Bodega_1.jpg"


export default function Landing() {
  return (
    <main className="bg-light text-dark font-sans overflow-x-hidden">

      {/* Hero solo con fondo oscuro e imagen */}
      <section className="relative overflow-hidden">
        {/* Imagen difuminada de fondo */}
          <img
            src={F1}
            alt="Fondo hero"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-20 blur-sm z-0"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 0.55, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-6 bg-primary bg-opacity-90 text-light"
          >
          <h2 className="text-4xl font-bold mb-4">Espacios ideales para tu negocio</h2>
          <p className="text-lg max-w-2xl mb-6">
            En Bodegas del Sur ofrecemos soluciones confiables para almacenamiento, distribución y expansión de empresas en crecimiento.
            Nuestra visión es conectar a los emprendedores y empresas con espacios funcionales y estratégicos.
          </p>
          <div className="space-x-4">
            <a href="#catalogo" className="bg-warning/70 text-white px-6 py-2 rounded-md hover:bg-accent transition">Ver catálogo</a>
            <a href="#contacto" className="border border-light text-light px-6 py-2 rounded-md hover:bg-light hover:text-primary transition">Contáctanos</a>
          </div>
        </motion.div>
      </section>

      {/* Sección imagen + texto */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="grid md:grid-cols-2 gap-10 px-6 py-20 items-center"
      >
        <div>
          <h3 className="text-2xl font-bold mb-4">Comprometidos con tu crecimiento</h3>
          <p className="text-lg">
            Nuestras bodegas están ubicadas estratégicamente para facilitar la logística de tu empresa. Contamos con diferentes tamaños, seguridad 24/7 y acceso expedito.
          </p>
        </div>
        <img src="../src/components/images/Bodega_2.jpg" alt="Bodega 2" className="rounded-lg shadow-md" />
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="grid md:grid-cols-2 gap-10 px-6 py-20 items-center bg-[#F0EAE2]"
      >
        <img src="../src/components/images/Bodega_3.jpg" alt="Bodega 3" className="rounded-lg shadow-md" />
        <div>
          <h3 className="text-2xl font-bold mb-4">Soluciones flexibles</h3>
          <p className="text-lg">
            Desde arriendos a corto plazo hasta contratos anuales, nos adaptamos a las necesidades de cada cliente con planes y precios competitivos.
          </p>
        </div>
      </motion.section>

      {/* Contacto */}
      <section className="relative overflow-hidden" id="contacto">
        <img
          src={F1}
          alt="Fondo contacto"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20 blur-sm z-0"
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.55, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="relative z-10 px-6 py-20 bg-primary bg-opacity-90 text-light"
        >
        <h3 className="text-3xl font-bold text-center mb-10">Contáctanos</h3>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="w-full h-72 md:h-auto bg-gray-300 rounded-lg flex items-center justify-center text-gray-700 text-lg">
            Aquí irá el mapa de Google Maps
          </div>
          <form className="space-y-4">
            <input type="text" name="nombre" placeholder="Tu nombre" className="w-full px-4 py-2 border text-light border-gray-300 rounded" required />
            <input type="email" name="correo" placeholder="Tu correo" className="w-full px-4 py-2 border text-light border-gray-300 rounded" required />
            <textarea name="mensaje" rows={4} placeholder="Tu mensaje" className="w-full px-4 py-2 border text-light border-gray-300 rounded" required />
            <button type="submit" className="bg-warning/45 text-white px-6 py-2 rounded hover:bg-accent/95 transition">
              Enviar mensaje
            </button>
          </form>
        </div>
        </motion.div>
      </section>

      {/* WhatsApp botón flotante */}
      <a
        href="https://wa.me/56912345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        title="Contáctanos por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.627 5.373-12 12-12 3.191.001 6.187 1.24 8.438 3.489 2.252 2.248 3.492 5.244 3.492 8.435-.003 6.627-5.373 12-12 12-1.99-.001-3.951-.5-5.688-1.45L.057 24zM6.3 19.31c1.676.995 3.276 1.591 5.701 1.592 5.377 0 9.75-4.373 9.751-9.75.002-5.377-4.373-9.75-9.75-9.751-5.376.001-9.75 4.374-9.751 9.75 0 2.138.676 3.797 1.807 5.412L4.73 20.29l1.57-1.001zm11.387-5.457c-.175-.088-1.033-.508-1.194-.566-.16-.058-.277-.087-.395.088-.116.175-.454.566-.557.683-.102.116-.205.131-.38.044-.175-.087-.739-.272-1.409-.868-.52-.463-.87-1.037-.973-1.212-.102-.175-.011-.27.076-.358.078-.077.175-.2.263-.3.088-.102.117-.175.175-.29.058-.116.029-.218-.015-.306-.044-.087-.395-.948-.542-1.3-.142-.34-.287-.294-.395-.3-.102-.007-.218-.009-.336-.009-.116 0-.306.044-.465.218-.16.175-.61.595-.61 1.451s.625 1.682.712 1.796c.087.116 1.229 1.884 2.982 2.64.417.18.742.287.995.366.418.133.797.114 1.096.069.335-.05 1.033-.42 1.18-.826.145-.406.145-.754.102-.826-.043-.073-.16-.116-.335-.203z"/>
        </svg>
      </a>
    </main>
  );
}
