import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Bike, Car, Gauge, KeyRound, Truck, Zap } from "lucide-react";

const categories = [
  {
    hash: "scutere-125",
    title: "Scutere 125cc",
    Icon: Gauge,
    desc: "Mai multa putere pentru curieri activi si ture lungi prin tot orasul.",
    audience: "Recomandat pentru: curieri Glovo, Wolt, Bolt Food cu volum constant.",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop",
  },
  {
    hash: "scutere-50",
    title: "Scutere 50cc",
    Icon: Bike,
    desc: "Compacte, economice, ideale pentru livrari rapide si trafic aglomerat.",
    audience: "Recomandat pentru: curieri incepatori si zone urbane dense.",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=1200&auto=format&fit=crop",
  },
  {
    hash: "fara-permis",
    title: "Scutere fara permis",
    Icon: KeyRound,
    desc: "Mopede 50cc accesibile inclusiv categoriei AM, fara cerinta A1.",
    audience: "Recomandat pentru: navetisti si livratori la inceput de drum.",
    image: "https://images.unsplash.com/photo-1525160354320-d8e92641c563?q=80&w=1200&auto=format&fit=crop",
  },
  {
    hash: "electrice",
    title: "Scutere electrice",
    Icon: Zap,
    desc: "Zero combustibil, costuri minime de operare, baterii detasabile.",
    audience: "Recomandat pentru: livrari urbane scurte si medii, cu costuri mici.",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=1200&auto=format&fit=crop",
  },
  {
    hash: "biciclete",
    title: "Biciclete electrice",
    Icon: Bike,
    desc: "Mobilitate moderna pentru zone aglomerate, fara permis si costuri minime.",
    audience: "Recomandat pentru: livrari in centru si distante scurte/medii.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    hash: "masini",
    title: "Masini electrice si hibride",
    Icon: Car,
    desc: "Confort si consum redus pentru ridesharing si activitate constanta.",
    audience: "Recomandat pentru: soferi Uber, Bolt si utilizare zilnica intensa.",
    image: "https://images.unsplash.com/photo-1623006772851-a8bf2c47d3a7?q=80&w=1200&auto=format&fit=crop",
  },
];

export function RentalCategoriesPreview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Categorii de inchiriere</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Vehicule pentru orice tip de activitate.</h2>
          <p className="mt-3 text-muted-foreground">
            Flota noastra acopera nevoi diferite, de la livrari rapide si naveta zilnica pana la ridesharing intens. Alege categoria potrivita si vezi modelele disponibile.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <motion.div
              key={c.hash}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.3) }}
            >
              <Link
                to={`/inchiriere#${c.hash}`}
                className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elevate"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-elevate">
                    <c.Icon className="h-5 w-5" />
                  </div>
                  <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold leading-tight">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  <p className="mt-3 text-xs font-semibold text-foreground/80">{c.audience}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
