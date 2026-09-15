"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, BRAND_NAME } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E3EFE6]/85 backdrop-blur-md shadow-[0_1px_8px_rgba(43,45,44,0.04)]">
      <div className="h-20 max-w-[1440px] mx-auto px-margin flex items-center justify-between gap-gutter">
        <Link href="/" className="flex items-center gap-space-md">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-on-primary text-sm font-display">
            D
          </div>
          <span className="font-display text-headline-md tracking-tight text-on-surface font-normal">
            {BRAND_NAME}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-space-sm">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-space-md py-space-xs rounded-full font-body text-label-lg font-semibold transition-all",
                  isActive
                    ? "bg-secondary-container text-on-secondary-container"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container/60"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-sm">
          <div className="hidden md:flex items-center bg-surface-container-lowest/80 rounded-full px-space-md py-space-xs shadow-[0_1px_4px_rgba(43,45,44,0.04)]">
            <Search className="text-tertiary" size={18} />
            <input
              className="bg-transparent border-none outline-none font-body text-body-sm text-on-surface placeholder:text-outline w-44 focus:w-60 transition-all ml-space-xs"
              placeholder="Buscar vinilos y murales..."
              type="text"
            />
          </div>
          <button
            aria-label="Favoritos"
            className="p-space-xs rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container/60 transition-colors flex items-center justify-center"
          >
            <Heart size={20} />
          </button>
          <button
            aria-label="Carrito de compra"
            className="p-space-xs rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container/60 transition-colors flex items-center justify-center relative"
          >
            <ShoppingBag size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary" />
          </button>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <User className="text-on-primary" size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}
