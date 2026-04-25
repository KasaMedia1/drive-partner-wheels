import { motion } from "framer-motion";
import { Award, Heart, Target, Users } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { FinalCta } from "@/components/sections/FinalCta";

const stats = [
  { value: "120+", label: "Vehicule in flota" },
  { value: "800+", label: "Soferi parteneri" },
  { value: "5", label: "Ani experienta" },
  { value: "24/7", label: "Asistenta non-stop" },
];

const values = [
  { Icon: Heart, title: "Soferul pe primul loc", desc: "Construim contracte care chiar functioneaza pentru cei care lucreaza zilnic in trafic." },
  { Icon: Target, title: "Transparenta totala", desc: "Preturi clare, fara taxe ascunse. Tot ce vezi pe site este tot ce platesti." },
  { Icon: Award, title: "Calitate constanta", desc: "Vehicule verificate RAR, service la zi, casca si echipament noi pentru fiecare client." },
  { Icon: Users, title: "Comunitate", desc: "Suntem o echipa cu care poti vorbi oricand. Nu un call center." },
];

const Despre = () => (
  <SiteLayout>
    <Seo title="Despre DriveRent | Inchirieri pentru soferi si curieri" description="DriveRent sustine soferii Uber, Bolt si curierii Glovo, Wolt din Bucuresti cu vehicule de calitate si suport real." path="/despre" />

    <section className="relative overflow-hidden gradient-soft">
      <div className="container-page py-16 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Despre noi</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Construim infrastructura pentru <span className="gradient-text">economia gig</span> din Romania.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Am pornit DriveRent in 2020, dupa ce am vazut cati prieteni nu pot incepe sa livreze sau sa faca Uber pentru ca le lipsea masina sau scuterul. Astazi suntem partenerul de zi cu zi pentru sute de soferi si curieri din Bucuresti.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="container-page -mt-8 sm:-mt-12 relative z-10">
      <div className="grid grid-cols-2 gap-3 rounded-2xl border border-border bg-card p-4 shadow-elevate sm:grid-cols-4 sm:p-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-extrabold tabular gradient-text sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container-page py-16 sm:py-24">
      <h2 className="font-display text-3xl font-extrabold sm:text-4xl max-w-2xl">Valorile care ne ghideaza zi de zi.</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-card hover-lift">
            <div className="grid h-12 w-12 place-items-center rounded-xl gradient-soft text-primary"><v.Icon className="h-6 w-6" /></div>
            <h3 className="mt-5 font-display text-lg font-bold">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <FinalCta />
  </SiteLayout>
);

export default Despre;
