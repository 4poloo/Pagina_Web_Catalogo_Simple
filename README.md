# 🏢 Bodegas del Sur - Landing Page & Catálogo

Landing page profesional y catálogo interactivo para "Bodegas del Sur", una empresa dedicada al arriendo de espacios industriales y logísticos. Desarrollado en React + Vite + TypeScript con animaciones y estilos modernos.

---

## 🚀 Tecnologías Utilizadas

- ⚛️ **React 18** con **Vite** como bundler
- 🎨 **TailwindCSS** para estilos rápidos y responsivos
- 💡 **TypeScript** para tipado estático y robustez
- 🎞️ **Framer Motion** para animaciones suaves
- 🌐 **React Router** (opcional para navegación entre páginas)
- 🖼️ Carga de imágenes con `import` (modo local)

---
## 📦 Tecnologías y Versiones

| Herramienta        | Versión     |
|--------------------|-------------|
| React              | 18.x        |
| Vite               | ^4.0 / ^5.0 |
| TypeScript         | ^5.x        |
| TailwindCSS        | ^4.1        |
| Framer Motion      | ^10.x       |
| PostCSS            | ^8.x        |
| Autoprefixer       | ^10.x       |

---

## 🧱 Estructura del Proyecto
Frontend/
├── public/                         # Archivos públicos
│   └── favicon.ico
├── src/
│   ├── assets/                     # Imágenes y recursos
│   │   └── logo.svg, imágenes bodegas
│
│   ├── components/                 # Componentes reutilizables
│   │   ├── Header.tsx             # Header modular
│   │   ├── Footer.tsx             # Footer modular
│   │   └── WhatsAppButton.tsx     # Botón fijo de WhatsApp
│
│   ├── pages/                      # Páginas del sitio
│   │   ├── Landing.tsx            # Página principal
│   │   ├── Catalogo.tsx           # Página de bodegas
│   │   └── Contacto.tsx           # Página de contacto
│
│   ├── App.tsx                    # Enrutador principal
│   ├── main.tsx                   # Punto de entrada
│   └── index.css                  # Tailwind y estilos base
│
├── tailwind.config.ts             # Configuración extendida de Tailwind
├── tsconfig.json                  # Configuración TypeScript
├── vite.config.ts                 # Configuración de Vite
├── package.json
└── README.md
---

## 🧩 Páginas Incluidas

### 📌 Landing Page (`/`)
- Hero con fondo dinámico e imagen difuminada
- Secciones informativas con animaciones al hacer scroll
- Botón flotante de WhatsApp

### 📦 Catálogo (`/catalogo`)
- Tarjetas de bodegas con imágenes scrollables (drag horizontal)
- Zoom animado al pasar el mouse
- Información de medidas y ubicación

### 📬 Contacto (`/contacto`)
- Mapa horizontal
- Formulario de contacto
- Datos mock de la empresa + botón de WhatsApp

---

🧪 TODOs / Funcionalidades futuras

    Integración con backend para formularios reales

    Validación con Firebase u otro proveedor

    Subida dinámica de bodegas desde API

    SEO básico y favicon personalizado

    Deploy en Vercel / Netlify / Render

🧾 Datos de ejemplo (mock)

    Dirección: Av. Empresarial 1234, Quilicura, Santiago

    Teléfono: +56 9 1234 5678

    Correo: contacto@bodegasdelsur.cl

    Horario: Lunes a Viernes de 9:00 a 18:00
    
🧑‍💻 Autor

Max Dev
Desarrollador Fullstack 
---

📄 Licencia

Este proyecto está bajo licencia MIT.
