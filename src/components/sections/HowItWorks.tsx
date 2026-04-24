import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Alegi vehiculul", desc: "Filtrezi flota dupa nevoie: Uber, Bolt sau curierat." },
  { n: "02", title: "Trimiti actele online", desc: "BI si permis, in 2 minute prin WhatsApp." },
  { n: "03", title: "Semnam contractul", desc: "Vii la sediu sau iti aducem actele acasa." },
  { n: "04", title: "Primesti masina in 24h", desc: "Plina cu combustibil si gata de drum." },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Cum functioneaza</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">De la cerere la primul drum, in 24 de ore.</h2>
        </div>

        <div className="relative mt-12">
          <div className="hidden lg:block absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <div className="grid h-16 w-16 place-items-center rounded-2xl gradient-primary font-display text-xl font-extrabold text-primary-foreground tabular shadow-elevate">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
