# Decovinilos — Web

Base del proyecto frontend para la tesina **Decovinilos** (vinilos decorativos y
papel mural de autor). Migrado desde el export de Stitch a Next.js + Tailwind CSS v4.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 (tokens de diseño en `src/app/globals.css`, tomados 1:1 del
  `DESIGN.md` / tailwind.config del export de Stitch)
- Fuentes: Playfair Display (titulares) + Plus Jakarta Sans (cuerpo), vía `next/font`
- Iconos: lucide-react
- Utilidades tipo shadcn/ui (`cn()` en `src/lib/utils.ts`, `class-variance-authority`,
  `clsx`, `tailwind-merge`, `@radix-ui/react-slot` ya instalados)

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Estructura

- `src/app/layout.tsx` — layout raíz, fuentes, Header y Footer globales
- `src/app/globals.css` — tema de diseño (colores, tipografía, radios, sombras)
- `src/components/layout/header.tsx` — encabezado con navegación
- `src/components/layout/footer.tsx` — pie de página con newsletter y enlaces
- `src/lib/site-config.ts` — datos de navegación y marca (edítalo para cambiar
  enlaces, nombre de marca o descripción)
- `src/lib/utils.ts` — helper `cn()` para clases condicionales (estilo shadcn/ui)

## Nota sobre shadcn/ui

El entorno donde armé esta base no tenía acceso a `ui.shadcn.com`, así que no
pude correr `npx shadcn init` ni instalar componentes con el CLI. Ya están
instaladas las dependencias que shadcn necesita (`class-variance-authority`,
`clsx`, `tailwind-merge`, `@radix-ui/react-slot`, `lucide-react`) y el helper
`cn()`. En tu máquina, con internet normal, puedes correr:

```bash
npx shadcn@latest init
npx shadcn@latest add button input card
```

y elegir "No" cuando pregunte si quiere sobrescribir `globals.css` (para no
perder los tokens de diseño ya configurados).

## Próximos pasos

- Migrar la página de inicio (`home.html`) a `src/app/page.tsx`
- Migrar el catálogo (`catalogo.html`) a `src/app/catalogo/page.tsx`
- Migrar el detalle de producto a `src/app/producto/[slug]/page.tsx`
- Migrar el cotizador a `src/app/cotizador/[slug]/page.tsx`
- Conectar los datos mock a los endpoints de Spring Boot
