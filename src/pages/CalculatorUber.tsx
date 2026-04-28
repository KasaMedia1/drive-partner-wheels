import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, CheckCircle2, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { FinalCta } from "@/components/sections/FinalCta";
import { Testimonials } from "@/components/sections/Testimonials";

const CalculatorUber = () => {
  const [hours, setHours] = useState(8);
  const [days, setDays] = useState(6);
  // Castig mediu: 50-70 lei/ora -> folosim 60 lei/ora ca medie
  const HOURLY_AVG = 60;
  const monthly = Math.round(hours * days * 4 * HOURLY_AVG);
  const monthlyMin = Math.round(hours * days * 4 * 50);
  const monthlyMax = Math.round(hours * days * 4 * 70);

  return (
    <SiteLayout>
      <Seo
        title="Calculator castiguri Uber si Bolt | DriveRent"
        description="Estimeaza cat poti castiga ca sofer Uber sau Bolt in Bucuresti, in functie de orele si zilele lucrate pe saptamana."
        path="/calculator-uber"
      />

      <section className="relative overflow-hidden gradient-soft">
        <div className="absolute -right-40 top-10 h-[600px] w-[600px] rounded-full glow-orange" />
        <div className="container-page relative grid gap-10 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold backdrop-blur">
              <Sparkles className="h-3 w-3 text-primary" /> Calculator Uber & Bolt
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Cat poti castiga <span className="gradient-text">intr-o luna ca sofer.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Misca cele doua slidere si vezi estimarea bruta. Combina cu o masina hibrida sau electrica DriveRent si optimizeaza-ti costurile.
            </p>
            <div className="mt-7 grid gap-2 sm:grid-cols-2 max-w-md">
              {["Masini hibride si electrice", "Costuri intretinere reduse", "Vehicule pregatite imediat", "Suport pe durata inchirierii"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" />{b}</div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><Link to="/inchiriere#masini">Vezi masinile <ArrowRight className="h-4 w-4" /></Link></Button>
            </div>
          </motion.div>

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
              <p className="mt-2 text-sm font-semibold opacity-90 tabular">
                Interval: {monthlyMin.toLocaleString("ro-RO")} – {monthlyMax.toLocaleString("ro-RO")} lei
              </p>
              <p className="mt-1 text-xs opacity-80">Calculat la o medie de 50-70 lei/ora, in functie de oras, zona si ore de varf.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <FinalCta />
    </SiteLayout>
  );
};

export default CalculatorUber;
