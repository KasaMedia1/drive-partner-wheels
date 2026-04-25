import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Bike, Car, CheckCircle2, Gauge, KeyRound, Truck, Zap } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { fleet, Vehicle, ScooterClass } from "@/data/fleet";
import { FinalCta } from "@/components/sections/FinalCta";
import { cn } from "@/lib/utils";

type Section = {
  id: string;
  title: string;
  Icon: typeof Car;
  intro: string;
  audience: string;
  filter: (v: Vehicle) => boolean;
};

const sections: Section[] = [
  {
    id: "scutere-125",
    title: "Scutere 125cc",
    Icon: Gauge,
    intro: "Modele puternice 125cc pentru utilizare intensa, ture lungi si trafic mixt urban si periurban. Permis A1 sau B obligatoriu.",
    audience: "Recomandat pentru: curieri Glovo, Wolt si Bolt Food cu volum constant si soferi care au nevoie de viteza si autonomie.",
    filter: (v) => v.category === "scuter" && v.scooterClass === "125cc",
  },
  {
    id: "scutere-50",
    title: "Scutere 50cc",
    Icon: Bike,
    intro: "Compacte, agile si economice. Ideale pentru livrari rapide in trafic aglomerat si pentru cei aflati la inceput. Necesita permis AM.",
    audience: "Recomandat pentru: livrari urbane scurte si curieri incepatori care vor sa intre rapid in activitate.",
    filter: (v) => v.category === "scuter" && v.scooterClass === "50cc",
  },
  {
    id: "fara-permis",
    title: "Scutere fara permis",
    Icon: KeyRound,
    intro: "Mopede 50cc limitate la 25 km/h, accesibile cu categoria AM si de la 16 ani. Solutia ideala pentru cei care nu au inca permis A1.",
    audience: "Recomandat pentru: tineri navetisti si livratori la inceput de drum, fara permis moto complet.",
    filter: (v) => v.category === "scuter" && v.scooterClass === "fara-permis",
  },
  {
    id: "masini",
    title: "Masini hibride si electrice",
    Icon: Car,
    intro: "Toyota Corolla si Camry Hybrid, Toyota Aygo X, Citroën C3 si ë-C3 electric — masini cu consum redus, gandite pentru activitate constanta si confort pe termen lung.",
    audience: "Recomandat pentru: soferi de ridesharing Uber si Bolt si pentru utilizare zilnica intensa.",
    filter: (v) => v.category === "masina",
  },
];

const Inchiriere = () => {
  const loc = useLocation();

  useEffect(() => {
    if (loc.hash) {
      const el = document.getElementById(loc.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  }, [loc.hash]);

  return (
    <SiteLayout>
      <Seo
        title="Inchiriere scutere, biciclete si masini | DriveRent Bucuresti"
        description="Scutere 50cc, 125cc, fara permis, electrice, biciclete electrice si masini hibride disponibile pentru inchiriere imediata in Bucuresti."
        path="/inchiriere"
      />

      <section className="border-b border-border bg-background-soft">
        <div className="container-page py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Inchiriere</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-5xl max-w-3xl">Toate vehiculele disponibile pentru inchiriere.</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Alege categoria potrivita activitatii tale. Toate vehiculele sunt verificate periodic, intretinute constant si pregatite pentru utilizare imediata.
          </p>

          <nav className="mt-8 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                <s.Icon className="h-4 w-4" />
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {sections.map((s, sectionIdx) => {
        const items = fleet.filter(s.filter);
        return (
          <section
            key={s.id}
            id={s.id}
            className={cn("py-16 sm:py-20 scroll-mt-28", sectionIdx % 2 === 1 && "bg-background-soft")}
          >
            <div className="container-page">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-elevate">
                      <s.Icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Categorie {sectionIdx + 1} / {sections.length}
                    </p>
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground">{s.intro}</p>
                  <p className="mt-2 text-sm font-semibold text-foreground/80">{s.audience}</p>
                </div>
                <span className="text-sm text-muted-foreground tabular">
                  {items.length} {items.length === 1 ? "model disponibil" : "modele disponibile"}
                </span>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {items.map((v, i) => (
                  <ModelCard key={v.id} v={v} index={i} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <FinalCta />
    </SiteLayout>
  );
};

function ModelCard({ v, index }: { v: Vehicle; index: number }) {
  const available = v.availability === "disponibil";
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3) }}
      className="overflow-hidden rounded-2xl border border-border bg-card shadow-card hover-lift"
    >
      <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
        {/* Image gallery */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted md:aspect-auto md:h-full">
            <img src={v.images[0]} alt={`${v.name} ${v.year}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute left-3 top-3 flex gap-2">
              <span className={cn(
                "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold",
                available ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground"
              )}>
                <span className={cn("h-1.5 w-1.5 rounded-full", available ? "bg-success-foreground" : "bg-muted-foreground")} />
                {available ? "Disponibil" : "Lista asteptare"}
              </span>
            </div>
          </div>
          {v.images.length > 1 && (
            <div className="grid grid-cols-2 gap-1 p-1">
              {v.images.slice(1, 3).map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-md bg-muted">
                  <img src={src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col p-5 sm:p-6">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-display text-xl font-bold leading-tight">{v.name}</h3>
            <span className="text-xs text-muted-foreground tabular">{v.year}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{v.shortDescription}</p>

          <ul className="mt-4 grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
            {v.transmission && <Spec label={v.transmission === "automat" ? "Automat" : "Manual"} />}
            <Spec label={v.fuel === "electric" ? "Electric" : v.fuel} />
            {v.autonomyKm && <Spec label={`${v.autonomyKm} km autonomie`} />}
            {v.topSpeedKmh && <Spec label={`${v.topSpeedKmh} km/h`} />}
            {v.cargoLiters && <Spec label={`${v.cargoLiters} L cargo`} />}
            {v.seats && <Spec label={`${v.seats} locuri`} />}
            {v.consumptionLper100 && <Spec label={`${v.consumptionLper100} L/100km`} />}
          </ul>

          <ul className="mt-4 grid gap-1.5 text-xs">
            {v.included.slice(0, 3).map((inc) => (
              <li key={inc} className="flex items-center gap-1.5 text-foreground/80">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {inc}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-end justify-between border-t border-border pt-4">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">de la</p>
              <p className="font-display text-2xl font-extrabold tabular text-foreground">
                {v.pricePerWeek}<span className="text-sm font-medium text-muted-foreground"> lei/sapt</span>
              </p>
              <p className="text-[11px] text-muted-foreground tabular">{v.pricePerDay} lei/zi · {v.pricePerMonth} lei/luna</p>
            </div>
            <Button asChild size="sm">
              <Link to={`/rezerva/${v.slug}`}>Inchiriaza</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Spec({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-1.5 capitalize">
      <span className="h-1 w-1 rounded-full bg-primary" /> {label}
    </li>
  );
}

export default Inchiriere;
