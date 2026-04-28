import { motion } from "framer-motion";
import { ShieldCheck, Wrench, LifeBuoy, Sparkles } from "lucide-react";

const pillars = [
  {
    Icon: ShieldCheck,
    title: "Acoperire fara griji",
    desc: "Pachetele noastre includ asigurare completa si protectie impotriva costurilor neasteptate, ca sa te concentrezi doar pe drum.",
  },
  {
    Icon: Wrench,
    title: "Service propriu autorizat",
    desc: "Fiecare vehicul intra in revizie periodica in atelierul nostru. Daca apare ceva, primesti un inlocuitor in sub 2 ore.",
  },
  {
    Icon: LifeBuoy,
    title: "Asistenta 24/7",
    desc: "Echipa tehnica raspunde direct, nu prin call center. Gasim solutia rapid, indiferent de ora.",
  },
  {
    Icon: Sparkles,
    title: "Flota mereu actualizata",
    desc: "Modele recente, intretinute la zi si igienizate inainte de fiecare predare. Pornesti relaxat de la prima tura.",
  },
];

export function PremiumCoverage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Standard premium</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Servicii complete, cu acoperire reala.</h2>
          <p className="mt-3 text-muted-foreground">
            La DriveRent nu inchiriem doar un vehicul, ci o experienta de mobilitate fara batai de cap. Suport, mentenanta si asigurare, totul incluse intr-un singur pachet transparent.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card hover-lift"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-elevate">
                <p.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
