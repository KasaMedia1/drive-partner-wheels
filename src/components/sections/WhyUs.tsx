import { motion } from "framer-motion";
import { Clock, FileCheck2, Headphones, ShieldCheck } from "lucide-react";

const features = [
  { Icon: Headphones, title: "Asistenta 24/7", desc: "Suntem la telefon zi si noapte, in weekend si sarbatori." },
  { Icon: ShieldCheck, title: "Asigurare completa", desc: "RCA si CASCO incluse in pret. Zero stres dupa volan." },
  { Icon: Clock, title: "Masina de schimb in 2h", desc: "Daca apare o problema, primesti vehicul de inlocuire imediat." },
  { Icon: FileCheck2, title: "Contract flexibil", desc: "Inchirieri de la 7 zile, prelungesti cand vrei, fara taxe ascunse." },
];

export function WhyUs() {
  return (
    <section className="py-16 sm:py-20 bg-background-soft">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">De ce DrivePartner</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Garantii reale, nu promisiuni de marketing.</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card hover-lift"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-soft text-primary">
                <f.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
