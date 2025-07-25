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

## 🧱 Estructura del Proyecto

Frontend/
├── public/
├── src/
│ ├── components/
│ │ └── Header.tsx, Footer.tsx, etc.
│ ├── pages/
│ │ └── Landing.tsx, Catalogo.tsx, Contacto.tsx
│ ├── images/
│ │ └── b1a.jpg, b1b.jpg, ...
│ ├── App.tsx
│ └── main.tsx
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts


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
