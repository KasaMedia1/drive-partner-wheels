import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Bike, Car, ScanLine } from "lucide-react";

const segments = [
  {
    to: "/uber-bolt",
    title: "Pentru soferi Uber & Bolt",
    desc: "Masini fiabile, automate sau hibride, perfecte pentru ride-hailing. Categorii Comfort si XL.",
    bullets: ["Asigurare full inclusa", "Acceptate pe Uber, Bolt", "Inlocuire in 2h"],
    Icon: Car,
  },
  {
    to: "/curieri",
    title: "Pentru curieri Glovo / Wolt / Bolt Food",
    desc: "Scutere si biciclete electrice agile, cu top case si geanta termica incluse.",
    bullets: ["Cu sau fara permis", "Bateri detasabile", "Service inclus"],
    Icon: Bike,
  },
];

export function SegmentSelector() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Alege traseul tau</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Doua tipuri de soferi, o singura promisiune.</h2>
          </div>
          <ScanLine className="hidden h-10 w-10 text-primary md:block" />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {segments.map((s, i) => (
            <motion.div
              key={s.to}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={s.to}
                className="group relative block overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevate"
              >
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full glow-orange opacity-60 transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-primary-foreground">
                    <s.Icon className="h-7 w-7" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                </div>
                <h3 className="relative mt-6 font-display text-2xl font-bold leading-tight">{s.title}</h3>
                <p className="relative mt-2 text-muted-foreground">{s.desc}</p>
                <ul className="relative mt-5 grid gap-1.5 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {b}
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
