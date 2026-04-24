import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { VehicleCard } from "@/components/VehicleCard";
import { fleet } from "@/data/fleet";
import { FinalCta } from "@/components/sections/FinalCta";

const compare = [
  { type: "Bicicleta electrica", autonomy: "60-90 km", speed: "25 km/h", capacity: "25-60 L", cost: "180 lei/sapt", best: "Centru oras, ture scurte" },
  { type: "Scuter", autonomy: "80-270 km", speed: "90 km/h", capacity: "35-40 L", cost: "250-320 lei/sapt", best: "Tot orasul, ture medii" },
  { type: "Masina mica", autonomy: "650+ km", speed: "Autostrada", capacity: "Mare", cost: "900 lei/sapt", best: "Curse mari si grele" },
];

const Curieri = () => {
  const recommended = fleet.filter((v) => v.audience.includes("curieri")).slice(0, 6);

  return (
    <SiteLayout>
      <Seo title="Scutere si biciclete pentru curieri Glovo, Wolt, Bolt Food | DrivePartner" description="Inchirieri scutere si biciclete electrice pentru curieri. Top case, geanta termica si asigurare incluse." path="/curieri" />

      <section className="relative overflow-hidden gradient-soft">
        <div className="absolute -left-40 top-10 h-[600px] w-[600px] rounded-full glow-orange" />
        <div className="container-page relative py-16 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold backdrop-blur">
              <Sparkles className="h-3 w-3 text-primary" /> Pentru curieri Glovo, Wolt, Bolt Food
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Livreaza mai repede, <span className="gradient-text">castiga mai mult.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Scutere fiabile si biciclete electrice cu cargo, top case si geanta termica. Cu sau fara permis, gata de drum maine.
            </p>
            <div className="mt-7 grid gap-2 sm:grid-cols-2 max-w-xl">
              {["Casca, lacat si cargo incluse", "Bateri detasabile", "Inlocuire in 2h", "Service complet inclus"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" />{b}</div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-8"><Link to="/flota?aud=curieri">Vezi vehiculele <ArrowRight className="h-4 w-4" /></Link></Button>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16">
        <div className="container-page">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Ce sa alegi: bicicleta, scuter sau masina?</h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr className="text-left">
                  {["Tip", "Autonomie", "Viteza", "Capacitate", "Cost", "Recomandat pentru"].map((h) => (
                    <th key={h} className="px-5 py-4 font-display font-bold text-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compare.map((row, i) => (
                  <tr key={row.type} className={i % 2 ? "bg-background-soft" : ""}>
                    <td className="px-5 py-4 font-semibold">{row.type}</td>
                    <td className="px-5 py-4 tabular">{row.autonomy}</td>
                    <td className="px-5 py-4 tabular">{row.speed}</td>
                    <td className="px-5 py-4 tabular">{row.capacity}</td>
                    <td className="px-5 py-4 font-semibold tabular text-primary">{row.cost}</td>
                    <td className="px-5 py-4 text-muted-foreground">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-soft">
        <div className="container-page">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">6 modele recomandate</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommended.map((v, i) => <VehicleCard key={v.id} vehicle={v} index={i} />)}
          </div>
        </div>
      </section>

      {/* Savings vs buying */}
      <section className="py-16">
        <div className="container-page">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-12 grid gap-6 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Cat economisesti</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold">vs. cumparat propriu</h2>
            </div>
            <div className="grid grid-cols-2 gap-6 lg:col-span-2">
              <Stat label="Investitie initiala" plus="0 lei" minus="~ 8.000 lei" />
              <Stat label="Service si reparatii" plus="Inclus" minus="500-1500 lei/an" />
              <Stat label="Asigurare" plus="Inclus" minus="600-1200 lei/an" />
              <Stat label="Inlocuire la pana" plus="2h" minus="2-7 zile" />
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </SiteLayout>
  );
};

function Stat({ label, plus, minus }: { label: string; plus: string; minus: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
      <div className="mt-2 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-success/15 px-3 py-2.5">
          <p className="text-[10px] font-bold uppercase text-success-foreground">DrivePartner</p>
          <p className="mt-0.5 font-display font-extrabold tabular">{plus}</p>
        </div>
        <div className="rounded-xl border border-border px-3 py-2.5">
          <p className="text-[10px] font-bold uppercase text-muted-foreground">Cumparat</p>
          <p className="mt-0.5 font-display font-extrabold tabular text-muted-foreground">{minus}</p>
        </div>
      </div>
    </div>
  );
}

export default Curieri;
