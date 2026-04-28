import { motion } from "framer-motion";
import { Search, MessageCircle, FileSignature, KeyRound } from "lucide-react";

const steps = [
  {
    Icon: Search,
    n: "01",
    title: "Alegi modelul potrivit",
    desc: "Iti spunem clar ce se preteaza pentru Uber, Bolt sau livrari. Filtrezi flota dupa tipul de activitate si bugetul tau.",
  },
  {
    Icon: MessageCircle,
    n: "02",
    title: "Trimiti actele in 2 minute",
    desc: "Buletin si permis pe WhatsApp. Verificam pe loc si te confirmam fara drumuri inutile la birou.",
  },
  {
    Icon: FileSignature,
    n: "03",
    title: "Semnezi un contract clar",
    desc: "Fara clauze ascunse: tarif fix, ce e inclus, ce nu este. Putem aduce contractul si la tine, in Bucuresti.",
  },
  {
    Icon: KeyRound,
    n: "04",
    title: "Pleci pe drum in 24h",
    desc: "Predarea se face cu vehicul plin, verificat si asigurat. Esti gata pentru prima cursa sau prima livrare.",
  },
];

export function ProcessDetailed() {
  return (
    <section className="py-16 sm:py-20 bg-background-soft">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">In 4 pasi simpli</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Asa te urci pe propriul vehicul cu DriveRent.</h2>
          <p className="mt-3 text-muted-foreground">
            Procesul este construit pentru oameni ocupati: comunicare directa, decizie rapida, predare prietenoasa.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
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
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-soft text-primary">
                    <s.Icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-2xl font-extrabold text-muted-foreground tabular">{s.n}</span>
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
