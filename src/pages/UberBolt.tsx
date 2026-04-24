import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, CheckCircle2, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { VehicleCard } from "@/components/VehicleCard";
import { fleet } from "@/data/fleet";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";

const UberBolt = () => {
  const [hours, setHours] = useState(8);
  const [days, setDays] = useState(6);
  // Conservative: ~20 lei/h net Bucharest
  const monthly = Math.round(hours * days * 4 * 20);

  const recommended = fleet.filter((v) => v.audience.includes("uber-bolt")).slice(0, 3);

  return (
    <SiteLayout>
      <Seo title="Masini pentru Uber si Bolt | DrivePartner" description="Inchirieri masini automate si hibride pentru soferi Uber si Bolt in Bucuresti. Asigurare full inclusa, asistenta 24/7." path="/uber-bolt" />

      <section className="relative overflow-hidden gradient-soft">
        <div className="absolute -right-40 top-10 h-[600px] w-[600px] rounded-full glow-orange" />
        <div className="container-page relative grid gap-10 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold backdrop-blur">
              <Sparkles className="h-3 w-3 text-primary" /> Pentru soferi Uber & Bolt
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Creste-ti castigurile, <span className="gradient-text">noi ne ocupam de masina.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Categorii Comfort, XL si Hybrid. Cutii automate, consum mic, asigurare full. Tu te concentrezi pe curse, noi pe restul.
            </p>
            <div className="mt-7 grid gap-2 sm:grid-cols-2 max-w-md">
              {["Acceptate pe Uber, Bolt", "Inlocuire in 2h", "Service complet inclus", "Contract de la 7 zile"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" />{b}</div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><Link to="/flota?aud=uber-bolt">Vezi masinile <ArrowRight className="h-4 w-4" /></Link></Button>
            </div>
          </motion.div>

          {/* Earnings calculator */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-border bg-card p-6 shadow-elevate sm:p-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calculator className="h-4 w-4 text-primary" /> Cat poti castiga intr-o luna
            </div>
            <div className="mt-5 space-y-6">
              <div>
                <div className="flex justify-between text-sm font-semibold"><span>Ore pe zi</span><span className="tabular text-primary">{hours} h</span></div>
                <Slider value={[hours]} min={4} max={14} step={1} onValueChange={([v]) => setHours(v)} className="mt-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm font-semibold"><span>Zile pe saptamana</span><span className="tabular text-primary">{days}</span></div>
                <Slider value={[days]} min={1} max={7} step={1} onValueChange={([v]) => setDays(v)} className="mt-2" />
              </div>
            </div>
            <div className="mt-6 rounded-2xl gradient-primary p-6 text-primary-foreground">
              <p className="text-xs uppercase tracking-wider opacity-80">Estimare incasari brute / luna</p>
              <p className="mt-1 font-display text-4xl font-extrabold tabular">{monthly.toLocaleString("ro-RO")} lei</p>
              <p className="mt-1 text-xs opacity-80">Estimare orientativa, in functie de oras si zona.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Masini recomandate pentru tine</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommended.map((v, i) => <VehicleCard key={v.id} vehicle={v} index={i} />)}
          </div>
        </div>
      </section>

      <Testimonials />
      <FinalCta />
    </SiteLayout>
  );
};

export default UberBolt;
