import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { SITE } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-background-soft">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold">
            <span className="grid h-8 w-8 place-items-center rounded-lg gradient-primary text-primary-foreground">DP</span>
            <span>Drive<span className="gradient-text">Partner</span></span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Inchirieri masini, scutere si biciclete electrice pentru soferi Uber, Bolt si curieri Glovo, Wolt, Bolt Food in {SITE.city}.
          </p>
          <div className="mt-4 flex gap-2">
            <a href={SITE.social.facebook} aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-md border border-border hover:border-primary hover:text-primary">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={SITE.social.instagram} aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-md border border-border hover:border-primary hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">Linkuri</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/flota" className="hover:text-primary">Flota</Link></li>
            <li><Link to="/uber-bolt" className="hover:text-primary">Pentru Uber / Bolt</Link></li>
            <li><Link to="/curieri" className="hover:text-primary">Pentru curieri</Link></li>
            <li><Link to="/despre" className="hover:text-primary">Despre noi</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /><span className="tabular">{SITE.phoneDisplay}</span></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /><span>{SITE.email}</span></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /><span>{SITE.address}</span></li>
            <li className="text-muted-foreground">{SITE.program}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">Garantii</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />Asigurare RCA + CASCO</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />Verificare RAR la zi</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />Parteneri Uber, Bolt, Glovo</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. Toate drepturile rezervate.</p>
          <p>Realizat cu grija pentru soferi si curieri.</p>
        </div>
      </div>
    </footer>
  );
}
