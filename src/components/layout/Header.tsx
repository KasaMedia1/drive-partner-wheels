import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE, telLink } from "@/config/site";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/flota", label: "Flota" },
  { to: "/uber-bolt", label: "Uber / Bolt" },
  { to: "/curieri", label: "Curieri" },
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
      {/* Announcement bar */}
      <div className="gradient-primary text-primary-foreground text-xs sm:text-sm">
        <div className="container-page flex h-9 items-center justify-between gap-3">
          <p className="truncate font-medium">Rezervi azi, ridici maine · Asistenta 24/7</p>
          <a href={telLink()} className="hidden sm:inline-flex items-center gap-1.5 hover:underline">
            <Phone className="h-3.5 w-3.5" />
            <span className="tabular">{SITE.phoneDisplay}</span>
          </a>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-border bg-background/85 backdrop-blur-md transition-shadow",
          scrolled && "shadow-card",
        )}
      >
        <div className="container-page flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg gradient-primary text-primary-foreground">
              DP
            </span>
            <span>Drive<span className="gradient-text">Partner</span></span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
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

          <div className="flex items-center gap-2">
            <a
              href={telLink()}
              className="hidden md:inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-semibold tabular hover:border-primary hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link to="/flota">Rezerva</Link>
            </Button>
            <button
              aria-label="Meniu"
              className="lg:hidden grid h-10 w-10 place-items-center rounded-md border border-border"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-in">
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
