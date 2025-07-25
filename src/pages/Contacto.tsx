import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <main className="bg-light text-dark font-sans overflow-x-hidden">
      {/* Mapa horizontal */}
      <section className="w-full h-[300px] bg-gray-300 flex items-center justify-center text-lg text-gray-700">
        {/* Aquí puedes insertar el iframe de Google Maps si lo deseas */}
        <p>Aquí irá el mapa de Google Maps</p>
      </section>

      {/* Formulario y datos */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="grid md:grid-cols-2 gap-12 px-6 py-20 items-start"
      >
        {/* Formulario */}
        <form className="space-y-4 w-full max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Envíanos un mensaje</h3>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            className="w-full px-4 py-2 border border-primary rounded"
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Tu correo"
            className="w-full px-4 py-2 border border-primary rounded"
            required
          />
          <textarea
            name="mensaje"
            rows={4}
            placeholder="Tu mensaje"
            className="w-full px-4 py-2 border border-primary rounded"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-accent transition"
          >
            Enviar mensaje
          </button>
        </form>

        {/* Información de la empresa */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-4">Información de contacto</h3>
          <p>📍 <strong>Ubicación:</strong> Av. Empresarial 1234, Quilicura, Santiago</p>
          <p>🕒 <strong>Horarios:</strong> Lunes a Viernes, 9:00 - 18:00</p>
          <p>📧 <strong>Correo:</strong> contacto@bodegasdelsur.cl</p>
          <p>📞 <strong>Teléfono:</strong> +56 9 1234 5678</p>

          {/* Botón WhatsApp */}
          <a
            href="https://wa.me/56912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.627 5.373-12 12-12 3.191.001 6.187 1.24 8.438 3.489 2.252 2.248 3.492 5.244 3.492 8.435-.003 6.627-5.373 12-12 12-1.99-.001-3.951-.5-5.688-1.45L.057 24zM6.3 19.31c1.676.995 3.276 1.591 5.701 1.592 5.377 0 9.75-4.373 9.751-9.75.002-5.377-4.373-9.75-9.75-9.751-5.376.001-9.75 4.374-9.751 9.75 0 2.138.676 3.797 1.807 5.412L4.73 20.29l1.57-1.001zm11.387-5.457c-.175-.088-1.033-.508-1.194-.566-.16-.058-.277-.087-.395.088-.116.175-.454.566-.557.683-.102.116-.205.131-.38.044-.175-.087-.739-.272-1.409-.868-.52-.463-.87-1.037-.973-1.212-.102-.175-.011-.27.076-.358.078-.077.175-.2.263-.3.088-.102.117-.175.175-.29.058-.116.029-.218-.015-.306-.044-.087-.395-.948-.542-1.3-.142-.34-.287-.294-.395-.3-.102-.007-.218-.009-.336-.009-.116 0-.306.044-.465.218-.16.175-.61.595-.61 1.451s.625 1.682.712 1.796c.087.116 1.229 1.884 2.982 2.64.417.18.742.287.995.366.418.133.797.114 1.096.069.335-.05 1.033-.42 1.18-.826.145-.406.145-.754.102-.826-.043-.073-.16-.116-.335-.203z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </motion.section>
    </main>
  );
}
