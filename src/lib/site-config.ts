export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/cotizador", label: "Cotizador" },
  { href: "/inspiracion", label: "Inspiración" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Estilos",
    links: [
      { href: "/catalogo?estilo=botanicos", label: "Botánicos & Flora" },
      { href: "/catalogo?estilo=geometricos", label: "Geométricos & Minimalistas" },
      { href: "/catalogo?estilo=texturas", label: "Texturas & Piedra" },
      { href: "/catalogo?estilo=infantiles", label: "Infantiles & Lúdicos" },
      { href: "/catalogo?estilo=zen", label: "Abstractos Zen" },
    ],
  },
  {
    title: "Catálogo",
    links: [
      { href: "/catalogo?tipo=vinilos", label: "Vinilos Decorativos" },
      { href: "/catalogo?tipo=papel-mural", label: "Papel Mural" },
      { href: "/cotizador", label: "Murales a Medida" },
      { href: "/catalogo?tipo=texturas", label: "Texturas & Relieve" },
      { href: "/catalogo?coleccion=2025", label: "Colección Mural 2025" },
    ],
  },
  {
    title: "Atención & Experiencia",
    links: [
      { href: "/contacto", label: "Asesoría de Interiorismo" },
      { href: "/cotizador", label: "Cotizador a Medida" },
      { href: "/contacto#envios", label: "Envíos & Instalación" },
      { href: "/contacto#garantia", label: "Garantía de Materiales" },
      { href: "/contacto#faq", label: "Preguntas Frecuentes" },
    ],
  },
] as const;

export const BRAND_NAME = "Decovinilos";
export const BRAND_DESCRIPTION =
  "Vinilos decorativos y papel mural de autor, producidos a medida para transformar cualquier pared en una superficie con carácter.";
