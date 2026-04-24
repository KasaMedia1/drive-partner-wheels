import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, telLink } from "@/config/site";

export function FinalCta() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-10 sm:p-14 lg:p-20 shadow-elevate">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
          <div className="relative max-w-2xl text-primary-foreground">
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">Gata sa incepi sa castigi?</h2>
            <p className="mt-4 text-lg text-primary-foreground/90">Suna acum sau rezerva online. Mai ai nevoie de o singura ora pana intri in masina ta.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                <Link to="/flota">Rezerva acum</Link>
              </Button>
              <a
                href={telLink()}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-8 font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-colors tabular"
              >
                <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
