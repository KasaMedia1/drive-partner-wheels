import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { FinalCta } from "@/components/sections/FinalCta";

const compare = [
  { type: "Bicicleta electrica", autonomy: "60-90 km", speed: "25 km/h", capacity: "25-60 L", cost: "180 lei/sapt", best: "Centru oras, ture scurte" },
  { type: "Scuter 50cc", autonomy: "180-200 km", speed: "45 km/h", capacity: "28-30 L", cost: "220-240 lei/sapt", best: "Livrari urbane, fara permis A1" },
  { type: "Scuter 125cc", autonomy: "250-350 km", speed: "95-110 km/h", capacity: "35-45 L", cost: "280-350 lei/sapt", best: "Activitate intensa, ture lungi" },
  { type: "Scuter electric", autonomy: "75-80 km", speed: "45 km/h", capacity: "30-35 L", cost: "240-250 lei/sapt", best: "Cost minim de operare" },
];

const CalculatorCurieri = () => (
  <SiteLayout>
    <Seo
      title="Calculator economii pentru curieri | DriveRent"
      description="Compara biciclete, scutere si scutere electrice pentru livrari Glovo, Wolt si Bolt Food. Vezi cat economisesti vs cumparat."
      path="/calculator-curieri"
    />

    <section className="relative overflow-hidden gradient-soft">
      <div className="absolute -left-40 top-10 h-[600px] w-[600px] rounded-full glow-orange" />
      <div className="container-page relative py-16 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold backdrop-blur">
            <Sparkles className="h-3 w-3 text-primary" /> Calculator pentru curieri
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Ce sa alegi pentru livrari, <span className="gradient-text">si cat economisesti.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Compara optiunile in functie de autonomie, viteza, capacitate si cost. Apoi vezi cat economisesti fata de un vehicul cumparat propriu.
          </p>
          <Button asChild size="lg" className="mt-8"><Link to="/inchiriere">Vezi vehiculele <ArrowRight className="h-4 w-4" /></Link></Button>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="container-page">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Bicicleta, scuter sau scuter electric?</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Comparatie rapida intre cele 4 categorii principale pentru curieri Glovo, Wolt si Bolt Food.</p>
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
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">De ce sa inchiriezi in loc sa cumperi</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold">Inchiriere DriveRent vs. vehicul cumparat</h2>
            <p className="mt-3 text-muted-foreground">
              Cand cumperi un scuter sau o bicicleta pentru livrari, platesti din start cateva mii de lei si tot tu te ocupi de service, piese si timpul pierdut la mecanic. La DriveRent platesti doar chiria saptamanala, iar restul costurilor sunt incluse.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Cost de pornire" plus="0 lei" minus="~ 8.000 lei avans" hint="Pleci la drum azi, fara sa scoti bani din buzunar." />
            <Stat label="Service si reparatii" plus="Incluse" minus="500-1.500 lei/an" hint="Daca se strica ceva, ne ocupam noi pe cheltuiala noastra." />
            <Stat label="Revizii periodice" plus="Incluse" minus="Pe banii tai" hint="Schimb de ulei, frane, anvelope - toate incluse in chirie." />
            <Stat label="Vehicul de schimb" plus="Inclus" minus="Stai pe loc" hint="Daca vehiculul intra in service, primesti altul ca sa nu pierzi ture." />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Pe scurt: zero investitie, zero batai de cap cu mecanicul si poti renunta oricand. Tu te concentrezi doar pe livrari si pe castig.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-card p-6 sm:p-10 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Activare ca livrator</p>
          <h3 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Vrei sa devii livrator?</h3>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Noi iti dam vehiculul, iar pentru tot ce inseamna activarea efectiva pe Bolt Food, Glovo si Wolt colaboram cu <strong className="text-foreground">DrivePartner</strong> - partenerul nostru specializat in onboarding pentru livratori.
          </p>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            DrivePartner se ocupa de tot procesul: iti deschide contul de livrator, iti activeaza aplicatiile, te indruma cu actele necesare, iti ofera suport tehnic permanent si iti gestioneaza platile saptamanale direct in cont. Practic, in cateva zile esti gata de prima tura.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="https://drivepartner.ro" target="_blank" rel="noopener noreferrer">
                Mergi pe drivepartner.ro <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg"><Link to="/inchiriere">Vezi vehiculele disponibile</Link></Button>
          </div>
        </div>
      </div>
    </section>

    <FinalCta />
  </SiteLayout>
);

function Stat({ label, plus, minus, hint }: { label: string; plus: string; minus: string; hint?: string }) {
  return (
    <div className="rounded-xl border border-border bg-background-soft p-4">
      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-success/15 px-3 py-2.5">
          <p className="text-[10px] font-bold uppercase text-success-foreground">DriveRent</p>
          <p className="mt-0.5 font-display font-extrabold tabular">{plus}</p>
        </div>
        <div className="rounded-lg border border-border px-3 py-2.5">
          <p className="text-[10px] font-bold uppercase text-muted-foreground">Cumparat</p>
          <p className="mt-0.5 font-display font-extrabold tabular text-muted-foreground">{minus}</p>
        </div>
      </div>
      {hint && <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{hint}</p>}
    </div>
  );
}

export default CalculatorCurieri;
