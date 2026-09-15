import Link from "next/link";
import { BRAND_NAME, BRAND_DESCRIPTION, FOOTER_COLUMNS } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-space-xl pb-space-lg shadow-[0_-1px_6px_rgba(43,45,44,0.02)]">
      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter pb-space-xl">
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-space-sm mb-space-md">
              <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-on-primary text-xs font-display">
                D
              </div>
              <span className="font-display text-headline-md tracking-tight text-on-surface font-normal">
                {BRAND_NAME}
              </span>
            </div>
            <p className="font-body text-body-md text-on-surface-variant mb-space-lg max-w-sm">
              {BRAND_DESCRIPTION}
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="lg:col-span-2 flex flex-col">
              <h4 className="font-display text-headline-md text-on-surface mb-space-md">
                {column.title}
              </h4>
              <ul className="space-y-space-sm font-body text-body-md text-on-surface-variant">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-body text-body-sm text-tertiary">
          <p>© 2025 {BRAND_NAME} S.A.C. Todos los derechos reservados.</p>
          <div className="flex items-center gap-space-lg">
            <Link href="/aviso-legal" className="hover:text-on-surface transition-colors">
              Aviso Legal
            </Link>
            <Link href="/privacidad" className="hover:text-on-surface transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/sostenibilidad" className="hover:text-on-surface transition-colors">
              Sostenibilidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
