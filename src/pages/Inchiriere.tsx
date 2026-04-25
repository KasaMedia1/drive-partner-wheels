import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { FinalCta } from "@/components/sections/FinalCta";
import { rentalCategories, getVehiclesInCategory } from "@/data/categories";

const Inchiriere = () => {
  return (
    <SiteLayout>
      <Seo
        title="Inchiriere scutere si masini | DriveRent Bucuresti"
        description="Alege categoria potrivita: scutere 50cc, 125cc, fara permis sau masini hibride si electrice. Vehicule pregatite imediat in Bucuresti."
        path="/inchiriere"
      />

      <section className="border-b border-border bg-background-soft">
        <div className="container-page py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Inchiriere</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-5xl max-w-3xl">
            Alege categoria potrivita pentru tine.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Patru categorii, zeci de modele. Apasa pe o categorie ca sa vezi vehiculele disponibile si specificatiile complete.
          </p>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {rentalCategories.map((c, i) => {
            const count = getVehiclesInCategory(c.slug).length;
            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.3) }}
              >
                <Link
                  to={`/inchiriere/${c.slug}`}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elevate"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-elevate">
                      <c.Icon className="h-5 w-5" />
                    </div>
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                      {count} {count === 1 ? "model" : "modele"}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h2 className="font-display text-2xl font-bold leading-tight">{c.title}</h2>
                    <p className="mt-3 text-sm text-muted-foreground">{c.intro}</p>
                    <p className="mt-3 text-xs font-semibold text-foreground/80">{c.audience}</p>

                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Vezi toate modelele <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <FinalCta />
    </SiteLayout>
  );
};

export default Inchiriere;
