import { motion } from "framer-motion";
import { Clock, FileCheck2, Headphones, ShieldCheck } from "lucide-react";

const features = [
  { Icon: FileCheck2, title: "Flota variata", desc: "Solutii pentru orice tip de activitate, de la livrari la naveta zilnica." },
  { Icon: Clock, title: "Contract rapid", desc: "Proces simplificat, semnezi si pleci. Fara birocratie inutila." },
  { Icon: ShieldCheck, title: "Vehicule verificate", desc: "Intretinute periodic si pregatite pentru utilizare imediata." },
  { Icon: Headphones, title: "Suport tehnic real", desc: "Asistenta pe toata durata inchirierii, fara call center." },
];

export function WhyUs() {
  return (
    <section className="py-16 sm:py-20 bg-background-soft">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">De ce DriveRent</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Solutii simple si eficiente pentru mobilitate urbana.</h2>
          <p className="mt-3 text-muted-foreground">DriveRent iti ofera mai mult decat un vehicul. Iti ofera o solutie completa pentru deplasare in oras, fara complicatii.</p>
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
