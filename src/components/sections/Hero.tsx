import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Bike, Car, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-fleet.jpg";
import { telLink, SITE } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 gradient-soft" />
      <div className="absolute -right-32 top-10 -z-10 h-[600px] w-[600px] rounded-full glow-orange animate-pulse-glow" />

      <div className="container-page grid items-center gap-12 py-12 md:py-20 lg:grid-cols-2 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-success" />
            Disponibil acum in {SITE.city}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Masina ta de lucru,{" "}
            <span className="gradient-text">gata maine.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
            Inchirieri masini, scutere si biciclete electrice pentru soferi Uber, Bolt si curieri Glovo, Wolt, Bolt Food. Asigurare completa, asistenta 24/7 si masina de schimb in 2h.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="shadow-elevate">
              <Link to="/uber-bolt">
                <Car className="h-4 w-4" />
                Vreau pentru Uber / Bolt
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/curieri">
                <Bike className="h-4 w-4" />
                Vreau pentru curierat
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <a href={telLink()} className="flex items-center gap-2 font-semibold text-foreground hover:text-primary">
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </a>
            <span className="hidden sm:inline">·</span>
            <span>Raspundem in maxim 1 ora</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-elevate">
            <img
              src={heroImg}
              alt="Masina, scuter si bicicleta electrica DrivePartner"
              width={1600}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary-glow/10" />
          </div>

          <div className="absolute -bottom-6 -left-4 sm:-left-8 hidden sm:block rounded-2xl border border-border bg-card p-4 shadow-card">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">de la</p>
            <p className="font-display text-2xl font-extrabold tabular">160 lei<span className="text-sm font-medium text-muted-foreground">/sapt</span></p>
            <p className="text-xs text-muted-foreground">e-bike pentru curieri</p>
          </div>
          <div className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 shadow-card">
            <ArrowRight className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold">Ridici in 24h</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
