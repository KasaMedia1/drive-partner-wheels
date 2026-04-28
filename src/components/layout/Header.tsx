import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE, telLink } from "@/config/site";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/inchiriere", label: "Inchiriere" },
  { to: "/flota", label: "Flota" },
  { to: "/calculator-uber", label: "Calculator Uber/Bolt" },
  { to: "/calculator-curieri", label: "Calculator curieri" },
  { to: "/despre", label: "Despre" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => setOpen(false), [loc.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div
        className={cn(
          "border-b border-border bg-background/85 backdrop-blur-md transition-shadow",
          scrolled && "shadow-card",
        )}
      >
        <div className="container-page grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg gradient-primary text-primary-foreground">
              DR
            </span>
            <span>Drive<span className="gradient-text">Rent</span></span>
          </Link>

          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="hidden sm:inline-flex gradient-primary text-primary-foreground font-bold shadow-elevate ring-2 ring-primary/30 hover:ring-primary/50 hover:scale-105 transition-all px-8"
            >
              <Link to="/inchiriere">Închiriază acum</Link>
            </Button>
          </div>

          <div className="flex items-center justify-end gap-2">
            <nav className="hidden xl:flex items-center gap-1">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground hover:bg-muted",
                      isActive && "text-foreground bg-muted",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <a
              href={telLink()}
              className="hidden md:inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-semibold tabular hover:border-primary hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
            <button
              aria-label="Meniu"
              className="xl:hidden grid h-10 w-10 place-items-center rounded-md border border-border"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="xl:hidden border-t border-border bg-background animate-fade-in">
            <nav className="container-page flex flex-col py-3">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-3 py-3 text-base font-medium",
                      isActive ? "bg-muted text-foreground" : "text-foreground/80",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a href={telLink()} className="mt-2 inline-flex items-center gap-2 rounded-md gradient-primary px-3 py-3 text-base font-semibold text-primary-foreground">
                <Phone className="h-4 w-4" />
                {SITE.phoneDisplay}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
